const ExamplesSection = () => {
  const examples = [
    {
      text: "Pai, você me ensinou que força não está nos músculos, mas no coração que nunca desiste.",
      author: "Ana, para seu pai"
    },
    {
      text: "Cada 'vai dar certo' seu se tornou a minha coragem para enfrentar qualquer desafio.",
      author: "Carlos, para seu pai"
    },
    {
      text: "Suas mãos calejadas construíram não só nossa casa, mas todos os meus sonhos.",
      author: "Maria, para seu pai"
    }
  ];

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Frases que <span className="bg-gradient-secondary bg-clip-text text-transparent">tocam o coração</span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Inspirações para você expressar o que realmente sente
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {examples.map((example, index) => (
            <div 
              key={index}
              className="group p-8 bg-card rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4">
                <div className="text-4xl text-accent opacity-50">"</div>
                <blockquote className="text-lg font-medium text-foreground leading-relaxed">
                  {example.text}
                </blockquote>
                <cite className="text-sm text-muted-foreground not-italic">
                  — {example.author}
                </cite>
              </div>
              
              <div className="mt-6 h-1 bg-gradient-secondary rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-6">
            + Mais de 20 frases prontas disponíveis na plataforma
          </p>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;