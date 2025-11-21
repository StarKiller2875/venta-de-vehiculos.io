import { Card } from './ui/card';
import { TrendingUp, Package, DollarSign, Users, Wrench } from 'lucide-react';

export function KPIDefinitions() {
  const kpis = [
    {
      id: 1,
      name: 'Rotación de Inventario',
      category: 'Operacional',
      icon: Package,
      color: 'blue',
      description: 'Mide la velocidad con la que los vehículos se venden desde su ingreso al inventario. Un ratio alto indica eficiencia en ventas y menor costo de mantenimiento de stock.',
      formula: 'Rotación = Costo de Vehículos Vendidos / Inventario Promedio',
      calculation: 'Costo_Total_Vendido / ((Inventario_Inicial + Inventario_Final) / 2)',
      interpretation: [
        'Ratio > 8: Excelente (venta cada 45 días)',
        'Ratio 6-8: Bueno (venta cada 60 días)',
        'Ratio < 6: Atención requerida (stock estancado)'
      ],
      target: 'Objetivo: > 8 rotaciones anuales',
    },
    {
      id: 2,
      name: 'Margen Bruto por Vehículo',
      category: 'Financiero',
      icon: DollarSign,
      color: 'green',
      description: 'Representa la rentabilidad directa de cada venta de vehículo, excluyendo costos operativos. Es el indicador principal de salud financiera del negocio de venta de unidades.',
      formula: 'Margen Bruto % = ((Precio Venta - Costo Vehículo) / Precio Venta) × 100',
      calculation: '((SUM(Precio_Venta) - SUM(Costo_Vehiculo)) / SUM(Precio_Venta)) * 100',
      interpretation: [
        'Margen > 12%: Excelente negociación',
        'Margen 8-12%: Estándar de industria',
        'Margen < 8%: Revisar estrategia de pricing'
      ],
      target: 'Objetivo: 10-15% promedio',
    },
    {
      id: 3,
      name: 'Absorción de Posventa',
      category: 'Financiero',
      icon: Wrench,
      color: 'purple',
      description: 'Porcentaje de gastos operativos fijos cubiertos por la rentabilidad del departamento de servicio y repuestos. Un ratio > 100% significa que posventa financia toda la operación.',
      formula: 'Absorción % = (Utilidad Bruta Posventa / Gastos Operativos Totales) × 100',
      calculation: '(SUM(Ingresos_Servicio + Ingresos_Repuestos - Costos_Directos_Posventa) / SUM(Gastos_Fijos_Sucursal)) * 100',
      interpretation: [
        'Absorción > 100%: Posventa cubre todos los gastos',
        'Absorción 80-100%: Saludable',
        'Absorción < 80%: Dependencia crítica de ventas de autos'
      ],
      target: 'Objetivo: > 85%',
    },
    {
      id: 4,
      name: 'Tasa de Conversión de Leads',
      category: 'Operacional',
      icon: Users,
      color: 'orange',
      description: 'Mide la efectividad del proceso comercial convirtiendo prospectos en ventas reales. Identifica problemas en el funnel de ventas y calidad de leads.',
      formula: 'Conversión % = (Ventas Cerradas / Total Leads Calificados) × 100',
      calculation: '(COUNT(Ventas_Cerradas) / COUNT(Leads_Calificados)) * 100',
      interpretation: [
        'Conversión > 20%: Excelente proceso comercial',
        'Conversión 12-20%: Estándar de industria',
        'Conversión < 12%: Revisar calidad de leads o capacitación'
      ],
      target: 'Objetivo: > 15%',
    },
    {
      id: 5,
      name: 'Días Promedio en Inventario (Days in Inventory)',
      category: 'Operacional',
      icon: TrendingUp,
      color: 'red',
      description: 'Tiempo promedio que un vehículo permanece en el lote antes de venderse. Identifica modelos de baja rotación que generan costos de mantenimiento y depreciación.',
      formula: 'DII = 365 / Rotación de Inventario',
      calculation: '365 / (Costo_Total_Vendido / Inventario_Promedio)',
      interpretation: [
        'DII < 45 días: Rotación excelente',
        'DII 45-60 días: Aceptable',
        'DII > 60 días: Stock envejeciendo - riesgo de descuentos'
      ],
      target: 'Objetivo: < 50 días',
    },
  ];

  const colorClasses: Record<string, { bg: string; text: string; border: string }> = {
    blue: { bg: 'bg-blue-50', text: 'text-blue-700', border: 'border-blue-200' },
    green: { bg: 'bg-green-50', text: 'text-green-700', border: 'border-green-200' },
    purple: { bg: 'bg-purple-50', text: 'text-purple-700', border: 'border-purple-200' },
    orange: { bg: 'bg-orange-50', text: 'text-orange-700', border: 'border-orange-200' },
    red: { bg: 'bg-red-50', text: 'text-red-700', border: 'border-red-200' },
  };

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-slate-900 mb-4">3. KPIs y Métricas Críticas</h2>
        <p className="text-slate-700 leading-relaxed">
          Los siguientes 5 KPIs han sido seleccionados como los indicadores más críticos para 
          la gestión estratégica de una agencia automotriz. Cada métrica incluye su fórmula de 
          cálculo, interpretación y valores objetivo basados en benchmarks de la industria.
        </p>
      </div>

      {/* Tabla resumen */}
      <Card className="p-6 bg-slate-50">
        <h3 className="text-slate-900 mb-4">Resumen de KPIs Seleccionados</h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b-2 border-slate-300">
                <th className="text-left p-3 text-slate-800">#</th>
                <th className="text-left p-3 text-slate-800">KPI</th>
                <th className="text-left p-3 text-slate-800">Categoría</th>
                <th className="text-left p-3 text-slate-800">Objetivo</th>
                <th className="text-left p-3 text-slate-800">Frecuencia</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-200">
                <td className="p-3">1</td>
                <td className="p-3">Rotación de Inventario</td>
                <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Operacional</span></td>
                <td className="p-3">&gt; 8 rotaciones/año</td>
                <td className="p-3">Mensual</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3">2</td>
                <td className="p-3">Margen Bruto por Vehículo</td>
                <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Financiero</span></td>
                <td className="p-3">10-15%</td>
                <td className="p-3">Mensual</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3">3</td>
                <td className="p-3">Absorción de Posventa</td>
                <td className="p-3"><span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Financiero</span></td>
                <td className="p-3">&gt; 85%</td>
                <td className="p-3">Mensual</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-3">4</td>
                <td className="p-3">Tasa de Conversión de Leads</td>
                <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Operacional</span></td>
                <td className="p-3">&gt; 15%</td>
                <td className="p-3">Semanal</td>
              </tr>
              <tr>
                <td className="p-3">5</td>
                <td className="p-3">Días Promedio en Inventario</td>
                <td className="p-3"><span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Operacional</span></td>
                <td className="p-3">&lt; 50 días</td>
                <td className="p-3">Semanal</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>

      {/* KPIs detallados */}
      <div className="space-y-6">
        <h3 className="text-slate-900">Definiciones Detalladas</h3>
        {kpis.map((kpi) => {
          const Icon = kpi.icon;
          const colors = colorClasses[kpi.color];
          
          return (
            <Card key={kpi.id} className={`p-6 border-l-4 ${colors.border}`}>
              <div className="flex items-start gap-4 mb-4">
                <div className={`${colors.bg} p-3 rounded-lg`}>
                  <Icon className={`size-6 ${colors.text}`} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-slate-900">KPI #{kpi.id}: {kpi.name}</h4>
                    <span className={`${colors.bg} ${colors.text} px-3 py-1 rounded-full text-sm`}>
                      {kpi.category}
                    </span>
                  </div>
                  <p className="text-slate-600">{kpi.description}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {/* Fórmula */}
                <div className="bg-slate-50 rounded-lg p-4">
                  <h5 className="text-slate-800 mb-2">Fórmula Lógica</h5>
                  <div className="bg-white border border-slate-200 rounded p-3 mb-2">
                    <code className="text-sm text-slate-700">{kpi.formula}</code>
                  </div>
                  <h5 className="text-slate-800 mb-2 mt-3">Implementación SQL</h5>
                  <div className="bg-slate-900 text-green-400 rounded p-3 overflow-x-auto">
                    <code className="text-xs">{kpi.calculation}</code>
                  </div>
                </div>

                {/* Interpretación */}
                <div className="bg-slate-50 rounded-lg p-4">
                  <h5 className="text-slate-800 mb-3">Interpretación de Resultados</h5>
                  <ul className="space-y-2">
                    {kpi.interpretation.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-slate-400 mt-1">•</span>
                        <span className="text-slate-700 text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className={`mt-4 ${colors.bg} ${colors.text} p-3 rounded-lg`}>
                    <p className="text-sm">{kpi.target}</p>
                  </div>
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Métricas secundarias */}
      <Card className="p-6 bg-gradient-to-r from-slate-50 to-slate-100">
        <h3 className="text-slate-900 mb-4">Métricas Secundarias Complementarias</h3>
        <p className="text-slate-700 mb-4">
          Además de los 5 KPIs principales, el sistema debe calcular estas métricas de soporte:
        </p>
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="text-slate-800 mb-2">Ticket Promedio</h4>
            <p className="text-slate-600 text-sm">Precio promedio de venta por unidad</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="text-slate-800 mb-2">Ventas por Vendedor</h4>
            <p className="text-slate-600 text-sm">Unidades vendidas per capita mensual</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="text-slate-800 mb-2">Margen de Contribución</h4>
            <p className="text-slate-600 text-sm">Margen bruto menos comisiones directas</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="text-slate-800 mb-2">Índice de Satisfacción</h4>
            <p className="text-slate-600 text-sm">NPS promedio de clientes post-venta</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="text-slate-800 mb-2">Costo por Lead</h4>
            <p className="text-slate-600 text-sm">Inversión marketing / leads generados</p>
          </div>
          <div className="bg-white rounded-lg p-4 border border-slate-200">
            <h4 className="text-slate-800 mb-2">Retorno sobre Inventario</h4>
            <p className="text-slate-600 text-sm">ROI específico del capital en stock</p>
          </div>
        </div>
      </Card>
    </div>
  );
}