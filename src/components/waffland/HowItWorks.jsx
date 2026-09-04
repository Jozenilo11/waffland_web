import React, { useState } from "react";
import { PenLine, Send, Cookie } from "lucide-react";
import { WHATSAPP_LINK } from "./Header";

const STEPS = [
  {
    icon: Cookie,
    title: "Elige tu waffle",
    text: "Selecciona el sabor y los toppings que más te gusten del menú.",
  },
  {
    icon: PenLine,
    title: "Escribe tu mensaje",
    text: "Dinos qué quieres decirle a esa persona (o a ti mismo). Nosotros lo escribimos.",
  },
  {
    icon: Send,
    title: "Envía la alegría",
    text: "Lo preparamos con cariño y te lo entregamos listo para regalar.",
  },
];

export default function HowItWorks() {
  const [message, setMessage] = useState("");

  return (
    <section id="como-funciona" className="relative py-20 sm:py-28 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-script text-3xl text-[#FBB03B]">Crea tu momento</span>
          <h2 className="mt-1 font-heading font-bold text-[#6E4D42] text-4xl sm:text-5xl text-balance">
            Cómo funciona
          </h2>
          <p className="mt-4 text-[#6E4D42]/80 text-lg">
            Ser el Creador de un momento dulce es más fácil de lo que crees.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {STEPS.map((s, i) => (
            <div key={s.title} className="relative">
              <div className="bg-[#FFF7E6] rounded-[1.75rem] p-7 h-full border border-[#FBB03B]/20 hover:-translate-y-1 transition-transform duration-300">
                <div className="flex items-center gap-3">
                  <span className="w-12 h-12 rounded-full bg-[#FBB03B] flex items-center justify-center text-white">
                    <s.icon className="w-6 h-6" />
                  </span>
                  <span className="font-heading font-bold text-[#FBB03B] text-3xl">0{i + 1}</span>
                </div>
                <h3 className="mt-4 font-heading font-bold text-[#6E4D42] text-xl">{s.title}</h3>
                <p className="mt-2 text-[#6E4D42]/75 leading-snug">{s.text}</p>
              </div>
              {i < STEPS.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 -translate-y-1/2 text-[#FBB03B]">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                    <path d="M5 12h14m0 0l-6-6m6 6l-6 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* vista previa en vivo del mensaje */}
        <div className="mt-14 grid lg:grid-cols-2 gap-8 items-center bg-gradient-to-br from-[#FFE266]/40 to-[#FF7BAC]/15 rounded-[2rem] p-7 sm:p-10 border border-[#FBB03B]/20">
          <div>
            <h3 className="font-heading font-bold text-[#6E4D42] text-2xl sm:text-3xl">
              Escribe tu mensaje y míralo aquí
            </h3>
            <p className="mt-2 text-[#6E4D42]/80">
              Prueba cómo se vería tu frase en el waffle antes de pedirlo.
            </p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={60}
              placeholder="Escribe algo bonito… ej: Sonríe, hoy es tu día"
              className="mt-5 w-full bg-white rounded-2xl p-4 h-32 resize-none border-2 border-[#FBB03B]/40 focus:border-[#FBB03B] focus:outline-none text-[#6E4D42] placeholder:text-[#6E4D42]/40"
            />
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-[#FF7BAC] hover:bg-[#ff5e95] text-white font-heading font-bold text-base px-6 h-12 rounded-full transition-colors"
            >
              <Send className="w-4 h-4" />
              Enviar la alegría
            </a>
          </div>

          {/* waffle de vista previa */}
          <div className="flex justify-center">
            <div className="relative w-56 h-56 sm:w-64 sm:h-64">
              <div className="absolute inset-0 bg-[#FBB03B] squircle shadow-xl" />
              <div className="absolute inset-2 bg-[#F39C12] squircle opacity-40" />
              <div className="absolute inset-0 flex items-center justify-center px-8 text-center">
                <p className="font-script text-2xl sm:text-3xl text-white leading-tight drop-shadow-md">
                  {message || "Tu mensaje aparecerá aquí 💛"}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}