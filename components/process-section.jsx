"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "1",
    title: "Contanos tu idea",
    description:
      "Nos juntamos (presencial o por videollamada), entendemos tu negocio y definimos juntos qué necesitás y qué no.",
  },
  {
    number: "2",
    title: "Desarrollamos y te mostramos",
    description:
      "Trabajamos en etapas cortas con entregas semanales. Ves el avance, nos das feedback y ajustamos sobre la marcha.",
  },
  {
    number: "3",
    title: "Publicamos y te acompañamos",
    description:
      "Publicamos tu proyecto, te enseñamos a usarlo y quedamos disponibles para lo que necesites después.",
  },
];

export function ProcessSection() {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="flex flex-col md:flex-row gap-16 items-start">
          <div className="md:w-1/3 md:sticky top-24">
            <h2 className="text-4xl md:text-5xl font-bold font-display mb-6 text-ink">
              Cómo{" "}
              <span className="text-brand">trabajamos</span>
            </h2>
            <p className="text-ink-soft text-lg">
              Un proceso transparente para que sepas exactamente en qué estamos.
            </p>
          </div>

          <div className="md:w-2/3 space-y-12 relative border-l border-border pl-8 md:pl-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
                className="relative"
              >
                <span className="absolute -left-[45px] md:-left-[77px] top-0 h-7 w-7 rounded-full bg-bg border-2 border-brand flex items-center justify-center">
                  <span className="text-xs font-bold text-brand">{step.number}</span>
                </span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 text-ink">{step.title}</h3>
                <p className="text-ink-soft text-lg leading-relaxed max-w-xl">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
