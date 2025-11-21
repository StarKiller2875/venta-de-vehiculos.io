import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft, Zap, Gauge, Fuel, Settings, ShoppingCart, Check } from 'lucide-react';
import { Vehicle } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

type VehicleDetailProps = {
  vehicle: Vehicle;
  onNavigate: (view: 'dashboard' | 'catalog' | 'cart' | 'admin') => void;
  onAddToCart: (vehicle: Vehicle) => void;
  onLogout: () => void;
  cartItemsCount: number;
};

export function VehicleDetail({ vehicle, onNavigate, onAddToCart, onLogout, cartItemsCount }: VehicleDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [added, setAdded] = useState(false);

  const handleAddToCart = () => {
    onAddToCart(vehicle);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentView="catalog" onNavigate={onNavigate} onLogout={onLogout} cartItemsCount={cartItemsCount} />
      
      <div className="flex-1 p-8">
        {/* Back Button */}
        <Button
          onClick={() => onNavigate('catalog')}
          variant="ghost"
          className="mb-6 text-slate-600 hover:text-slate-900"
        >
          <ArrowLeft className="size-4 mr-2" />
          Volver al catálogo
        </Button>

        <div className="grid grid-cols-2 gap-8">
          {/* Left Column - Images */}
          <div>
            <Card className="bg-white border-0 shadow-sm overflow-hidden mb-4">
              <div className="aspect-video bg-slate-100">
                <ImageWithFallback
                  src={vehicle.gallery[selectedImage]}
                  alt={`${vehicle.brand} ${vehicle.model}`}
                  className="w-full h-full object-cover"
                />
              </div>
            </Card>

            {/* Gallery Thumbnails */}
            <div className="grid grid-cols-3 gap-4">
              {vehicle.gallery.map((img, idx) => (
                <Card
                  key={idx}
                  className={`cursor-pointer overflow-hidden transition-all ${
                    selectedImage === idx
                      ? 'ring-2 ring-blue-600 shadow-md'
                      : 'hover:shadow-md'
                  }`}
                  onClick={() => setSelectedImage(idx)}
                >
                  <div className="aspect-video bg-slate-100">
                    <ImageWithFallback
                      src={img}
                      alt={`Vista ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Details */}
          <div>
            <Card className="bg-white border-0 shadow-sm p-8">
              <div className="mb-6">
                <p className="text-blue-600 mb-2">{vehicle.brand}</p>
                <h1 className="text-slate-900 mb-4">{vehicle.model}</h1>
                <p className="text-slate-600 leading-relaxed">{vehicle.description}</p>
              </div>

              {/* Price */}
              <div className="bg-slate-50 rounded-2xl p-6 mb-6">
                <p className="text-slate-600 mb-2">Precio Total</p>
                <h2 className="text-slate-900">${vehicle.price.toLocaleString()}</h2>
                <p className="text-slate-500 text-sm mt-2">IVA incluido</p>
              </div>

              {/* Specs Grid */}
              <div className="mb-6">
                <h3 className="text-slate-900 mb-4">Especificaciones Técnicas</h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-blue-100 p-2 rounded-lg">
                        <Zap className="size-5 text-blue-600" />
                      </div>
                      <p className="text-slate-600 text-sm">Potencia</p>
                    </div>
                    <p className="text-slate-900">{vehicle.specs.horsepower} HP</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-green-100 p-2 rounded-lg">
                        <Gauge className="size-5 text-green-600" />
                      </div>
                      <p className="text-slate-600 text-sm">Aceleración</p>
                    </div>
                    <p className="text-slate-900">{vehicle.specs.acceleration}</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-orange-100 p-2 rounded-lg">
                        <Settings className="size-5 text-orange-600" />
                      </div>
                      <p className="text-slate-600 text-sm">Transmisión</p>
                    </div>
                    <p className="text-slate-900 text-sm">{vehicle.specs.transmission}</p>
                  </div>

                  <div className="bg-slate-50 rounded-xl p-4">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="bg-purple-100 p-2 rounded-lg">
                        <Fuel className="size-5 text-purple-600" />
                      </div>
                      <p className="text-slate-600 text-sm">Combustible</p>
                    </div>
                    <p className="text-slate-900 text-sm">{vehicle.specs.fuelType}</p>
                  </div>
                </div>
              </div>

              {/* Additional Info */}
              <div className="bg-blue-50 rounded-xl p-4 mb-6">
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="text-slate-600 mb-1">Motor</p>
                    <p className="text-slate-900">{vehicle.specs.engine}</p>
                  </div>
                  <div>
                    <p className="text-slate-600 mb-1">Vel. Máxima</p>
                    <p className="text-slate-900">{vehicle.specs.topSpeed}</p>
                  </div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-4">
                <Button
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white h-12"
                  disabled={added}
                >
                  {added ? (
                    <>
                      <Check className="size-5 mr-2" />
                      Agregado al Carrito
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="size-5 mr-2" />
                      Agregar al Carrito
                    </>
                  )}
                </Button>
                <Button
                  onClick={() => onNavigate('cart')}
                  variant="outline"
                  className="px-8 h-12 border-slate-300"
                >
                  Ver Carrito
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
