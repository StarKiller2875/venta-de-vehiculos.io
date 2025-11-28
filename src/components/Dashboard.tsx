import { useEffect, useState } from 'react';
import { Sidebar } from './Sidebar';
import { Card } from './ui/card';
import { DollarSign, Car, ArrowUp, Users } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import axios from 'axios';

type DashboardProps = {
  onNavigate: (view: 'dashboard' | 'catalog' | 'cart' | 'admin') => void;
  onLogout: () => void;
  cartItemsCount: number;
};

export function Dashboard({ onNavigate, onLogout, cartItemsCount }: DashboardProps) {
  const [metrics, setMetrics] = useState({ total_revenue: 0, vehicles_sold: 0, accessories_sold: 0 });
  const [salesData, setSalesData] = useState([]);
  const [funnel, setFunnel] = useState({ whatsapp: 0, agendado: 0, compra: 0 });
  const [startMonth, setStartMonth] = useState("2024-01");
  const [endMonth, setEndMonth] = useState("2025-12");
  const [lastMonths, setLastMonths] = useState(12);

  useEffect(() => {
    axios.get("http://localhost:3001/dashboard/metrics").then(res => setMetrics(res.data));
    fetchSalesData();
    fetchFunnelData();
  }, [startMonth, endMonth]);

  const fetchSalesData = () => {
    axios
      .get(`http://localhost:3001/dashboard/monthlySales?start=${startMonth}&end=${endMonth}`)
      .then(res => setSalesData(res.data))
      .catch(() => setSalesData([]));
  };

  const fetchFunnelData = () => {
    const [y, m] = endMonth.split("-");
    const lastDay = new Date(Number(y), Number(m), 0).getDate();

    axios
      .get(`http://localhost:3001/funnel?startDate=${startMonth}-01&endDate=${endMonth}-${lastDay}`)
      .then(res => {
        const totalWhats = res.data.reduce((sum, x) => sum + x.mensajes_whatsapp, 0);
        const totalAgend = res.data.reduce((sum, x) => sum + x.agendan_cita, 0);
        const totalCompra = res.data.reduce((sum, x) => sum + x.compras, 0);
        setFunnel({ whatsapp: totalWhats, agendado: totalAgend, compra: totalCompra });
      })
      .catch(() => setFunnel({ whatsapp: 0, agendado: 0, compra: 0 }));
  };

  const conversionRate = funnel.whatsapp > 0 ? ((funnel.compra / funnel.whatsapp) * 100).toFixed(1) : 0;

  const handleLastMonthsChange = (months: number) => {
    setLastMonths(months);
    const [y, m] = endMonth.split("-");
    const endDate = new Date(Number(y), Number(m) - 1, 1);
    endDate.setMonth(endDate.getMonth() - (months - 1));
    const newStart = `${endDate.getFullYear()}-${String(endDate.getMonth() + 1).padStart(2, "0")}`;
    setStartMonth(newStart);
  };

  const getSalesChartData = () => {
    if (!salesData || salesData.length === 0) return [];

    const months: { month: string; total_revenue: number }[] = [];
    const [startY, startM] = startMonth.split("-").map(Number);
    const [endY, endM] = endMonth.split("-").map(Number);

    const startDate = new Date(startY, startM - 1, 1);
    const endDate = new Date(endY, endM - 1, 1);

    const salesMap: Record<string, any> = {};
    salesData.forEach(d => {
      salesMap[d.month] = d.total_revenue;
    });

    const tmp = new Date(startDate);
    while (tmp <= endDate) {
      const key = tmp.toLocaleString('en-US', { month: 'short', year: 'numeric' });
      months.push({
        month: key,
        total_revenue: Math.round(salesMap[key] || 0)
      });
      tmp.setMonth(tmp.getMonth() + 1);
    }

    return months;
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentView="dashboard" onNavigate={onNavigate} onLogout={onLogout} cartItemsCount={cartItemsCount} />

      <div className="flex-1 p-8">
        <h1 className="text-slate-900 mb-2">Dashboard</h1>
        <p className="text-slate-600 mb-8">Resumen general de tu negocio</p>

        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="p-6 shadow-sm">
            <div className="bg-blue-100 w-12 h-12 flex items-center justify-center rounded-xl mb-2">
              <DollarSign className="w-6 h-6 text-blue-600" />
            </div>
            <p className="text-slate-600 text-sm mb-1">Ingresos Totales</p>
            <h2 className="text-slate-900">${Math.round(metrics.total_revenue).toLocaleString()}</h2>
          </Card>

          <Card className="p-6 shadow-sm">
            <div className="bg-green-100 w-12 h-12 flex items-center justify-center rounded-xl mb-2">
              <Car className="w-6 h-6 text-green-600" />
            </div>
            <p className="text-slate-600 text-sm mb-1">Vehículos Vendidos</p>
            <h2 className="text-slate-900">{Math.round(metrics.vehicles_sold).toLocaleString()}</h2>
          </Card>

          <Card className="p-6 shadow-sm">
            <div className="bg-yellow-100 w-12 h-12 flex items-center justify-center rounded-xl mb-2">
              <Users className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="text-slate-600 text-sm mb-1">Accesorios Vendidos</p>
            <h2 className="text-slate-900">{Math.round(metrics.accessories_sold).toLocaleString()}</h2>
          </Card>

          <Card className="p-6 shadow-sm">
            <div className="bg-purple-100 w-12 h-12 flex items-center justify-center rounded-xl mb-2">
              <ArrowUp className="w-6 h-6 text-purple-600" />
            </div>
            <p className="text-slate-600 text-sm mb-1">Tasa de Conversión</p>
            <h2 className="text-slate-900">{conversionRate}%</h2>
          </Card>
        </div>

        <Card className="p-6 mb-6 max-w-md">
          <h3 className="text-slate-900 mb-4">Filtros de Ingresos</h3>
          <div>
            <label className="text-slate-700">Últimos meses:</label>
            <select
              className="w-full border p-2 rounded mt-1"
              value={lastMonths}
              onChange={e => handleLastMonthsChange(Number(e.target.value))}
            >
              <option value={1}>1</option>
              <option value={3}>3</option>
              <option value={6}>6</option>
              <option value={12}>12</option>
            </select>

            <label className="text-slate-700 mt-3 block">Desde:</label>
            <input type="month" className="w-full border p-2 rounded mt-1" value={startMonth} onChange={e => setStartMonth(e.target.value)} />
            <label className="text-slate-700 mt-3 block">Hasta:</label>
            <input type="month" className="w-full border p-2 rounded mt-1" value={endMonth} onChange={e => setEndMonth(e.target.value)} />
            
            <button onClick={() => { fetchSalesData(); fetchFunnelData(); }} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
              Aplicar Rango
            </button>
          </div>
        </Card>

        <Card className="p-6 col-span-2 mb-6">
          <h3 className="text-slate-900 mb-6">Ingresos Mensuales</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={getSalesChartData()}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="month" stroke="#64748b" />
              <YAxis stroke="#64748b" />
              <Tooltip formatter={(value: number) => Math.round(value).toLocaleString()} />
              <Bar dataKey="total_revenue" fill="#3b82f6" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6 mb-6">
          <h3 className="text-slate-900 mb-6">Embudo de Conversión</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={[
              { stage: "WhatsApp", total: funnel.whatsapp },
              { stage: "Agendado", total: funnel.agendado },
              { stage: "Compra", total: funnel.compra }
            ]}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="stage" />
              <YAxis />
              <Tooltip formatter={(value: number) => Math.round(value).toLocaleString()} />
              <Bar dataKey="total" fill="#10b981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  );
}
