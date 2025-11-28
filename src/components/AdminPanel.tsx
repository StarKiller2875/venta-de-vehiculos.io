import { useState, useEffect } from "react";
import axios from "axios";
import { Sidebar } from "./Sidebar";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Plus, Edit2, Trash2 } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type AdminPanelProps = {
  onNavigate: (view: "dashboard" | "catalog" | "cart" | "admin") => void;
  onLogout: () => void;
  cartItemsCount: number;
};

type Vehicle = {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  description: string;
  engine: string;
  transmission: string;
  horsepower: number;
  acceleration: string;
  fuelType: string;
  image: string;
};

export function AdminPanel({ onNavigate, onLogout, cartItemsCount }: AdminPanelProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const [formData, setFormData] = useState({
    brand: "",
    model: "",
    year: "",
    price: "",
    description: "",
    engine: "",
    transmission: "",
    horsepower: "",
    acceleration: "",
    fuelType: "",
    image: "",
  });

  const loadVehicles = async () => {
    try {
      const res = await axios.get("http://localhost:3001/vehicles");

      const fixed = res.data.map((v: any) => ({
        ...v,
        price: Number(v.price),
      }));

      setVehicles(fixed);
    } catch (err) {
      console.error("Error cargando vehículos", err);
    }
  };

  useEffect(() => {
    loadVehicles();
  }, []);

  const handleInput = (e: any) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleEdit = (id: number) => {
    const v = vehicles.find((x) => x.id === id);
    if (!v) return;

    setFormData({
      brand: v.brand,
      model: v.model,
      year: v.year.toString(),
      price: v.price.toString(),
      description: v.description,
      engine: v.engine,
      transmission: v.transmission,
      horsepower: v.horsepower.toString(),
      acceleration: v.acceleration,
      fuelType: v.fuelType,
      image: v.image,
    });

    setEditingId(id);
    setShowForm(true);
  };

  const handleDelete = async (id: number) => {
    if (!confirm("¿Seguro de eliminar este vehículo?")) return;

    try {
      await axios.delete(`http://localhost:3001/vehicles/${id}`);
      loadVehicles();
    } catch (err) {
      console.error("Error al eliminar", err);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const payload = {
      brand: formData.brand,
      model: formData.model,
      year: Number(formData.year),
      price: Number(formData.price),
      description: formData.description,
      engine: formData.engine,
      transmission: formData.transmission,
      horsepower: Number(formData.horsepower),
      acceleration: formData.acceleration,
      fuelType: formData.fuelType,
      image: formData.image,
    };

    try {
      if (editingId) {
        await axios.put(`http://localhost:3001/vehicles/${editingId}`, payload);
      } else {
        await axios.post("http://localhost:3001/vehicles", payload);
      }

      setShowForm(false);
      setEditingId(null);

      setFormData({
        brand: "",
        model: "",
        year: "",
        price: "",
        description: "",
        engine: "",
        transmission: "",
        horsepower: "",
        acceleration: "",
        fuelType: "",
        image: "",
      });

      loadVehicles();
    } catch (err) {
      console.error("Error guardando vehículo", err);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        currentView="admin"
        onNavigate={onNavigate}
        onLogout={onLogout}
        cartItemsCount={cartItemsCount}
      />

      <div className="flex-1 p-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-slate-900 mb-2">Panel de Administración</h1>
            <p className="text-slate-600">Gestiona el inventario de vehículos</p>
          </div>

          <Button
            className="bg-blue-600 hover:bg-blue-700 text-white"
            onClick={() => {
              setShowForm(true);
              setEditingId(null);
            }}
          >
            <Plus className="size-5 mr-2" /> Agregar Vehículo
          </Button>
        </div>

        {showForm && (
          <Card className="bg-white border-0 shadow-sm p-8 mb-8 animate-in fade-in">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-slate-900">
                {editingId ? "Editar Vehículo" : "Nuevo Vehículo"}
              </h2>
              <Button
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
                variant="ghost"
              >
                Cancelar
              </Button>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label>Marca</Label>
                  <Input id="brand" value={formData.brand} onChange={handleInput} required />
                </div>
                <div>
                  <Label>Modelo</Label>
                  <Input id="model" value={formData.model} onChange={handleInput} required />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label>Año</Label>
                  <Input id="year" type="number" value={formData.year} onChange={handleInput} />
                </div>
                <div>
                  <Label>Precio (USD)</Label>
                  <Input id="price" type="number" value={formData.price} onChange={handleInput} />
                </div>
              </div>

              <div>
                <Label>Descripción</Label>
                <Textarea
                  id="description"
                  rows={3}
                  value={formData.description}
                  onChange={handleInput}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <Label>Motor</Label>
                  <Input id="engine" value={formData.engine} onChange={handleInput} />
                </div>
                <div>
                  <Label>Transmisión</Label>
                  <Input id="transmission" value={formData.transmission} onChange={handleInput} />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <Label>Potencia (HP)</Label>
                  <Input id="horsepower" type="number" value={formData.horsepower} onChange={handleInput} />
                </div>
                <div>
                  <Label>Aceleración</Label>
                  <Input id="acceleration" value={formData.acceleration} onChange={handleInput} />
                </div>
                <div>
                  <Label>Combustible</Label>
                  <Input id="fuelType" value={formData.fuelType} onChange={handleInput} />
                </div>
              </div>

              <div>
                <Label>URL Imagen</Label>
                <Input id="image" value={formData.image} onChange={handleInput} />
              </div>

              <div className="flex gap-4">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                  {editingId ? "Actualizar" : "Agregar"}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </Card>
        )}

        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white shadow-sm">
            <p>Total Inventario</p>
            <h3>{vehicles.length}</h3>
          </Card>

          <Card className="p-6 bg-white shadow-sm">
            <p>Valor Total</p>
            <h3>
              $
              {vehicles
                .reduce((sum, v) => sum + Number(v.price || 0), 0)
                .toLocaleString("en-US")}
            </h3>
          </Card>
        </div>

        <Card className="bg-white border-0 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-slate-900">Inventario de Vehículos</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="p-4">Imagen</th>
                  <th className="p-4">Marca</th>
                  <th className="p-4">Modelo</th>
                  <th className="p-4">Año</th>
                  <th className="p-4">Precio</th>
                  <th className="p-4">Potencia</th>
                  <th className="p-4 text-right">Acciones</th>
                </tr>
              </thead>

              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b hover:bg-slate-50">
                    <td className="p-4">
                      <div className="w-20 h-14 rounded-lg overflow-hidden bg-slate-100">
                        <ImageWithFallback
                          src={vehicle.image}
                          alt={vehicle.model}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>

                    <td className="p-4">{vehicle.brand}</td>
                    <td className="p-4">{vehicle.model}</td>
                    <td className="p-4">{vehicle.year}</td>
                    <td className="p-4">
                      ${vehicle.price.toLocaleString("en-US")}
                    </td>
                    <td className="p-4">{vehicle.horsepower} HP</td>

                    <td className="p-4">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:bg-blue-50"
                          onClick={() => handleEdit(vehicle.id)}
                        >
                          <Edit2 className="size-4" />
                        </Button>

                        <Button
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:bg-red-50"
                          onClick={() => handleDelete(vehicle.id)}
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
