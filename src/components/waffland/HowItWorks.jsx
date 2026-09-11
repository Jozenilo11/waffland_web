import React from "react";
import {
  ClipboardList,
  Sparkles,
  MessageCircle,
  PartyPopper,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

const STEPS = [
  {
    icon: ClipboardList,
    title: "Elige tu waffle",
    desc: "Explora nuestro menú y escoge el sabor que más se te antoje.",
    color: "#FF7BAC",
  },
  {
    icon: Sparkles,
    title: "Personalízalo",
    desc: "Agrega tus extras favoritos y escribe un mensaje especial.",
    color: "#FBB03B",
  },
  {
    icon: FaWhatsapp,
    title: "Pide por WhatsApp",
    desc: "Confirma tu pedido en segundos, directo desde el chat.",
    color: "#25D366",
  },
  {
    icon: PartyPopper,
    title: "Disfrútalo",
    desc: "Recibe tu waffle recién hecho y comparte la alegría.",
    color: "#F478F4",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="relative py-20 sm:py-28 bg-[#FFF9F0] overflow-hidden"
    >
      <div className="absolute -top-16 -right-16 w-72 h-72 bg-[#FFE266]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="absolute -bottom-16 -left-16 w-72 h-72 bg-[#FF7BAC]/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FBB03B] mb-3">
            Es más fácil de lo que crees
          </p>

          <h2 className="text-4xl sm:text-5xl font-black text-[#6E4D42]">
            ¿Cómo funciona? 🧇
          </h2>

          <p className="mt-5 text-[#6F6270] text-base sm:text-lg">
            En cuatro pasos simples, tu waffle personalizado está en camino.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
          {STEPS.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={step.title}
                className="relative bg-white rounded-[2rem] border border-[#F1E8EC] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-7 text-center"
              >
                <span className="absolute top-5 right-6 text-sm font-black text-[#EEE5E9]">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div
                  className="w-16 h-16 mx-auto rounded-2xl flex items-center justify-center shadow-md"
                  style={{ backgroundColor: `${step.color}22` }}
                >
                  <Icon
                    size={28}
                    color={step.color}
                    strokeWidth={2.2}
                  />
                </div>

                <h3 className="mt-5 text-xl font-black text-[#6E4D42]">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#756875]">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}