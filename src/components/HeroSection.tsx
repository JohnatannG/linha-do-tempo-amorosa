import { Button } from "@/components/ui/button";
import heroMockup from "@/assets/hero-mockup.png";

const HeroSection = () => {
  return (
    <section className="pt-24 pb-16 px-4 bg-gradient-to-br from-background via-secondary/10 to-accent/5">
      <div className="container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 animate-fade-in-up order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                <span className="text-foreground">Ele te deu uma </span>
                <span className="bg-gradient-primary bg-clip-text text-transparent">vida inteira</span>
                <span className="text-foreground">. Agora é sua vez de retribuir com um presente que </span>
                <span className="bg-gradient-secondary bg-clip-text text-transparent">vale por mil palavras</span>
                <span className="text-foreground">.</span>
              </h1>
              
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground leading-relaxed">
                Uma linha do tempo digital com fotos, frases e momentos que só vocês viveram. 
                Feita pra emocionar. Entregue em minutos.
              </p>
            </div>
            


            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">

            <a
              href="#plans"
              className="w-full animate-glow-pulse text-sm sm:text-base p-6 inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <span className="sm:inline">Criar Meu Presente</span>
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </a>

            </div>
            
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-xs sm:text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Entrega imediata</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>PDF para impressão</span>
              </div>
            </div>
          </div>
          
          {/* Mockup */}
          <div className="relative animate-scale-in order-1 lg:order-2">
            <div className="relative">
              <img 
                src={heroMockup} 
                alt="Mockup da linha do tempo digital" 
                className="w-full h-auto rounded-2xl shadow-elegant"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10 rounded-2xl"></div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-2 sm:-top-4 -right-2 sm:-right-4 w-12 h-12 sm:w-16 sm:h-16 bg-secondary rounded-full flex items-center justify-center shadow-glow animate-bounce">
              <span className="text-lg sm:text-2xl">❤️</span>
            </div>
            <div className="absolute -bottom-2 sm:-bottom-4 -left-2 sm:-left-4 w-10 h-10 sm:w-12 sm:h-12 bg-accent rounded-full flex items-center justify-center shadow-glow animate-bounce delay-150">
              <span className="text-base sm:text-xl">📸</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;