import { HeroSection } from "@/components/hero-section";
import { BentoGrid } from "@/components/bento-grid";
import { InfiniteCarousel } from "@/components/infinite-carousel";
import { ProjectsSection } from "@/components/projects-section";
import { WhoWeHelpSection } from "@/components/who-we-help-section";
import { ProcessSection } from "@/components/process-section";
import Contact from "@/components/contact";
import Footer from "@/components/ui/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-brand selection:text-brand-fg">
      <HeroSection />
      <InfiniteCarousel />
      <section id="services">
        <BentoGrid />
      </section>
      <ProjectsSection />
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
