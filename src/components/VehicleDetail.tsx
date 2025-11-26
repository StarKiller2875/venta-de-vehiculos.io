import { useState } from 'react';
import { ArrowLeft, Calendar, Zap, CheckCircle, FileText, Gauge } from 'lucide-react';
import { Button } from './ui/button';
import { Vehicle } from '../App';

const DEFAULT_IMAGE = "https://via.placeholder.com/300x200?text=Sin+imagen";

interface Props {
  vehicle: Vehicle | null;
  onBack: () => void;
}

export const VehicleDetail = ({ vehicle, onBack }: Props) => {
  const [imageError, setImageError] = useState(false);

  if (!vehicle) return null;

  return (
    <div className="p-4">
      <Button
        onClick={onBack}
        className="mb-4 flex items-center gap-2"
      >
        <ArrowLeft size={18} /> Regresar
      </Button>
      <div className="flex flex-col items-center text-center w-full">
        <div
          className="w-full flex justify-center"
          style={{
            maxWidth: "720px",
            maxHeight: "720px",
            overflow: "hidden",
            borderRadius: "12px",
          }}
        >
          <img
            src={imageError ? DEFAULT_IMAGE : vehicle.image}
            alt={vehicle.model}
            onError={() => setImageError(true)}
            className="object-contain w-full h-full"
          />
        </div>
        <h2 className="text-3xl font-bold mt-4">
          {vehicle.brand} {vehicle.model}
        </h2>

        {vehicle.sold === 1 && (
          <span className="mt-2 px-4 py-1 text-sm font-semibold bg-red-500 text-white rounded-full">
            Vendido
          </span>
        )}
        <div className="mt-4 space-y-2 text-lg text-gray-700">

          <p className="flex justify-center items-center gap-2">
            <Calendar size={18} /> Año: {vehicle.year}
          </p>

          <p className="flex justify-center items-center gap-2">
            <Zap size={18} /> Precio: ${vehicle.price}
          </p>

          <p className="flex justify-center items-center gap-2">
            <Gauge size={18} /> Caballos de fuerza: {vehicle.horsepower} HP
          </p>

        </div>
{vehicle.description && (
  <div className="mt-6 w-[350px] mx-auto bg-white shadow-md rounded-xl p-4 text-left break-words">
    <p className="flex items-start gap-2 text-gray-800 leading-relaxed">
      <FileText size={20} className="mt-1 flex-shrink-0" />
      {vehicle.description}
    </p>
  </div>
)}


      </div>
    </div>
  );
};
