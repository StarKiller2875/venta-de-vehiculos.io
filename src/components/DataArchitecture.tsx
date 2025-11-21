import { Card } from './ui/card';
import { Database, Cloud, Workflow, BarChart2, AlertCircle } from 'lucide-react';

export function DataArchitecture() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-slate-900 mb-4">1. Arquitectura de Datos y Flujo de Información</h2>
        <p className="text-slate-700 leading-relaxed">
          La arquitectura del DSS sigue un modelo moderno de Data Warehouse con procesamiento 
          ETL/ELT, almacenamiento columnar y motor OLAP para consultas analíticas de alto rendimiento.
        </p>
      </div>

      {/* Flujo de Datos Visual */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-xl p-8">
        <h3 className="text-slate-900 mb-6 flex items-center gap-2">
          <Workflow className="size-5" />
          Flujo de Datos End-to-End
        </h3>
        <div className="space-y-4">
          {/* Capa 1 */}
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Database className="size-5 text-blue-600" />
                <h4 className="text-slate-800">1. Fuentes de Datos</h4>
              </div>
              <p className="text-slate-600 text-sm">Sistemas transaccionales operacionales</p>
            </div>
            <div className="text-slate-400">→</div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Cloud className="size-5 text-green-600" />
                <h4 className="text-slate-800">2. Ingesta ETL</h4>
              </div>
              <p className="text-slate-600 text-sm">Apache Airflow / Azure Data Factory</p>
            </div>
          </div>
          {/* Capa 2 */}
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <Database className="size-5 text-purple-600" />
                <h4 className="text-slate-800">3. Data Warehouse</h4>
              </div>
              <p className="text-slate-600 text-sm">Snowflake / SQL Server Enterprise</p>
            </div>
            <div className="text-slate-400">→</div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-blue-200 flex-1">
              <div className="flex items-center gap-2 mb-2">
                <BarChart2 className="size-5 text-orange-600" />
                <h4 className="text-slate-800">4. Motor OLAP</h4>
              </div>
              <p className="text-slate-600 text-sm">MS Analysis Services / Clickhouse</p>
            </div>
          </div>
          {/* Capa 3 */}
          <div className="flex justify-center">
            <div className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white rounded-lg p-4 shadow-lg w-2/3">
              <div className="flex items-center gap-2 mb-2 justify-center">
                <BarChart2 className="size-5" />
                <h4>5. Capa de Visualización</h4>
              </div>
              <p className="text-center text-sm opacity-90">Power BI / Tableau / Dashboard Web Personalizado</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tecnologías */}
      <div>
        <h3 className="text-slate-900 mb-4">Stack Tecnológico Recomendado</h3>
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="p-6">
            <h4 className="text-slate-900 mb-4">Ingesta y Procesamiento ETL</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">
                  Primario
                </div>
                <div>
                  <p className="text-slate-800">Apache Airflow</p>
                  <p className="text-slate-600 text-sm">Orquestación de pipelines complejos con DAGs</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                  Alternativa
                </div>
                <div>
                  <p className="text-slate-800">Azure Data Factory / AWS Glue</p>
                  <p className="text-slate-600 text-sm">Soluciones cloud-native con integración nativa</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="text-slate-900 mb-4">Data Warehouse</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">
                  Primario
                </div>
                <div>
                  <p className="text-slate-800">Snowflake</p>
                  <p className="text-slate-600 text-sm">Escalabilidad automática, almacenamiento columnar</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                  Alternativa
                </div>
                <div>
                  <p className="text-slate-800">SQL Server Enterprise / PostgreSQL</p>
                  <p className="text-slate-600 text-sm">On-premise con control total</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="text-slate-900 mb-4">Motor OLAP</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">
                  Primario
                </div>
                <div>
                  <p className="text-slate-800">Microsoft Analysis Services (SSAS)</p>
                  <p className="text-slate-600 text-sm">Cubos multidimensionales, DAX queries</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                  Alternativa
                </div>
                <div>
                  <p className="text-slate-800">ClickHouse</p>
                  <p className="text-slate-600 text-sm">OLAP columnar de alto rendimiento</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <h4 className="text-slate-900 mb-4">Machine Learning & Predicción</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-sm">
                  Primario
                </div>
                <div>
                  <p className="text-slate-800">Python (scikit-learn, TensorFlow)</p>
                  <p className="text-slate-600 text-sm">Modelos predictivos y clustering</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
                  Complemento
                </div>
                <div>
                  <p className="text-slate-800">Azure ML / AWS SageMaker</p>
                  <p className="text-slate-600 text-sm">MLOps y deployment automatizado</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>

      {/* Fuentes de Datos */}
      <div>
        <h3 className="text-slate-900 mb-4">Fuentes de Datos Críticas</h3>
        <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
          <table className="w-full">
            <thead>
              <tr className="bg-slate-100 border-b border-slate-200">
                <th className="text-left p-4 text-slate-800">#</th>
                <th className="text-left p-4 text-slate-800">Fuente de Datos</th>
                <th className="text-left p-4 text-slate-800">Tipo</th>
                <th className="text-left p-4 text-slate-800">Descripción</th>
                <th className="text-left p-4 text-slate-800">Frecuencia Actualización</th>
              </tr>
            </thead>
            <tbody className="text-slate-700">
              <tr className="border-b border-slate-200">
                <td className="p-4">1</td>
                <td className="p-4">
                  <strong>Sistema CRM</strong>
                  <br />
                  <span className="text-slate-600 text-sm">(Salesforce / Microsoft Dynamics)</span>
                </td>
                <td className="p-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Interno</span>
                </td>
                <td className="p-4">
                  Datos de clientes, leads, oportunidades, seguimiento de ventas, 
                  historial de interacciones, conversiones
                </td>
                <td className="p-4">Tiempo real / 15 min</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-4">2</td>
                <td className="p-4">
                  <strong>Sistema DMS</strong>
                  <br />
                  <span className="text-slate-600 text-sm">(Dealer Management System)</span>
                </td>
                <td className="p-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Interno</span>
                </td>
                <td className="p-4">
                  Inventario de vehículos, ventas completadas, facturación, 
                  órdenes de servicio, garantías, repuestos
                </td>
                <td className="p-4">Tiempo real / 30 min</td>
              </tr>
              <tr className="border-b border-slate-200">
                <td className="p-4">3</td>
                <td className="p-4">
                  <strong>API de Precios de Mercado</strong>
                  <br />
                  <span className="text-slate-600 text-sm">(Kelley Blue Book / Black Book API)</span>
                </td>
                <td className="p-4">
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm">Externo</span>
                </td>
                <td className="p-4">
                  Valores de mercado actuales, precios de competencia, 
                  tendencias de depreciación, índices de demanda
                </td>
                <td className="p-4">Diario</td>
              </tr>
              <tr>
                <td className="p-4">4</td>
                <td className="p-4">
                  <strong>Sistema ERP Financiero</strong>
                  <br />
                  <span className="text-slate-600 text-sm">(SAP / Oracle Financials)</span>
                </td>
                <td className="p-4">
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">Interno</span>
                </td>
                <td className="p-4">
                  Contabilidad general, cuentas por cobrar/pagar, 
                  costos operativos, nómina, flujo de caja
                </td>
                <td className="p-4">Diario / Batch nocturno</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Consideraciones Técnicas */}
      <Card className="p-6 bg-amber-50 border-amber-200">
        <div className="flex items-start gap-3">
          <AlertCircle className="size-5 text-amber-600 mt-1" />
          <div>
            <h4 className="text-amber-900 mb-2">Consideraciones de Integración</h4>
            <ul className="text-amber-800 space-y-1 text-sm list-disc list-inside">
              <li>Implementar CDC (Change Data Capture) para sistemas transaccionales críticos</li>
              <li>Mantener staging area para validación de datos antes de carga al DW</li>
              <li>Establecer políticas de retención: 5 años de datos históricos en DW, 2 años en cubos OLAP</li>
              <li>SLA de disponibilidad: 99.5% para el sistema completo, ventanas de mantenimiento domingos 2-6 AM</li>
            </ul>
          </div>
        </div>
      </Card>
    </div>
  );
}
