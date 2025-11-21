import { Sidebar } from './Sidebar';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Trash2, Plus, Minus, CreditCard, ShoppingBag } from 'lucide-react';
import { CartItem } from '../App';
import { ImageWithFallback } from './figma/ImageWithFallback';

type CartProps = {
  items: CartItem[];
  onNavigate: (view: 'dashboard' | 'catalog' | 'cart' | 'admin') => void;
  onRemoveItem: (vehicleId: number) => void;
  onUpdateQuantity: (vehicleId: number, quantity: number) => void;
  onLogout: () => void;
};

export function Cart({ items, onNavigate, onRemoveItem, onUpdateQuantity, onLogout }: CartProps) {
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const tax = subtotal * 0.16;
  const total = subtotal + tax;

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentView="cart" onNavigate={onNavigate} onLogout={onLogout} cartItemsCount={items.reduce((sum, item) => sum + item.quantity, 0)} />
      
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-slate-900 mb-2">Carrito de Compra</h1>
          <p className="text-slate-600">
            {items.length === 0
              ? 'Tu carrito está vacío'
              : `${items.length} ${items.length === 1 ? 'vehículo' : 'vehículos'} en tu carrito`}
          </p>
        </div>

        {items.length === 0 ? (
          <Card className="bg-white border-0 shadow-sm p-16 text-center">
            <ShoppingBag className="size-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-slate-900 mb-2">Tu carrito está vacío</h3>
            <p className="text-slate-600 mb-6">Explora nuestro catálogo y encuentra tu vehículo ideal</p>
            <Button
              onClick={() => onNavigate('catalog')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
            >
              Ver Catálogo
            </Button>
          </Card>
        ) : (
          <div className="grid grid-cols-3 gap-6">
            {/* Cart Items */}
            <div className="col-span-2 space-y-4">
              {items.map((item) => (
                <Card key={item.id} className="bg-white border-0 shadow-sm p-6">
                  <div className="flex gap-6">
                    {/* Image */}
                    <div className="w-48 h-32 bg-slate-100 rounded-xl overflow-hidden flex-shrink-0">
                      <ImageWithFallback
                        src={item.image}
                        alt={`${item.brand} ${item.model}`}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <p className="text-slate-500 text-sm mb-1">{item.brand}</p>
                          <h3 className="text-slate-900">{item.model}</h3>
                          <p className="text-slate-600 text-sm">{item.year}</p>
                        </div>
                        <Button
                          onClick={() => onRemoveItem(item.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>

                      <div className="flex items-center justify-between">
                        {/* Quantity Controls */}
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

                        {/* Price */}
                        <div className="text-right">
                          <p className="text-slate-500 text-sm mb-1">Precio</p>
                          <p className="text-slate-900">
                            ${(item.price * item.quantity).toLocaleString()}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>

            {/* Summary */}
            <div>
              <Card className="bg-white border-0 shadow-sm p-6 sticky top-8">
                <h3 className="text-slate-900 mb-6">Resumen de Compra</h3>

                <div className="space-y-4 mb-6">
                  <div className="flex justify-between text-slate-600">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-600">
                    <span>IVA (16%)</span>
                    <span>${tax.toLocaleString()}</span>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex justify-between">
                      <span className="text-slate-900">Total</span>
                      <span className="text-slate-900">${total.toLocaleString()}</span>
                    </div>
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white h-12 mb-3">
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

                {/* Info */}
                <div className="mt-6 p-4 bg-blue-50 rounded-xl">
                  <p className="text-slate-700 text-sm">
                    ✓ Envío gratuito
                    <br />
                    ✓ Garantía incluida
                    <br />
                    ✓ Financiamiento disponible
                  </p>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
