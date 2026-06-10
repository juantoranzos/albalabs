"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const services = [
  {
    title: "Sitios web que venden",
    description:
      "Una web que carga rápido, aparece en Google y convierte visitas en clientes. Incluye dominio, hosting y un año de soporte.",
    featured: true,
    className: "md:col-span-2",
  },
  {
    title: "Desarrollo a medida",
    description:
      "Desde una tienda online hasta un sistema de gestión propio. Lo construimos pensando en cómo trabaja tu negocio, no en un template genérico.",
    className: "md:col-span-1",
  },
  {
    title: "Automatizaciones",
    description:
      "Conectamos tus herramientas para que dejes de copiar datos a mano: WhatsApp, planillas, formularios, mails — todo en un flujo.",
    className: "md:col-span-1",
  },
  {
    title: "Tu web aguanta el pico",
    description:
      "Cuando salga tu próxima promo y entren todos, tu sitio no se cae. Lo preparamos para que aguante sin que tengas que pensar en eso.",
    className: "md:col-span-1",
  },
  {
    title: "Soporte y crecimiento",
    description:
      "Actualizamos, optimizamos y resolvemos lo que necesites. Sin contratos por año ni letras chicas.",
    className: "md:col-span-1",
  },
];

export function BentoGrid() {
  return (
    <section className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 text-ink">
            Qué hacemos por{" "}
            <span className="text-brand">tu negocio</span>
          </h2>
          <p className="text-ink-soft text-lg">
            Diseñamos la solución que necesitás, no la que está de moda.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {services.map((service, index) => (
            <motion.a
              href="#contact"
              key={index}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.07, ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
              whileHover={{ y: -4, transition: { ease: [0.22, 1, 0.36, 1], duration: 0.18 } }}
              className={cn(
                "rounded-xl p-8 block cursor-pointer group",
                service.featured
                  ? "bg-brand hover:bg-brand-ink transition-colors duration-150"
                  : "panel hover:border-brand/50 hover:shadow-[0_16px_48px_oklch(0_0_0/0.5)] transition-[border-color,box-shadow] duration-150",
                service.className
              )}
            >
              <h3
                className={cn(
                  "text-xl font-bold mb-3 transition-colors",
                  service.featured ? "text-brand-fg text-2xl" : "text-ink"
                )}
              >
                {service.title}
              </h3>
              <p
                className={cn(
                  "leading-relaxed",
                  service.featured ? "text-brand-fg/80" : "text-ink-soft"
                )}
              >
                {service.description}
              </p>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
