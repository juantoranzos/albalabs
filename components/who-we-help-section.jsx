"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const targetAudience = [
  "Pymes",
  "Emprendedores",
  "Negocios Locales",
  "Profesionales Independientes",
  "Instituciones Pequeñas",
];

export function WhoWeHelpSection() {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-ink">
            ¿Para quién es{" "}
            <span className="text-brand">AlbaLabs</span>?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center panel p-8 md:p-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-ink mb-6">Trabajamos con:</h3>
            <ul className="space-y-4">
              {targetAudience.map((audience, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="flex items-center gap-3 text-lg text-ink"
                >
                  <CheckCircle2 className="w-5 h-5 text-brand flex-shrink-0" />
                  {audience}
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="bg-brand/10 border border-brand/25 rounded-xl p-6 md:p-8">
            <p className="text-xl md:text-2xl font-medium text-ink leading-relaxed">
              "Si buscás una solución clara, sin complejidad innecesaria, estamos para ayudarte."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
