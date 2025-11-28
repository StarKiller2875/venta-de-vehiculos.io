// src/components/Cart.tsx
import { Sidebar } from './Sidebar';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Trash2, Plus, Minus, CreditCard, ShoppingBag } from 'lucide-react';
import { CartItem } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';
import axios from 'axios';

type CartProps = {
  items: CartItem[];
  onNavigate: (view: 'dashboard' | 'catalog' | 'cart' | 'admin') => void;
  onRemoveItem: (id: number) => void;
  onUpdateQuantity: (id: number, quantity: number) => void;
  onLogout: () => void;
};

export function Cart({ items, onNavigate, onRemoveItem, onUpdateQuantity, onLogout }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal;

  const handleCheckout = async () => {
    if (items.length === 0) return;

    const confirmPurchase = window.confirm("¿Deseas finalizar la compra?");
    if (!confirmPurchase) return;

    try {
      for (const item of items) {
        if (item.type === "vehicle") {
          await axios.put(`http://localhost:3001/vehicles/sell/${item.id}`);
        } else if (item.type === "accessory") {
          await axios.post(`http://localhost:3001/accessories/buy/${item.id}`, { quantity: item.quantity });
        }
      }

      alert("Compra realizada correctamente!");
      items.forEach(item => onRemoveItem(item.id));

      onNavigate("catalog");
    } catch (error: any) {
      console.error("Error al finalizar compra:", error);
      alert(error.response?.data?.error || "No se pudo completar la compra.");
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar
        currentView="cart"
        onNavigate={onNavigate}
        onLogout={onLogout}
        cartItemsCount={items.reduce((sum, item) => sum + item.quantity, 0)}
      />

      <div className="flex-1 p-8">
        <div className="mb-8">
          <h1 className="text-slate-900 mb-2">Carrito de Compra</h1>
          <p className="text-slate-600">
            {items.length === 0
              ? 'Tu carrito está vacío'
              : `${items.length} ${items.length === 1 ? 'artículo' : 'artículos'} en tu carrito`}
          </p>
        </div>

        {items.length === 0 ? (
          <Card className="bg-white border-0 shadow-sm p-16 text-center">
            <ShoppingBag className="size-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-slate-900 mb-2">Tu carrito está vacío</h3>
            <Button
              onClick={() => onNavigate('catalog')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Ver Catálogo
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-3 gap-6">

            <div className="col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="bg-white border-0 shadow-sm p-6">
                  <div className="flex gap-6">

                    <div className="w-48 h-32 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="text-slate-900 font-bold">{item.name}</h3>

                          {item.type === 'vehicle' && (
                            <>
                              <p className="text-slate-500 text-sm">{item.brand}</p>
                              <p className="text-slate-600 text-sm">{item.year}</p>
                            </>
                          )}
                        </div>

                        <Button
                          onClick={() => onRemoveItem(item.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:bg-red-50"
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <p className="text-slate-600 text-sm">Cantidad:</p>
                          <div className="flex items-center gap-2 bg-slate-100 rounded-lg p-1">
                            <Button
                              onClick={() => onUpdateQuantity(item.id, item.quantity - 1)}
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <Minus className="size-4" />
                            </Button>
                            <span className="text-slate-900 w-8 text-center">{item.quantity}</span>
                            <Button
                              onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                              variant="ghost"
                              size="sm"
                              className="h-8 w-8 p-0"
                            >
                              <Plus className="size-4" />
                            </Button>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-sm text-slate-500">Precio</p>
                          <p className="text-slate-900 font-bold">
                            ${(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            <div>
              <Card className="bg-white border-0 shadow-sm p-6 sticky top-8">
                <h3 className="text-slate-900 mb-6">Resumen de Compra</h3>
                <div className="space-y-4 mb-6">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between font-bold">
                      <span>Total</span>
                      <span>${total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 mb-3" onClick={handleCheckout}>
                  <CreditCard className="size-5 mr-2" />
                  Finalizar Compra
                </Button>

                <Button
                  onClick={() => onNavigate('catalog')}
                  variant="outline"
                  className="w-full border-slate-300"
                >
                  Continuar Comprando
                </Button>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
