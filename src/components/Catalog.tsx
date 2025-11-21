import { Sidebar } from './Sidebar';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, Calendar, Zap } from 'lucide-react';
import { vehicles } from './vehicleData';
import { Vehicle } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

type CatalogProps = {
  onNavigate: (view: 'dashboard' | 'catalog' | 'cart' | 'admin' | 'detail') => void;
  onViewVehicle: (vehicle: Vehicle) => void;
  onLogout: () => void;
  cartItemsCount: number;
};

export function Catalog({ onNavigate, onViewVehicle, onLogout, cartItemsCount }: CatalogProps) {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentView="catalog" onNavigate={onNavigate} onLogout={onLogout} cartItemsCount={cartItemsCount} />
      
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-slate-900 mb-2">Catálogo Premium</h1>
          <p className="text-slate-600">Descubre nuestra colección exclusiva de vehículos de lujo</p>
        </div>

        {/* Search Bar */}
        <Card className="p-6 bg-white border-0 shadow-sm mb-8">
          <div className="flex gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 size-5 text-slate-400" />
              <Input
                placeholder="Buscar vehículo por marca, modelo o año..."
                className="pl-10 border-slate-200"
              />
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8">
              Buscar
            </Button>
          </div>
        </Card>

        {/* Vehicle Grid */}
        <div className="grid grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <Card key={vehicle.id} className="bg-white border-0 shadow-sm hover:shadow-xl transition-all duration-300 overflow-hidden group">
              {/* Image */}
              <div className="relative h-64 bg-slate-100 overflow-hidden">
                <ImageWithFallback
                  src={vehicle.image}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  Nuevo {vehicle.year}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="mb-4">
                  <p className="text-slate-500 text-sm mb-1">{vehicle.brand}</p>
                  <h3 className="text-slate-900 mb-2">{vehicle.model}</h3>
                  <p className="text-slate-600 text-sm line-clamp-2">{vehicle.description}</p>
                </div>

                {/* Specs */}
                <div className="flex gap-4 mb-4 text-sm">
                  <div className="flex items-center gap-1 text-slate-600">
                    <Zap className="size-4 text-blue-600" />
                    <span>{vehicle.specs.horsepower} HP</span>
                  </div>
                  <div className="flex items-center gap-1 text-slate-600">
                    <Calendar className="size-4 text-blue-600" />
                    <span>{vehicle.year}</span>
                  </div>
                </div>

                {/* Price & Action */}
                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <div>
                    <p className="text-slate-500 text-xs mb-1">Precio</p>
                    <p className="text-slate-900">${vehicle.price.toLocaleString()}</p>
                  </div>
                  <Button
                    onClick={() => {
                      onViewVehicle(vehicle);
                      onNavigate('detail');
                    }}
                    className="bg-slate-900 hover:bg-slate-800 text-white"
                  >
                    Ver Más
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
