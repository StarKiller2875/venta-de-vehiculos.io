import { Card } from './ui/card';
import { Target, Users, Zap, Shield } from 'lucide-react';

export function TechnicalOverview() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-slate-900 mb-4">Resumen Ejecutivo</h2>
        <p className="text-slate-700 leading-relaxed">
          Este documento detalla el diseño técnico de un Sistema de Soporte a la Decisión (DSS) 
          diseñado específicamente para directivos y gerentes de agencias de venta de vehículos. 
          El sistema proporciona inteligencia de negocios en tiempo real, análisis predictivo y 
          visualizaciones ejecutivas para facilitar la toma de decisiones estratégicas.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-blue-100 p-3 rounded-lg">
              <Target className="size-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-slate-900 mb-2">Objetivo del Sistema</h3>
              <p className="text-slate-600">
                Proporcionar insights accionables sobre rendimiento de ventas, inventario, 
                rentabilidad y tendencias de mercado para optimizar decisiones estratégicas.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-green-100 p-3 rounded-lg">
              <Users className="size-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-slate-900 mb-2">Usuarios Objetivo</h3>
              <p className="text-slate-600">
                Directores Generales, Gerentes de Ventas, Gerentes Financieros y 
                Gerentes de Posventa que requieren visión estratégica del negocio.
              </p>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-purple-100 p-3 rounded-lg">
              <Zap className="size-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-slate-900 mb-2">Capacidades Clave</h3>
              <ul className="text-slate-600 space-y-1 list-disc list-inside">
                <li>Análisis multidimensional en tiempo real</li>
                <li>Predicciones con Machine Learning</li>
                <li>Alertas inteligentes automatizadas</li>
                <li>Visualizaciones ejecutivas interactivas</li>
              </ul>
            </div>
          </div>
        </Card>

        <Card className="p-6">
          <div className="flex items-start gap-4">
            <div className="bg-orange-100 p-3 rounded-lg">
              <Shield className="size-6 text-orange-600" />
            </div>
            <div>
              <h3 className="text-slate-900 mb-2">Tecnologías Core</h3>
              <ul className="text-slate-600 space-y-1 list-disc list-inside">
                <li>Data Warehouse con SQL Server / Snowflake</li>
                <li>ETL con Apache Airflow</li>
                <li>OLAP con Microsoft Analysis Services</li>
                <li>ML con Python (scikit-learn, TensorFlow)</li>
              </ul>
            </div>
          </div>
        </Card>
      </div>

      <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
        <h3 className="text-slate-900 mb-4">Alcance Funcional</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div>
            <h4 className="text-slate-800 mb-2">Análisis de Ventas</h4>
            <ul className="text-slate-600 space-y-1 text-sm">
              <li>• Rendimiento por vendedor</li>
              <li>• Análisis de conversión</li>
              <li>• Ciclo de ventas promedio</li>
              <li>• Segmentación de clientes</li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-800 mb-2">Gestión de Inventario</h4>
            <ul className="text-slate-600 space-y-1 text-sm">
              <li>• Rotación de stock</li>
              <li>• Análisis de aging</li>
              <li>• Optimización de pedidos</li>
              <li>• Predicción de demanda</li>
            </ul>
          </div>
          <div>
            <h4 className="text-slate-800 mb-2">Rentabilidad</h4>
            <ul className="text-slate-600 space-y-1 text-sm">
              <li>• Margen por vehículo</li>
              <li>• Absorción de posventa</li>
              <li>• Rentabilidad por línea</li>
              <li>• Análisis de costos operativos</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
