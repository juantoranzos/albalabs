"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const metrics = [
  { label: "Proyectos Entregados", value: "50+" },
  { label: "Rate de Retención", value: "98%" },
  { label: "Años de Experiencia", value: "10+" },
];

export function TestimonialsSection() {
  return (
    <section className="py-24 px-4 md:px-6">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-12">
              Resultados que <span className="text-gradient-electric">Hablan</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {metrics.map((metric, i) => (
                <div key={i}>
                  <div className="text-4xl font-bold text-white mb-2">{metric.value}</div>
                  <div className="text-sm text-neutral-500 uppercase tracking-wider">{metric.label}</div>
                </div>
              ))}
            </div>
          </div>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="glass p-8 md:p-10 rounded-3xl relative"
          >
            <div className="space-y-6">
              <div className="flex gap-1">
                {[1, 2, 3, 4, 5].map(i => <Star key={i} className="w-5 h-5 fill-[var(--cyber-blue)] text-[var(--cyber-blue)]" />)}
              </div>
              <p className="text-xl md:text-2xl italic text-neutral-300 font-display">
                &quot;Albastudio no solo escribió código, redefinieron nuestra arquitectura entera. Logramos reducir el tiempo de carga en un 40% y escalar a 1M de usuarios sin fricción.&quot;
              </p>
              <div className="flex items-center gap-4 pt-4">
                <div className="w-12 h-12 rounded-full bg-neutral-800 border border-white/10 overflow-hidden" />
                <div>
                  <div className="font-bold text-white">Carlos Méndez</div>
                  <div className="text-sm text-[var(--radiant-violet)]">CTO @ FinScale</div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
