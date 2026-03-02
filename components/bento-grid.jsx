"use client";

import { motion } from "framer-motion";
import { Globe, Smartphone, Cloud, Bot, Timer, Computer } from "lucide-react";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Landing Pages",
    description: "Sitios web modernos, rápidos y optimizados para mostrar tu negocio y generar clientes.",
    icon: Globe,
    className: "md:col-span-2",
    gradient: "from-[var(--cyber-blue)]/20 to-transparent",
  },
  {
    title: "Desarrollo Web",
    description: "Sitios web completos, e-commerce, plataformas y sistemas a medida con las tecnologías más modernas del mercado.",
    icon: Computer,
    className: "md:col-span-1",
    gradient: "from-[var(--radiant-violet)]/20 to-transparent",
  },
  {
    title: "Automatizamos procesos",
    description: "Infraestructura escalable, segura y serverless. AWS, Azure, Docker, Kubernetes.",
    icon: Cloud,
    className: "md:col-span-1",
    gradient: "from-[var(--emerald-green)]/20 to-transparent",
  },
  {
    title: "Escalabilidad y Rendimiento",
    description: "Sistemas listos para crecer sin perder rendimiento.",
    icon: Timer,
    className: "md:col-span-1",
    gradient: "from-[var(--emerald-green)]/20 to-transparent",
  },
  {
    title: "Mantenimiento y Soporte",
    description: "Mantenimiento y soporte para sitios web y aplicaciones.",
    icon: Smartphone,
    className: "md:col-span-1",
    gradient: "from-[var(--emerald-green)]/20 to-transparent",
  },
];

export function BentoGrid() {
  return (
    <section className="py-24 px-4 md:px-6 relative">
      <div className="container mx-auto">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Soluciones para <span className="text-gradient-electric">Desafíos Modernos</span>
          </h2>
          <p className="text-neutral-400 text-lg">
            Diseñamos la solucion que tu negocio necesita.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {services.map((service, index) => (
            <motion.a
              href="#contact"
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: "spring", stiffness: 300 }}
              whileHover={{ scale: 1.05, rotateX: 2, rotateY: 2, z: 10 }}
              className={cn(
                "glass rounded-3xl p-8 relative overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--cyber-blue)]/20 cursor-pointer block transform-gpu perspective-1000",
                service.className
              )}
            >
              {/* Subtle Gradient Background */}
              <div
                className={cn(
                  "absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500",
                  service.gradient
                )}
              />

              <div className="relative z-10 h-full flex flex-col justify-between">
                <div>
                  <div className="mb-4 p-3 bg-white/5 w-fit rounded-2xl group-hover:bg-white/10 transition-colors">
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-neutral-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
