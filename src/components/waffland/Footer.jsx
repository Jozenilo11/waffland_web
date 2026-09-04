import React from "react";
import { Instagram, MessageCircle, Heart } from "lucide-react";
import WafflandLogo from "./WafflandLogo";
import { WHATSAPP_LINK } from "./Header";
import { INSTAGRAM_LINK } from "./Contact";

const NAV = [
  { label: "Inicio", href: "#inicio" },
  { label: "Menú", href: "#menu" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Cómo funciona", href: "#como-funciona" },
  { label: "Contacto", href: "#contacto" },
];

export default function Footer() {
  return (
    <footer className="bg-[#6E4D42] text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="bg-white/95 inline-block px-4 py-2 rounded-2xl">
              <WafflandLogo onLight={false} />
            </div>
            <p className="mt-4 text-white/80 max-w-xs">
              Mini waffles personalizados con mensajes que alegran el día. Para regalar o para ti.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#25D366] flex items-center justify-center transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href={INSTAGRAM_LINK}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="w-11 h-11 rounded-full bg-white/10 hover:bg-[#FF7BAC] flex items-center justify-center transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Navegación</h4>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="text-white/80 hover:text-[#FBB03B] transition-colors">
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Pídemos</h4>
            <p className="text-white/80 mb-3">Escríbenos tu mensaje y lo hacemos realidad.</p>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FBB03B] text-[#6E4D42] font-heading font-bold px-5 h-12 rounded-full hover:bg-[#F39C12] transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              Pedir por WhatsApp
            </a>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/60 text-sm">© {new Date().getFullYear()} Waffland. Todos los derechos reservados.</p>
          <p className="font-script text-2xl text-[#FFE266] flex items-center gap-2">
            Hecho con <Heart className="w-4 h-4 text-[#FF7BAC] fill-[#FF7BAC]" /> en Colombia para el mundo
          </p>
        </div>
      </div>
    </footer>
  );
}