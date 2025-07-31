import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ExamplesSection from "@/components/ExamplesSection";
import PlansSection from "@/components/PlansSection";
import UrgencySection from "@/components/UrgencySection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <ExamplesSection />
      <PlansSection />
      <UrgencySection />
      <TestimonialsSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </div>
  );
};

export default Index;
