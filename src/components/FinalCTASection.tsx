import { Button } from "@/components/ui/button";

const FinalCTASection = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-primary via-primary-glow to-accent text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 border-2 border-white rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-20 left-32 w-12 h-12 border-2 border-white rounded-full"></div>
        <div className="absolute bottom-32 right-16 w-24 h-24 border-2 border-white rounded-full"></div>
      </div>

      <div className="container mx-auto max-w-4xl text-center relative z-10">
        <div className="space-y-8 animate-fade-in">
          <div className="space-y-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight px-4 sm:px-0">
              Seu pai não precisa de mais uma caneca.
            </h2>
            <p className="text-lg sm:text-xl md:text-2xl opacity-90 leading-relaxed px-4 sm:px-0">
              Ele precisa lembrar de tudo o que vocês viveram.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 sm:px-0">
            <Button 
              variant="secondary" 
              size="xl" 
              className="bg-white text-primary hover:bg-white/90 shadow-glow group w-full sm:w-auto sm:min-w-[280px]"
            >
              <span className="text-sm sm:text-base">Criar Meu Presente Agora</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 text-xs sm:text-sm opacity-75 px-4 sm:px-0">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>Criação em 5 minutos</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>Entrega instantânea</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
              <span>Garantia de emoção</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;