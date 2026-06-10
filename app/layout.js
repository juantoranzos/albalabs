import { Bricolage_Grotesque, Hanken_Grotesk } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  display: "swap",
  weight: ["600", "700", "800"],
});

const hanken = Hanken_Grotesk({
  variable: "--font-hanken",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "AlbaLabs — Sitios web y automatizaciones para tu negocio",
  description:
    "Hacemos sitios web profesionales y automatizaciones a medida para PyMEs y emprendedores de Argentina y Uruguay. Claro, rápido y sin vueltas.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={cn(
          bricolage.variable,
          hanken.variable,
          "antialiased min-h-screen bg-background text-foreground"
        )}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
