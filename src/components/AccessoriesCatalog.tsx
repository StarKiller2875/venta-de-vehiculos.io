// src/components/AccessoriesCatalog.tsx
import { useEffect, useState } from 'react';
import axios from 'axios';
import { Sidebar } from './Sidebar';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Search, Package, Filter } from 'lucide-react';
import { Accessory } from '../App';

type Props = {
  onNavigate: (view: 'dashboard' | 'catalog' | 'accessories' | 'cart' | 'admin' | 'detail') => void;
  onLogout: () => void;
  onAddAccessory: (item: Accessory) => void;
  cartItemsCount: number;
};

const DEFAULT_IMAGE = "https://via.placeholder.com/300?text=Accesorio";

export function AccessoriesCatalog({ onNavigate, onLogout, onAddAccessory, cartItemsCount }: Props) {

  const [items, setItems] = useState<Accessory[]>([]);
  const [search, setSearch] = useState("");
  const [hideOutOfStock, setHideOutOfStock] = useState(false);

  const loadItems = async () => {
    try {
      const res = await axios.get("http://localhost:3001/accessories");
      setItems(res.data);
    } catch (error) {
      console.error("Error cargando accesorios:", error);
    }
  };

  useEffect(() => { loadItems(); }, []);

  const filtered = items.filter(v => {
    const matchesSearch = `${v.name} ${v.category}`.toLowerCase().includes(search.toLowerCase());
    const matchesStock = hideOutOfStock ? v.stock > 0 : true;
    return matchesSearch && matchesStock;
  });

  const handleBuy = async (item: Accessory) => {
    const confirmPurchase = window.confirm(`¿Está seguro que desea comprar "${item.name}"?`);
    if (!confirmPurchase) return;

    try {
      // Registrar venta directamente
      await axios.post(`http://localhost:3001/accessories/buy/${item.id}`, { quantity: 1 });
      alert("Compra realizada correctamente!");
      loadItems(); // Recargar stock actualizado
    } catch (error: any) {
      console.error("Error al comprar accesorio:", error);
      alert(error.response?.data?.error || "No se pudo completar la compra.");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar 
        currentView="accessories" 
        onNavigate={onNavigate} 
        onLogout={onLogout} 
        cartItemsCount={cartItemsCount} 
      />
      <div className="flex-1 p-8">
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-slate-900 text-2xl font-bold">Accesorios y Refacciones</h1>
            <p className="text-slate-600">Gestión de productos extra</p>
          </div>
        </div>

        <Card className="p-6 mb-8">
          <div className="flex gap-4 items-center flex-wrap">
            <div className="flex-1 relative min-w-[200px]">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
              <Input
                placeholder="Buscar llantas, aceite..."
                className="pl-10"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <div 
              className="flex items-center gap-2 border p-2 rounded-md bg-white hover:bg-slate-50 transition cursor-pointer" 
              onClick={() => setHideOutOfStock(!hideOutOfStock)}
            >
              <Filter className={`${hideOutOfStock ? 'text-blue-600' : 'text-slate-400'}`} size={18} />
              <label className="text-sm text-slate-700 cursor-pointer select-none">
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

        <div className="grid grid-cols-3 xl:grid-cols-4 gap-6 pb-10">
          {filtered.map(item => (
            <Card key={item.id} className="shadow-sm hover:shadow-lg transition flex flex-col h-full overflow-hidden border-slate-200 rounded-lg group">
              <div className="relative w-full bg-slate-200 overflow-hidden" style={{ height: '160px' }}>
                <img
                  src={item.image || DEFAULT_IMAGE}
                  alt={item.name}
                  onError={(e) => { e.currentTarget.src = DEFAULT_IMAGE; }}
                  className={`w-full h-full object-cover transition duration-500 ${item.stock === 0 ? 'grayscale opacity-70' : 'group-hover:scale-105'}`}
                />
                {item.stock === 0 && (
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[2px] z-10">
                    <span className="border-2 border-white bg-slate-700 text-white px-3 py-1 rounded font-bold text-xs transform -rotate-12 shadow-xl">
                      AGOTADO
                    </span>
                  </div>
                )}
              </div>

              <div className="p-4 flex flex-col flex-1">
                <span className="inline-flex items-center text-[10px] font-medium text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded uppercase tracking-wide">
                  {item.category}
                </span>
                <h3 className="text-slate-800 text-sm font-bold leading-tight line-clamp-2 mb-2 h-10">
                  {item.name}
                </h3>
                <div className="flex items-center gap-1 text-slate-500 text-xs mb-3">
                  <Package size={14} />
                  <span className={item.stock < 5 ? 'text-orange-500 font-bold' : ''}>
                    Stock: {item.stock}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-100 mt-auto">
                  <p className="text-slate-900 text-lg font-bold mb-3">
                    ${item.price.toLocaleString()}
                  </p>

                  <div className="grid grid-cols-2 gap-2">
                    <Button
                      className="h-9 text-xs bg-slate-200 text-slate-900 hover:bg-slate-300"
                      disabled={item.stock === 0}
                      onClick={() => onAddAccessory(item)}
                    >
                      Agregar
                    </Button>

                    <Button
                      className="h-9 text-xs bg-slate-900 text-white hover:bg-slate-800"
                      disabled={item.stock === 0}
                      onClick={() => handleBuy(item)}
                    >
                      Comprar
                    </Button>
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
