{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "nextjs-development-env";
  
  buildInputs = with pkgs; [
    nodejs_20
    nodePackages.npm
    nodePackages.yarn
    nodePackages.pnpm
    nodePackages.typescript
    nodePackages.typescript-language-server
    nodePackages.eslint
    nodePackages.prettier
    bat
    eza
    ripgrep
    fd
  ];
  
  shellHook = ''
    clear

    echo "⚡ Entorno Next.js especializado activado!"
    echo "📦 Node.js: $(node --version)"
    echo "📦 npm: $(npm --version)"
    echo "📦 TypeScript: $(tsc --version || echo 'Disponible')"
    
    # Configurar paths importantes
    export PATH="./node_modules/.bin:$PATH"
    # REMOVIDA: export NODE_ENV=development
    
    # Crear directorios de cache
    mkdir -p .npm-cache .next-cache
    
    echo ""
    echo "🚀 Comandos de inicio rápido para Next.js:"
    echo "  npm run dev    # Iniciar servidor de desarrollo (NODE_ENV=development)"
    echo "  npm run build  # Build para producción (NODE_ENV=production)"
    echo "  npm run start  # Iniciar servidor de producción"
    echo ""
  '';
  
  # Variables de entorno
  env = {
    NPM_CONFIG_CACHE = "./.npm-cache";
    NEXT_TELEMETRY_DISABLED = "1";
  };
  
  NIX_SHELL_PRESERVE_PROMPT = 1;
}