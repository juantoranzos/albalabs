import { HeroSection } from "@/components/hero-section";
import { BentoGrid } from "@/components/bento-grid";
import { InfiniteCarousel } from "@/components/infinite-carousel";
import { WhoWeHelpSection } from "@/components/who-we-help-section";
import { ProcessSection } from "@/components/process-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import Contact from "@/components/contact";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-[var(--cyber-blue)] selection:text-black">
      <HeroSection />
      <InfiniteCarousel />
      <section id="services">
        <BentoGrid />
      </section>
      <section id="about">
        <WhoWeHelpSection />
      </section>
      <section id="process">
        <ProcessSection />
      </section>

      <Contact />
      <Footer />
    </main>
  );
}
