const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "facilita",
  database: "ford_inventory"
});

app.get("/vehicles", (req, res) => {
  db.query("SELECT * FROM vehicles", (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
});

app.post("/vehicles/sell/:id", (req, res) => {
  const vehicleId = req.params.id;

  db.query(
    "SELECT price, stock FROM vehicles WHERE id = ?",
    [vehicleId],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (rows.length === 0)
        return res.status(404).json({ error: "Vehículo no encontrado" });

      const { price, stock } = rows[0];
      if (stock <= 0)
        return res.status(400).json({ error: "Vehículo agotado" });

      db.query(
        "UPDATE vehicles SET stock = stock - 1 WHERE id = ?",
        [vehicleId],
        (err2) => {
          if (err2) return res.status(500).json({ error: err2.message });

          const insertSaleSql =
            "INSERT INTO vehicle_sales (vehicle_id, price, sale_date) VALUES (?, ?, NOW())";

          db.query(insertSaleSql, [vehicleId, price], (err3) => {
            if (err3) return res.status(500).json({ error: err3.message });

            res.json({ message: "Vehículo vendido correctamente" });
          });
        }
      );
    }
  );
});

app.post("/vehicles", (req, res) => {
  const {
    brand,
    model,
    year,
    price,
    horsepower,
    description,
    image,
    stock
  } = req.body;

  const sql = `
    INSERT INTO vehicles 
    (brand, model, year, price, horsepower, description, image, sold, stock) 
    VALUES (?, ?, ?, ?, ?, ?, ?, 0, ?)
  `;

  db.query(
    sql,
    [brand, model, year, price, horsepower, description, image, stock || 1],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json({
        message: "Vehículo agregado correctamente",
        id: result.insertId
      });
    }
  );
});

app.get("/accessories", (req, res) => {
  db.query("SELECT * FROM accessories", (err, rows) => {
    if (err) return res.status(500).json({ error: err });
    res.json(rows);
  });
});

app.post("/accessories", (req, res) => {
  const { name, category, price, stock, image } = req.body;

  db.query(
    "INSERT INTO accessories (name, category, price, stock, image) VALUES (?, ?, ?, ?, ?)",
    [name, category, price, stock, image],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      res.json({ message: "Accesorio agregado", id: result.insertId });
    }
  );
});

app.post("/accessories/buy/:id", (req, res) => {
  const accessoryId = req.params.id;
  const { quantity = 1 } = req.body;

  db.query(
    "SELECT price, stock FROM accessories WHERE id = ?",
    [accessoryId],
    (err, rows) => {
      if (err) return res.status(500).json({ error: err.message });
      if (rows.length === 0)
        return res.status(404).json({ error: "Accesorio no encontrado" });

      const { price, stock } = rows[0];

      if (stock < quantity)
        return res.status(400).json({ error: "Stock insuficiente" });

      db.query(
        "UPDATE accessories SET stock = stock - ? WHERE id = ?",
        [quantity, accessoryId],
        (err2) => {
          if (err2) return res.status(500).json({ error: err2.message });

          const insertSaleSql =
            "INSERT INTO accessory_sales (accessory_id, quantity, price, sale_date) VALUES (?, ?, ?, NOW())";

          db.query(
            insertSaleSql,
            [accessoryId, quantity, price],
            (err3) => {
              if (err3)
                return res.status(500).json({ error: err3.message });

              res.json({ message: "Compra realizada correctamente" });
            }
          );
        }
      );
    }
  );
});

app.get("/dashboard/metrics", (req, res) => {
  const sql = `
    SELECT
      (SELECT IFNULL(SUM(price),0) FROM vehicle_sales) +
      (SELECT IFNULL(SUM(price * quantity),0) FROM accessory_sales)
      AS total_revenue,
    
      (SELECT COUNT(*) FROM vehicle_sales) AS vehicles_sold,
      (SELECT IFNULL(SUM(quantity),0) FROM accessory_sales) AS accessories_sold
  `;

  db.query(sql, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows[0]);
  });
});

app.get("/dashboard/monthlySales", (req, res) => {
  const { start, end } = req.query;
  const params = [];
  const paramsSubquery = [];

  let filterVehicle = "";
  let filterAccessory = "";

  if (start) {
    filterVehicle += " AND sale_date >= ?";
    filterAccessory += " AND sale_date >= ?";
    params.push(start + "-01");
    paramsSubquery.push(start + "-01");
  }

  if (end) {
    const [y, m] = end.split("-");
    const lastDay = new Date(Number(y), Number(m), 0).getDate();
    const endDate = `${end}-${lastDay}`;
    filterVehicle += " AND sale_date <= ?";
    filterAccessory += " AND sale_date <= ?";
    params.push(endDate);
    paramsSubquery.push(endDate);
  }

  const sql = `
    SELECT 
      DATE_FORMAT(sale_date, '%b %Y') AS month,
      COUNT(*) AS total_sales,
      COALESCE(SUM(price), 0) AS total_revenue
    FROM (
      SELECT price, sale_date FROM vehicle_sales WHERE 1=1 ${filterVehicle}
      UNION ALL
      SELECT (price * quantity) AS price, sale_date FROM accessory_sales WHERE 1=1 ${filterAccessory}
    ) AS unified_sales
    GROUP BY month
    ORDER BY STR_TO_DATE(month, '%b %Y')
  `;

  db.query(sql, [...paramsSubquery, ...paramsSubquery], (err, rows) => {
    if (err) {
      console.error("Error en monthlySales:", err);
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});


app.post("/funnel", (req, res) => {
  const { fecha, mensajes_whatsapp, agendan_cita, asisten, compras } =
    req.body;

  const sql = `
    INSERT INTO conversion_funnel 
    (fecha, mensajes_whatsapp, agendan_cita, asisten, compras)
    VALUES (?, ?, ?, ?, ?)
  `;

  db.query(
    sql,
    [fecha, mensajes_whatsapp, agendan_cita, asisten, compras],
    (err) => {
      if (err) return res.status(500).json({ error: err.message });
      res.json({ message: "Funnel registrado" });
    }
  );
});

app.get("/funnel", (req, res) => {
  const { startDate, endDate } = req.query;

  let query = "SELECT * FROM conversion_funnel WHERE 1=1";
  const params = [];

  if (startDate) {
    query += " AND fecha >= ?";
    params.push(startDate);
  }

  if (endDate) {
    query += " AND fecha <= ?";
    params.push(endDate);
  }

  db.query(query, params, (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});
app.put("/vehicles/:id", (req, res) => {
  const vehicleId = req.params.id;

  const {
    brand,
    model,
    year,
    price,
    horsepower,
    description,
    image,
    stock
  } = req.body;

  const sql = `
    UPDATE vehicles
    SET brand = ?, model = ?, year = ?, price = ?, horsepower = ?, 
        description = ?, image = ?, stock = ?
    WHERE id = ?
  `;

  db.query(
    sql,
    [brand, model, year, price, horsepower, description, image, stock, vehicleId],
    (err, result) => {
      if (err) return res.status(500).json({ error: err.message });

      if (result.affectedRows === 0) {
        return res.status(404).json({ error: "Vehículo no encontrado" });
      }

      res.json({ message: "Vehículo actualizado correctamente" });
    }
  );
});

app.listen(3001, () => console.log("API corriendo en puerto 3001"));
