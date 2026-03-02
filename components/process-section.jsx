"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Contanos tu idea",
    description: "Inmersión profunda en tu negocio. Entendemos tu visión y definimos el plan de acción.",
  },
  {
    number: "02",
    title: "Desarrollo Ágil",
    description: "Desarrollo iterativo con entregables semanales. Feedback continuo y transparencia total.",
  },
  {
    number: "03",
    title: "Lanzamiento y Escala",
    description: "Lanzamiento robusto con CI/CD automatizado, monitoreo y soporte post-lanzamiento.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 px-4 md:px-8 bg-neutral-900/30">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 sticky top-24">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
              Nuestro <br />
              <span className="text-gradient">Proceso</span>
            </h2>
            <p className="text-neutral-400 text-lg">
              Un flujo de trabajo transparente diseñado para la velocidad y la calidad.
            </p>
          </div>

          <div className="md:w-2/3 space-y-12 relative border-l border-white/10 pl-8 md:pl-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <span className="absolute -left-[45px] md:-left-[77px] top-0 h-4 w-4 rounded-full bg-[var(--background)] border-2 border-[var(--cyber-blue)]" />
                <div className="text-sm font-bold text-[var(--cyber-blue)] mb-2 tracking-widest">{step.number}</div>
                <h3 className="text-2xl md:text-3xl font-bold mb-4">{step.title}</h3>
                <p className="text-neutral-400 text-lg leading-relaxed max-w-xl">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
