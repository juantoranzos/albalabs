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
        <section className="py-24 px-4 md:px-8 relative overflow-hidden">
            {/* Background element for depth */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[var(--radiant-violet)] rounded-full mix-blend-multiply filter blur-[128px] opacity-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
                        ¿Para quién es <span className="text-gradient-electric">AlbaLabs</span>?
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 backdrop-blur-sm">

                    <div className="space-y-6">
                        <h3 className="text-2xl font-bold text-white mb-6">Trabajamos con:</h3>
                        <ul className="space-y-4">
                            {targetAudience.map((audience, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="flex items-center gap-3 text-lg text-neutral-300"
                                >
                                    <CheckCircle2 className="w-6 h-6 text-[var(--emerald-green)] shrink-0" />
                                    {audience}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-1 bg-gradient-to-r from-[var(--cyber-blue)] to-[var(--radiant-violet)] rounded-2xl opacity-20 blur-lg"></div>
                        <div className="relative bg-black/40 border-l-4 border-[var(--cyber-blue)] p-6 md:p-8 rounded-r-xl">
                            <p className="text-xl md:text-2xl font-medium text-white leading-relaxed italic">
                                "Si buscás una solución clara, sin complejidad innecesaria, estamos para ayudarte."
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
