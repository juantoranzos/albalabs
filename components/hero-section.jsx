"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden pt-20"
      style={{
        backgroundImage:
          "radial-gradient(ellipse 80% 65% at 50% 45%, oklch(0.24 0 0) 0%, oklch(0.09 0 0) 75%)",
      }}
    >
      <div className="max-w-6xl mx-auto relative z-10 px-4 md:px-8 w-full flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-surface text-sm text-ink-soft transition-[border-color,box-shadow,color] duration-200 hover:border-brand/50 hover:text-ink hover:shadow-[0_0_24px_oklch(0.72_0.18_47/0.3)]">
            <span className="h-2 w-2 rounded-full bg-brand flex-shrink-0" />
            Aceptando nuevos proyectos
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight font-display leading-[1.1] text-ink">
            Desarrollamos sitios web{" "}
            <span className="text-brand">y sistemas que ordenan tu negocio</span>
          </h1>

          <p className="text-xl md:text-2xl text-ink-soft max-w-2xl mx-auto leading-relaxed">
            Páginas web profesionales y automatizaciones a medida
            para empresas que quieren verse mejor, trabajar más rápido y sin caos.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Link href="#contact">
              <Button variant="primary" size="lg">
                Hablemos de tu proyecto <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <Link href="#services">
              <Button variant="outline" size="lg">
                Ver servicios
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
