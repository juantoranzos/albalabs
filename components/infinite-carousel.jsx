"use client";

import { motion } from "framer-motion";

// Aquí tienes el objeto editable con los tipos de proyectos.
// Puedes agregar o sacar items fácilmente adaptándolo a tus necesidades.
export const projectTypes = [
    { id: 1, name: "E-Commerce", icon: "🛍️" },
    { id: 2, name: "Landing Pages", icon: "🚀" },
    { id: 3, name: "Sistemas a Medida", icon: "⚙️" },
    { id: 4, name: "Aplicaciones Web", icon: "💻" },
    { id: 5, name: "Automatizaciones", icon: "🤖" },
    { id: 6, name: "Integraciones API", icon: "🔗" },
    { id: 7, name: "Portfolio Personal", icon: "🎨" },
    { id: 8, name: "Dashboards", icon: "📊" },
];

export function InfiniteCarousel() {
    return (
        <div className="py-20 overflow-hidden relative w-full bg-background flex flex-col items-center">
            {/* Glow effects for aesthetics */}
            <div className="absolute top-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--cyber-blue)] to-transparent opacity-30"></div>
            <div className="absolute bottom-0 w-full h-px bg-gradient-to-r from-transparent via-[var(--radiant-violet)] to-transparent opacity-30"></div>

            <div className="text-center mb-10 text-sm md:text-base text-neutral-400 uppercase tracking-widest font-medium">
                Tipos de Proyectos que Realizamos
            </div>

            <div className="relative flex max-w-[100vw] overflow-hidden">
                {/* Left Fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-r from-background to-transparent"></div>

                {/* Carousel Track */}
                <div className="flex gap-4 sm:gap-6 w-max animate-scroll">
                    {/* We map twice (or more) to create the infinite scroll illusion */}
                    {[...projectTypes, ...projectTypes, ...projectTypes, ...projectTypes].map((project, index) => (
                        <div
                            key={`${project.id}-${index}`}
                            className="glass px-6 py-4 rounded-xl flex items-center gap-3 transition-colors hover:border-[var(--cyber-blue)] hover:bg-white/10 group cursor-pointer whitespace-nowrap min-w-max"
                        >
                            <span className="text-2xl group-hover:scale-110 transition-transform duration-300">
                                {project.icon}
                            </span>
                            <span className="text-lg font-medium text-foreground tracking-wide group-hover:text-[var(--cyber-blue)] transition-colors duration-300">
                                {project.name}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Right Fade */}
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 bg-gradient-to-l from-background to-transparent"></div>
            </div>
        </div>
    );
}
