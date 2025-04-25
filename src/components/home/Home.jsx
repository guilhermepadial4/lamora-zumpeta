import { Footer } from '../footer/Footer';
import { Header } from '../header/Header';
import { CTASection } from './ctaSection/CTASection';
import { Features } from './features/Features';
import { GuaranteeSection } from './guaranteeSection/GuaranteeSection';
import { Hero } from './heroSection/Hero';
import { HighlightSection } from './highlightSection/HighlightSection';
import { TestimonialSection } from './testimonialSection/TestimonialSection';

export function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <HighlightSection />
      <TestimonialSection />
      <GuaranteeSection />
      <CTASection />
      <Footer />
    </>
  );
}
