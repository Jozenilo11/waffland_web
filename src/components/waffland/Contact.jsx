import React from "react";
import { MessageCircle, Instagram, MapPin, Clock } from "lucide-react";
import { WHATSAPP_LINK } from "./Header";
import { FaWhatsapp } from "react-icons/fa";

export const INSTAGRAM_LINK = "https://instagram.com/waffland";

export default function Contact() {
  return (
    <section id="contacto" className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFE9C2] to-[#FFF7E6]">
      <div className="max-w-5xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-script text-3xl text-[#FBB03B]">Hablemos</span>
          <h2 className="mt-1 font-heading font-bold text-[#6E4D42] text-4xl sm:text-5xl text-balance">
            Pide tu Waffland
          </h2>
          <p className="mt-4 text-[#6E4D42]/80 text-lg">
            Escríbenos y cuéntanos qué quieres decir. Nosotros nos encargamos del resto.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 gap-5">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#25D366] rounded-[1.75rem] p-7 text-white hover:-translate-y-1 transition-transform shadow-lg"
          >
            <FaWhatsapp className="w-9 h-9 mb-3" />
            <h3 className="font-heading font-bold text-2xl">WhatsApp</h3>
            <p className="mt-1 text-white/90">Cuéntanos tu pedido y tu mensaje. Te respondemos al instante.</p>
            <span className="mt-4 inline-flex items-center gap-1 font-heading font-semibold text-sm group-hover:gap-2 transition-all">
              Escribir ahora →
            </span>
          </a>

          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-gradient-to-br from-[#FF7BAC] to-[#F478F4] rounded-[1.75rem] p-7 text-white hover:-translate-y-1 transition-transform shadow-lg"
          >
            <Instagram className="w-9 h-9 mb-3" />
            <h3 className="font-heading font-bold text-2xl">Instagram</h3>
            <p className="mt-1 text-white/90">Mira nuestras creaciones y déjate inspirar para el tuyo.</p>
            <span className="mt-4 inline-flex items-center gap-1 font-heading font-semibold text-sm group-hover:gap-2 transition-all">
              @waffland →
            </span>
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 gap-5">
          <div className="bg-white rounded-2xl p-5 flex items-start gap-3 border border-[#FBB03B]/20">
            <MapPin className="w-5 h-5 text-[#FBB03B] mt-0.5" />
            <div>
              <p className="font-heading font-bold text-[#6E4D42]">Medellín, Colombia</p>
              <p className="text-sm text-[#6E4D42]/70">Hacemos entregas en la ciudad y envíos a otras ciudades.</p>
            </div>
          </div>
          <div className="bg-white rounded-2xl p-5 flex items-start gap-3 border border-[#FBB03B]/20">
            <Clock className="w-5 h-5 text-[#FBB03B] mt-0.5" />
            <div>
              <p className="font-heading font-bold text-[#6E4D42]">Lun a Sáb · 9am – 7pm</p>
              <p className="text-sm text-[#6E4D42]/70">Pide con un día de anticipación para personalizar tu mensaje.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}