"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import nextlevel from "@/public/nextlevel.webp"
import construccionesciviles from "@/public/construccionesciviles.webp"
import qarta from "@/public/qartaportada.webp"

const projects = [
  {
    name: "Construcciones Civiles",
    type: "Sitio Institucional",
    description:
      "Sitio web institucional para empresa contratista con proyectos en el sector minero del NOA. Incluye presentación de proyectos realizados, servicios ofrecidos y formulario de contacto.",
    image: construccionesciviles,           // reemplazar con: "/projects/construcciones-civiles.png"
    url: "https://construccionesciviles.com",             // reemplazar con: "https://construccionesciviles.com"
    accent: "oklch(0.55 0.14 160)", // verde-construcción como acento de tarjeta
  },
  {
    name: "Next Level Argentina",
    type: "E-commerce",
    description:
      "Una tienda online lista para vender todos los días: catálogo fácil de recorrer, compra rápida desde cualquier dispositivo y cobros seguros con Mercado Pago.",
    image: nextlevel,           // reemplazar con: "/projects/next-level.png"
    url: "https://nextlevelargentina.store",             // reemplazar con: "https://nextlevel.com"
    accent: "oklch(0.65 0.16 260)", // azul-eléctrico como acento de tarjeta
  },
    {
    name: "Qarta",
    type: "SaaS de cartas digitales para negocios.",
    description:
      "Producto propio de AlbaLabs: menú digital por QR y NFC para restaurantes, bares y cafeterías. Los clientes ven la carta desde el celular y el negocio actualiza productos y precios al instante, sin reimprimir nada.",
    image: qarta,           // reemplazar con: "/projects/next-level.png"
    url: "https://qartaqr.com",             // reemplazar con: "https://nextlevel.com"
    accent: "oklch(0.65 0.16 25)", // azul-eléctrico como acento de tarjeta
  }
];

function ProjectCard({ project, index }) {
  const cardContent = (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.12, ease: [0.22, 1, 0.36, 1], duration: 0.5 }}
      whileHover={{ y: -4, transition: { ease: [0.22, 1, 0.36, 1], duration: 0.18 } }}
      className="panel overflow-hidden group cursor-pointer transition-[border-color,box-shadow] duration-150 hover:border-border/80"
    >
      {/* Image area */}
      <div
        className="relative w-full aspect-[16/9] overflow-hidden group/img"
        style={{ background: `${project.accent}18` }}
      >
        {project.image ? (
          <Image
            src={project.image}
            alt={`Screenshot del proyecto ${project.name}`}
            fill
            className="object-cover object-top grayscale group-hover/img:grayscale-0 transition-[filter,transform] duration-500 group-hover:scale-[1.03]"
          />
        ) : (
          /* Placeholder hasta tener screenshot real */
          <div className="w-full h-full flex items-center justify-center">
            <span
              className="text-5xl font-bold font-display opacity-20 select-none"
              style={{ color: project.accent }}
            >
              {project.name.charAt(0)}
            </span>
            <div
              className="absolute bottom-4 right-4 text-xs font-medium px-2 py-1 rounded border opacity-40"
              style={{ color: project.accent, borderColor: project.accent }}
            >
              Imagen próximamente
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: project.accent }}
            >
              {project.type}
            </p>
            <h3 className="text-xl font-bold text-ink mb-3 font-display">
              {project.name}
            </h3>
            <p className="text-ink-soft text-sm leading-relaxed">
              {project.description}
            </p>
          </div>
          {project.url && (
            <ArrowUpRight
              className="w-5 h-5 flex-shrink-0 mt-1 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ color: project.accent }}
            />
          )}
        </div>
      </div>
    </motion.div>
  );

  if (project.url) {
    return (
      <a href={project.url} target="_blank" rel="noopener noreferrer">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}

export function ProjectsSection() {
  return (
    <section id="projects" className="py-24 px-4 md:px-8">
      <div className="max-w-6xl mx-auto w-full">
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4 text-ink">
            Nuestros <span className="text-brand">proyectos</span>
          </h2>
          <p className="text-ink-soft text-lg max-w-xl">
            Casos reales de empresas a las que ayudamos a tener presencia digital.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.name} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
