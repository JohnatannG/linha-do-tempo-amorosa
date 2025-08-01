import React, { useState, useEffect } from 'react';

import Header from '@/components/Header'; // Importe o componente Header
const CheckoutPremium: React.FC = () => { // Passe a prop isCheckoutHeader para o Header
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [coupon, setCoupon] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(3600); // Fake countdown in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };

  const handleCheckout = () => {
    if (termsAccepted && firstName && lastName && email) {
      // Simulate Stripe integration - replace with actual Stripe API call
      console.log('Processing Premium checkout for:', { firstName, lastName, email, coupon });
      alert('Simulating checkout. Redirecting to Stripe...');
      // window.location.href = 'YOUR_STRIPE_CHECKOUT_LINK_HERE';
    } else {
      alert('Please fill in all required fields and accept the terms.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-purple-900 text-gray-100 font-sans">
      <Header isCheckoutHeader={true} /> {/* Use o Header com a prop */}
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-8 text-purple-400 drop-shadow-lg">Checkout - Plano Premium</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Left Column: Forms */}
          <div className="space-y-8">
            {/* Fake Countdown */}
            <div className="text-center text-lg font-bold text-yellow-400 p-4 rounded-md bg-gray-800 bg-opacity-60 border border-purple-600">
              Oferta expira em: <span className="text-red-500">{formatTime(timeLeft)}</span>
            </div>

            {/* Payment Methods */}
            <div className="bg-gray-800 bg-opacity-60 rounded-lg shadow-xl p-6 border border-purple-600">
              <h2 className="text-xl sm:text-2xl font-semibold mb-4 text-purple-300">Formas de Pagamento</h2>
              <div className="flex items-center bg-gray-700 bg-opacity-50 rounded-md p-4 border border-purple-500 shadow-inner cursor-pointer">
                <input
                  type="radio"
                  id="stripe"
                  name="paymentMethod"
                  className="form-radio text-purple-500 focus:ring-purple-500 mr-3"
                  defaultChecked
                  disabled // Stripe is the only option
                />
                <label htmlFor="stripe" className="text-lg flex items-center justify-between w-full">
                  <span>Cartão de Crédito via Stripe</span>
                  <span className="text-green-400 text-sm font-semibold bg-green-900 bg-opacity-50 px-2 py-1 rounded-full">Aprovação imediata</span>
                </label>
              </div>
            </div>

            {/* Personal Information */}
            <div className="bg-gray-800 bg-opacity-60 rounded-lg shadow-xl p-6 space-y-6 border border-purple-600">
              <h2 className="text-xl sm:text-2xl font-semibold text-purple-300">Informações Pessoais</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Primeiro Nome"
                  className="input-field w-full px-4 py-3 rounded-md bg-gray-700 border border-purple-700 focus:border-purple-500 focus:ring-purple-500 focus:ring-1 transition-all duration-300 text-gray-100 placeholder-gray-400"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  required
                />
                <input
                  type="text"
                  placeholder="Sobrenome"
                  className="input-field w-full px-4 py-3 rounded-md bg-gray-700 border border-purple-700 focus:border-purple-500 focus:ring-purple-500 focus:ring-1 transition-all duration-300 text-gray-100 placeholder-gray-400"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  required
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  className="input-field w-full px-4 py-3 rounded-md bg-gray-700 border border-purple-700 focus:border-purple-500 focus:ring-purple-500 focus:ring-1 transition-all duration-300 text-gray-100 placeholder-gray-400 md:col-span-2"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {/* Terms Checkbox */}
              <div className="flex items-center pt-4 border-t border-gray-700">
                <input
                  type="checkbox"
                  id="terms"
                  className="form-checkbox h-5 w-5 text-purple-500 rounded focus:ring-purple-500 mr-3 bg-gray-700 border-purple-700"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  required
                />
                <label htmlFor="terms" className="text-sm text-gray-300">Ao realizar uma compra, você concorda com todos os <a href="#" className="text-purple-400 hover:underline">termos de uso do site</a>.</label>
              </div>
            </div>
          </div>

          {/* Right Column: Order Summary and Confirmation */}
          <div className="space-y-8">
            {/* Order Summary */}
            <div className="bg-gray-800 bg-opacity-60 rounded-lg shadow-xl p-6 space-y-6 border border-purple-600">
              <h2 className="text-xl sm:text-2xl font-semibold text-purple-300">Resumo do Pedido</h2>
              <div className="flex items-center space-x-4 p-4 bg-gray-700 rounded-md border border-purple-700">
                <img src="/placeholder.svg" alt="Product Image" className="w-16 h-auto rounded-md object-cover border border-purple-600" />
                <div className="flex-grow">
                  <p className="text-lg font-bold text-gray-100">Plano Premium</p>
                  <p className="text-lg font-semibold text-green-400">R$ 349,90</p>
                </div>
                {/* Quantity and Remove - Added for structure based on image, removed for simplicity */}
                {/* <div className="flex items-center space-x-2">
                  <button className="text-gray-400 hover:text-gray-100 transition">-</button>
                  <span className="text-gray-100">1</span>
                  <button className="text-gray-400 hover:text-gray-100 transition">+</button>
                  <button className="text-red-400 hover:text-red-500 transition">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"/></svg>
                  </button>
                </div>
              </div>

              <div className="mt-4 space-y-4">
                 {/* Coupon section removed as requested */}
                <div className="flex justify-between">
                  <span>Sub Total:</span>
                  <span>R$ 349,90</span>
                </div>
                <div className="flex justify-between font-bold text-xl text-green-400">
                  <span>Total:</span>
                  <span>R$ 349,90</span>
                </div>
              </div>
            </div>

            {/* Security Message */}
            <div className="text-sm text-center text-green-400 mb-6 flex items-center justify-center space-x-2 p-3 bg-green-900 bg-opacity-30 rounded-md border border-green-600">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a3 3 0 00-3-3H8zm.93 6.28a1 1 0 10-1.86-.56l-2 6A1 1 0 007 18h6a1 1 0 00.93-1.28l-2-6a1 1 0 00-1.86 0l-2 6z" clipRule="evenodd" />
              </svg>
              <span>Este pagamento é 100% seguro e criptografado</span>
            </div>

            {/* Payment Button */}
            <button
              className={`w-full py-3 text-xl font-bold rounded-md transition duration-300 focus:outline-none focus:ring-4 ${termsAccepted && firstName && lastName && email ? 'bg-purple-600 text-white border-2 border-blue-400 shadow-lg shadow-purple-500/50 hover:bg-purple-700 hover:shadow-xl hover:shadow-purple-600/60' : 'bg-gray-600 text-gray-400 cursor-not-allowed'}`}
              onClick={handleCheckout}
              disabled={!termsAccepted || !firstName || !lastName || !email}
            >
              🔒 Criar Meu Presente Agora – R$349,90
            </button>
          </div>

        </div>

        {/* Security Badge */}
        <div className="text-center mt-12">
          <img src="/placeholder.svg" alt="Secure Checkout" className="mx-auto h-16 border border-purple-600 p-2 rounded-full bg-gray-800 bg-opacity-60" />
          <p className="text-sm text-gray-400 mt-4">Checkout 100% Seguro com Stripe</p>
        </div>

        {/* Testimonials */}
        <div className="mt-16">
          <h2 className="text-2xl sm:text-3xl font-semibold text-center mb-8 text-purple-300 drop-shadow-lg">O que nossos clientes dizem</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Fake Testimonial 1 */}
            <div className="bg-gray-800 bg-opacity-60 rounded-lg p-6 border border-purple-600 shadow-inner">
              <div className="flex items-center mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.425L22 9.355l-5 4.876 1.174 6.874L12 17.3l-6.174 3.735L7 14.231l-5-4.876 6.332-1.343L12 .587z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-200 italic text-center">"Incrivelmente transformador! O plano premium superou minhas expectativas."</p>
              <p className="text-right font-bold mt-4 text-purple-400">- João S.</p>
            </div>
            {/* Fake Testimonial 2 */}
            <div className="bg-gray-800 bg-opacity-60 rounded-lg p-6 border border-purple-600 shadow-inner">
              <div className="flex items-center mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.425L22 9.355l-5 4.876 1.174 6.874L12 17.3l-6.174 3.735L7 14.231l-5-4.876 6.332-1.343L12 .587z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-200 italic text-center">"Investimento que valeu cada centavo. O suporte é de primeira!"</p>
              <p className="text-right font-bold mt-4 text-purple-400">- Rafael C.</p>
            </div>
            {/* Fake Testimonial 3 */}
            <div className="bg-gray-800 bg-opacity-60 rounded-lg p-6 border border-purple-600 shadow-inner">
              <div className="flex items-center mb-4 justify-center">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-yellow-400 fill-current" viewBox="0 0 24 24">
                    <path d="M12 .587l3.668 7.425L22 9.355l-5 4.876 1.174 6.874L12 17.3l-6.174 3.735L7 14.231l-5-4.876 6.332-1.343L12 .587z"/>
                  </svg>
                ))}
              </div>
              <p className="text-gray-200 italic text-center">"A diferença no meu dia a dia foi notável. Recomendo o premium a todos."</p>
              <p className="text-right font-bold mt-4 text-purple-400">- Fernando P.</p>
            </div>
          </div>
        </div>

        {/* Footer - Optional: You might want a separate Footer component */}
        <footer className="mt-16 text-center text-gray-400 text-sm">
          <p>&copy; 2023 Sua Empresa. Todos os direitos reservados.</p>
          {/* Add privacy policy, terms links etc. */}
        </footer>

      </div>
    </div>
  );
};
export default CheckoutPremium;