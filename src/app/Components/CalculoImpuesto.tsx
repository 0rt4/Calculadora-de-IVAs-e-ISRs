// CalculoImpuesto.tsx
"use client"
import React from "react";

interface CalculoProps {
    label1: string;
    impuesto: number;
    impuestoCalculado: number;
    cambioPorcentaje: (value: number) => void;
    active: boolean;
    setActive: (active: boolean) => void;
}

export function CalculoImpuesto({ 
    label1, 
    impuesto, 
    cambioPorcentaje, 
    impuestoCalculado,
    active,
    setActive
}: CalculoProps) {

    function handleClick() {
        setActive(!active);
    }

    return (
        <div className="flex items-center gap-2 my-2">
            <button 
                onClick={handleClick}
                className={`px-4 py-2 rounded transition-colors
                    ${active ? 'bg-green-500 text-white' : 'bg-gray-300 text-black'}`}
            >
                {label1}
            </button>

            <input 
                type="number" 
                placeholder="%" 
                disabled={!active}
                value={impuesto}
                onChange={(e) => cambioPorcentaje(Number(e.target.value))}
                className={`p-2 border rounded text-black w-20
                    ${active ? 'bg-white' : 'bg-gray-200 cursor-not-allowed'}`}
            />
            
            <p className={`${active ? 'text-black' : 'text-gray-400'}`}>
                $ {active ? impuestoCalculado.toFixed(2) : '0.00'}
            </p>
        </div>
    );
}