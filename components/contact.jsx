"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Loader2, CheckCircle } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    service: "",
    message: "",
  });

  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Algo salió mal.");

      setStatus("success");
      setFormData({ name: "", email: "", service: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
      setErrorMessage(error.message);
    }
  };

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4 text-ink">
            Empecemos tu{" "}
            <span className="text-brand">próximo proyecto</span>
          </h2>
          <p className="text-ink-soft text-lg">
            Completá el formulario y te respondemos a la brevedad.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="panel p-8 md:p-12"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
              <CheckCircle className="w-14 h-14 text-brand mb-4" />
              <h3 className="text-2xl font-bold text-ink">¡Mensaje enviado!</h3>
              <p className="text-ink-soft">Gracias por escribirnos. Te respondemos pronto.</p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 px-6 py-2 border border-border rounded-full text-ink-soft hover:bg-surface-2 transition-colors"
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-ink-soft">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-brand transition-colors"
                    placeholder="Juan Baez"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-ink-soft">
                    Correo electrónico
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-brand transition-colors"
                    placeholder="juan@empresa.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="service" className="text-sm font-medium text-ink-soft">
                  ¿Qué necesitás?
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-ink focus:outline-none focus:border-brand transition-colors appearance-none"
                >
                  <option value="">Seleccioná una opción…</option>
                  <option value="Landing Page">Sitio web / Landing Page</option>
                  <option value="E-Commerce">Tienda Online</option>
                  <option value="Desarrollo a Medida">Sistema o App a Medida</option>
                  <option value="Automatizacion">Automatización de procesos</option>
                  <option value="Consultoria">Consultoría / Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-ink-soft">
                  Contanos más sobre tu idea
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-bg border border-border rounded-lg px-4 py-3 text-ink placeholder:text-ink-soft/50 focus:outline-none focus:border-brand transition-colors resize-none"
                  placeholder="Mi negocio necesita…"
                />
              </div>

              {status === "error" && (
                <p className="text-red-400 text-sm">{errorMessage}</p>
              )}

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-brand text-brand-fg font-semibold rounded-lg px-6 py-4 hover:bg-brand-ink transition-colors disabled:opacity-60 flex items-center justify-center gap-2"
              >
                {status === "loading" ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Enviando…
                  </>
                ) : (
                  <>
                    Enviar mensaje
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
