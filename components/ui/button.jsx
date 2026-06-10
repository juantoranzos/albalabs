"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const Button = React.forwardRef(({ className, variant = "primary", size = "default", children, ...props }, ref) => {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-[color,background-color,border-color,box-shadow] duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand disabled:pointer-events-none disabled:opacity-50 cursor-pointer relative overflow-hidden";

  const variants = {
    primary: "bg-brand text-brand-fg btn-glow",
    outline: "border border-border text-ink hover:border-brand/50 hover:shadow-[0_0_24px_oklch(0.72_0.18_47/0.3)]",
    ghost:   "text-ink hover:bg-ink/5",
  };

  const sizes = {
    default: "h-11 px-8 py-2",
    sm:      "h-9 rounded-md px-3",
    lg:      "h-14 rounded-md px-10 text-lg",
    icon:    "h-10 w-10",
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
