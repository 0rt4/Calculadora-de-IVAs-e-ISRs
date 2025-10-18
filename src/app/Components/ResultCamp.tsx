// ResultCamp.tsx
"use client"
import { useState } from 'react';

interface ResultCampProps {
  label: string;
  TOTAL: number;
}

export function ResultCamp({ label, TOTAL }: ResultCampProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    const textToCopy = TOTAL.toString();

    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(textToCopy);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = textToCopy;
        
        textArea.style.position = 'fixed';
        textArea.style.left = '-999999px';
        textArea.style.top = '-999999px';
        document.body.appendChild(textArea);
        
        textArea.focus();
        textArea.select();
        
        try {
          document.execCommand('copy');
          setCopied(true);
          setTimeout(() => setCopied(false), 2000);
        } catch (err) {
          console.error('Error al copiar:', err);
        }
        
        // Limpiar
        document.body.removeChild(textArea);
      }
    } catch (err) {
      console.error('Error al copiar:', err);
    }
  };

  return (
    <div 
      onClick={handleCopy}
      className="relative overflow-hidden bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl sm:rounded-2xl p-4 sm:p-6 cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl active:scale-[0.98] group"
    >
      <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="flex items-center gap-2 mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
            <line x1="12" y1="2" x2="12" y2="22"></line>
            <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
          </svg>
          <h2 className="text-white text-base sm:text-lg font-semibold">{label}</h2>
        </div>
        <p className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
          $ {TOTAL.toFixed(2)}
        </p>
        <p className="text-xs sm:text-sm text-emerald-100">
          {copied ? '✓ Copiado!' : 'Click para copiar'}
        </p>
      </div>
    </div>
  );
}