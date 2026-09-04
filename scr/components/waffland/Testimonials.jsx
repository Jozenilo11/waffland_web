import React from "react";
import { Quote } from "lucide-react";

const TESTIMONIALS = [
  { name: "Valentina", age: 22, text: "Le regalé uno a mi mamá con un mensaje y casi llora. Es un detalle que toca el corazón.", rotate: -4, color: "#FFE266" },
  { name: "Santiago", age: 28, text: "Pedí uno para mí un día difícil y de verdad me cambió el ánimo. Delicioso y bonito.", rotate: 3, color: "#FF7BAC" },
  { name: "Camila", age: 19, text: "Se los regalé a mis amigas por su cumpleaños. ¡Les encantó! Ya pedí más.", rotate: -2, color: "#88AFDE" },
  { name: "Mateo", age: 25, text: "Sorprendí a mi novia con un mensaje personalizado. Fue inolvidable.", rotate: 4, color: "#FBB03B" },
  { name: "Isabella", age: 31, text: "El sabor es increíble y la idea de ponerle un mensaje lo hace único.", rotate: -3, color: "#F478F4" },
  { name: "Juan David", age: 17, text: "Le mandé uno a mi mejor amigo con una frase nuestra. Se rió muchísimo.", rotate: 2, color: "#FFE266" },
];

export default function Testimonials() {
  return (
    <section className="relative py-20 sm:py-28 bg-[#88AFDE]/30 overflow-hidden">
      <div className="absolute inset-0 waffle-grid-soft opacity-30" />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <span className="font-script text-3xl text-[#FF7BAC]">El mural de sonrisas</span>
          <h2 className="mt-1 font-heading font-bold text-[#6E4D42] text-4xl sm:text-5xl text-balance">
            Lo que dicen quienes ya se endulzaron
          </h2>
        </div>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 w-64 shadow-lg border border-white"
              style={{ transform: `rotate(${t.rotate}deg)`, marginTop: i % 2 === 1 ? "1.5rem" : "0" }}
            >
              <div className="flex items-center gap-2 mb-3">
                <span
                  className="w-10 h-10 rounded-full flex items-center justify-center font-heading font-bold text-[#6E4D42]"
                  style={{ backgroundColor: t.color }}
                >
                  {t.name[0]}
                </span>
                <div>
                  <p className="font-heading font-bold text-[#6E4D42] text-sm leading-tight">{t.name}</p>
                  <p className="text-xs text-[#6E4D42]/60">{t.age} años</p>
                </div>
                <Quote className="w-5 h-5 text-[#FBB03B] ml-auto" />
              </div>
              <p className="text-[#6E4D42]/85 text-sm leading-snug">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}