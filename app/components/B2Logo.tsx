// Hello World
"use client";

import React from "react";
import { B2_LOGO_DATA } from "../data/logoPartsData";

export interface B2LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  animated?: boolean;
  separateLetters?: boolean;
  onClick?: () => void;
}

/**
 * Componente SVG vetorial da B2 Eventos com fidelidade 100% fotográfica e geométrica.
 * Composto por fatias transparentes em Base64 Data URI com posicionamento
 * no viewBox original (0 0 109 73), sem qualquer fundo indesejado.
 */
export default function B2Logo({
  className = "",
  size = "md",
  separateLetters = false,
  onClick,
}: B2LogoProps) {
  const { viewBox, parts } = B2_LOGO_DATA;

  const sizeClass =
    size === "sm"
      ? "w-16 sm:w-20"
      : size === "lg"
      ? "w-32 sm:w-40"
      : "w-24 sm:w-28";

  const activeParts = separateLetters
    ? parts.filter((p) => p.id !== "letters")
    : parts.filter((p) => p.id !== "letter-b" && p.id !== "letter-2");

  return (
    <div
      onClick={onClick}
      className={`inline-flex items-center justify-center ${onClick ? "cursor-pointer" : ""}`}
    >
      <svg
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`overflow-visible select-none h-auto ${sizeClass} ${className}`}
        role="img"
        aria-label="B2 Eventos"
      >
        {activeParts.map((part) => (
          <g id={`b2-part-${part.id}`} key={part.id}>
            <image
              href={part.href}
              x={part.x}
              y={part.y}
              width={part.w}
              height={part.h}
              preserveAspectRatio="xMidYMid meet"
            />
          </g>
        ))}
      </svg>
    </div>
  );
}
