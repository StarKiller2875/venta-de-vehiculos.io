import { Sidebar } from './Sidebar';
import { Card } from './ui/card';
import { TrendingUp, DollarSign, Car, Users, ArrowUp, ArrowDown } from 'lucide-react';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

type DashboardProps = {
  onNavigate: (view: 'dashboard' | 'catalog' | 'cart' | 'admin') => void;
  onLogout: () => void;
  cartItemsCount: number;
};

const salesData = [
  { month: 'Ene', ventas: 45, ingresos: 2250000 },
  { month: 'Feb', ventas: 52, ingresos: 2800000 },
  { month: 'Mar', ventas: 61, ingresos: 3100000 },
  { month: 'Abr', ventas: 58, ingresos: 2950000 },
  { month: 'May', ventas: 70, ingresos: 3500000 },
  { month: 'Jun', ventas: 68, ingresos: 3400000 },
];

const topVehicles = [
  { modelo: 'Tesla Model S', ventas: 24, change: 12 },
  { modelo: 'BMW X5', ventas: 18, change: -5 },
  { modelo: 'Mercedes EQS', ventas: 16, change: 8 },
  { modelo: 'Audi e-tron', ventas: 14, change: 15 },
  { modelo: 'Porsche Taycan', ventas: 12, change: 3 },
];

export function Dashboard({ onNavigate, onLogout, cartItemsCount }: DashboardProps) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentView="dashboard" onNavigate={onNavigate} onLogout={onLogout} cartItemsCount={cartItemsCount} />
      
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-slate-900 mb-2">Dashboard</h1>
          <p className="text-slate-600">Bienvenido a tu panel de control</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-blue-100 p-3 rounded-xl">
                <DollarSign className="size-6 text-blue-600" />
              </div>
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <ArrowUp className="size-4" />
                <span>12%</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-1">Ingresos Totales</p>
            <h2 className="text-slate-900">$18.5M</h2>
          </Card>

          <Card className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-green-100 p-3 rounded-xl">
                <Car className="size-6 text-green-600" />
              </div>
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <ArrowUp className="size-4" />
                <span>8%</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-1">Vehículos Vendidos</p>
            <h2 className="text-slate-900">374</h2>
          </Card>

          <Card className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-orange-100 p-3 rounded-xl">
                <Users className="size-6 text-orange-600" />
              </div>
              <div className="flex items-center gap-1 text-red-600 text-sm">
                <ArrowDown className="size-4" />
                <span>3%</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-1">Nuevos Clientes</p>
            <h2 className="text-slate-900">1,248</h2>
          </Card>

          <Card className="p-6 bg-white border-0 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-start justify-between mb-4">
              <div className="bg-purple-100 p-3 rounded-xl">
                <TrendingUp className="size-6 text-purple-600" />
              </div>
              <div className="flex items-center gap-1 text-green-600 text-sm">
                <ArrowUp className="size-4" />
                <span>15%</span>
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-1">Tasa de Conversión</p>
            <h2 className="text-slate-900">18.5%</h2>
          </Card>
        </div>

        <div className="grid grid-cols-3 gap-6">
          {/* Sales Chart */}
          <Card className="col-span-2 p-6 bg-white border-0 shadow-sm">
            <h3 className="text-slate-900 mb-6">Ventas Mensuales</h3>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="ventas" 
                  stroke="#3b82f6" 
                  strokeWidth={3}
                  dot={{ fill: '#3b82f6', r: 5 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          {/* Top Vehicles */}
          <Card className="p-6 bg-white border-0 shadow-sm">
            <h3 className="text-slate-900 mb-6">Vehículos Más Vendidos</h3>
            <div className="space-y-4">
              {topVehicles.map((vehicle, idx) => (
                <div key={idx} className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-slate-900 text-sm mb-1">{vehicle.modelo}</p>
                    <div className="bg-slate-200 h-2 rounded-full overflow-hidden">
                      <div
                        className="bg-blue-600 h-full rounded-full"
                        style={{ width: `${(vehicle.ventas / 24) * 100}%` }}
                      ></div>
                    </div>
                  </div>
                  <div className="ml-4 flex items-center gap-2">
                    <span className="text-slate-900">{vehicle.ventas}</span>
                    <div className={`flex items-center gap-1 text-xs ${vehicle.change >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      {vehicle.change >= 0 ? <ArrowUp className="size-3" /> : <ArrowDown className="size-3" />}
                      <span>{Math.abs(vehicle.change)}%</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Revenue Chart */}
          <Card className="col-span-3 p-6 bg-white border-0 shadow-sm">
            <h3 className="text-slate-900 mb-6">Ingresos por Mes</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={salesData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="month" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: '#1e293b', 
                    border: 'none', 
                    borderRadius: '8px',
                    color: '#fff'
                  }}
                  formatter={(value: number) => `$${(value / 1000000).toFixed(1)}M`}
                />
                <Bar dataKey="ingresos" fill="#3b82f6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>
      </div>
    </div>
  );
}
