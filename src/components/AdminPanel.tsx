import { useState } from 'react';
import { Sidebar } from './Sidebar';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Plus, Edit2, Trash2, Package } from 'lucide-react';
import { vehicles } from './vehicleData';
import { ImageWithFallback } from './figma/ImageWithFallback';

type AdminPanelProps = {
  onNavigate: (view: 'dashboard' | 'catalog' | 'cart' | 'admin') => void;
  onLogout: () => void;
  cartItemsCount: number;
};

export function AdminPanel({ onNavigate, onLogout, cartItemsCount }: AdminPanelProps) {
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState<number | null>(null);

  const handleEdit = (id: number) => {
    setEditingId(id);
    setShowForm(true);
  };

  const handleDelete = (id: number) => {
    if (confirm('¿Estás seguro de eliminar este vehículo?')) {
      // Delete logic here
      console.log('Delete vehicle:', id);
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      <Sidebar currentView="admin" onNavigate={onNavigate} onLogout={onLogout} cartItemsCount={cartItemsCount} />
      
      <div className="flex-1 p-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-slate-900 mb-2">Panel de Administración</h1>
            <p className="text-slate-600">Gestiona el inventario de vehículos</p>
          </div>
          <Button
            onClick={() => {
              setShowForm(true);
              setEditingId(null);
            }}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="size-5 mr-2" />
            Agregar Vehículo
          </Button>
        </div>

        {showForm ? (
          /* Add/Edit Form */
          <Card className="bg-white border-0 shadow-sm p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-slate-900">
                {editingId ? 'Editar Vehículo' : 'Nuevo Vehículo'}
              </h2>
              <Button
                onClick={() => {
                  setShowForm(false);
                  setEditingId(null);
                }}
                variant="ghost"
              >
                Cancelar
              </Button>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="brand">Marca</Label>
                  <Input id="brand" placeholder="Tesla, BMW, Mercedes..." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="model">Modelo</Label>
                  <Input id="model" placeholder="Model S, X5, AMG GT..." />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="year">Año</Label>
                  <Input id="year" type="number" placeholder="2024" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="price">Precio (USD)</Label>
                  <Input id="price" type="number" placeholder="135990" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Descripción</Label>
                <Textarea
                  id="description"
                  placeholder="Describe las características principales del vehículo..."
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="engine">Motor</Label>
                  <Input id="engine" placeholder="V8 Twin-Turbo 4.4L" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="transmission">Transmisión</Label>
                  <Input id="transmission" placeholder="Automática 8 velocidades" />
                </div>
              </div>

              <div className="grid grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="horsepower">Potencia (HP)</Label>
                  <Input id="horsepower" type="number" placeholder="617" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="acceleration">Aceleración</Label>
                  <Input id="acceleration" placeholder="0-100 km/h en 3.8s" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fuelType">Combustible</Label>
                  <Input id="fuelType" placeholder="Gasolina Premium" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image">URL de Imagen</Label>
                <Input id="image" placeholder="https://..." />
              </div>

              <div className="flex gap-4 pt-4">
                <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white">
                  {editingId ? 'Actualizar Vehículo' : 'Agregar Vehículo'}
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setShowForm(false);
                    setEditingId(null);
                  }}
                >
                  Cancelar
                </Button>
              </div>
            </form>
          </Card>
        ) : null}

        {/* Inventory Stats */}
        <div className="grid grid-cols-4 gap-6 mb-8">
          <Card className="p-6 bg-white border-0 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-blue-100 p-3 rounded-xl">
                <Package className="size-6 text-blue-600" />
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-1">Total Inventario</p>
            <h3 className="text-slate-900">{vehicles.length}</h3>
          </Card>

          <Card className="p-6 bg-white border-0 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-green-100 p-3 rounded-xl">
                <Package className="size-6 text-green-600" />
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-1">En Stock</p>
            <h3 className="text-slate-900">{vehicles.length}</h3>
          </Card>

          <Card className="p-6 bg-white border-0 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-orange-100 p-3 rounded-xl">
                <Package className="size-6 text-orange-600" />
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-1">Valor Total</p>
            <h3 className="text-slate-900">
              ${vehicles.reduce((sum, v) => sum + v.price, 0).toLocaleString()}
            </h3>
          </Card>

          <Card className="p-6 bg-white border-0 shadow-sm">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-purple-100 p-3 rounded-xl">
                <Package className="size-6 text-purple-600" />
              </div>
            </div>
            <p className="text-slate-600 text-sm mb-1">Marcas</p>
            <h3 className="text-slate-900">
              {new Set(vehicles.map((v) => v.brand)).size}
            </h3>
          </Card>
        </div>

        {/* Vehicle List */}
        <Card className="bg-white border-0 shadow-sm overflow-hidden">
          <div className="p-6 border-b border-slate-100">
            <h2 className="text-slate-900">Inventario de Vehículos</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b border-slate-100">
                  <th className="text-left p-4 text-slate-600">Imagen</th>
                  <th className="text-left p-4 text-slate-600">Marca</th>
                  <th className="text-left p-4 text-slate-600">Modelo</th>
                  <th className="text-left p-4 text-slate-600">Año</th>
                  <th className="text-left p-4 text-slate-600">Precio</th>
                  <th className="text-left p-4 text-slate-600">Potencia</th>
                  <th className="text-right p-4 text-slate-600">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {vehicles.map((vehicle) => (
                  <tr key={vehicle.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="p-4">
                      <div className="w-20 h-14 bg-slate-100 rounded-lg overflow-hidden">
                        <ImageWithFallback
                          src={vehicle.image}
                          alt={vehicle.model}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </td>
                    <td className="p-4 text-slate-900">{vehicle.brand}</td>
                    <td className="p-4 text-slate-900">{vehicle.model}</td>
                    <td className="p-4 text-slate-600">{vehicle.year}</td>
                    <td className="p-4 text-slate-900">${vehicle.price.toLocaleString()}</td>
                    <td className="p-4 text-slate-600">{vehicle.specs.horsepower} HP</td>
                    <td className="p-4">
                      <div className="flex gap-2 justify-end">
                        <Button
                          onClick={() => handleEdit(vehicle.id)}
                          variant="ghost"
                          size="sm"
                          className="text-blue-600 hover:text-blue-700 hover:bg-blue-50"
                        >
                          <Edit2 className="size-4" />
                        </Button>
                        <Button
                          onClick={() => handleDelete(vehicle.id)}
                          variant="ghost"
                          size="sm"
                          className="text-red-600 hover:text-red-700 hover:bg-red-50"
                        >
                          <Trash2 className="size-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      </div>
    </div>
  );
}
