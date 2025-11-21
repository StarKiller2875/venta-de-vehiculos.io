import { Card } from './ui/card';
import { Database, Star } from 'lucide-react';

export function DataModel() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-slate-900 mb-4">2. Modelo de Datos - Esquema Estrella</h2>
        <p className="text-slate-700 leading-relaxed">
          El Data Warehouse implementa un modelo dimensional tipo Estrella (Star Schema), 
          optimizado para consultas analíticas de alto rendimiento con agregaciones complejas 
          y drill-down multidimensional.
        </p>
      </div>

      {/* Diagrama Visual del Esquema Estrella */}
      <div className="bg-gradient-to-br from-purple-50 to-blue-50 border border-purple-200 rounded-xl p-8">
        <h3 className="text-slate-900 mb-6 flex items-center gap-2">
          <Star className="size-5 text-purple-600" />
          Esquema Estrella - Vista General
        </h3>
        <div className="relative">
          {/* Tabla de Hechos Central */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white rounded-lg p-6 shadow-xl w-64">
              <h4 className="text-center mb-3">FACT_VENTAS</h4>
              <div className="text-sm space-y-1 opacity-90">
                <p>• ID_Venta (PK)</p>
                <p>• ID_Tiempo (FK)</p>
                <p>• ID_Vehiculo (FK)</p>
                <p>• ID_Vendedor (FK)</p>
                <p>• ID_Cliente (FK)</p>
                <p className="text-purple-200 pt-2">Métricas:</p>
                <p>• Precio_Venta</p>
                <p>• Costo_Vehiculo</p>
                <p>• Margen_Bruto</p>
                <p>• Descuento_Aplicado</p>
              </div>
            </div>
          </div>

          {/* Dimensiones alrededor */}
          <div className="grid grid-cols-2 gap-8 opacity-90">
            {/* Top Left - Dim Tiempo */}
            <div className="bg-white border-2 border-blue-300 rounded-lg p-4 shadow-md">
              <h4 className="text-slate-800 mb-2">DIM_TIEMPO</h4>
              <p className="text-blue-600 text-sm mb-2">Dimensión temporal</p>
            </div>

            {/* Top Right - Dim Vehiculo */}
            <div className="bg-white border-2 border-green-300 rounded-lg p-4 shadow-md">
              <h4 className="text-slate-800 mb-2">DIM_VEHICULO</h4>
              <p className="text-green-600 text-sm mb-2">Catálogo de productos</p>
            </div>

            {/* Bottom Left - Dim Vendedor */}
            <div className="bg-white border-2 border-orange-300 rounded-lg p-4 shadow-md">
              <h4 className="text-slate-800 mb-2">DIM_VENDEDOR</h4>
              <p className="text-orange-600 text-sm mb-2">Fuerza de ventas</p>
            </div>

            {/* Bottom Right - Dim Cliente */}
            <div className="bg-white border-2 border-pink-300 rounded-lg p-4 shadow-md">
              <h4 className="text-slate-800 mb-2">DIM_CLIENTE</h4>
              <p className="text-pink-600 text-sm mb-2">Perfil de compradores</p>
            </div>
          </div>

          {/* Líneas de conexión */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 5 }}>
            <line x1="50%" y1="20%" x2="50%" y2="45%" stroke="#9333ea" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="50%" y1="55%" x2="50%" y2="80%" stroke="#9333ea" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="20%" y1="50%" x2="45%" y2="50%" stroke="#9333ea" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="55%" y1="50%" x2="80%" y2="50%" stroke="#9333ea" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>
      </div>

      {/* Tabla de Hechos Detallada */}
      <div>
        <h3 className="text-slate-900 mb-4 flex items-center gap-2">
          <Database className="size-5" />
          Tabla de Hechos Principal: FACT_VENTAS
        </h3>
        <Card className="p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-slate-200">
                  <th className="text-left p-3 text-slate-800">Campo</th>
                  <th className="text-left p-3 text-slate-800">Tipo de Dato</th>
                  <th className="text-left p-3 text-slate-800">Descripción</th>
                  <th className="text-left p-3 text-slate-800">Rol</th>
                </tr>
              </thead>
              <tbody className="text-slate-700">
                <tr className="border-b border-slate-100">
                  <td className="p-3">ID_Venta</td>
                  <td className="p-3">BIGINT</td>
                  <td className="p-3">Identificador único de la transacción</td>
                  <td className="p-3"><span className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm">PK</span></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3">ID_Tiempo</td>
                  <td className="p-3">INT</td>
                  <td className="p-3">Referencia a dimensión de tiempo</td>
                  <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">FK</span></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3">ID_Vehiculo</td>
                  <td className="p-3">INT</td>
                  <td className="p-3">Referencia a vehículo vendido</td>
                  <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">FK</span></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3">ID_Vendedor</td>
                  <td className="p-3">INT</td>
                  <td className="p-3">Referencia al vendedor responsable</td>
                  <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">FK</span></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="p-3">ID_Cliente</td>
                  <td className="p-3">INT</td>
                  <td className="p-3">Referencia al cliente comprador</td>
                  <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">FK</span></td>
                </tr>
                <tr className="bg-green-50 border-b border-slate-100">
                  <td className="p-3">Precio_Venta</td>
                  <td className="p-3">DECIMAL(12,2)</td>
                  <td className="p-3">Precio final de venta del vehículo</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Métrica</span></td>
                </tr>
                <tr className="bg-green-50 border-b border-slate-100">
                  <td className="p-3">Costo_Vehiculo</td>
                  <td className="p-3">DECIMAL(12,2)</td>
                  <td className="p-3">Costo de adquisición del vehículo</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Métrica</span></td>
                </tr>
                <tr className="bg-green-50 border-b border-slate-100">
                  <td className="p-3">Margen_Bruto</td>
                  <td className="p-3">DECIMAL(12,2)</td>
                  <td className="p-3">Precio_Venta - Costo_Vehiculo</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Métrica</span></td>
                </tr>
                <tr className="bg-green-50 border-b border-slate-100">
                  <td className="p-3">Descuento_Aplicado</td>
                  <td className="p-3">DECIMAL(10,2)</td>
                  <td className="p-3">Monto de descuento otorgado</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Métrica</span></td>
                </tr>
                <tr className="bg-green-50 border-b border-slate-100">
                  <td className="p-3">Dias_en_Inventario</td>
                  <td className="p-3">INT</td>
                  <td className="p-3">Días desde llegada hasta venta</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Métrica</span></td>
                </tr>
                <tr className="bg-green-50">
                  <td className="p-3">Comision_Vendedor</td>
                  <td className="p-3">DECIMAL(10,2)</td>
                  <td className="p-3">Comisión pagada al vendedor</td>
                  <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Métrica</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </Card>
      </div>

      {/* Dimensiones */}
      <div>
        <h3 className="text-slate-900 mb-4">Dimensiones del Modelo</h3>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Dimensión 1: Tiempo */}
          <Card className="p-6 border-l-4 border-blue-500">
            <h4 className="text-slate-900 mb-4">DIM_TIEMPO</h4>
            <p className="text-slate-600 text-sm mb-4">
              Dimensión temporal que permite análisis por períodos jerárquicos
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">ID_Tiempo (PK)</span>
                <span className="text-slate-500">INT</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Fecha_Completa</span>
                <span className="text-slate-500">DATE</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Año</span>
                <span className="text-slate-500">INT</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Trimestre</span>
                <span className="text-slate-500">INT</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Mes</span>
                <span className="text-slate-500">INT</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Mes_Nombre</span>
                <span className="text-slate-500">VARCHAR(20)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Semana</span>
                <span className="text-slate-500">INT</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Dia_Mes</span>
                <span className="text-slate-500">INT</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-700">Dia_Semana_Nombre</span>
                <span className="text-slate-500">VARCHAR(20)</span>
              </div>
            </div>
          </Card>

          {/* Dimensión 2: Vehículo */}
          <Card className="p-6 border-l-4 border-green-500">
            <h4 className="text-slate-900 mb-4">DIM_VEHICULO</h4>
            <p className="text-slate-600 text-sm mb-4">
              Catálogo completo de vehículos con características técnicas y comerciales
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">ID_Vehiculo (PK)</span>
                <span className="text-slate-500">INT</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">VIN</span>
                <span className="text-slate-500">VARCHAR(17)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Marca</span>
                <span className="text-slate-500">VARCHAR(50)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Modelo</span>
                <span className="text-slate-500">VARCHAR(50)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Año_Fabricacion</span>
                <span className="text-slate-500">INT</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Tipo_Vehiculo</span>
                <span className="text-slate-500">VARCHAR(30)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Segmento</span>
                <span className="text-slate-500">VARCHAR(30)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Color_Exterior</span>
                <span className="text-slate-500">VARCHAR(30)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-700">Precio_Lista</span>
                <span className="text-slate-500">DECIMAL(12,2)</span>
              </div>
            </div>
          </Card>

          {/* Dimensión 3: Vendedor */}
          <Card className="p-6 border-l-4 border-orange-500">
            <h4 className="text-slate-900 mb-4">DIM_VENDEDOR</h4>
            <p className="text-slate-600 text-sm mb-4">
              Información del personal de ventas y estructura organizacional
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">ID_Vendedor (PK)</span>
                <span className="text-slate-500">INT</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Nombre_Completo</span>
                <span className="text-slate-500">VARCHAR(100)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Email</span>
                <span className="text-slate-500">VARCHAR(100)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Telefono</span>
                <span className="text-slate-500">VARCHAR(20)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Fecha_Ingreso</span>
                <span className="text-slate-500">DATE</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Categoria</span>
                <span className="text-slate-500">VARCHAR(30)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Gerente_Responsable</span>
                <span className="text-slate-500">VARCHAR(100)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Sucursal</span>
                <span className="text-slate-500">VARCHAR(50)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-700">Estado</span>
                <span className="text-slate-500">VARCHAR(20)</span>
              </div>
            </div>
          </Card>

          {/* Dimensión 4: Cliente */}
          <Card className="p-6 border-l-4 border-pink-500">
            <h4 className="text-slate-900 mb-4">DIM_CLIENTE</h4>
            <p className="text-slate-600 text-sm mb-4">
              Perfil demográfico y comportamental de los compradores
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">ID_Cliente (PK)</span>
                <span className="text-slate-500">INT</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Nombre_Completo</span>
                <span className="text-slate-500">VARCHAR(100)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Edad</span>
                <span className="text-slate-500">INT</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Genero</span>
                <span className="text-slate-500">VARCHAR(20)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Ciudad</span>
                <span className="text-slate-500">VARCHAR(50)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Codigo_Postal</span>
                <span className="text-slate-500">VARCHAR(10)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Segmento_Cliente</span>
                <span className="text-slate-500">VARCHAR(30)</span>
              </div>
              <div className="flex justify-between py-2 border-b border-slate-100">
                <span className="text-slate-700">Tipo_Compra</span>
                <span className="text-slate-500">VARCHAR(30)</span>
              </div>
              <div className="flex justify-between py-2">
                <span className="text-slate-700">Cliente_Recurrente</span>
                <span className="text-slate-500">BOOLEAN</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
