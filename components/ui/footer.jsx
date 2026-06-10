import { Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-bg">
      <div className="max-w-6xl mx-auto w-full px-4 md:px-8">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-ink-soft text-sm">
            © {new Date().getFullYear()} AlbaLabs. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <a
              href="https://www.instagram.com/albalabs_/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-soft hover:text-brand transition-colors"
              aria-label="Instagram de AlbaLabs"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
