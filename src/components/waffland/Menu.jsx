import React, { useState } from "react";
import { X, Plus, Check } from "lucide-react";
import { Image } from "@/components/ui/image";
import { WHATSAPP_LINK } from "./Header";
import { FaWhatsapp } from "react-icons/fa";

const PRODUCTS = [
  {
    name: "Fresura",
    desc: "Fresas frescas, crema y un toque dulce.",
    price: "$12.000",
    img: "https://media.base44.com/images/public/6a9a3ab759ed94159d8f0699/50ecb885e_generated_c1ff627c.jpg",
  },
  {
    name: "Miel & Banana",
    desc: "Banana, miel y una combinación suave y deliciosa.",
    price: "$11.000",
    img: "https://media.base44.com/images/public/6a9a3ab759ed94159d8f0699/572eb6c2d_generated_5611fbdc.jpg",
  },
  {
    name: "Chocofan",
    desc: "Chocolate, crema y mucho sabor.",
    price: "$13.000",
    img: "https://media.base44.com/images/public/6a9a3ab759ed94159d8f0699/8d205ac16_generated_1ae0e16d.jpg",
  },
  {
    name: "Rosadito",
    desc: "Dulce, suave y con ese toque especial de Waffland.",
    price: "$12.000",
    img: "https://media.base44.com/images/public/6a9a3ab759ed94159d8f0699/99e6d4509_generated_b8233f60.jpg",
  },
];

const PERSONALIZACIONES = [
  "Chocolate",
  "Fresas",
  "Banana",
  "Miel",
  "Azúcar glas",
  "Confites",
];

export default function Menu() {
  const [hovered, setHovered] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedExtras, setSelectedExtras] = useState([]);
  const [customMessage, setCustomMessage] = useState("");

  const toggleExtra = (extra) => {
    setSelectedExtras((prev) =>
      prev.includes(extra)
        ? prev.filter((item) => item !== extra)
        : [...prev, extra]
    );
  };

  const openPersonalizar = (product) => {
    setSelectedProduct(product);
    setSelectedExtras([]);
    setCustomMessage("");
  };

  const closePersonalizar = () => {
    setSelectedProduct(null);
    setSelectedExtras([]);
    setCustomMessage("");
  };

  const buildWhatsAppMessage = () => {
    if (!selectedProduct) return WHATSAPP_LINK;

    const extras =
      selectedExtras.length > 0
        ? selectedExtras.join(", ")
        : "Sin extras";

    const message =
      customMessage.trim() || "Sin mensaje personalizado";

    return `${WHATSAPP_LINK}?text=${encodeURIComponent(
      `Hola Waffland 🧇💛\n\nQuiero pedir: ${selectedProduct.name}\nPrecio: ${selectedProduct.price}\nExtras: ${extras}\nMensaje: ${message}`
    )}`;
  };

  return (
    <>
      {/* =========================
          MENÚ
      ========================== */}
      <section
        id="menu"
        className="relative py-20 sm:py-28 bg-white overflow-hidden"
      >
        <div className="absolute -top-20 -left-20 w-72 h-72 bg-[#FFE266]/20 rounded-full blur-3xl pointer-events-none" />

        <div className="absolute -bottom-20 -right-20 w-72 h-72 bg-[#FF7BAC]/15 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FBB03B] mb-3">
              Algo delicioso está por aquí
            </p>

            <h2 className="text-4xl sm:text-5xl font-black text-[#6E4D42]">
              Nuestro menú 🧇
            </h2>

            <p className="mt-5 text-[#6F6270] text-base sm:text-lg">
              Elige tu waffle favorito, personalízalo a tu gusto y prepáralo
              para compartir una alegría.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {PRODUCTS.map((product, index) => (
              <article
                key={product.name}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className="group bg-white rounded-[2rem] border border-[#F1E8EC] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="relative h-72 sm:h-80 overflow-hidden bg-[#FFF8E8]">
  <div className="relative h-64 sm:h-72 overflow-hidden bg-[#FFF8E8]">
  <Image
    src={product.img}
    alt={product.name}
    fittingType="fill"
    className={`w-full h-full object-cover transition-transform duration-500 ${
      hovered === index ? "scale-110" : "scale-100"
    }`}
  />

  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
    <span className="text-sm font-bold text-[#6E4D42]">
      {product.price}
    </span>
  </div>
</div>

  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-full shadow-md">
    <span className="text-sm font-bold text-[#6E4D42]">
      {product.price}
    </span>
  </div>
</div>

                <div className="p-6">
                  <h3 className="text-2xl font-black text-[#6E4D42]">
                    {product.name}
                  </h3>

                  <p className="mt-2 text-sm leading-6 text-[#756875] min-h-[48px]">
                    {product.desc}
                  </p>

                  {/* BOTÓN PERSONALIZAR: estilo redondeado/dorado de la versión clásica,
                      pero conserva la función de este archivo (abre el modal con extras) */}
                 <button
  onClick={() => openPersonalizar(product)}
  className={`mt-6 w-full inline-flex items-center justify-center gap-2 text-[#6E4D42] font-bold py-3.5 px-5 rounded-full shadow-md hover:shadow-lg transition-all hover:-translate-y-0.5 ${
    product.name === "Fresura"
      ? "bg-[#FF7BAC] hover:bg-[#F06292]"
      : product.name === "Miel & Banana"
      ? "bg-[#FFE266] hover:bg-[#F5D44A]"
      : product.name === "Chocofan"
      ? "bg-[#C98B5B] hover:bg-[#B87545]"
      : "bg-[#F478F4] hover:bg-[#E05BE0]"
  }`}
>
  <Plus size={18} />
  Personalizar
</button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          VIDEO
      ========================== */}
      <section
        id="preparacion"
        className="relative py-20 sm:py-28 bg-[#FFF9F0] overflow-hidden"
      >
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FF7BAC] mb-3">
              Así nace tu waffle
            </p>

            <h2 className="text-4xl sm:text-5xl font-black text-[#6E4D42]">
              Preparado con cariño
            </h2>

            <p className="mt-5 text-[#6F6270] text-base sm:text-lg">
              Mira cómo preparamos nuestros waffles paso a paso.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto rounded-[2rem] overflow-hidden shadow-2xl bg-black aspect-video">
            <video
              className="w-full h-full object-cover"
              controls
              playsInline
              preload="metadata"
            >
              <source
                src="/video/waffland-preparacion.mp4"
                type="video/mp4"
              />

              Tu navegador no soporta videos.
            </video>
          </div>
        </div>
      </section>

      {/* =========================
          MENSAJE
      ========================== */}
      <section
        id="mensaje"
        className="relative py-20 sm:py-28 bg-white overflow-hidden"
      >
        <div className="absolute -top-24 right-[-80px] w-80 h-80 bg-[#FF7BAC]/10 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#FBB03B] mb-3">
              Hazlo especial
            </p>

            <h2 className="text-4xl sm:text-5xl font-black text-[#6E4D42]">
              Escribe tu mensaje ✍️
            </h2>

            <p className="mt-5 text-[#6F6270] text-base sm:text-lg">
              Escribe algo bonito y míralo aquí como parte de tu Waffland.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center bg-gradient-to-br from-[#FFE266]/35 to-[#FF7BAC]/10 rounded-[2rem] p-7 sm:p-10 border border-[#FBB03B]/20">

            {/* TEXTO */}
            <div>
              <label
                htmlFor="waffland-message"
                className="block text-lg font-black text-[#6E4D42] mb-3"
              >
                Tu mensaje 💛
              </label>

              <textarea
                id="waffland-message"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Ej: Para ti, con mucho cariño..."
                rows={6}
                maxLength={180}
                className="w-full resize-none rounded-2xl border-2 border-white bg-white/90 p-5 text-[#6E4D42] placeholder:text-[#A79BA5] outline-none focus:border-[#FBB03B] focus:ring-4 focus:ring-[#FBB03B]/10 transition-all"
              />

              <div className="flex justify-between items-center mt-3">
                <span className="text-xs text-[#817480]">
                  {customMessage.length}/180
                </span>

                <a
                  href={`${WHATSAPP_LINK}?text=${encodeURIComponent(
                    `Hola Waffland 🧇💛\n\nQuiero un waffle con este mensaje:\n"${
                      customMessage || "Mi mensaje especial"
                    }"`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-[#25D366] text-white px-5 py-3 font-bold hover:scale-105 transition-transform shadow-lg"
                >
                  <FaWhatsapp size={20} />
                  Enviar por WhatsApp
                </a>
              </div>
            </div>

            {/* WAFFLE ILUSTRADO */}
            <div className="flex justify-center">
              <div className="relative w-72 sm:w-80 aspect-square">

                {/* sombra */}
                <div className="absolute inset-4 rounded-[2.5rem] bg-[#8C4B20]/20 blur-xl" />

                {/* waffle */}
                <div className="absolute inset-0 rounded-[2.5rem] rotate-2 bg-[#D98A32] shadow-2xl overflow-hidden border-[10px] border-[#E9A34A]">

                  {/* patrón del waffle */}
                  <div
                    className="absolute inset-0 opacity-70"
                    style={{
                      backgroundImage: `
                        linear-gradient(45deg, transparent 43%, #B96720 44%, #B96720 56%, transparent 57%),
                        linear-gradient(-45deg, transparent 43%, #B96720 44%, #B96720 56%, transparent 57%)
                      `,
                      backgroundSize: "58px 58px",
                    }}
                  />

                  {/* brillo */}
                  <div className="absolute inset-0 bg-gradient-to-br from-[#FFD27A]/40 via-transparent to-[#9B501B]/20 pointer-events-none" />

                  {/* mensaje sobre el waffle */}
                  <div className="absolute inset-0 flex items-center justify-center p-10 text-center">
                    <p className="font-script text-2xl sm:text-3xl font-black text-[#4A2515] drop-shadow-sm break-words max-w-[78%]">
                      {customMessage || "Tu mensaje 💛"}
                    </p>
                  </div>
                </div>

                {/* mantequilla */}
                <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-16 h-12 bg-[#FFE266] rounded-xl rotate-6 shadow-lg border-2 border-[#F5C940]">
                  <div className="w-full h-full rounded-xl bg-[#FFF09A]/50" />
                </div>

                {/* corazón amarillo eliminado a petición */}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
    WHATSAPP
========================= */}
<section className="relative py-16 sm:py-20 bg-white overflow-hidden">
  <div className="absolute -top-20 -left-20 w-64 h-64 bg-[#FFE266]/20 rounded-full blur-3xl pointer-events-none" />

  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#FF7BAC]/10 rounded-full blur-3xl pointer-events-none" />

  <div className="relative max-w-5xl mx-auto px-5 sm:px-8 text-center">

    <div className="w-16 h-16 mx-auto rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-xl">
      <FaWhatsapp size={34} />
    </div>

    <h2 className="mt-6 text-3xl sm:text-4xl font-black text-[#6E4D42]">
      ¿Listo para pedir tu Waffland?
    </h2>

    <p className="mt-4 text-[#6F6270] max-w-xl mx-auto">
      Escríbenos por WhatsApp, cuéntanos qué quieres y nosotros nos
      encargamos del resto.
    </p>

    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#25D366] text-white px-7 py-4 font-black shadow-xl hover:scale-105 transition-transform"
    >
      <FaWhatsapp size={24} />
      Pedir por WhatsApp
    </a>

  </div>
</section>

      {/* =========================
          MODAL PERSONALIZAR
      ========================== */}
      {selectedProduct && (
        <div
          className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-5"
          onClick={closePersonalizar}
        >
          <div
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-[2rem] shadow-2xl p-7 sm:p-9"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closePersonalizar}
              className="absolute top-5 right-5 w-10 h-10 rounded-full bg-[#F7F2F4] flex items-center justify-center text-[#6E4D42] hover:bg-[#FFE266] transition-colors"
              aria-label="Cerrar"
            >
              <X size={20} />
            </button>

            <div className="flex items-center gap-4 pr-10">
              <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#FFF4D9] shrink-0">
                <Image
                  src={selectedProduct.img}
                  alt={selectedProduct.name}
                  fittingType="fill"
                  className="w-full h-full object-cover"
                />
              </div>

              <div>
                <p className="text-sm text-[#FBB03B] font-bold uppercase tracking-wider">
                  Personaliza tu
                </p>

                <h3 className="text-2xl font-black text-[#6E4D42]">
                  {selectedProduct.name}
                </h3>

                <p className="font-bold text-[#6F6270]">
                  {selectedProduct.price}
                </p>
              </div>
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-black text-[#6E4D42]">
                Agrega tus extras ✨
              </h4>

              <div className="grid grid-cols-2 gap-3 mt-4">
                {PERSONALIZACIONES.map((extra) => {
                  const selected = selectedExtras.includes(extra);

                  return (
                    <button
                      key={extra}
                      type="button"
                      onClick={() => toggleExtra(extra)}
                      className={`flex items-center justify-between gap-2 rounded-xl border-2 px-4 py-3 text-sm font-bold transition-all ${
                        selected
                          ? "border-[#FBB03B] bg-[#FFE266]/30 text-[#6E4D42]"
                          : "border-[#EEE5E9] bg-white text-[#6F6270] hover:border-[#FBB03B]"
                      }`}
                    >
                      <span>{extra}</span>

                      {selected && (
                        <span className="w-5 h-5 rounded-full bg-[#FBB03B] flex items-center justify-center">
                          <Check size={13} />
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="mt-7">
              <label
                htmlFor="personalized-message"
                className="text-lg font-black text-[#6E4D42]"
              >
                ¿Quieres agregar un mensaje?
              </label>

              <textarea
                id="personalized-message"
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Ej: Te quiero mucho 💛"
                rows={4}
                maxLength={180}
                className="mt-3 w-full resize-none rounded-2xl border-2 border-[#EEE5E9] p-4 text-[#6E4D42] placeholder:text-[#A79BA5] outline-none focus:border-[#FBB03B] transition-all"
              />
            </div>

            <a
              href={buildWhatsAppMessage()}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 w-full inline-flex items-center justify-center gap-3 rounded-full bg-[#25D366] text-white px-6 py-4 font-black shadow-lg hover:scale-[1.02] transition-transform"
            >
              <FaWhatsapp size={24} />
              Pedir este Waffland
            </a>

            <button
              type="button"
              onClick={closePersonalizar}
              className="mt-3 w-full py-3 text-sm font-bold text-[#7C707A] hover:text-[#6E4D42]"
            >
              Seguir viendo el menú
            </button>
          </div>
        </div>
      )}
    </>
  );
}
