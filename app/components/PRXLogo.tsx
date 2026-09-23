// Hello World
"use client";

import React, { useState } from "react";
import { motion } from "motion/react";

interface PRXLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg" | "xl" | "intro";
  animated?: boolean;
  onDark?: boolean;
}

export default function PRXLogo({
  className = "",
  size = "md",
  animated = true,
  onDark = false,
}: PRXLogoProps) {
  const [replayKey, setReplayKey] = useState(0);

  // Escalonamento responsivo
  const sizeMap = {
    sm: "w-36 h-auto",
    md: "w-56 sm:w-64 h-auto",
    lg: "w-72 sm:w-84 h-auto",
    xl: "w-84 sm:w-[420px] h-auto",
    intro: "w-full max-w-[440px] sm:max-w-[500px] h-auto",
  };

  const primaryColor = onDark ? "#FFFFFF" : "#0F172A";

  // Transição cúbica suave em cadência de 0.3s
  const dropTransition = (delay: number) => ({
    duration: 0.55,
    delay,
    ease: [0.16, 1, 0.3, 1] as const,
  });

  const handleReplay = (e: React.MouseEvent) => {
    e.stopPropagation();
    setReplayKey((prev) => prev + 1);
  };

  return (
    <div
      key={replayKey}
      onClick={handleReplay}
      title="Clique para reviver a animação de entrada da PRX"
      className={`inline-flex flex-col items-center justify-center cursor-pointer select-none group transition-transform duration-300 ${sizeMap[size]} ${className}`}
    >
      <svg
        viewBox="0 0 500 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto overflow-visible"
        aria-label="Logotipo Oficial PRX - Experiências que Conectam Gerações"
      >
        <defs>
          {/* Gradiente Oficial PRX: Ultravioleta -> Azul Cobalto Real -> Ciano Elétrico */}
          <linearGradient
            id="prx-brand-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0%" stopColor="#7928CA" />
            <stop offset="50%" stopColor="#0066FF" />
            <stop offset="100%" stopColor="#00D2FF" />
          </linearGradient>

          {/* Gradiente da linha de acento horizontal */}
          <linearGradient
            id="prx-accent-bar"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor="#7928CA" />
            <stop offset="100%" stopColor="#00D2FF" />
          </linearGradient>

          {/* Sombra sutil de profundidade */}
          <filter id="prx-subtle-glow" x="-10%" y="-10%" width="120%" height="120%">
            <feDropShadow
              dx="0"
              dy="3"
              stdDeviation="4"
              floodColor="#0066FF"
              floodOpacity={onDark ? "0" : "0.15"}
            />
          </filter>
        </defs>

        {/* =================================================================== */}
        {/* 1. EMBLEMA 'X' (Chevrons Entrelaçados Exatos do Print) - 0.0s       */}
        {/* =================================================================== */}
        <motion.g
          initial={animated ? { opacity: 0, y: -90 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={dropTransition(0.0)}
          className="origin-center"
        >
          {/* Chevron Esquerdo (Abre à esquerda, aponta ao centro) */}
          <path
            d="M 155 25 L 215 25 L 275 85 L 215 145 L 155 145 L 215 85 Z"
            fill={primaryColor}
            filter="url(#prx-subtle-glow)"
          />

          {/* Chevron Direito com Gradiente (Abre à direita, aponta ao centro) */}
          <path
            d="M 345 25 L 285 25 L 225 85 L 285 145 L 345 145 L 285 85 Z"
            fill="url(#prx-brand-gradient)"
          />
        </motion.g>

        {/* =================================================================== */}
        {/* 2. LETRA 'P' (Vetor puro vazado) - Cai aos 0.3s                     */}
        {/* =================================================================== */}
        <motion.g
          initial={animated ? { opacity: 0, y: -90 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={dropTransition(0.3)}
        >
          <path
            d="M 75 175 L 138 175 C 160 175 172 186 172 201 C 172 216 160 227 138 227 L 103 227 L 103 265 L 75 265 Z M 103 197 L 103 205 L 135 205 C 144 205 149 203 149 201 C 149 199 144 197 135 197 Z"
            fill={primaryColor}
          />
        </motion.g>

        {/* =================================================================== */}
        {/* 3. LETRA 'R' (Vetor puro vazado) - Cai aos 0.6s                     */}
        {/* =================================================================== */}
        <motion.g
          initial={animated ? { opacity: 0, y: -90 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={dropTransition(0.6)}
        >
          <path
            d="M 205 175 L 268 175 C 290 175 302 186 302 201 C 302 214 292 222 278 225 L 305 265 L 275 265 L 250 227 L 233 227 L 233 265 L 205 265 Z M 233 197 L 233 205 L 265 205 C 274 205 279 203 279 201 C 279 199 274 197 265 197 Z"
            fill={primaryColor}
          />
        </motion.g>

        {/* =================================================================== */}
        {/* 4. LETRA 'X' (Gradiente da Marca PRX) - Cai aos 0.9s                */}
        {/* =================================================================== */}
        <motion.g
          initial={animated ? { opacity: 0, y: -90 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={dropTransition(0.9)}
        >
          <path
            d="M 330 175 L 360 175 L 388 220 L 416 175 L 446 175 L 404 225 L 448 265 L 418 265 L 388 230 L 358 265 L 328 265 L 372 225 Z"
            fill="url(#prx-brand-gradient)"
          />
        </motion.g>

        {/* =================================================================== */}
        {/* 5. SLOGAN E LINHA DE ACENTO - Entra aos 1.2s                        */}
        {/* =================================================================== */}
        <motion.g
          initial={animated ? { opacity: 0, y: 15 } : false}
          animate={{ opacity: 1, y: 0 }}
          transition={dropTransition(1.2)}
        >
          <text
            x="250"
            y="305"
            textAnchor="middle"
            fontSize="13.5"
            fontWeight="700"
            letterSpacing="0.38em"
            fill={onDark ? "#94A3B8" : "#475569"}
            className="tracking-[0.38em] uppercase font-sans select-none"
          >
            EXPERIÊNCIAS QUE CONECTAM GERAÇÕES
          </text>
          <rect
            x="210"
            y="322"
            width="80"
            height="3.5"
            rx="1.75"
            fill="url(#prx-accent-bar)"
          />
        </motion.g>
      </svg>
    </div>
  );
}
