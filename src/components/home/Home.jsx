import { Features } from './features/Features';
import { Hero } from './heroSection/Hero';
import { HighlightSection } from './highlightSection/HighlightSection';

export function Home() {
  return (
    <>
      <Hero />
      <Features />
      <HighlightSection />
    </>
  );
}
