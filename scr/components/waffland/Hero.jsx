import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { WHATSAPP_LINK } from "./Header";
import { Image } from "@/components/ui/image";

const HERO_IMG =
  "https://media.base44.com/images/public/6a9a3ab759ed94159d8f0699/fa559a465_generated_image.png";

const MESSAGES = [
  "Tú puedes con todo ✨",
  "Sonríe, hoy es tu día 🧡",
  "Alguien piensa en ti 💛",
  "Disfruta y sigue saboreando la vida 🍯",
];

export default function Hero() {
  const [msgIndex, setMsgIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setMsgIndex((i) => (i + 1) % MESSAGES.length), 3000);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="inicio" className="relative overflow-hidden pt-28 sm:pt-32 pb-20 sm:pb-28">
      {/* fondo: degradado cálido + patrón sutil */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-white via-[#FFF7E6] to-[#FFE9C2]" />
      <div className="absolute inset-0 -z-10 waffle-grid-soft opacity-60" />
      {/* gotas de miel decorativas */}
      <div className="absolute top-24 right-[8%] w-3 h-10 bg-[#FBB03B] rounded-full opacity-40 animate-drip" />
      <div className="absolute top-40 left-[6%] w-2.5 h-8 bg-[#FFE266] rounded-full opacity-50 animate-drip" style={{ animationDelay: "1.2s" }} />

      <div className="max-w-7xl mx-auto px-5 sm:px-8 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur px-4 py-1.5 rounded-full text-[#6E4D42] font-heading font-semibold text-sm shadow-sm border border-[#FBB03B]/30">
            <Sparkles className="w-4 h-4 text-[#FF7BAC]" />
            Hecho con amor en Colombia
          </span>

          <h1 className="mt-5 font-heading font-bold text-[#6E4D42] text-5xl sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight text-balance">
            Endúlzate con{" "}
            <span className="relative inline-block">
              <span className="text-[#FBB03B]">Waffland</span>
              <svg viewBox="0 0 200 14" className="absolute -bottom-2 left-0 w-full h-3" preserveAspectRatio="none" aria-hidden="true">
                <path d="M2 8 C 60 2, 140 2, 198 8" stroke="#FF7BAC" strokeWidth="4" fill="none" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          <p className="mt-6 font-body text-[#6E4D42]/85 text-lg sm:text-xl max-w-xl mx-auto lg:mx-0">
            Mini waffles personalizados con mensajes que alegran el día —{" "}
            <span className="font-script text-2xl text-[#FF7BAC]">para regalar o para ti.</span>
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#FBB03B] hover:bg-[#F39C12] text-[#6E4D42] font-heading font-bold text-base px-7 h-14 rounded-full transition-colors shadow-[0_10px_28px_-10px_rgba(251,176,59,0.8)]"
            >
              Pedir ahora
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#menu"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-[#FFE266]/40 text-[#6E4D42] font-heading font-bold text-base px-7 h-14 rounded-full border-2 border-[#FBB03B] transition-colors"
            >
              Ver el menú
            </a>
          </div>
        </div>

        {/* waffle flotante con mensaje rotativo */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative animate-float">
            <div className="absolute -inset-6 bg-[#FFE266]/40 blur-2xl rounded-full" />
            <div className="relative w-60 sm:w-72 aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl border-4 border-white">
              <Image
                src={HERO_IMG}
                alt="Persona disfrutando un mini waffle de Waffland"
                fittingType="fill"
                className="w-full h-full"
              />
            </div>
            {/* nota manuscrita con mensaje rotativo */}
            <div className="absolute -bottom-5 -left-4 sm:-left-8 bg-white px-5 py-3 rounded-2xl shadow-xl rotate-[-4deg] max-w-[14rem] border border-[#FBB03B]/20">
              <p key={msgIndex} className="font-script text-2xl text-[#FF7BAC] leading-tight">
                {MESSAGES[msgIndex]}
              </p>
            </div>
            {/* sticker decorativo */}
            <div className="absolute -top-4 -right-3 bg-[#FF7BAC] text-white font-heading font-bold text-xs px-3 py-1.5 rounded-full rotate-12 shadow-md">
              ¡Personalízalo!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}