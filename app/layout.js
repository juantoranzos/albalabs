import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { WhatsAppButton } from "@/components/ui/whatsapp-button";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "AlbaLabs",
  description: "AlbaLabs es una consultora de software especializada en desarrollo web moderno, aplicaciones SaaS y soluciones digitales a medida para empresas que buscan escalar.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={cn(
          inter.variable,
          montserrat.variable,
          "antialiased min-h-screen bg-background text-foreground"
        )}
      >
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
