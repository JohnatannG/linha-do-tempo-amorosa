import React, { useState, useEffect } from 'react';
import Header from '@/components/Header'; // Importe o componente Header
import Footer from '@/components/Footer';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

import heroMockup from "../assets/hero-mockup.png"
import selo from "../assets/quality.png"

const CheckoutSimples: React.FC = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [coupon, setCoupon] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // Fake countdown in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
  };

  const handleCheckout = () => {
    // Integrate with Stripe API here
    console.log('Processing checkout for Simple plan...');
    console.log('First Name:', firstName);
    console.log('Last Name:', lastName);
    console.log('Email:', email);
    console.log('Coupon:', coupon);
    console.log('Terms Accepted:', termsAccepted);
    // Example: window.location.href = 'STRIPE_CHECKOUT_LINK';
  };

  return (
    <div className="from-blue-950 to-purple-950 text-white font-sans">
      {/* Adicione o componente Header aqui */}
      <Header isCheckoutHeader={true} />
      
      <div className="bg-red-600 text-white text-center text-xl font-bold w-full py-4 mt-[4rem]">
        Oferta expira em: {formatTime(timeLeft)}
      </div>

      <div className="container mx-auto max-w-6xl">
        <h1 className="bg-gradient-primary bg-clip-text text-transparent font-bold text-2xl mt-4">Carrinho</h1>
        <Breadcrumb className="mb-4">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Início</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Plano Simples</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Payment Methods */}
            <div className="bg-white text-black border-blue-300 p-6 rounded-lg border shadow-lg">
              <h2 className="text-2xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">Formas de pagamentos</h2>
              <div className="border border-blue-300 p-4 rounded-md cursor-pointer transition-all duration-300 hover:bg-blue-300 hover:bg-opacity-30">
                <div className="flex items-center justify-between">
                  <label htmlFor="stripe" className="flex items-center text-lg font-semibold cursor-pointer">
                    <input type="radio" name="paymentMethod" id="stripe" className="mr-3 text-blue-500 focus:ring-blue-500" checked readOnly />
                    Pix
                  </label>
                  <span className="bg-green-200 bg-opacity-20 text-green-400 text-sm font-semibold border p-1 px-4 rounded-full">Mais rápido</span>
                </div>
                <p className="text-sm text-[#6C6C80] mt-1 ml-6">Aprovação imediata</p>
              </div>
               {/* Consider adding a visual indicator for selected method */}
            </div>

            {/* Personal Information */}
            <div className="bg-white p-6 rounded-lg border border-blue-300 shadow-lg">
              <h2 className="bg-gradient-primary bg-clip-text text-transparent text-2xl font-bold mb-4">Informações Pessoais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-black text-opacity-60 mb-1">
                    Primeiro Nome
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full p-3 rounded bg-white border border-blue-300 text-[#1C1C1E] focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF] transition duration-200"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                  />
                </div>
              </div>
              <div className="mt-4">
                <label htmlFor="email" className="block text-sm font-medium text-black text-opacity-60 mb-1">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded bg-white border border-blue-300 text-[#1C1C1E] focus:outline-none focus:border-[#6C63FF] focus:ring-1 focus:ring-[#6C63FF] transition duration-200"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>

            {/* Terms Checkbox and Security Message */}
            <div className="bg-white p-6 rounded-lg border border-purple-700 shadow-lg">
               <div className="flex items-center mb-4 text-[#6C6C80]">
                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#8F5FFF] mr-3 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                 <p className="text-sm">
                   Ao realizar uma compra, você concorda com todos os <a href="#" className="text-[#8F5FFF] hover:underline">termos de uso do site</a>.
                 </p>
               </div>
               <div className="flex items-start">
                 <input
                   type="checkbox"
                   id="terms"
                   className="mr-2 mt-1 h-4 w-4 text-purple-600 bg-gray-800 border-gray-600 rounded focus:ring-purple-500"
                   checked={termsAccepted} // Correctly bind checked state
                   onChange={(e) => setTermsAccepted(e.target.checked)}
                 />
                 <label htmlFor="terms" className="text-sm text-gray-700 cursor-pointer">
                   Li e aceito os termos de uso
                 </label>
               </div>
             </div>

            {/* Payment Button */}
            <button
              className={`w-full text-xl font-bold py-4 px-6 rounded-lg transition duration-300 
                          bg-primary text-primary-foreground hover:bg-primary/90
                          ${!termsAccepted ? 'opacity-50 cursor-not-allowed' : ''}`}
              onClick={handleCheckout}
              disabled={!termsAccepted}
            >
              🔒 Pagar R$17,90
            </button>

          </div>

          {/* Right Column (Order Summary) */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-[#F7F9FC] p-6 rounded-lg border border-blue-300 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
              <h2 className="text-2xl font-bold mb-4 text-[#1C1C1E]">Resumo do pedido</h2>
              <div className="flex items-center mb-4 border-b border-blue-300 pb-4">
                <img src={heroMockup} alt="Product Placeholder" className="w-16 h-16 object-cover rounded mr-4 border border-blue-300 flex-shrink-0" />
                <div className="flex-grow">
                  <p className="text-lg font-semibold text-[#1C1C1E]">Plano Simples</p> {/* Changed to Plano Simples */}
                  <p className="text-md text-[#6C6C80]">R$ 17,90</p> {/* Corrected value */}
                </div>
                 {/* Quantity controls and delete button (optional, based on image) */}
                 {/* Removed quantity controls and delete button as per instruction implicitly by removing the surrounding comment block */}
              </div>
              {/* Removed coupon section */}

              <div className="space-y-2 text-right pt-4">
                <p className="text-xl font-bold text-[#1C1C1E]">Total: <span className="ml-4">R$ 17,90</span></p> {/* Corrected value */}
              </div>

               {/* Security Message at the bottom of Order Summary */}
               <div className="mt-6 flex items-center justify-center text-green-400 text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.21a4.008 4.008 0 010 5.656L10 17.657a2.003 2.003 0 01-2.828 0L3.343 13.343a4.008 4.008 0 010-5.656l4.95-4.95a4.008 4.008 0 015.656 0L19.618 7.39z" /></svg>
                 Pagamento 100% Seguro
               </div>
            </div>
          </div>
        </div>

         {/* Security Badge below the main grid */}
         <div className="flex gap-3 items-center justify-items-center w-full  text-center mt-12 mb-8">
            <img src={selo} alt="100% Seguro com Stripe" className="h-10" />
            <p className='text-black'>100% Seguro com Stripe</p>
         </div>


{/* Testimonials below the security badge */}
<div className="bg-[#F7F9FC] mb-8 p-6 rounded-lg border border-blue-500 shadow-[0_4px_20px_rgba(0,0,0,0.05)] mt-8">
  <h2 className="text-2xl font-bold text-center mb-6 text-[#1C1C1E]">O que dizem nossos clientes</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Array de depoimentos */}
    {[
      {
        text: "Meu pai chorou quando viu. Eu nunca sei o que dar pra ele, mas dessa vez foi certeiro. Simplesmente perfeito!",
        author: "Ricardo M",
      },
      {
        text: "A ideia é genial, o site é lindo e o resultado ficou muito melhor do que eu imaginava. Recomendo pra todo mundo que quer fugir do presente clichê.",
        author: "Luana V",
      },
      {
        text: "Fiz no celular mesmo, em menos de 5 minutos. E a reação do meu pai? Inacreditável. Disse que foi o melhor presente que já ganhou.",
        author: "Jéssica T",
      },
    ].map((testimonial, index) => ( // Itera sobre o array de depoimentos
      <div key={index} className="bg-white p-6 rounded-md border border-blue-500 shadow-[0_4px_20px_rgba(0,0,0,0.05)]">
        <div className="flex items-center mb-3">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className="w-5 h-5 text-yellow-400 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
            </svg>
          ))}
        </div>
        <p className="text-sm text-[#6C6C80] italic mb-4">
          "{testimonial.text}" {/* Usa o texto do depoimento */}
        </p>
        <p className="text-sm font-semibold text-[#1C1C1E]">- {testimonial.author}</p> {/* Usa o autor do depoimento */}
      </div>
    ))}
  </div>
</div>



      </div>
        <Footer/>
    </div>
  );
};

export default CheckoutSimples;