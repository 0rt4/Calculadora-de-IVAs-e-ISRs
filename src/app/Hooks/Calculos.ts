// Calculos.ts
export interface CalculosProps {
    IMPORTE: number;
    IVA: number;
    ISR: number;
}

// ============================================
// CÁLCULOS DIRECTOS: De IMPORTE a TOTAL
// ============================================

export const CalcularIVA = (IMPORTE: number, IVAporcentaje: number): number => {
    return IMPORTE * (IVAporcentaje / 100);
}

export const CalcularISR = (IMPORTE: number, ISRporcentaje: number): number => {
    return IMPORTE * (ISRporcentaje / 100);
}

export const CalcularTOTALAIMPORTE = (IMPORTE: number, IVAporcentaje: number, ISRporcentaje: number): number => {
    const IVA = CalcularIVA(IMPORTE, IVAporcentaje);
    const ISR = CalcularISR(IMPORTE, ISRporcentaje);
    return IMPORTE + IVA + ISR;
}

// ============================================
// CÁLCULOS INVERTIDOS: De TOTAL a IMPORTE
// ============================================
export const CalcularIVAInvertido = (TOTAL: number, IVAporcentaje: number, ISRporcentaje: number): number => {
    const IMPORTE = CalcularIMPORTEATOTAL(TOTAL, IVAporcentaje, ISRporcentaje);
    return CalcularIVA(IMPORTE, IVAporcentaje);
}

export const CalcularISRInvertido = (TOTAL: number, IVAporcentaje: number, ISRporcentaje: number): number => {
    const IMPORTE = CalcularIMPORTEATOTAL(TOTAL, IVAporcentaje, ISRporcentaje);
    return CalcularISR(IMPORTE, ISRporcentaje);
}

export const CalcularIMPORTEATOTAL = (TOTAL: number, IVAporcentaje: number, ISRporcentaje: number): number => {
    // TOTAL = IMPORTE * (1 + IVA% + ISR%)
    // Por lo tanto: IMPORTE = TOTAL / (1 + IVA% + ISR%)
    return TOTAL / (1 + (IVAporcentaje / 100) + (ISRporcentaje / 100));
}

