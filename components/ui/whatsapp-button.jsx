"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export function WhatsAppButton() {
  const phoneNumber = "5493838602382";
  const message = "Hola! Me gustaría recibir más información sobre sus servicios web.";
  const waLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <motion.a
      href={waLink}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1.2 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.92 }}
      className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center p-4 rounded-full bg-[#25D366] text-white shadow-lg cursor-pointer group"
      aria-label="Chateá con nosotros por WhatsApp"
    >
      <FaWhatsapp className="w-8 h-8" />

      <div className="absolute right-full mr-4 bg-ink text-bg px-4 py-2 rounded-lg text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md">
        Chateá con nosotros
      </div>
    </motion.a>
  );
}
