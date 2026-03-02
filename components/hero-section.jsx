"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Cpu, Globe, Rocket, Claude, Cloud } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const techLogos = [
  { name: "React", Icon: Code },
  { name: "Next.js", Icon: Globe },
  { name: "AWS", Icon: Cpu },
  { name: "Supabase", Icon: Rocket }, // Placeholder icons for now
];

const clients = ["Construcciones Civiles", "Nexus", "Next Level", "El Ocio", "The garden boys"];

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20">
      {/* Background Particles (Simplified for performance) */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--cyber-blue)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--radiant-violet)] rounded-full mix-blend-multiply filter blur-[128px] opacity-20 animate-pulse delay-700" />
      </div>

      <div className="container relative z-10 px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 backdrop-blur-sm text-sm text-[var(--cyber-blue)]">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--cyber-blue)] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--cyber-blue)]"></span>
            </span>
            Aceptando nuevos proyectos
          </div>

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight font-display leading-[1.1]">
            Desarrollamos sitios web <span className="text-gradient-electric"> y sistemas que ordenan tu negocio</span>
          </h1>

          <p className="text-xl md:text-2xl text-neutral-400 max-w-2xl mx-auto leading-relaxed">
            Páginas web profesionales y automatizaciones a medida
            para empresas que quieren verse mejor, trabajar más rápido y sin caos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 mb-20">
            <Link href="#contact">
              <Button variant="electric" size="lg">
                Hablemos de tu proyecto <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="outline" size="lg">
                Ver Servicios
              </Button>
            </Link>
          </div>
        </motion.div>

        {/* Social Proof */}

      </div>
    </section>
  );
}
