import React, { useState } from "react";
import { MessageCircle } from "lucide-react";
import { Image } from "@/components/ui/image";
import { WHATSAPP_LINK } from "./Header";
import { FaWhatsapp } from "react-icons/fa";

const PRODUCTS = [
  {
    name: "Fresura",
    desc: "Fresas frescas con chocolate. Para quien merece un abrazo dulce.",
    note: "Ideal para esa amiga que necesita un abrazo hoy.",
    img: "https://media.base44.com/images/public/6a9a3ab759ed94159d8f0699/50ecb885e_generated_c1ff627c.jpg",
    color: "#FF7BAC",
  },
  {
    name: "Miel & Banana",
    desc: "Miel de abeja con rodajas de banana. Energía para empezar el día.",
    note: "Para darte un capricho de buena energía.",
    img: "https://media.base44.com/images/public/6a9a3ab759ed94159d8f0699/572eb6c2d_generated_5611fbdc.jpg",
    color: "#FFE266",
  },
  {
    name: "Chocofan",
    desc: "Chocolate oscuro con azúcar glas. El clásico que nunca falla.",
    note: "Para los días que piden chocolate sin pretextos.",
    img: "https://media.base44.com/images/public/6a9a3ab759ed94159d8f0699/8d205ac16_generated_1ae0e16d.jpg",
    color: "#88AFDE",
  },
  {
    name: "Rosadito",
    desc: "Frosting rosa y confites. Puramente alegría en cada bocado.",
    note: "Para celebrar a alguien que te hace feliz.",
    img: "https://media.base44.com/images/public/6a9a3ab759ed94159d8f0699/99e6d4509_generated_b8233f60.jpg",
    color: "#F478F4",
  },
];

export default function Menu() {
  const [hovered, setHovered] = useState(null);

  return (
    <section id="menu" className="relative py-20 sm:py-28 bg-gradient-to-b from-[#FFF7E6] to-[#FFE9C2] overflow-hidden">
      <div className="absolute inset-0 waffle-grid-soft opacity-40" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-script text-3xl text-[#FF7BAC]">¿Se te antoja algo dulce?</span>
          <h2 className="mt-1 font-heading font-bold text-[#6E4D42] text-4xl sm:text-5xl text-balance">
            Nuestro menú
          </h2>
          <p className="mt-4 text-[#6E4D42]/80 text-lg">
            Cada waffle se personaliza con el mensaje que tú elijas. Elige tu favorito y dímelo por WhatsApp.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-6">
          {PRODUCTS.map((p, i) => (
            <div
              key={p.name}
              className="group relative"
              style={{ marginTop: i % 2 === 1 ? "1.5rem" : "0" }}
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
            >
              <div className="relative">
                <div
                  className="relative aspect-square overflow-hidden squircle shadow-lg border-4 border-white transition-transform duration-300 group-hover:-translate-y-2 animate-wobble"
                  style={{ animationDelay: `${i * 0.6}s` }}
                >
                  <Image
                    src={p.img}
                    alt={`Mini waffle ${p.name}`}
                    fittingType="fill"
                    className="w-full h-full"
                  />
                </div>
                {/* nota manuscrita al hover */}
                <div
                  className={`absolute -left-2 top-1/2 -translate-y-1/2 -rotate-6 bg-white px-3 py-2 rounded-xl shadow-lg max-w-[8rem] transition-all duration-300 z-10 ${
                    hovered === i ? "opacity-100 -translate-x-1" : "opacity-0 -translate-x-3 pointer-events-none"
                  }`}
                >
                  <p className="font-script text-lg text-[#FF7BAC] leading-tight">{p.note}</p>
                </div>
              </div>

              <div className="mt-5 text-center">
                <h3 className="font-heading font-bold text-[#6E4D42] text-xl">{p.name}</h3>
                <p className="mt-1 text-sm text-[#6E4D42]/70 leading-snug max-w-[16rem] mx-auto">{p.desc}</p>
                <span
                  className="inline-block mt-3 px-3 py-1 rounded-full text-xs font-heading font-semibold"
                  style={{ backgroundColor: p.color, color: "#6E4D42" }}
                >
                  Personalizable
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#1eb855] text-white font-heading font-bold text-base px-7 h-14 rounded-full transition-colors shadow-[0_10px_28px_-10px_rgba(37,211,102,0.8)]"
          >
            <FaWhatsapp className="w-5 h-5" />
            Pide tu favorito por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}