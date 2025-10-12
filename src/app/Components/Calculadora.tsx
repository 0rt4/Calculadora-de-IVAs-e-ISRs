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
    
    const [inputIMPORTE, setInputIMPORTE] = useState(0);
    const [inputTOTAL, setInputTOTAL] = useState(0);

    // Estados de IVA
    const [IVAporcentaje, setIVAporcentaje] = useState(16);
    const [IVAcalculado, setIVAcalculado] = useState(0);
    const [IVAactivo, setIVAactivo] = useState(true);

    // Estados de ISR
    const [ISRporcentaje, setISRporcentaje] = useState(1.25);
    const [ISRcalculado, setISRcalculado] = useState(0);
    const [ISRactivo, setISRactivo] = useState(true);

    const [TOTAL, setTOTAL] = useState(0);
    const [IMPORTE, setIMPORTE] = useState(0);

    function Calcular() {
        // Determinar qué porcentajes usar según si están activos
        const ivaPorc = IVAactivo ? IVAporcentaje : 0;
        const isrPorc = ISRactivo ? ISRporcentaje : 0;

        if (esImporteATotal) {
            // Calcular de IMPORTE a TOTAL
            const iva = CalcularIVA(inputIMPORTE, ivaPorc);
            const isr = CalcularISR(inputIMPORTE, isrPorc);
            const total = CalcularTOTALAIMPORTE(inputIMPORTE, ivaPorc, isrPorc);
            
            setIVAcalculado(iva);
            setISRcalculado(isr);
            setTOTAL(Math.round(total));
            setIMPORTE(inputIMPORTE);
        } else {
            // Calcular de TOTAL a IMPORTE
            const importe = CalcularIMPORTEATOTAL(inputTOTAL, ivaPorc, isrPorc);
            const iva = CalcularIVAInvertido(inputTOTAL, ivaPorc, isrPorc);
            const isr = CalcularISRInvertido(inputTOTAL, ivaPorc, isrPorc);
            
            setIMPORTE(Math.round(importe));
            setIVAcalculado(iva);
            setISRcalculado(isr);
            setTOTAL(inputTOTAL);
        }
    }

    return (
        <div className="p-4">
            <h2 className="text-lg font-semibold mb-4">De {label1} a {label2}</h2>
            
            <div className="mb-4">
                <p className="mb-2 font-medium">{label1}</p>
                <input 
                    type="number"
                    value={esImporteATotal ? inputIMPORTE : inputTOTAL}
                    onChange={(e) => {
                        const value = Number(e.target.value);
                        esImporteATotal ? setInputIMPORTE(value) : setInputTOTAL(value);
                    }}
                    placeholder={`Ingrese el ${label1.toLowerCase()}`}
                    className="border p-2 rounded w-full"
                />
                <button 
                    className="mt-2 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    onClick={Calcular}
                >
                    Calcular
                </button>
            </div>

            <div className="space-y-2">
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