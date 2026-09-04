import React from "react";

export default function WafflandLogo({ className = "" }) {
  return (
    <img
      src="/logo/logowff2.png"
      alt="Waffland"
      className={`h-12 w-auto object-contain ${className}`}
    />
  );
}