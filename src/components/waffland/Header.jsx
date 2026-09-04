import React, { useState, useEffect } from "react";
import { Menu as MenuIcon, X, MessageCircle } from "lucide-react";
import WafflandLogo from "./WafflandLogo";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Menú", href: "#menu" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Contacto", href: "#contacto" },
];

export const WHATSAPP_NUMBER = "573001234567"; // reemplazar con número real de Waffland
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "¡Hola Waffland! Quiero pedir unos mini waffles personalizados 🧡"
)}`;

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-md shadow-[0_4px_24px_-12px_rgba(110,77,66,0.35)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#inicio" className="shrink-0">
          <WafflandLogo />
        </a>

        <nav className="hidden md:flex items-center gap-7">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="font-body font-semibold text-[0.95rem] text-[#6E4D42] hover:text-[#FBB03B] transition-colors relative group"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 group-hover:w-full h-[3px] rounded-full bg-[#FBB03B] transition-all duration-300" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1eb855] text-white font-heading font-semibold text-sm px-5 h-12 rounded-full transition-colors shadow-[0_6px_18px_-8px_rgba(37,211,102,0.7)]"
          >
            <MessageCircle className="w-4 h-4" />
            Pedir por WhatsApp
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#FFE266] text-[#6E4D42]"
            aria-label="Abrir menú"
          >
            {open ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* menú móvil */}
      {open && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-t border-[#FBB03B]/30">
          <nav className="px-5 py-4 flex flex-col gap-1">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-body font-semibold text-[#6E4D42] hover:bg-[#FFE266]/50 rounded-xl px-4 py-3 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-heading font-semibold px-5 h-12 rounded-full"
            >
              <MessageCircle className="w-4 h-4" />
              Pedir por WhatsApp
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}