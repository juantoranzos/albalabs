---
target: albalabs-homepage
total_score: 19
p0_count: 0
p1_count: 3
timestamp: 2026-06-08T17-56-10Z
slug: albalabs-homepage
---
## Design Health Score

| # | Heurística | Score | Problema clave |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2 | Formulario tiene loading/success, nada más |
| 2 | Match System / Real World | 1 | Jerga enterprise para audiencia PyME |
| 3 | User Control and Freedom | 2 | CTA "Ver Servicios" linkea a #services inexistente |
| 4 | Consistency and Standards | 2 | Testimonial dice "Albastudio"; radii inconsistentes |
| 5 | Error Prevention | 2 | Sin validación en tiempo real |
| 6 | Recognition Rather Than Recall | 3 | Landing page, acciones visibles |
| 7 | Flexibility and Efficiency | 2 | Anchor roto en CTA secundario |
| 8 | Aesthetic and Minimalist Design | 1 | Todo compite: gradient text en cada título, blobs en cada sección |
| 9 | Error Recovery | 2 | Form muestra error pero no valida por campo |
| 10 | Help and Documentation | 2 | Sin precios, sin portfolio real |
| **Total** | | **19/40** | **Pobre** |

## Anti-Patterns Verdict

9 anti-patterns activos: gradient text en 5 headings, paleta neon cyan+violeta, blobs en 4 secciones, bento grid idéntico, glassmorphism como default, pasos 01/02/03, íconos redondeados en cada card, hero metric template, badge ping animado.

Detector: 1 hit — border-l-4 en who-we-help-section.jsx:55.

## Priority Issues

P1: Paleta idéntica a template AI (colorize)
P1: Copy enterprise para audiencia PyME (clarify)
P1: Gradient text en 5 títulos (typeset)
P2: CTA "Ver Servicios" enlace roto — #services no existe (harden)
P2: Sin identidad visual propia — Montserrat+Inter en reflex-reject list (bolder)

## Minor Observations

Testimonial dice "Albastudio" no "AlbaLabs". GitHub href vacío en footer. Array clients declarado pero no renderizado. --cyber-blue no pasa contraste en texto normal. infinite-carousel.jsx sin usar. ID "contact" duplicado en footer y form.
