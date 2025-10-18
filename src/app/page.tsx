import { Calculadora } from "./Components/Calculadora";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 p-3 sm:p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 sm:gap-3 bg-white px-4 sm:px-6 py-2.5 sm:py-3 rounded-full shadow-lg mb-3 sm:mb-4">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 p-1.5 sm:p-2 rounded-lg flex-shrink-0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect>
                <line x1="8" y1="6" x2="16" y2="6"></line>
                <line x1="8" y1="10" x2="16" y2="10"></line>
                <line x1="8" y1="14" x2="16" y2="14"></line>
                <line x1="8" y1="18" x2="16" y2="18"></line>
              </svg>
            </div>
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Calculadora de IVA e ISR
            </h1>
          </div>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg px-4">
            Calcula impuestos en productos de forma rápida y precisa
          </p>
        </div>
        
        <div className="mt-6 sm:mt-8 text-center pb-4">
          <div className="bg-white rounded-lg sm:rounded-xl p-3 sm:p-4 shadow-md inline-block max-w-full">
            <p className="text-xs sm:text-sm text-gray-500">
              💡 <span className="font-semibold">Tip:</span> Activa o desactiva los impuestos según necesites
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          <Calculadora label1="Importe" label2="Total"/>
          <Calculadora label1="Total" label2="Importe"/>
        </div>
      </div>
    </main>
  );
}