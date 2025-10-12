import { Calculadora } from "./Components/Calculadora";

export default function Home() {
  return (
    <main className=" min-h-screen items-center justify-center p-8 bg-background">
      
      <h1 className="text-lg font-bold text-center p-2">Calculadora de IVA e ISR en productos</h1>
      
      <div>
      <Calculadora label1="Importe" label2="Total"/>
      </div>
      
      <div>
      <Calculadora label1="Total" label2="Importe"/>
      </div>

    </main>
  );
}