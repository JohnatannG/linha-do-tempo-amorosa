import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "Como funciona a entrega do presente?",
      answer: "Após criar seu presente, você recebe um link exclusivo para compartilhar com seu pai. Também é possível baixar um PDF em alta qualidade para impressão. A entrega é imediata!"
    },
    {
      question: "Posso usar minhas próprias fotos?",
      answer: "Sim! Você pode fazer upload de suas próprias fotos. Recomendamos fotos em boa qualidade para melhor resultado."
    },
    {
      question: "E se eu não conseguir pensar em frases?",
      answer: "Não se preocupe! Temos uma IA para te ajudar a gerar frases de acordo com o que você." 
    },
    {
      question: "Qual o melhor plano?",
      answer: "O plano PREMIUM é o mais escolhido por quem quer criar algo realmente inesquecível — ele libera mais uploads de imagem, mais possibilidades e mais liberdade pra deixar tudo do seu jeito."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Tudo o que você precisa saber
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-card rounded-xl shadow-card overflow-hidden animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-6 animate-fade-in">
                  <p className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;