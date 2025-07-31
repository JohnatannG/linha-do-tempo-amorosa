import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const PlansSection = () => {
  const plans = [
    {
      name: "Simples",
      price: "R$ 17,90",
      description: "Perfeito para começar",
      features: [
        "Até 5 blocos (foto + frase)",
        "Design básico",
        "Compartilhamento por link",
        "Suporte por email"
      ],
      cta: "Começar Grátis",
      variant: "outline" as const,
      popular: false
    },
    {
      name: "Premium",
      price: "R$ 21,90",
      description: "A experiência completa",
      features: [
        "Até 20 blocos (foto + frase)",
        "PDF elegante para impressão",
        "Designs premium exclusivos",
        "Frases prontas ilimitadas",
        "Suporte prioritário",
        "Sem marca d'água"
      ],
      cta: "Criar Meu Presente Agora",
      variant: "cta" as const,
      popular: true
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-secondary/5 to-accent/5">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Escolha seu plano
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Comece grátis ou vá direto para a experiência premium
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div 
              key={index}
              className={`relative p-8 bg-card rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up ${
                plan.popular ? 'ring-2 ring-accent shadow-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-secondary text-white px-6 py-2 rounded-full text-sm font-semibold">
                    Mais Popular
                  </span>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="text-4xl font-bold text-primary mb-2">
                    {plan.price}
                  </div>
                  <p className="text-muted-foreground">
                    {plan.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                <Button 
                  variant={plan.variant} 
                  size="lg" 
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Todos os planos incluem 7 dias de garantia ou seu dinheiro de volta
          </p>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;