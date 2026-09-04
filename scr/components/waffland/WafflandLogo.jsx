import React from "react";

// Logo tipográfico de Waffland:
// "Waff" en manuscrita naranja (Caveat) con las dos "ff" bajando en un trazo curvo
// que termina en forma de sonrisa, seguida de "LAND" en mayúsculas bold color café.
export default function WafflandLogo({ className = "", onLight = false }) {
  const brown = "#6E4D42";
  const orange = "#FBB03B";
  const landColor = onLight ? "#FFFFFF" : brown;

  return (
    <span
      className={`inline-flex items-end leading-none select-none ${className}`}
      aria-label="Waffland"
    >
      <span className="font-script relative" style={{ color: orange, fontSize: "2.4rem", lineHeight: 0.8, fontWeight: 700 }}>
        Waff
        {/* sonrisa bajo las "ff" */}
        <svg
          viewBox="0 0 120 40"
          className="absolute -bottom-1 left-[1.1em] w-[2.5em] h-[1.1em]"
          fill="none"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path
            d="M4 6 C 30 34, 90 34, 116 6"
            stroke={orange}
            strokeWidth="6"
            strokeLinecap="round"
          />
        </svg>
      </span>
      <span
        className="font-heading font-bold tracking-tight"
        style={{ color: landColor, fontSize: "1.35rem", letterSpacing: "0.02em", marginLeft: "0.15em" }}
      >
        LAND
      </span>
    </span>
  );
}