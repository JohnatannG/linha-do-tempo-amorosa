import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Clock, Gift } from "lucide-react";

const UrgencySection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 3,
    hours: 14,
    minutes: 32,
    seconds: 45
  });

  const [remainingSpots] = useState(42);

  // Fake countdown for demo purposes
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 px-4 bg-gradient-primary text-white">
      <div className="container mx-auto max-w-4xl text-center">
        <div className="space-y-6 sm:space-y-8 animate-fade-in">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/10 rounded-full px-3 sm:px-4 py-2">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-sm sm:text-base">Tempo Limitado!</span>
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4 sm:px-0">
              Ainda dá tempo de emocionar seu pai neste Dia dos Pais
            </h2>
            
          </div>

          {/* Countdown */}
          <div className="grid grid-cols-4 gap-2 sm:gap-4 max-w-xs sm:max-w-md mx-auto px-4 sm:px-0">
            {[
              { label: "Dias", value: timeLeft.days },
              { label: "Horas", value: timeLeft.hours },
              { label: "Min", value: timeLeft.minutes },
              { label: "Seg", value: timeLeft.seconds }
            ].map((item, index) => (
              <div key={index} className="bg-white/10 rounded-lg p-2 sm:p-4">
                <div className="text-xl sm:text-3xl font-bold">
                  {item.value.toString().padStart(2, '0')}
                </div>
                <div className="text-xs sm:text-sm opacity-75">
                  {item.label}
                </div>
              </div>
            ))}
          </div>

          {/* Limited spots */}
          <div className="bg-white/10 rounded-xl p-4 sm:p-6 max-w-xs sm:max-w-md mx-auto">
            <div className="flex items-center justify-center space-x-2 mb-3">
              <Gift className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="font-semibold text-sm sm:text-base">Entregas Premium Limitadas</span>
            </div>
            <div className="text-xl sm:text-2xl font-bold mb-2">
              Apenas {remainingSpots} vagas restantes
            </div>
            <div className="text-xs sm:text-sm opacity-75">
              Para garantir a qualidade, limitamos as entregas premium por dia
            </div>
          </div>

          <div className="px-4 sm:px-0">
            <Button variant="secondary" size="xl" className="bg-white text-primary hover:bg-white/90 w-full sm:w-auto">
              <span className="text-sm sm:text-base">Garantir Minha Vaga Agora</span>
            </Button>
          </div>

          <p className="text-sm opacity-75">
            ⚡ Entrega imediata após confirmação do pagamento
          </p>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;