import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.extends("next/core-web-vitals", "next/typescript"),
  {
    ignores: [
      "node_modules/**",
      ".next/**",
      "out/**",
      "build/**",
      "next-env.d.ts",
    ],
    rules: {
      // Reducir severidad de algunas reglas comunes
      "no-unused-vars": "warn", // Convertir errores de variables no usadas en advertencias
      "@typescript-eslint/no-unused-vars": "warn", // Lo mismo para TypeScript
      "react/no-unescaped-entities": "off", // Desactivar advertencias de contenido no escapado
      "no-console": "warn", // Convertir logs en advertencias en lugar de errores
      
      // Configuraciones para ser más tolerante
      "react-hooks/exhaustive-deps": "off", // Desactivar advertencias de dependencias de hooks
    },
    
    // Configuración para ser más tolerante durante la escritura
    settings: {
      react: {
        version: "detect" // Detectar automáticamente la versión de React
      }
    }
  },
];

export default eslintConfig;
