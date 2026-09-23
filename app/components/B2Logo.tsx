// Hello World
"use client";

import React from "react";
import { motion } from "motion/react";

interface B2LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
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
  };

  const primaryFill = onDark ? "#FFFFFF" : "#474B51";

  return (
    <div
      className={`inline-flex items-center justify-center select-none group transition-transform duration-300 ${sizeMap[size]} ${className}`}
    >
      <svg
        viewBox="0 0 200 90"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-label="Logo B2 Eventos"
      >
        <defs>
          <filter id="b2-shadow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="3"
              floodColor="#000000"
              floodOpacity={onDark ? "0" : "0.08"}
            />
          </filter>
        </defs>

        {/* 1. CUBO ISOMÉTRICO COM CHAMA LARANJA B2 (Sem fundo, vetor puro) */}
        <motion.g
          initial={animated ? { opacity: 0, scale: 0.9, x: -15 } : false}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          filter="url(#b2-shadow)"
        >
          {/* Aba aberta da caixa (Lid flap) */}
          <path d="M 16 28 L 26 15 L 30 33 L 19 37 Z" fill="#D28628" />

          {/* Cavidade interna da caixa atrás da chama */}
          <path d="M 26 15 L 43 23 L 58 35 L 35 48 Z" fill="#9C4A08" />

          {/* Chama subindo da caixa */}
          <path
            d="M 26 36 C 25 21 27 10 30 3 C 32 1 34 6 36 12 C 40 19 47 24 55 33 C 60 38 60 42 58 45 C 50 49 41 51 35 48 C 29 46 27 41 26 36 Z"
            fill="#FF6500"
          />

          {/* Brilho / Núcleo interno da chama */}
          <path
            d="M 28 30 C 28 19 30 11 31 6 C 32 5 34 10 36 15 C 40 22 46 26 51 33 C 54 38 52 42 48 44 C 42 47 36 47 32 44 C 29 40 28 35 28 30 Z"
            fill="#FFA533"
          />

          {/* Face Esquerda do Cubo (Ocre / Areia Dourada) */}
          <path
            d="M 19 37 L 35 48 L 34 81 C 28 81 22 78 17 71 C 12 64 12 47 19 37 Z"
            fill="#E2A64E"
          />

          {/* Face Direita do Cubo (Âmbar Quente) */}
          <path
            d="M 35 48 L 65 37 L 64 67 C 56 75 46 80 34 81 Z"
            fill="#D38E2F"
          />
        </motion.g>

        {/* 2. TIPOGRAFIA B2 (Grotesca Moderna Grafite) */}
        <motion.g
          initial={animated ? { opacity: 0, x: 15 } : false}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <text
            x="80"
            y="74"
            fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
            fontWeight="600"
            fontSize="65"
            fill={primaryFill}
            letterSpacing="-0.02em"
          >
            B2
          </text>
        </motion.g>
      </svg>
    </div>
  );
}
