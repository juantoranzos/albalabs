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

    const [status, setStatus] = useState("idle"); // idle, loading, success, error
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
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Algo salió mal.");
            }

            setStatus("success");
            setFormData({ name: "", email: "", service: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
            setErrorMessage(error.message);
        }
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden bg-background">
            {/* Background Effects */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--radiant-violet)] rounded-full mix-blend-multiply filter blur-[150px] opacity-10 pointer-events-none" />

            <div className="max-w-6xl mx-auto w-full relative z-10 px-4 md:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold font-display tracking-tight mb-4">
                        Empecemos tu <span className="text-gradient-electric">próximo proyecto</span>
                    </h2>
                    <p className="text-neutral-400 text-lg">
                        Completa el formulario y nos pondremos en contacto contigo a la brevedad.
                    </p>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="glass p-8 md:p-12 rounded-2xl relative"
                >
                    {status === "success" ? (
                        <div className="flex flex-col items-center justify-center py-16 text-center space-y-4">
                            <CheckCircle className="w-16 h-16 text-[var(--emerald-green)] mb-4" />
                            <h3 className="text-2xl font-bold text-white">¡Mensaje enviado!</h3>
                            <p className="text-neutral-400">Gracias por escribirnos. Te responderemos pronto.</p>
                            <button
                                onClick={() => setStatus("idle")}
                                className="mt-6 px-6 py-2 border border-white/20 rounded-full hover:bg-white/5 transition-colors"
                            >
                                Enviar otro mensaje
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium text-neutral-300">
                                        Nombre Completo
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        required
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--cyber-blue)] transition-colors"
                                        placeholder="Juan Baez"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-neutral-300">
                                        Correo Electrónico
                                    </label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        required
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--cyber-blue)] transition-colors"
                                        placeholder="juan@empresa.com"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="service" className="text-sm font-medium text-neutral-300">
                                    Servicio de Interés
                                </label>
                                <select
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-neutral-300 focus:outline-none focus:border-[var(--cyber-blue)] transition-colors appearance-none"
                                >
                                    <option value="">Selecciona una opción...</option>
                                    <option value="Landing Page">Landing Page</option>
                                    <option value="E-Commerce">E-Commerce</option>
                                    <option value="Desarrollo a Medida">Sistemas a Medida / App Web</option>
                                    <option value="Consultoria">Consultoría / Otro</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-neutral-300">
                                    Cuéntanos más sobre tu idea
                                </label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-black/40 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-[var(--cyber-blue)] transition-colors resize-none"
                                    placeholder="Mi negocio necesita..."
                                />
                            </div>

                            {status === "error" && (
                                <p className="text-red-400 text-sm">{errorMessage}</p>
                            )}

                            <button
                                type="submit"
                                disabled={status === "loading"}
                                className="w-full relative overflow-hidden group bg-white text-black font-semibold rounded-lg px-6 py-4 transition-transform hover:scale-[1.02] active:scale-[0.98] disabled:opacity-70 disabled:hover:scale-100 flex items-center justify-center gap-2"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-[var(--cyber-blue)] to-[var(--radiant-violet)] opacity-0 group-hover:opacity-10 transition-opacity" />
                                {status === "loading" ? (
                                    <>
                                        <Loader2 className="w-5 h-5 animate-spin" />
                                        Enviando...
                                    </>
                                ) : (
                                    <>
                                        Enviar Mensaje
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