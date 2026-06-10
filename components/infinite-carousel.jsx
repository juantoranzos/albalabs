"use client";

export const projectTypes = [
  { id: 1, name: "E-Commerce" },
  { id: 2, name: "Landing Pages" },
  { id: 3, name: "Sistemas a Medida" },
  { id: 4, name: "Aplicaciones Web" },
  { id: 5, name: "Automatizaciones" },
  { id: 6, name: "Integraciones API" },
  { id: 7, name: "Portfolio Personal" },
  { id: 8, name: "Dashboards" },
];

export function InfiniteCarousel() {
  return (
    <div className="py-14 overflow-hidden relative w-full flex flex-col items-center border-y border-border">
      <p className="text-center mb-8 text-sm text-ink-soft font-medium tracking-wide">
        Tipos de proyectos que realizamos
      </p>

      <div className="relative flex max-w-[100vw] overflow-hidden">
        {/* Left fade */}
        <div className="absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-bg to-transparent" />

        <div className="flex gap-4 sm:gap-5 w-max animate-scroll">
          {[...projectTypes, ...projectTypes, ...projectTypes, ...projectTypes].map((project, index) => (
            <div
              key={`${project.id}-${index}`}
              className="panel px-5 py-3 rounded-full whitespace-nowrap min-w-max cursor-default hover:border-brand transition-colors"
            >
              <span className="text-sm font-medium text-ink">{project.name}</span>
            </div>
          ))}
        </div>

        {/* Right fade */}
        <div className="absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-bg to-transparent" />
      </div>
    </div>
  );
}
