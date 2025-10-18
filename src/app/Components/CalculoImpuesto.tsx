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
    const isIVA = label1 === "IVA";
    const colorClass = isIVA ? "from-blue-500 to-blue-600" : "from-purple-500 to-purple-600";
    const bgClass = isIVA ? "bg-blue-50" : "bg-purple-50";

    return (
        <div className={`${bgClass} rounded-xl p-3 sm:p-4 border-2 transition-all duration-300 ${active ? 'border-gray-300 shadow-md' : 'border-gray-200 opacity-60'}`}>
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                <div className="flex items-center gap-2 flex-wrap">
                    <button 
                        onClick={() => setActive(!active)}
                        className={`flex items-center gap-2 px-3 sm:px-4 py-2 rounded-lg font-semibold transition-all duration-300 text-sm sm:text-base ${
                            active 
                                ? `bg-gradient-to-r ${colorClass} text-white shadow-lg transform scale-105` 
                                : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
                        }`}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="sm:w-[18px] sm:h-[18px]">
                            <line x1="19" y1="5" x2="5" y2="19"></line>
                            <circle cx="6.5" cy="6.5" r="2.5"></circle>
                            <circle cx="17.5" cy="17.5" r="2.5"></circle>
                        </svg>
                        {label1}
                    </button>
                    
                    <div className="flex items-center gap-1 bg-white rounded-lg px-2 sm:px-3 py-2 border">
                        <input 
                            type="number" 
                            disabled={!active}
                            value={impuesto}
                            onChange={(e) => cambioPorcentaje(Number(e.target.value))}
                            className={`w-14 sm:w-16 text-center font-semibold bg-transparent outline-none text-sm sm:text-base ${
                                active ? 'text-gray-800' : 'text-gray-400'
                            }`}
                            step="0.01"
                        />
                        <span className="text-gray-500 font-medium text-sm">%</span>
                    </div>
                </div>
            </div>
            
            <div className={`flex items-center justify-between bg-white rounded-lg p-2 sm:p-3 ${active ? 'shadow-sm' : ''}`}>
                <span className="text-xs sm:text-sm text-gray-600 font-medium">Monto calculado</span>
                <p className={`text-lg sm:text-2xl font-bold ${active ? (isIVA ? 'text-blue-600' : 'text-purple-600') : 'text-gray-400'}`}>
                    $ {active ? impuestoCalculado.toFixed(2) : '0.00'}
                </p>
            </div>
        </div>
    );
}