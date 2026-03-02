"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";


export function WhatsAppButton() {
    // Reemplaza esto con el número de WhatsApp deseado, sin el símbolo +
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
            transition={{ type: "spring", stiffness: 260, damping: 20, delay: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 flex items-center justify-center p-4 rounded-full bg-[#25D366] text-white shadow-lg cursor-pointer overflow-hidden group hover:shadow-[#25D366]/50 transition-shadow duration-300"
            aria-label="Chat on WhatsApp"
        >
            {/* Ping animation effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-75 group-hover:hidden"></span>

            <FaWhatsapp className="w-8 h-8 relative z-10" />

            {/* Optional tooltip */}
            <div className="absolute right-full mr-4 bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-xl text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap border border-white/20">
                Chateá con nosotros
            </div>
        </motion.a>
    );
}
