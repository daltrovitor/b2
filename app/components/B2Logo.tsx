// Hello World
"use client";

import React from "react";
import { motion } from "motion/react";

interface B2LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "intro";
  animated?: boolean;
  onDark?: boolean;
}

export default function B2Logo({
  className = "",
  size = "md",
  animated = true,
  onDark = false,
}: B2LogoProps) {
  const sizeMap = {
    sm: "w-28 h-auto",
    md: "w-40 sm:w-48 h-auto",
    lg: "w-56 sm:w-64 h-auto",
    xl: "w-72 sm:w-80 h-auto",
    intro: "w-48 sm:w-60 h-auto",
  };

  const primaryFill = onDark ? "#FFFFFF" : "#3F4349";

  return (
    <div
      className={`inline-flex items-center justify-center select-none group transition-transform duration-300 ${sizeMap[size]} ${className}`}
    >
      <svg
        viewBox="0 0 240 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-label="Logotipo Oficial B2 Eventos"
      >
        <defs>
          <filter id="b2-subtle-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="3"
              floodColor="#000000"
              floodOpacity={onDark ? "0" : "0.08"}
            />
          </filter>
        </defs>

        {/* =================================================================== */}
        {/* 1. CAIXA ISOMÉTRICA COM CHAMA B2 (Vetor puro sem fundo)             */}
        {/* =================================================================== */}
        <motion.g
          initial={animated ? { opacity: 0, scale: 0.92, x: -20 } : false}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          filter="url(#b2-subtle-shadow)"
        >
          {/* Aba aberta da caixa (Flap) */}
          <path d="M 18 30 L 29 16 L 33 35 L 21 40 Z" fill="#C97B1A" />

          {/* Cavidade interna da caixa atrás da chama */}
          <path d="M 29 16 L 47 24 L 62 37 L 38 52 Z" fill="#964202" />

          {/* Chama subindo da caixa (Laranja Vibrante) */}
          <path
            d="M 29 38 C 28 22 30 11 33 4 C 35 2 37 7 40 14 C 44 21 51 26 59 35 C 64 40 64 44 62 48 C 54 52 44 54 38 51 C 32 49 30 43 29 38 Z"
            fill="#FF5900"
          />

          {/* Núcleo / Destaque interno da chama (Ouro/Amarelo Quente) */}
          <path
            d="M 31 32 C 31 20 33 12 34 7 C 35 6 37 11 39 16 C 43 23 49 28 55 35 C 57 40 55 44 51 46 C 45 49 39 49 35 46 C 32 42 31 37 31 32 Z"
            fill="#FFA326"
          />

          {/* Face Esquerda da Caixa (Areia Dourada) */}
          <path
            d="M 21 40 L 38 52 L 37 87 C 30 87 24 84 19 76 C 13 69 13 51 21 40 Z"
            fill="#E09F44"
          />

          {/* Face Direita da Caixa (Âmbar Encorpado) */}
          <path
            d="M 38 52 L 70 40 L 69 72 C 60 80 50 86 37 87 Z"
            fill="#D28320"
          />
        </motion.g>

        {/* =================================================================== */}
        {/* 2. TIPOGRAFIA 'B2' (Grotesca Moderna de Alto Contraste)             */}
        {/* =================================================================== */}
        <motion.g
          initial={animated ? { opacity: 0, x: 20 } : false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <text
            x="86"
            y="79"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="600"
            fontSize="70"
            fill={primaryFill}
            letterSpacing="-0.03em"
          >
            B2
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
