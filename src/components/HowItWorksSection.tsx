import stepsIcons from "@/assets/steps-icons.jpg";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "01",
      title: "Escolha as fotos",
      description: "Selecione as fotos mais especiais da jornada de vocês"
    },
    {
      number: "02", 
      title: "Escreva (ou use frases prontas)",
      description: "Adicione suas próprias palavras ou escolha entre centenas de frases prontas"
    },
    {
      number: "03",
      title: "Gera o presente",
      description: "Nossa IA monta automaticamente sua linha do tempo personalizada"
    },
    {
      number: "04",
      title: "Envia por link ou baixa o PDF",
      description: "Compartilhe digitalmente ou imprima em alta qualidade"
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Como funciona?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Em apenas 4 passos simples, você cria um presente inesquecível
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="text-center space-y-4 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative mx-auto w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center shadow-elegant">
                <span className="text-white font-bold text-lg">{step.number}</span>
                <div className="absolute inset-0 bg-gradient-primary rounded-full animate-ping opacity-20"></div>
              </div>
              
              <h3 className="text-xl font-semibold text-foreground">
                {step.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <img 
            src={stepsIcons} 
            alt="Ícones dos passos" 
            className="mx-auto max-w-full h-auto opacity-50"
          />
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;