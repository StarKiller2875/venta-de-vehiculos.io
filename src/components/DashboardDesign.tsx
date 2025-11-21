import { Card } from './ui/card';
import { Layout, AlertTriangle, Brain, TrendingUp, BarChart3, PieChart } from 'lucide-react';

export function DashboardDesign() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-slate-900 mb-4">4. Diseño del Dashboard Ejecutivo</h2>
        <p className="text-slate-700 leading-relaxed">
          El Dashboard Ejecutivo está diseñado siguiendo principios de diseño centrado en el usuario, 
          jerarquía visual y teoría de la información. Prioriza información crítica en la zona de atención 
          primaria (arriba-izquierda) y distribuye visualizaciones según importancia estratégica.
        </p>
      </div>

      {/* Mockup Visual */}
      <div className="bg-slate-900 rounded-xl p-8 shadow-2xl">
        <div className="mb-6 flex items-center justify-between">
          <h3 className="text-white flex items-center gap-2">
            <Layout className="size-5" />
            Mockup del Dashboard Principal
          </h3>
          <div className="text-slate-400 text-sm">Resolución: 1920x1080</div>
        </div>

        {/* Header del Dashboard */}
        <div className="bg-slate-800 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between text-white">
            <div>
              <p className="text-slate-400 text-sm">Dashboard Ejecutivo</p>
              <h4>Agencia Automotriz - Vista General</h4>
            </div>
            <div className="flex gap-4">
              <div className="bg-slate-700 px-3 py-2 rounded text-sm">
                Noviembre 2025
              </div>
              <div className="bg-blue-600 px-3 py-2 rounded text-sm">
                Exportar PDF
              </div>
            </div>
          </div>
        </div>

        {/* Zona Superior - KPIs Principales */}
        <div className="mb-4">
          <div className="text-slate-400 text-xs mb-2">ZONA SUPERIOR - KPIs Principales (Cards)</div>
          <div className="grid grid-cols-5 gap-3">
            <div className="bg-blue-500 rounded p-4 h-24 flex flex-col justify-between">
              <div className="text-blue-100 text-xs">Rotación Inventario</div>
              <div className="text-white">8.2x</div>
              <div className="text-blue-200 text-xs">↑ 5% vs mes anterior</div>
            </div>
            <div className="bg-green-500 rounded p-4 h-24 flex flex-col justify-between">
              <div className="text-green-100 text-xs">Margen Bruto</div>
              <div className="text-white">12.4%</div>
              <div className="text-green-200 text-xs">↑ 2.1% vs mes anterior</div>
            </div>
            <div className="bg-purple-500 rounded p-4 h-24 flex flex-col justify-between">
              <div className="text-purple-100 text-xs">Absorción Posventa</div>
              <div className="text-white">87%</div>
              <div className="text-purple-200 text-xs">↑ 3% vs mes anterior</div>
            </div>
            <div className="bg-orange-500 rounded p-4 h-24 flex flex-col justify-between">
              <div className="text-orange-100 text-xs">Conversión Leads</div>
              <div className="text-white">16.8%</div>
              <div className="text-orange-200 text-xs">↓ 1.2% vs mes anterior</div>
            </div>
            <div className="bg-red-500 rounded p-4 h-24 flex flex-col justify-between">
              <div className="text-red-100 text-xs">Días en Inventario</div>
              <div className="text-white">48d</div>
              <div className="text-red-200 text-xs">↓ 4 días vs mes anterior</div>
            </div>
          </div>
        </div>

        {/* Zona Central - Gráficos Principales */}
        <div className="grid grid-cols-3 gap-4 mb-4">
          {/* Gráfico grande izquierda */}
          <div className="col-span-2">
            <div className="text-slate-400 text-xs mb-2">ZONA CENTRAL IZQUIERDA - Tendencia Temporal</div>
            <div className="bg-slate-800 rounded-lg p-4 h-64">
              <div className="flex items-center justify-between mb-3">
                <h5 className="text-white text-sm">Ventas y Margen - Últimos 12 Meses</h5>
                <TrendingUp className="size-4 text-blue-400" />
              </div>
              <div className="text-slate-500 text-xs mb-4">Gráfico de Líneas Dual-Eje</div>
              <div className="relative h-40 border-l-2 border-b-2 border-slate-700">
                {/* Simulación de gráfico de líneas */}
                <svg className="absolute inset-0 w-full h-full">
                  <polyline
                    points="10,120 50,100 90,85 130,95 170,70 210,60 250,55 290,45 330,50 370,40 410,35 450,30"
                    fill="none"
                    stroke="#3b82f6"
                    strokeWidth="2"
                  />
                  <polyline
                    points="10,130 50,125 90,115 130,120 170,100 210,95 250,90 290,80 330,85 370,75 410,70 450,65"
                    fill="none"
                    stroke="#10b981"
                    strokeWidth="2"
                    strokeDasharray="4,4"
                  />
                </svg>
              </div>
              <div className="flex gap-4 mt-2 text-xs">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-500 rounded"></div>
                  <span className="text-slate-400">Ventas (Unidades)</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded"></div>
                  <span className="text-slate-400">Margen % (Eje Derecho)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Gráfico derecha */}
          <div>
            <div className="text-slate-400 text-xs mb-2">ZONA CENTRAL DERECHA - Distribución</div>
            <div className="bg-slate-800 rounded-lg p-4 h-64">
              <div className="flex items-center justify-between mb-3">
                <h5 className="text-white text-sm">Ventas por Segmento</h5>
                <PieChart className="size-4 text-purple-400" />
              </div>
              <div className="text-slate-500 text-xs mb-4">Gráfico de Dona (Donut Chart)</div>
              <div className="flex items-center justify-center h-32">
                <div className="relative w-32 h-32">
                  {/* Simulación de donut chart */}
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="64" cy="64" r="50" fill="none" stroke="#3b82f6" strokeWidth="20" strokeDasharray="94 314" />
                    <circle cx="64" cy="64" r="50" fill="none" stroke="#10b981" strokeWidth="20" strokeDasharray="78 314" strokeDashoffset="-94" />
                    <circle cx="64" cy="64" r="50" fill="none" stroke="#f59e0b" strokeWidth="20" strokeDasharray="63 314" strokeDashoffset="-172" />
                    <circle cx="64" cy="64" r="50" fill="none" stroke="#ef4444" strokeWidth="20" strokeDasharray="79 314" strokeDashoffset="-235" />
                  </svg>
                </div>
              </div>
              <div className="mt-3 space-y-1 text-xs">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded"></div>
                    <span className="text-slate-400">Sedanes</span>
                  </div>
                  <span className="text-white">30%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded"></div>
                    <span className="text-slate-400">SUVs</span>
                  </div>
                  <span className="text-white">25%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-orange-500 rounded"></div>
                    <span className="text-slate-400">Pickups</span>
                  </div>
                  <span className="text-white">20%</span>
                </div>
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-red-500 rounded"></div>
                    <span className="text-slate-400">Compactos</span>
                  </div>
                  <span className="text-white">25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Zona Inferior - Gráficos Secundarios */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-slate-400 text-xs mb-2">ZONA INFERIOR - Rendimiento</div>
            <div className="bg-slate-800 rounded-lg p-4 h-48">
              <div className="flex items-center justify-between mb-3">
                <h5 className="text-white text-sm">Top 5 Vendedores</h5>
                <BarChart3 className="size-4 text-green-400" />
              </div>
              <div className="text-slate-500 text-xs mb-3">Gráfico de Barras Horizontales</div>
              <div className="space-y-2">
                {['Juan P.', 'María G.', 'Carlos R.', 'Ana M.', 'Pedro L.'].map((name, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <div className="text-slate-400 text-xs w-16">{name}</div>
                    <div className="flex-1 bg-slate-700 h-4 rounded overflow-hidden">
                      <div 
                        className="bg-green-500 h-full" 
                        style={{ width: `${100 - idx * 15}%` }}
                      ></div>
                    </div>
                    <div className="text-white text-xs w-8 text-right">{25 - idx * 3}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <div className="text-slate-400 text-xs mb-2">ZONA INFERIOR - Inventario</div>
            <div className="bg-slate-800 rounded-lg p-4 h-48">
              <div className="flex items-center justify-between mb-3">
                <h5 className="text-white text-sm">Aging de Inventario</h5>
                <BarChart3 className="size-4 text-orange-400" />
              </div>
              <div className="text-slate-500 text-xs mb-3">Gráfico de Barras Apiladas</div>
              <div className="relative h-28 border-l-2 border-b-2 border-slate-700 flex items-end gap-2 px-2">
                <div className="flex-1 flex flex-col gap-1">
                  <div className="bg-green-500 h-16"></div>
                  <div className="bg-yellow-500 h-8"></div>
                  <div className="bg-red-500 h-4"></div>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <div className="bg-green-500 h-12"></div>
                  <div className="bg-yellow-500 h-10"></div>
                  <div className="bg-red-500 h-6"></div>
                </div>
                <div className="flex-1 flex flex-col gap-1">
                  <div className="bg-green-500 h-20"></div>
                  <div className="bg-yellow-500 h-6"></div>
                  <div className="bg-red-500 h-2"></div>
                </div>
              </div>
              <div className="flex justify-around mt-2 text-xs">
                <span className="text-slate-400">Sedanes</span>
                <span className="text-slate-400">SUVs</span>
                <span className="text-slate-400">Pickups</span>
              </div>
            </div>
          </div>

          <div>
            <div className="text-slate-400 text-xs mb-2">ZONA INFERIOR - Alertas IA</div>
            <div className="bg-gradient-to-br from-red-900 to-orange-900 rounded-lg p-4 h-48 border-2 border-red-500">
              <div className="flex items-center gap-2 mb-3">
                <AlertTriangle className="size-5 text-red-300" />
                <h5 className="text-white text-sm">Alertas Predictivas</h5>
              </div>
              <div className="space-y-2">
                <div className="bg-red-800/50 rounded p-2 border border-red-600">
                  <div className="flex items-center gap-2 mb-1">
                    <Brain className="size-3 text-red-300" />
                    <span className="text-red-200 text-xs">Stock Estancado</span>
                  </div>
                  <p className="text-white text-xs">12 SUVs excederán 90 días en 2 semanas</p>
                </div>
                <div className="bg-orange-800/50 rounded p-2 border border-orange-600">
                  <div className="flex items-center gap-2 mb-1">
                    <Brain className="size-3 text-orange-300" />
                    <span className="text-orange-200 text-xs">Riesgo de Objetivo</span>
                  </div>
                  <p className="text-white text-xs">Ventas 15% bajo meta proyectada</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Especificaciones Técnicas */}
      <div>
        <h3 className="text-slate-900 mb-4">Especificaciones de Visualizaciones</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="text-slate-900 mb-4">Zona Superior: KPI Cards</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-600">Componente:</span>
                <span className="text-slate-800">Cards métricas con sparklines</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-600">Actualización:</span>
                <span className="text-slate-800">Tiempo real / Cada 5 minutos</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-600">Interacción:</span>
                <span className="text-slate-800">Click para drill-down detallado</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">KPIs mostrados:</span>
                <span className="text-slate-800">Los 5 KPIs principales definidos</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="text-slate-900 mb-4">Zona Central Izquierda: Tendencia Temporal</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-600">Tipo de gráfico:</span>
                <span className="text-slate-800">Líneas dual-eje (Recharts)</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-600">Series de datos:</span>
                <span className="text-slate-800">Ventas (unidades) + Margen %</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-600">Periodo:</span>
                <span className="text-slate-800">Últimos 12 meses (configurable)</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Interacción:</span>
                <span className="text-slate-800">Hover tooltips, zoom temporal</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="text-slate-900 mb-4">Zona Central Derecha: Distribución por Segmento</h4>
            <div className="space-y-3 text-sm">
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-600">Tipo de gráfico:</span>
                <span className="text-slate-800">Donut Chart (Recharts PieChart)</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-600">Datos:</span>
                <span className="text-slate-800">% ventas por segmento de vehículo</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-slate-200">
                <span className="text-slate-600">Colores:</span>
                <span className="text-slate-800">Paleta corporativa consistente</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-600">Interacción:</span>
                <span className="text-slate-800">Click en segmento para filtrar</span>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="text-slate-900 mb-4">Zona Inferior: Gráficos Complementarios</h4>
            <div className="space-y-3 text-sm">
              <div className="pb-2 border-b border-slate-200">
                <span className="text-slate-600">Izquierda:</span>
                <p className="text-slate-800 mt-1">Ranking de vendedores (Barras horizontales)</p>
              </div>
              <div className="pb-2 border-b border-slate-200">
                <span className="text-slate-600">Centro:</span>
                <p className="text-slate-800 mt-1">Aging de inventario (Barras apiladas)</p>
              </div>
              <div>
                <span className="text-slate-600">Derecha:</span>
                <p className="text-slate-800 mt-1">Panel de alertas predictivas (IA)</p>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Alertas Predictivas */}
      <div>
        <h3 className="text-slate-900 mb-4 flex items-center gap-2">
          <Brain className="size-6 text-purple-600" />
          Sección de Alertas Predictivas con IA
        </h3>
        <p className="text-slate-700 mb-6">
          El panel de alertas utiliza modelos de Machine Learning para anticipar problemas operativos 
          y financieros antes de que impacten severamente el negocio. Las alertas se clasifican por 
          severidad y accionabilidad.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Escenario 1 */}
          <Card className="p-6 border-l-4 border-red-500">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-red-100 p-3 rounded-lg">
                <AlertTriangle className="size-6 text-red-600" />
              </div>
              <div>
                <h4 className="text-slate-900 mb-1">Escenario 1: Predicción de Stock Estancado</h4>
                <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                  Severidad: Alta
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="text-slate-800 mb-2">Descripción del Problema</h5>
                <p className="text-slate-600 text-sm">
                  El sistema detecta vehículos específicos que, basándose en patrones históricos de 
                  ventas, aging actual y tendencias de mercado, tienen alta probabilidad de exceder 
                  90 días en inventario (umbral crítico para depreciación acelerada).
                </p>
              </div>

              <div>
                <h5 className="text-slate-800 mb-2">Modelo de ML Utilizado</h5>
                <div className="bg-slate-50 rounded p-3 text-sm">
                  <p className="text-slate-700 mb-2"><strong>Algoritmo:</strong> Random Forest Regression</p>
                  <p className="text-slate-700 mb-2">
                    <strong>Variables predictoras:</strong> Días actuales en stock, segmento de vehículo, 
                    estacionalidad, precio vs mercado, historial de ventas del modelo
                  </p>
                  <p className="text-slate-700">
                    <strong>Output:</strong> Probabilidad de venta en próximos 7/14/30 días
                  </p>
                </div>
              </div>

              <div>
                <h5 className="text-slate-800 mb-2">Alerta Generada</h5>
                <div className="bg-red-50 border border-red-200 rounded p-3">
                  <p className="text-red-900 text-sm mb-2">
                    <strong>⚠️ ALERTA CRÍTICA:</strong> 12 SUVs del segmento premium tienen 78% 
                    de probabilidad de exceder 90 días de inventario en las próximas 2 semanas.
                  </p>
                  <p className="text-red-800 text-sm mb-3">
                    <strong>Impacto proyectado:</strong> Pérdida estimada de $42,000 por depreciación 
                    + costos de mantenimiento.
                  </p>
                  <div className="bg-white rounded p-2">
                    <p className="text-slate-700 text-sm mb-1"><strong>Acciones sugeridas:</strong></p>
                    <ul className="text-slate-600 text-sm space-y-1 list-disc list-inside">
                      <li>Activar promoción especial con descuento del 5-7%</li>
                      <li>Reasignar al equipo de ventas corporativas (mayor conversión)</li>
                      <li>Considerar reubicación a sucursal con mejor demanda</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Escenario 2 */}
          <Card className="p-6 border-l-4 border-orange-500">
            <div className="flex items-start gap-3 mb-4">
              <div className="bg-orange-100 p-3 rounded-lg">
                <TrendingUp className="size-6 text-orange-600" />
              </div>
              <div>
                <h4 className="text-slate-900 mb-1">Escenario 2: Riesgo de Incumplimiento de Meta</h4>
                <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">
                  Severidad: Media
                </span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <h5 className="text-slate-800 mb-2">Descripción del Problema</h5>
                <p className="text-slate-600 text-sm">
                  Basándose en el ritmo actual de ventas, pipeline de oportunidades en CRM y 
                  estacionalidad histórica, el sistema proyecta que la sucursal no alcanzará 
                  el objetivo mensual de ventas con 85% de confianza.
                </p>
              </div>

              <div>
                <h5 className="text-slate-800 mb-2">Modelo de ML Utilizado</h5>
                <div className="bg-slate-50 rounded p-3 text-sm">
                  <p className="text-slate-700 mb-2"><strong>Algoritmo:</strong> ARIMA + Prophet (Time Series Forecasting)</p>
                  <p className="text-slate-700 mb-2">
                    <strong>Variables predictoras:</strong> Ventas diarias YTD, pipeline de oportunidades, 
                    tasa de conversión actual, días hábiles restantes, estacionalidad
                  </p>
                  <p className="text-slate-700">
                    <strong>Output:</strong> Proyección de ventas fin de mes con intervalo de confianza
                  </p>
                </div>
              </div>

              <div>
                <h5 className="text-slate-800 mb-2">Alerta Generada</h5>
                <div className="bg-orange-50 border border-orange-200 rounded p-3">
                  <p className="text-orange-900 text-sm mb-2">
                    <strong>⚠️ ALERTA MODERADA:</strong> Proyección de ventas mensual: 87 unidades 
                    (objetivo: 100). Déficit esperado: 13 unidades (-13%).
                  </p>
                  <p className="text-orange-800 text-sm mb-3">
                    <strong>Confianza estadística:</strong> 85%. Basado en pipeline actual de 45 
                    oportunidades con conversión proyectada del 16%.
                  </p>
                  <div className="bg-white rounded p-2">
                    <p className="text-slate-700 text-sm mb-1"><strong>Acciones sugeridas:</strong></p>
                    <ul className="text-slate-600 text-sm space-y-1 list-disc list-inside">
                      <li>Acelerar seguimiento de las 15 oportunidades "tibias" en CRM</li>
                      <li>Activar campaña de marketing digital focalizada (+30% leads)</li>
                      <li>Autorizar descuentos especiales días 25-30 del mes</li>
                      <li>Realizar evento de ventas de fin de mes (weekend)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Consideraciones de UX */}
      <Card className="p-6 bg-blue-50 border-blue-200">
        <h3 className="text-slate-900 mb-4">Consideraciones de Experiencia de Usuario (UX)</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="text-slate-800 mb-3">Principios de Diseño</h4>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Jerarquía F-Pattern:</strong> Información crítica en zona superior izquierda</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Codificación por color:</strong> Verde (positivo), Rojo (negativo), Amarillo (advertencia)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Regla 3-5-7:</strong> Máximo 5 KPIs principales, 7 elementos por sección</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Tiempo de comprensión:</strong> Usuario debe entender el estado en &lt;10 segundos</span>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-800 mb-3">Interactividad</h4>
            <ul className="space-y-2 text-slate-700 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Drill-down:</strong> Click en cualquier métrica para ver detalle granular</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Filtros globales:</strong> Fecha, sucursal, marca, vendedor (barra superior)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Exportación:</strong> PDF ejecutivo, Excel con datos raw, compartir vía email</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-600 mt-1">•</span>
                <span><strong>Responsive:</strong> Adaptación automática tablet (1024px+), desktop (1920px óptimo)</span>
              </li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}