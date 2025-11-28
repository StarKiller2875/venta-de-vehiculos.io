// App.tsx
import { useState } from 'react';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { Catalog } from './components/Catalog';
import { AccessoriesCatalog } from './components/AccessoriesCatalog';
import { VehicleDetail } from './components/VehicleDetail';
import { Cart } from './components/Cart';
import { AdminPanel } from './components/AdminPanel';

export type Vehicle = {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  horsepower: number;
  description: string;
  image: string;
  sold: number;
  stock: number;
};

export type Accessory = {
  id: number;
  name: string;
  category: string;
  price: number;
  stock: number;
  image: string;
};

export type CartItem = {
  id: number;
  type: 'vehicle' | 'accessory';
  name: string;
  price: number;
  quantity: number;
  image: string;
  brand?: string;
  model?: string;
  year?: number;
};

export default function App() {
  const [currentView, setCurrentView] = useState<
    'login' | 'dashboard' | 'catalog' | 'accessories' | 'detail' | 'cart' | 'admin'
  >('login');

  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle | null>(null);

  const [cart, setCart] = useState<CartItem[]>([]);

  const handleLogin = () => {
    setIsAuthenticated(true);
    setCurrentView('dashboard');
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentView('login');
    setCart([]);
  };

  const handleViewVehicle = (vehicle: Vehicle) => {
    setSelectedVehicle(vehicle);
    setCurrentView('detail');
  };

  const addVehicleToCart = (vehicle: Vehicle) => {
    setCart(prev => {
      const existe = prev.find(i => i.id === vehicle.id && i.type === 'vehicle');

      if (existe) {
        return prev.map(i =>
          i.id === vehicle.id && i.type === 'vehicle'
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [
        ...prev,
        {
          id: vehicle.id,
          type: 'vehicle',
          name: `${vehicle.brand} ${vehicle.model}`,
          price: vehicle.price,
          quantity: 1,
          image: vehicle.image,
          brand: vehicle.brand,
          model: vehicle.model,
          year: vehicle.year
        }
      ];
    });
  };

  const addAccessoryToCart = (acc: Accessory) => {
    setCart(prev => {
      const existe = prev.find(i => i.id === acc.id && i.type === 'accessory');

      if (existe) {
        return prev.map(i =>
          i.id === acc.id && i.type === 'accessory'
            ? { ...i, quantity: i.quantity + 1 }
            : i
        );
      }

      return [
        ...prev,
        {
          id: acc.id,
          type: 'accessory',
          name: acc.name,
          price: acc.price,
          quantity: 1,
          image: acc.image
        }
      ];
    });
  };
  const handleRemoveFromCart = (id: number) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };
  const handleUpdateQuantity = (id: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(id);
      return;
    }
    setCart(prev =>
      prev.map(item =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  const cartItemsCount = cart.reduce((sum, i) => sum + i.quantity, 0);

  return (
    <div className="min-h-screen bg-white">

      {currentView === 'dashboard' && (
        <Dashboard
          onNavigate={setCurrentView}
          onLogout={handleLogout}
          cartItemsCount={cartItemsCount}
        />
      )}

      {currentView === 'catalog' && (
        <Catalog
          onNavigate={setCurrentView}
          onViewVehicle={handleViewVehicle}
          onAddToCart={addVehicleToCart}
          onLogout={handleLogout}
          cartItemsCount={cartItemsCount}
        />
      )}

      {currentView === 'accessories' && (
        <AccessoriesCatalog
          onNavigate={setCurrentView}
          onLogout={handleLogout}
          onAddAccessory={addAccessoryToCart}
          cartItemsCount={cartItemsCount}
        />
      )}

      {currentView === 'detail' && selectedVehicle && (
        <VehicleDetail
          vehicle={selectedVehicle}
          onAddToCart={addVehicleToCart}
          onBack={() => setCurrentView('catalog')}
        />
      )}

      {currentView === 'cart' && (
        <Cart
          items={cart}
          onNavigate={setCurrentView}
          onRemoveItem={handleRemoveFromCart}
          onUpdateQuantity={handleUpdateQuantity}
          onLogout={handleLogout}
        />
      )}

      {currentView === 'admin' && (
        <AdminPanel
          onNavigate={setCurrentView}
          onLogout={handleLogout}
          cartItemsCount={cartItemsCount}
        />
      )}
    </div>
  );
}
