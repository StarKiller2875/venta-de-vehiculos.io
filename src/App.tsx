import { useState } from 'react';
import { Login } from './components/Login';
import { Dashboard } from './components/Dashboard';
import { Catalog } from './components/Catalog';
import { VehicleDetail } from './components/VehicleDetail';
import { Cart } from './components/Cart';
import { AdminPanel } from './components/AdminPanel';

export type Vehicle = {
  id: number;
  brand: string;
  model: string;
  year: number;
  price: number;
  image: string;
  description: string;
  specs: {
    engine: string;
    transmission: string;
    horsepower: number;
    acceleration: string;
    topSpeed: string;
    fuelType: string;
  };
  gallery: string[];
};

export type CartItem = Vehicle & { quantity: number };

export default function App() {
  const [currentView, setCurrentView] = useState<'login' | 'dashboard' | 'catalog' | 'detail' | 'cart' | 'admin'>('login');
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

  const handleAddToCart = (vehicle: Vehicle) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === vehicle.id);
      if (existing) {
        return prev.map(item =>
          item.id === vehicle.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...vehicle, quantity: 1 }];
    });
  };

  const handleRemoveFromCart = (vehicleId: number) => {
    setCart(prev => prev.filter(item => item.id !== vehicleId));
  };

  const handleUpdateQuantity = (vehicleId: number, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveFromCart(vehicleId);
    } else {
      setCart(prev =>
        prev.map(item =>
          item.id === vehicleId ? { ...item, quantity } : item
        )
      );
    }
  };

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="min-h-screen bg-white">
      {currentView === 'dashboard' && (
        <Dashboard
          onNavigate={setCurrentView}
          onLogout={handleLogout}
          cartItemsCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        />
      )}
      {currentView === 'catalog' && (
        <Catalog
          onNavigate={setCurrentView}
          onViewVehicle={handleViewVehicle}
          onLogout={handleLogout}
          cartItemsCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        />
      )}
      {currentView === 'detail' && selectedVehicle && (
        <VehicleDetail
          vehicle={selectedVehicle}
          onNavigate={setCurrentView}
          onAddToCart={handleAddToCart}
          onLogout={handleLogout}
          cartItemsCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
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
          cartItemsCount={cart.reduce((sum, item) => sum + item.quantity, 0)}
        />
      )}
    </div>
  );
}
