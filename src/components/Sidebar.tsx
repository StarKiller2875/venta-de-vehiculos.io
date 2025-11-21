import { Car, LayoutDashboard, ShoppingCart, Settings, LogOut, Package } from 'lucide-react';
import { Button } from './ui/button';

type SidebarProps = {
  currentView: string;
  onNavigate: (view: 'dashboard' | 'catalog' | 'cart' | 'admin') => void;
  onLogout: () => void;
  cartItemsCount?: number;
};

export function Sidebar({ currentView, onNavigate, onLogout, cartItemsCount = 0 }: SidebarProps) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
    { id: 'catalog', label: 'Catálogo', icon: Car },
    { id: 'cart', label: 'Carrito', icon: ShoppingCart, badge: cartItemsCount },
    { id: 'admin', label: 'Administración', icon: Settings },
  ];

  return (
    <div className="w-64 bg-slate-950 min-h-screen flex flex-col border-r border-slate-800">
      {/* Logo */}
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-500 rounded-xl flex items-center justify-center">
            <Car className="size-6 text-white" />
          </div>
          <div>
            <h2 className="text-white">LUXE</h2>
            <p className="text-slate-500 text-xs">MOTORS</p>
          </div>
        </div>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => {
          const Icon = item.icon;
          const isActive = currentView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id as any)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                isActive
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/25'
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              <Icon className="size-5" />
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && item.badge > 0 && (
                <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      {/* Logout Button */}
      <div className="p-4 border-t border-slate-800">
        <Button
          onClick={onLogout}
          variant="ghost"
          className="w-full justify-start text-slate-400 hover:text-white hover:bg-slate-900"
        >
          <LogOut className="size-5 mr-3" />
          Cerrar Sesión
        </Button>
      </div>
    </div>
  );
}
