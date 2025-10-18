// Calculadora.tsx
"use client"
import React, { useState } from 'react';
import { CalculoImpuesto } from "./CalculoImpuesto";
import { ResultCamp } from "./ResultCamp";
import { 
    CalcularIVA, 
    CalcularISR, 
    CalcularTOTALAIMPORTE,
    CalcularIMPORTEATOTAL,
    CalcularIVAInvertido,
    CalcularISRInvertido
} from '../Hooks/Calculos';

interface CalculadoraProps {
    label1: string;
    label2: string;
}

export function Calculadora({ label1, label2 }: CalculadoraProps) {
    const esImporteATotal = label1 === "Importe";
    
    // Cambiar los tipos para aceptar string o number
    const [inputIMPORTE, setInputIMPORTE] = useState<number | string>('');
    const [inputTOTAL, setInputTOTAL] = useState<number | string>('');
    
    const [IVAporcentaje, setIVAporcentaje] = useState(16);
    const [IVAcalculado, setIVAcalculado] = useState(0);
    const [IVAactivo, setIVAactivo] = useState(true);
    const [ISRporcentaje, setISRporcentaje] = useState(1.25);
    const [ISRcalculado, setISRcalculado] = useState(0);
    const [ISRactivo, setISRactivo] = useState(true);
    const [TOTAL, setTOTAL] = useState(0);
    const [IMPORTE, setIMPORTE] = useState(0);

    function Calcular() {
        const ivaPorc = IVAactivo ? IVAporcentaje : 0;
        const isrPorc = ISRactivo ? ISRporcentaje : 0;

        // Convertir a número para los cálculos
        const importeNum = typeof inputIMPORTE === 'string' ? parseFloat(inputIMPORTE) || 0 : inputIMPORTE;
        const totalNum = typeof inputTOTAL === 'string' ? parseFloat(inputTOTAL) || 0 : inputTOTAL;

        if (esImporteATotal) {
            const iva = CalcularIVA(importeNum, ivaPorc);
            const isr = CalcularISR(importeNum, isrPorc);
            const total = CalcularTOTALAIMPORTE(importeNum, ivaPorc, isrPorc);
            
            setIVAcalculado(iva);
            setISRcalculado(isr);
            setTOTAL(Math.round(total));
            setIMPORTE(importeNum);
        } else {
            const importe = CalcularIMPORTEATOTAL(totalNum, ivaPorc, isrPorc);
            const iva = CalcularIVAInvertido(totalNum, ivaPorc, isrPorc);
            const isr = CalcularISRInvertido(totalNum, ivaPorc, isrPorc);
            
            setIMPORTE(Math.round(importe));
            setIVAcalculado(iva);
            setISRcalculado(isr);
            setTOTAL(totalNum);
        }
    }

    return (
        <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl p-4 sm:p-6 border border-gray-200">
            <div className="flex items-center gap-2 sm:gap-3 mb-4 sm:mb-6 pb-3 sm:pb-4 border-b border-gray-200">
                <div className="bg-gradient-to-br from-indigo-500 to-purple-600 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                    </svg>
                </div>
                <div className="min-w-0 flex-1">
                    <h2 className="text-base sm:text-xl font-bold text-gray-800 truncate">
                        De {label1} a {label2}
                    </h2>
                    <p className="text-xs sm:text-sm text-gray-500 truncate">
                        Calcula impuestos automáticamente
                    </p>
                </div>
            </div>
            
            <div className="mb-4 sm:mb-6">
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-indigo-600 flex-shrink-0">
                        <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                        <line x1="8" y1="6" x2="16" y2="6"></line>
                        <line x1="8" y1="10" x2="16" y2="10"></line>
                        <line x1="8" y1="14" x2="16" y2="14"></line>
                        <line x1="8" y1="18" x2="16" y2="18"></line>
                    </svg>
                    <span>{label1}</span>
                </label>
                <div className="flex flex-col sm:flex-row gap-2">
                    <div className="relative flex-1">
                        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 font-semibold text-sm sm:text-base">
                            $
                        </span>
                        <input 
                            type="number"
                            value={esImporteATotal ? inputIMPORTE : inputTOTAL}
                            onChange={(e) => {
                                const value = e.target.value === '' ? '' : e.target.value;
                                esImporteATotal ? setInputIMPORTE(value) : setInputTOTAL(value);
                            }}
                            placeholder="0.00"
                            className="w-full pl-7 sm:pl-8 pr-3 sm:pr-4 py-2.5 sm:py-3 border-2 border-gray-300 rounded-lg sm:rounded-xl focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 outline-none transition-all text-base sm:text-lg font-semibold text-gray-900"
                        />
                    </div>
                    <button 
                        onClick={Calcular}
                        className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2 whitespace-nowrap text-sm sm:text-base"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                            <line x1="8" y1="6" x2="16" y2="6"></line>
                            <line x1="8" y1="10" x2="16" y2="10"></line>
                            <line x1="8" y1="14" x2="16" y2="14"></line>
                            <line x1="8" y1="18" x2="16" y2="18"></line>
                        </svg>
                        Calcular
                    </button>
                </div>
            </div>

            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
                <CalculoImpuesto 
                    label1="IVA"
                    impuestoCalculado={IVAcalculado}
                    impuesto={IVAporcentaje}
                    cambioPorcentaje={setIVAporcentaje}
                    active={IVAactivo}
                    setActive={setIVAactivo}
                />
                
                <CalculoImpuesto 
                    label1="ISR" 
                    impuestoCalculado={ISRcalculado}
                    impuesto={ISRporcentaje} 
                    cambioPorcentaje={setISRporcentaje}
                    active={ISRactivo}
                    setActive={setISRactivo}
                />
            </div>
            
            <ResultCamp 
                label={esImporteATotal ? "Total" : "Importe"} 
                TOTAL={esImporteATotal ? TOTAL : IMPORTE}
            />
        </div>
    );
}