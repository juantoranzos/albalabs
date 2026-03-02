import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

export const metadata = {
  title: "AlbaStudio | Logic to Experience",
  description: "Boutique software consultancy transforming complex logic into impeccable digital experiences.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={cn(
          inter.variable,
          montserrat.variable,
          "antialiased min-h-screen bg-background text-foreground"
        )}
      >
        {children}
      </body>
    </html>
  );
}
