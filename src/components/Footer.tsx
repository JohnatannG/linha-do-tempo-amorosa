const Footer = () => {
  return (
    <footer className="py-12 px-4 bg-card border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-primary">MemóriaPai</span>
            </div>
            <p className="text-muted-foreground">
              Criando memórias inesquecíveis para pais especiais.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h4 className="font-semibold text-foreground">Contato</h4>
            <div className="space-y-2">
              <a href="tel:+556299121-0362" className="block text-muted-foreground hover:text-primary transition-colors">
                (62) 99121-0362 - WhatsApp
              </a>
              <p className="text-muted-foreground">
                Atendimento de seg. à sex. das 9h às 18h
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © 2024 Pai360. Todos os direitos reservados. Feito com ❤️ para pais especiais.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;