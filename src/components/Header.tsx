import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <span className="text-lg sm:text-xl font-bold text-primary">MemóriaPai</span>
        </div>
        
        <Button variant="cta" size="default" className="animate-glow-pulse text-sm sm:text-base px-3 sm:px-4">
          <span className="hidden sm:inline">Criar Meu Presente</span>
          <span className="sm:hidden p-6">Criar</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;