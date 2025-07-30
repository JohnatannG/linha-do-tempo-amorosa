const TestimonialsSection = () => {
  const testimonials = [
    {
      text: "Meu pai chorou quando viu. Foi o primeiro presente que realmente tocou o coração dele. Valeu cada centavo!",
      author: "Patricia S.",
      role: "Filha dedicada",
      rating: 5
    },
    {
      text: "Em 10 minutos criei algo que parecia ter sido feito por um profissional. Meu pai guardou o PDF e já mandou imprimir.",
      author: "João M.", 
      role: "Filho orgulhoso",
      rating: 5
    },
    {
      text: "Nunca vi meu pai tão emocionado. Ele mostrou para todos os vizinhos e amigos. Presente mais especial que já dei!",
      author: "Camila R.",
      role: "Filha carinhosa", 
      rating: 5
    }
  ];

  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            Pais emocionados, filhos felizes
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground px-4">
            Veja o que nossos usuários estão dizendo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="space-y-4">
                {/* Stars */}
                <div className="flex space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-yellow-400 text-lg">⭐</span>
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-foreground font-medium leading-relaxed">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <div className="font-semibold text-foreground">
                    {testimonial.author}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center space-x-4 bg-card rounded-full px-6 py-3 shadow-card">
            <div className="flex space-x-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span key={i} className="text-yellow-400">⭐</span>
              ))}
            </div>
            <span className="font-semibold text-foreground">4.9/5</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">+1.247 presentes criados</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;