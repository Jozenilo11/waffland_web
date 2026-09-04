import React from "react";
import { Heart, Gift, Smile } from "lucide-react";
import { Image } from "@/components/ui/image";

const LIFESTYLE_IMG =
  "https://media.base44.com/images/public/6a9a3ab759ed94159d8f0699/6ed97ba91_generated_8e32ef24.jpg";

const VALUES = [
  { icon: Heart, title: "Conexión emocional", text: "Cada waffle lleva un mensaje que hace sentir especial a quien lo recibe." },
  { icon: Gift, title: "Para regalar", text: "El detalle dulce perfecto para sorprender a alguien que quieres." },
  { icon: Smile, title: "Para ti", text: "Un momento de bienestar para darte el capricho de ser feliz hoy." },
];

export default function About() {
  return (
    <section id="nosotros" className="relative py-20 sm:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-md mx-auto aspect-[3/2] overflow-hidden rounded-[2rem] shadow-xl border-4 border-[#FFE266]">
              <Image
                src={LIFESTYLE_IMG}
                alt="Mesa acogedora con dos mini waffles y café"
                fittingType="fill"
                className="w-full h-full"
              />
            </div>
            <div className="absolute -bottom-6 -right-2 sm:right-6 bg-[#FF7BAC] text-white px-5 py-3 rounded-2xl rotate-3 shadow-lg max-w-[12rem]">
              <p className="font-script text-xl leading-tight">Waffles que enamoran 💛</p>
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <span className="font-script text-3xl text-[#FBB03B]">Nuestra historia</span>
            <h2 className="mt-1 font-heading font-bold text-[#6E4D42] text-4xl sm:text-5xl leading-tight text-balance">
              Un detalle dulce con significado
            </h2>
            <div className="mt-6 space-y-4 text-[#6E4D42]/85 text-lg">
              <p>
                Waffland nació de una idea simple: convertir un waffle en un abrazo.
                Creemos que un momento dulce puede cambiar el día de alguien, y que las
                palabras bonitas saben mejor cuando van acompañadas de algo delicioso.
              </p>
              <p>
                Somos una marca colombiana, alegre y cercana, que crea mini waffles
                personalizados con mensajes positivos. Cada waffle se prepara con
                cariño, pensando en la persona que lo va a recibir —sea tú, o alguien
                que quieres ver sonreír.
              </p>
              <p className="font-script text-2xl text-[#FF7BAC]">
                Disfruta, sueña y sigue saboreando la vida.
              </p>
            </div>

            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {VALUES.map((v) => (
                <div key={v.title} className="bg-[#FFF7E6] rounded-2xl p-4 border border-[#FBB03B]/20">
                  <v.icon className="w-6 h-6 text-[#FBB03B] mb-2" />
                  <h3 className="font-heading font-semibold text-[#6E4D42] text-base">{v.title}</h3>
                  <p className="text-sm text-[#6E4D42]/70 mt-1 leading-snug">{v.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}