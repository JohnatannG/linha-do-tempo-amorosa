import { Button } from "@/components/ui/button";
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
            <Link to="/" className="text-lg sm:text-xl font-bold text-primary hover:underline">
              MemóriaPai
            </Link>
          ) : (
            <span className="text-lg sm:text-xl font-bold text-primary">MemóriaPai</span>
          )}
        </div>

        {!isCheckoutHeader && ( // Oculta o botão "Criar Meu Presente" no checkout
          <Button variant="cta" size="default" className="animate-glow-pulse text-sm sm:text-base px-3 sm:px-4">
            <span className="hidden sm:inline">Criar Meu Presente</span>
            <span className="sm:hidden">Criar</span>
          </Button>
        )}
      </div>
    </header>
  );
};

export default Header;