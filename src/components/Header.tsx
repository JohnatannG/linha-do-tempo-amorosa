import { Link } from "react-router-dom"; // Importe Link

interface HeaderProps {
  isCheckoutHeader?: boolean; // Adicione a prop opcional
}

const Header = ({ isCheckoutHeader }: HeaderProps) => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* Use Link se for cabeçalho de checkout, caso contrário use span */}
          {isCheckoutHeader ? (
            <Link to="/" className="text-lg sm:text-xl font-bold text-primary">
              MemóriaPai
            </Link>
          ) : (
            <span className="text-lg sm:text-xl font-bold text-primary hover:no-underline">MemóriaPai</span>
          )}
        </div>

        {!isCheckoutHeader && ( // Oculta o botão "Criar Meu Presente" no checkout
          <a
            href="#plans"
            className="animate-glow-pulse text-sm sm:text-base p-3 inline-flex items-center justify-center rounded-md font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
          >
          <span className="sm:inline">Criar Meu Presente</span>
        </a>
        
        )}
      </div>
    </header>
  );
};

export default Header;