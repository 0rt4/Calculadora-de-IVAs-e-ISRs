# 📊 Calculadora de IVA e ISR

> Herramienta web para calcular impuestos en productos de forma instantánea

[![Next.js](https://img.shields.io/badge/Next.js-14-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=flat-square&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38bdf8?style=flat-square&logo=tailwindcss)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat-square&logo=vercel)](https://vercel.com)

[Ver Demo en Vivo](#) | [Reportar Bug](https://github.com/0rt4/Calculadora-de-IVAs-e-ISRs/issues) | [Solicitar Feature](https://github.com/0rt4/Calculadora-de-IVAs-e-ISRs/issues)

## 🎯 Descripción

Calculadora especializada para México que permite calcular rápidamente el **IVA (Impuesto al Valor Agregado)** e **ISR (Impuesto Sobre la Renta)** aplicados a productos. Ideal para comerciantes, vendedores y empresarios que necesitan conocer los impuestos de manera precisa e instantánea.

### ✨ Características principales

- 🧮 **Cálculo de IVA al 16%** - Suma o resta el IVA de cualquier monto
- 💰 **Cálculo de ISR** - Determina el impuesto sobre la renta aplicable
- ⚡ **Resultados instantáneos** - Sin recargas, cálculos en tiempo real
- 📱 **100% Responsive** - Funciona perfectamente en móviles, tablets y desktop
- 🎨 **Interfaz moderna** - Diseño limpio y fácil de usar
- 🔒 **Privacidad total** - Todos los cálculos se procesan localmente en tu navegador
- 🚀 **Rápido y ligero** - Optimizado con Next.js 14

## 💡 Motivación

Este proyecto nace de la necesidad cotidiana de calcular rápidamente cuánto IVA e ISR tienen los productos. En lugar de usar calculadoras genéricas o hacer cálculos manuales, esta herramienta especializada permite obtener resultados precisos en segundos, mejorando la eficiencia en la gestión comercial.

## 🚀 Demo

**[🔗 Ver aplicación en vivo →](https://github.com/0rt4/Calculadora-de-IVAs-e-ISRs)**

### 📸 Capturas de pantalla

<div align="center">

*Próximamente: Screenshots de la interfaz*

</div>

## 🛠️ Stack Tecnológico

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Lenguaje:** [TypeScript](https://www.typescriptlang.org/) - Tipado estático
- **Estilos:** [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS
- **Fuentes:** [Geist Font Family](https://vercel.com/font)
- **Deploy:** [Vercel](https://vercel.com/) - Despliegue continuo

## 📋 Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- **Node.js** 18.x o superior
- **npm**, **yarn**, **pnpm** o **bun**

## 🔧 Instalación y uso local

### 1️⃣ Clonar el repositorio

```bash
git clone https://github.com/0rt4/Calculadora-de-IVAs-e-ISRs.git
cd Calculadora-de-IVAs-e-ISRs
```

### 2️⃣ Instalar dependencias

```bash
npm install
# o
yarn install
# o
pnpm install
# o
bun install
```

### 3️⃣ Ejecutar en modo desarrollo

```bash
npm run dev
# o
yarn dev
# o
pnpm dev
# o
bun dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

### 4️⃣ Construir para producción

```bash
npm run build
npm start
```

## 📖 Cómo usar

### Calcular IVA

1. Ingresa el monto del producto
2. Selecciona si deseas:
   - **Agregar IVA** (precio sin IVA → precio final)
   - **Quitar IVA** (precio final → precio sin IVA)
3. Obtén el resultado instantáneamente

**Ejemplo:** 
- Precio: $1,000 MXN
- Con IVA (16%): $1,160 MXN
- IVA: $160 MXN

### Calcular ISR

1. Ingresa el monto del ingreso por producto
2. El sistema calcula el ISR aplicable
3. Visualiza el desglose completo

## 🗂️ Estructura del proyecto

```
Calculadora-de-IVAs-e-ISRs/
├── app/                    # App Router de Next.js
│   ├── layout.tsx         # Layout principal con metadata
│   ├── page.tsx           # Página principal con calculadoras
│   ├── globals.css        # Estilos globales + Tailwind
│   └── favicon.ico        # Favicon
├── components/            # Componentes React
│   ├── IVACalculator.tsx  # Componente calculadora de IVA
│   └── ISRCalculator.tsx  # Componente calculadora de ISR
├── lib/                   # Utilidades y lógica
│   ├── calculations.ts    # Funciones de cálculo
│   └── utils.ts          # Helpers generales
├── public/               # Archivos estáticos
├── tailwind.config.ts    # Configuración de Tailwind
├── tsconfig.json         # Configuración de TypeScript
└── package.json          # Dependencias y scripts
```

## 🎯 Roadmap

Características planeadas para futuras versiones:

- [ ] 📊 **Historial de cálculos** - Revisa cálculos anteriores
- [ ] 📄 **Exportación a PDF** - Guarda tus cálculos en formato PDF
- [ ] 💾 **Guardado local** - Guarda cálculos frecuentes
- [ ] 📱 **PWA** - Instala como app nativa
- [ ] 🧮 **Calculadora de retenciones** - Cálculos adicionales
- [ ] 📈 **Cálculos múltiples** - Procesa varios productos a la vez
## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Si tienes ideas para mejorar el proyecto:

1. **Fork** el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/MejorCalculadora`)
3. **Commit** tus cambios (`git commit -m 'feat: Agregar cálculo de retenciones'`)
4. **Push** a la rama (`git push origin feature/MejorCalculadora`)
5. Abre un **Pull Request**

### 🐛 Reportar bugs

Si encuentras un bug, por favor [abre un issue](https://github.com/0rt4/Calculadora-de-IVAs-e-ISRs/issues) con:
- Descripción del problema
- Pasos para reproducirlo
- Comportamiento esperado vs actual
- Screenshots si aplica

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más detalles.

## 👨‍💻 Autor

**Christopher Orta** 

- 🐙 GitHub: [@0rt4](https://github.com/0rt4)
- 📧 Email: [Ortal.Christopher@outlook.com](#)

## 🌟 Agradecimientos

- Inspirado en la necesidad real de agilizar cálculos fiscales diarios
- Construido con las mejores prácticas de desarrollo web moderno
- Gracias a la comunidad de Next.js y Tailwind CSS

## 📊 Estado del proyecto

![GitHub last commit](https://img.shields.io/github/last-commit/0rt4/Calculadora-de-IVAs-e-ISRs?style=flat-square)
![GitHub issues](https://img.shields.io/github/issues/0rt4/Calculadora-de-IVAs-e-ISRs?style=flat-square)
![GitHub stars](https://img.shields.io/github/stars/0rt4/Calculadora-de-IVAs-e-ISRs?style=flat-square)

---

<div align="center">

⭐ **Si este proyecto te resultó útil, considera darle una estrella** ⭐

**[↑ Volver arriba](#-calculadora-de-iva-e-isr)**

</div>
