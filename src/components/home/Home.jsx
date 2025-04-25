import { Features } from './features/Features';
import { Hero } from './heroSection/Hero';
import { HighlightSection } from './highlightSection/HighlightSection';
import { TestimonialSection } from './testimonialSection/TestimonialSection';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HighlightSection />
      <TestimonialSection />
    </>
  );
}
