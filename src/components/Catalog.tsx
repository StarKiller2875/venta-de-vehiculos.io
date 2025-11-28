// src/components/Catalog.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Sidebar } from './Sidebar';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, Calendar, Zap, Plus, Filter, X, Info, Package } from 'lucide-react';
import { Vehicle } from '../App';

type CatalogProps = {
  onNavigate: (view: 'dashboard' | 'catalog' | 'cart' | 'admin' | 'detail') => void;
  onViewVehicle: (vehicle: Vehicle) => void;
  onLogout: () => void;
  cartItemsCount: number;
};

const DEFAULT_IMAGE = "https://images.unsplash.com/photo-1584345604476-8ec5e12e42dd?q=80&w=1000&auto=format&fit=crop";

export function Catalog({ onNavigate, onViewVehicle, onLogout, cartItemsCount }: CatalogProps) {
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [search, setSearch] = useState("");
  const [hideOutOfStock, setHideOutOfStock] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  const [newVehicle, setNewVehicle] = useState({
    brand: 'Ford', 
    model: '', 
    year: new Date().getFullYear(), 
    price: '' as number | string,      
    horsepower: '' as number | string,
    stock: '' as number | string,
    description: '', 
    image: ''
  });

  const loadVehicles = async () => {
    try {
      const res = await axios.get("http://localhost:3001/vehicles");
      setVehicles(res.data);
    } catch (error) {
      console.error("Error cargando vehículos:", error);
    }
  };

  useEffect(() => {
    loadVehicles();
  }, []);

  const markAsSold = async (id: number) => {
    if (!window.confirm("¿Seguro que quieres vender este vehículo?")) return;
    try {
      await axios.post(`http://localhost:3001/vehicles/sell/${id}`);
      loadVehicles();
    } catch (error) {
      console.error("Error al vender vehículo:", error);
      alert("No se pudo realizar la venta.");
    }
  };

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    if(!newVehicle.model || Number(newVehicle.price) <= 0) {
      alert("Por favor ingresa un Modelo y un Precio válido.");
      return;
    }
    try {
      const payload = {
          ...newVehicle,
          brand: 'Ford',
          year: Number(newVehicle.year),
          price: Number(newVehicle.price),
          horsepower: Number(newVehicle.horsepower),
          stock: Number(newVehicle.stock) || 1,
          image: newVehicle.image 
      };
      await axios.post("http://localhost:3001/vehicles", payload);
      setIsAdding(false);
      setNewVehicle({ 
        brand: 'Ford', model: '', year: 2025, price: '', 
        horsepower: '', stock: '', description: '', image: '' 
      });
      loadVehicles();
    } catch (error) {
      console.error("Error creando vehículo:", error);
      alert("Error al guardar.");
    }
  };

  const filtered = vehicles.filter(v => {
    const matchesSearch = `${v.brand} ${v.model} ${v.year}`.toLowerCase().includes(search.toLowerCase());
    const matchesStockFilter = hideOutOfStock ? v.stock > 0 : true; 
    return matchesSearch && matchesStockFilter;
  });

  return (
    <div className="flex min-h-screen bg-slate-50 relative">
      <Sidebar currentView="catalog" onNavigate={onNavigate} onLogout={onLogout} cartItemsCount={cartItemsCount} />

      <div className="flex-1 p-8">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-6">
            <div>
                <h1 className="text-slate-900 text-2xl font-bold">Catálogo Ford</h1>
                <p className="text-slate-600">Gestión de inventario</p>
            </div>
            
            <Button 
                onClick={() => setIsAdding(true)} 
                className="bg-slate-900 hover:bg-slate-800 text-white gap-2 shadow-md px-6"
            >
                <Plus size={20}/> Nuevo Vehículo
            </Button>
        </div>

        {/* SEARCH & FILTERS */}
        <Card className="p-6 mb-8">
          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex-1 relative min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Buscar modelo o año..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>
            
            <div className="flex items-center gap-2 border p-2 rounded-md bg-white hover:bg-slate-50 transition cursor-pointer" onClick={() => setHideOutOfStock(!hideOutOfStock)}>
                <Filter className={`transition ${hideOutOfStock ? 'text-blue-600' : 'text-slate-400'}`} size={18} />
                <label className="text-sm text-slate-700 cursor-pointer select-none flex items-center gap-2">
                    <input 
                        type="checkbox" 
                        checked={hideOutOfStock} 
                        onChange={(e) => setHideOutOfStock(e.target.checked)}
                        className="w-4 h-4 accent-blue-600 cursor-pointer"
                    />
                    Ocultar Agotados
                </label>
            </div>
          </div>
        </Card>

        {/* MODAL FORMULARIO */}
        {isAdding && (
            <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-4">
                <Card className="w-full max-w-lg p-6 bg-white shadow-2xl relative">
                    <button 
                        onClick={() => setIsAdding(false)} 
                        className="absolute top-4 right-4 text-slate-400 hover:text-red-500 transition"
                    >
                        <X size={24} />
                    </button>
                    
                    <h2 className="text-xl font-bold mb-1">Agregar Nuevo Ford</h2>
                    <p className="text-slate-500 text-sm mb-5">Ingresa los detalles del vehículo.</p>
                    
                    <form onSubmit={handleCreate} className="space-y-4">
                        <div className="space-y-1">
                            <label className="text-xs font-semibold text-slate-500">Modelo</label>
                            <Input placeholder="Ej. Mustang GT" value={newVehicle.model} onChange={e => setNewVehicle({...newVehicle, model: e.target.value})} required />
                        </div>
                        
                        <div className="grid grid-cols-4 gap-3">
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-slate-500">Año</label>
                                <Input type="number" value={newVehicle.year} onChange={e => setNewVehicle({...newVehicle, year: Number(e.target.value)})} />
                            </div>
                            <div className="space-y-1 col-span-2">
                                <label className="text-xs font-semibold text-slate-500">Precio ($)</label>
                                <Input type="number" placeholder="0.00" value={newVehicle.price} onChange={e => setNewVehicle({...newVehicle, price: e.target.value})} />
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-slate-500">HP</label>
                                <Input type="number" placeholder="0" value={newVehicle.horsepower} onChange={e => setNewVehicle({...newVehicle, horsepower: e.target.value})} />
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                             <div className="space-y-1">
                                <label className="text-xs font-semibold text-slate-500">Stock Inicial</label>
                                <div className="relative">
                                    <Package className="absolute left-2 top-1/2 -translate-y-1/2 text-slate-400 size-4"/>
                                    <Input 
                                        type="number" 
                                        placeholder="1" 
                                        className="pl-8"
                                        value={newVehicle.stock} 
                                        onChange={e => setNewVehicle({...newVehicle, stock: e.target.value})} 
                                    />
                                </div>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-semibold text-slate-500">URL Imagen</label>
                                <Input 
                                    placeholder="http://..." 
                                    value={newVehicle.image} 
                                    onChange={e => setNewVehicle({...newVehicle, image: e.target.value})} 
                                />
                            </div>
                        </div>

                        <div className="space-y-1">
                             <label className="text-xs font-semibold text-slate-500">Descripción</label>
                            <textarea 
                                className="w-full p-2 border border-slate-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-slate-900" 
                                placeholder="Detalles del vehículo..." 
                                rows={3}
                                value={newVehicle.description}
                                onChange={e => setNewVehicle({...newVehicle, description: e.target.value})}
                            />
                        </div>

                        <div className="flex gap-2 justify-end pt-4 border-t">
                            <Button type="button" variant="outline" onClick={() => setIsAdding(false)}>Cancelar</Button>
                            <Button type="submit" className="bg-slate-900 text-white hover:bg-slate-800">Guardar Ford</Button>
                        </div>
                    </form>
                </Card>
            </div>
        )}

        {/* GRID DE VEHÍCULOS */}
        <div className="grid grid-cols-3 xl:grid-cols-4 gap-6 pb-10">
          {filtered.map(vehicle => (
            <Card key={vehicle.id} className="shadow-sm hover:shadow-lg transition flex flex-col h-full overflow-hidden border-slate-200 rounded-lg font-sans group">
              <div className="relative w-full bg-slate-200 overflow-hidden" style={{ height: '160px' }}>
                <img
                  src={vehicle.image || DEFAULT_IMAGE}
                  alt={vehicle.model}
                  onError={(e) => { e.currentTarget.src = DEFAULT_IMAGE; }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  className={`transition duration-500 ${vehicle.stock === 0 ? 'grayscale opacity-70' : 'group-hover:scale-105'}`}
                />
                {vehicle.stock === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] z-10">
                     <span className="border-2 border-white bg-slate-700 text-white px-3 py-1 rounded font-bold text-xs transform -rotate-12 shadow-xl">
                        AGOTADO
                     </span>
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col flex-1">
                <div className="flex justify-between items-start mb-2">
                    <div>
                        <p className="text-blue-600 text-[10px] font-bold uppercase tracking-wider mb-0.5">{vehicle.brand}</p>
                        <h3 className="text-slate-900 text-lg font-bold leading-tight truncate">{vehicle.model}</h3>
                    </div>
                </div>
                
                <p className="text-slate-500 text-xs line-clamp-2 mb-3 flex-1">
                    {vehicle.description || "Sin descripción disponible."}
                </p>

                <div className="flex gap-2 mb-4 text-xs font-medium">
                  <div className="flex items-center gap-1 text-slate-700 bg-slate-100 px-2 py-1 rounded-full">
                    <Zap className="size-3 text-amber-500" />
                    <span>{vehicle.horsepower} HP</span>
                  </div>

                  <div className="flex items-center gap-1 text-slate-700 bg-slate-100 px-2 py-1 rounded-full">
                    <Calendar className="size-3 text-blue-500" />
                    <span>{vehicle.year}</span>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 mt-auto">
                  <p className="text-slate-900 text-xl font-bold mb-3">${Number(vehicle.price).toLocaleString()}</p>
                  <div className="grid grid-cols-2 gap-2">
                    <Button
                        variant="outline"
                        className="h-9 text-xs border-slate-300 text-slate-700 hover:bg-slate-50"
                        onClick={() => { onViewVehicle(vehicle); onNavigate('detail'); }}
                    >
                        <Info className="mr-1 size-3.5" /> Más Info
                    </Button>

                    {vehicle.stock > 0 ? (
                        <Button
                            className="h-9 text-xs bg-slate-900 text-white hover:bg-slate-800"
                            onClick={() => markAsSold(vehicle.id)}
                        >
                            Vender
                        </Button>
                    ) : (
                        <Button
                            className="h-9 text-xs bg-slate-100 text-slate-400 cursor-not-allowed"
                            disabled
                        >
                            Agotado
                        </Button>
                    )}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
