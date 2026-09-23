// Hello World
"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

interface PRXLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  animated?: boolean;
  onDark?: boolean;
}

export default function PRXLogo({
  className = "",
  size = "md",
  animated = true,
  onDark = false,
}: PRXLogoProps) {
  const [key, setKey] = useState(0);

  // Dimensões escaláveis
  const sizeMap = {
    sm: "w-36 h-auto",
    md: "w-52 sm:w-64 h-auto",
    lg: "w-72 sm:w-88 h-auto",
    xl: "w-80 sm:w-[440px] h-auto",
  };

  const primaryFill = onDark ? "#FFFFFF" : "#0F172A";

  // Configuração das animações em 0.3s por elemento
  const dropTransition = (delay: number) => ({
    duration: 0.65,
    delay,
    ease: [0.16, 1, 0.3, 1] as const,
  });

  const handleReplay = () => {
    setKey((prev) => prev + 1);
  };

  return (
    <div
      key={key}
      onClick={handleReplay}
      title="Clique para reviver a animação de entrada da PRX"
      className={`inline-flex flex-col items-center justify-center cursor-pointer select-none group transition-transform duration-300 ${sizeMap[size]} ${className}`}
    >
      <svg
        viewBox="0 0 380 230"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-label="Logo PRX - Experiências que Conectam Gerações"
      >
        <defs>
          {/* Gradiente principal PRX (Ultravioleta -> Azul Cobalto -> Ciano Elétrico) */}
          <linearGradient
            id="prx-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#7928CA" />
            <stop offset="55%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#00D2FF" />
          </linearGradient>

          <linearGradient
            id="prx-line-grad"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#7928CA" />
            <stop offset="100%" stopColor="#00D2FF" />
          </linearGradient>

          {/* Sombra sutil arquitetônica */}
          <filter id="prx-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="4"
              floodColor="#0066FF"
              floodOpacity="0.18"
            />
          </filter>
        </defs>

        {/* 1. SÍMBOLO SUPERIOR (EMBLEMA GEOMÉTRICO X / SETAS CONECTADAS) - Inicia em 0.0s */}
        <motion.g
          initial={animated ? { opacity: 0, y: -45, scale: 0.92 } : false}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={dropTransition(0.0)}
          className="origin-center"
        >
          {/* Asa Esquerda (Seta geométrica sóbria) */}
          <path
            d="M 132 18 L 190 18 L 165 47 L 183 68 L 157 98 L 132 98 L 160 68 L 142 47 Z"
            fill={primaryFill}
            filter={onDark ? undefined : "url(#prx-glow)"}
          />

          {/* Asa Direita (Seta geométrica com gradiente de alta energia) */}
          <path
            d="M 226 18 L 248 18 L 202 68 L 222 90 L 198 98 L 181 98 L 196 82 L 176 60 Z"
            fill="url(#prx-gradient)"
          />
        </motion.g>

        {/* 2. LETRA 'P' - Cai aos 0.3s */}
        <motion.g
          initial={animated ? { opacity: 0, y: -50, scale: 0.9 } : false}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={dropTransition(0.3)}
        >
          {/* Letra P em vetor puro vazado */}
          <path
            d="M 85 116 L 126 116 C 145 116 156 125 156 139 C 156 154 144 163 126 163 L 105 163 L 105 192 L 85 192 Z M 105 131 L 105 148 L 124 148 C 133 148 138 144 138 139 C 138 135 133 131 124 131 Z"
            fill={primaryFill}
          />
        </motion.g>

        {/* 3. LETRA 'R' - Cai aos 0.6s */}
        <motion.g
          initial={animated ? { opacity: 0, y: -50, scale: 0.9 } : false}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={dropTransition(0.6)}
        >
          {/* Letra R em vetor puro vazado */}
          <path
            d="M 172 116 L 214 116 C 232 116 244 125 244 138 C 244 149 235 156 222 159 L 246 192 L 224 192 L 203 163 L 192 163 L 192 192 L 172 192 Z M 192 131 L 192 147 L 211 147 C 221 147 226 143 226 139 C 226 134 221 131 211 131 Z"
            fill={primaryFill}
          />
        </motion.g>

        {/* 4. LETRA 'X' - Cai aos 0.9s */}
        <motion.g
          initial={animated ? { opacity: 0, y: -50, scale: 0.9 } : false}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={dropTransition(0.9)}
        >
          {/* Letra X com gradiente vibrante PRX */}
          <path
            d="M 258 116 L 279 116 L 297 150 L 315 116 L 336 116 L 308 154 L 338 192 L 316 192 L 297 158 L 278 192 L 256 192 L 286 154 Z"
            fill="url(#prx-gradient)"
          />
        </motion.g>

        {/* 5. SLOGAN E LINHA DE ACENTO - Entra suave aos 1.2s */}
        <motion.g
          initial={animated ? { opacity: 0, y: 15 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={dropTransition(1.2)}
        >
          <text
            x="190"
            y="212"
            textAnchor="middle"
            fontSize="8.5"
            fontWeight="700"
            letterSpacing="0.36em"
            fill={onDark ? "#94A3B8" : "#475569"}
            className="tracking-[0.36em] uppercase font-sans select-none"
          >
            EXPERIÊNCIAS QUE CONECTAM GERAÇÕES
          </text>
          <rect
            x="165"
            y="222"
            width="50"
            height="2"
            rx="1"
            fill="url(#prx-line-grad)"
          />
        </motion.g>
      </svg>
    </div>
  );
}
