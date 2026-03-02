"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant = "primary", size = "default", children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 cursor-pointer relative overflow-hidden";
  
  const variants = {
    primary: "bg-white text-black hover:bg-neutral-200 border border-transparent shadow-[0_0_10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.5)]",
    outline: "border border-white/20 hover:bg-white/10 text-white backdrop-blur-sm",
    ghost: "hover:bg-white/10 text-white",
    electric: "bg-gradient-to-r from-[var(--cyber-blue)] to-[var(--radiant-violet)] text-white hover:opacity-90 shadow-[0_0_15px_var(--cyber-blue)] hover:shadow-[0_0_30px_var(--radiant-violet)] border-none"
  };

  const sizes = {
    default: "h-11 px-8 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-14 rounded-md px-10 text-lg",
    icon: "h-10 w-10",
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </motion.button>
  );
});
Button.displayName = "Button";

export { Button };
