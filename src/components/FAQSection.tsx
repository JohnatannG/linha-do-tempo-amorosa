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
      answer: "Sim! Você pode fazer upload de suas próprias fotos ou escolher entre nossa galeria de imagens. Recomendamos fotos em boa qualidade para melhor resultado."
    },
    {
      question: "E se eu não conseguir pensar em frases?",
      answer: "Não se preocupe! Temos mais de 200 frases prontas divididas por categorias (infância, adolescência, vida adulta, etc.). Você também pode personalizar ou combinar frases."
    },
    {
      question: "Posso editar meu presente depois de criado?",
      answer: "Sim! Você pode editar seu presente quantas vezes quiser durante 30 dias após a criação. Mudanças são salvas automaticamente."
    },
    {
      question: "O plano gratuito tem limitações?",
      answer: "O plano gratuito permite até 5 blocos e compartilhamento por link. Para mais blocos, PDF premium e designs exclusivos, recomendamos o plano Premium."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-xl text-muted-foreground">
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

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Ainda tem dúvidas?
          </p>
          <a href="mailto:suporte@pai360.com" className="text-primary hover:text-primary/80 font-semibold">
            Entre em contato conosco
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;