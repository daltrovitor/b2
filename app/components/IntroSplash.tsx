// Hello World
"use client";

import React, { useState, useEffect, useCallback } from "react";

interface IntroSplashProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function IntroSplash({ isOpen, onClose }: IntroSplashProps) {
  const [step, setStep] = useState(0);
  const [isFading, setIsFading] = useState(false);

  const handleSkip = useCallback(() => {
    setIsFading(true);
    setTimeout(() => {
      onClose();
      setIsFading(false);
      setStep(0);
    }, 600);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    setStep(0);
    setIsFading(false);

    const timers: NodeJS.Timeout[] = [];

    // Cadência de 0.3s por etapa (300ms) conforme solicitado
    for (let t = 1; t <= 8; t++) {
      const timer = setTimeout(() => {
        setStep(t);
        if (t === 8) {
          const endTimer = setTimeout(() => {
            handleSkip();
          }, 1200);
          timers.push(endTimer);
        }
      }, 300 * t);
      timers.push(timer);
    }

    const keyHandler = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        handleSkip();
      }
    };

    window.addEventListener("keydown", keyHandler);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", keyHandler);
    };
  }, [isOpen, handleSkip]);

  if (!isOpen) return null;

  return (
    <aside
      aria-label="Apresentação inicial PRX × B2 Eventos"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-all duration-700 select-none ${
        isFading ? "opacity-0 pointer-events-none scale-105" : "opacity-100"
      }`}
    >
      {/* Botão de Pular Introdução no Topo Direito (Idêntico ao padrão ViraWeb) */}
      <div className="absolute top-6 right-6 z-20">
        <button
          type="button"
          onClick={handleSkip}
          className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold tracking-wide text-zinc-600 hover:text-zinc-950 bg-zinc-100 hover:bg-zinc-200 rounded-sm cursor-pointer transition-colors duration-200 shadow-xs"
          aria-label="Pular introdução animada e abrir proposta"
        >
          <span>Pular introdução</span>
          <span aria-hidden="true">→</span>
        </button>
      </div>

      {/* Conteúdo Central da Apresentação */}
      <div className="w-full max-w-xl sm:max-w-2xl px-6 flex flex-col items-center">
        {/* Bloco de Logos em Apresentação */}
        <div className="w-full flex flex-col items-center justify-center">
          {/* Logo PRX em SVG com peças caindo a cada 0.3s */}
          <div className="w-full max-w-[420px] sm:max-w-[460px]">
            <svg
              viewBox="0 0 500 350"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto overflow-visible"
              aria-label="Logotipo Oficial PRX"
            >
              <defs>
                <linearGradient
                  id="splash-prx-grad"
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

                <linearGradient
                  id="splash-line-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="#7928CA" />
                  <stop offset="100%" stopColor="#00D2FF" />
                </linearGradient>

                <filter
                  id="splash-glow"
                  x="-10%"
                  y="-10%"
                  width="120%"
                  height="120%"
                >
                  <feDropShadow
                    dx="0"
                    dy="3"
                    stdDeviation="4"
                    floodColor="#0066FF"
                    floodOpacity="0.15"
                  />
                </filter>
              </defs>

              {/* 1. Emblema X - Cai aos 0.3s (Step >= 1) */}
              <g
                id="splash-part-emblem"
                style={{
                  transform: step >= 1 ? "translateY(0px)" : "translateY(-140px)",
                  opacity: step >= 1 ? 1 : 0,
                  transition:
                    "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Faixa Esquerda (Grafite Nobre) */}
                <path
                  d="M 155 25 L 215 25 L 275 85 L 215 145 L 155 145 L 215 85 Z"
                  fill="#0F172A"
                  filter="url(#splash-glow)"
                />
                {/* Faixa Direita (Gradiente PRX) */}
                <path
                  d="M 345 25 L 285 25 L 225 85 L 285 145 L 345 145 L 285 85 Z"
                  fill="url(#splash-prx-grad)"
                />
              </g>

              {/* 2. Letra 'P' - Cai aos 0.6s (Step >= 2) */}
              <g
                id="splash-part-p"
                style={{
                  transform: step >= 2 ? "translateY(0px)" : "translateY(-140px)",
                  opacity: step >= 2 ? 1 : 0,
                  transition:
                    "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <path
                  d="M 75 175 L 138 175 C 160 175 172 186 172 201 C 172 216 160 227 138 227 L 103 227 L 103 265 L 75 265 Z M 103 197 L 103 205 L 135 205 C 144 205 149 203 149 201 C 149 199 144 197 135 197 Z"
                  fill="#0F172A"
                />
              </g>

              {/* 3. Letra 'R' - Cai aos 0.9s (Step >= 3) */}
              <g
                id="splash-part-r"
                style={{
                  transform: step >= 3 ? "translateY(0px)" : "translateY(-140px)",
                  opacity: step >= 3 ? 1 : 0,
                  transition:
                    "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <path
                  d="M 205 175 L 268 175 C 290 175 302 186 302 201 C 302 214 292 222 278 225 L 305 265 L 275 265 L 250 227 L 233 227 L 233 265 L 205 265 Z M 233 197 L 233 205 L 265 205 C 274 205 279 203 279 201 C 279 199 274 197 265 197 Z"
                  fill="#0F172A"
                />
              </g>

              {/* 4. Letra 'X' - Cai aos 1.2s (Step >= 4) */}
              <g
                id="splash-part-x"
                style={{
                  transform: step >= 4 ? "translateY(0px)" : "translateY(-140px)",
                  opacity: step >= 4 ? 1 : 0,
                  transition:
                    "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <path
                  d="M 330 175 L 360 175 L 388 220 L 416 175 L 446 175 L 404 225 L 448 265 L 418 265 L 388 230 L 358 265 L 328 265 L 372 225 Z"
                  fill="url(#splash-prx-grad)"
                />
              </g>

              {/* 5. Slogan & Linha de Acento - Revelam aos 1.5s (Step >= 5) */}
              <g
                id="splash-part-slogan"
                style={{
                  transform: step >= 5 ? "translateY(0px)" : "translateY(20px)",
                  opacity: step >= 5 ? 1 : 0,
                  transition:
                    "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                <text
                  x="250"
                  y="305"
                  textAnchor="middle"
                  fontSize="13.5"
                  fontWeight="700"
                  letterSpacing="0.38em"
                  fill="#475569"
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
                  fill="url(#splash-line-grad)"
                />
              </g>
            </svg>
          </div>

          {/* 6. Revelação da Conexão & Logo B2 Eventos (Step >= 6) */}
          <div
            className="flex items-center justify-center gap-6 mt-6 transition-all duration-600"
            style={{
              opacity: step >= 6 ? 1 : 0,
              transform: step >= 6 ? "translateY(0px)" : "translateY(25px)",
            }}
          >
            <span className="text-2xl font-light text-slate-300 select-none">×</span>

            {/* Logo B2 em Vetor Puro */}
            <div className="w-36 sm:w-44">
              <svg
                viewBox="0 0 240 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto overflow-visible"
                aria-label="Logo B2 Eventos"
              >
                <path d="M 18 30 L 29 16 L 33 35 L 21 40 Z" fill="#C97B1A" />
                <path d="M 29 16 L 47 24 L 62 37 L 38 52 Z" fill="#964202" />
                <path
                  d="M 29 38 C 28 22 30 11 33 4 C 35 2 37 7 40 14 C 44 21 51 26 59 35 C 64 40 64 44 62 48 C 54 52 44 54 38 51 C 32 49 30 43 29 38 Z"
                  fill="#FF5900"
                />
                <path
                  d="M 31 32 C 31 20 33 12 34 7 C 35 6 37 11 39 16 C 43 23 49 28 55 35 C 57 40 55 44 51 46 C 45 49 39 49 35 46 C 32 42 31 37 31 32 Z"
                  fill="#FFA326"
                />
                <path
                  d="M 21 40 L 38 52 L 37 87 C 30 87 24 84 19 76 C 13 69 13 51 21 40 Z"
                  fill="#E09F44"
                />
                <path
                  d="M 38 52 L 70 40 L 69 72 C 60 80 50 86 37 87 Z"
                  fill="#D28320"
                />
                <text
                  x="86"
                  y="79"
                  fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
                  fontWeight="600"
                  fontSize="70"
                  fill="#3F4349"
                  letterSpacing="-0.03em"
                >
                  B2
                </text>
              </svg>
            </div>
          </div>

          {/* 7. Subtítulo Institucional da Proposta (Step >= 7) */}
          <div
            className="mt-6 text-center transition-all duration-700"
            style={{
              opacity: step >= 7 ? 1 : 0,
              transform: step >= 7 ? "translateY(0)" : "translateY(15px)",
            }}
          >
            <div className="h-0.5 w-12 bg-gradient-to-r from-[#7928CA] to-[#00D2FF] mx-auto mb-3"></div>
            <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-slate-800">
              PRX × B2 EVENTOS
            </p>
            <p className="text-[11px] sm:text-xs text-slate-500 mt-1 max-w-md">
              A próxima geração precisa de um lugar para acontecer.
            </p>
          </div>
        </div>
      </div>

      {/* Indicadores de Progresso na Base (Padrão 8 Etapas) */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
        {[0, 1, 2, 3, 4, 5, 6, 7].map((idx) => (
          <span
            key={idx}
            className={`h-1 transition-all duration-300 rounded-sm ${
              step >= idx ? "w-5 bg-[#0066FF]" : "w-1.5 bg-zinc-200"
            }`}
          />
        ))}
      </div>
    </aside>
  );
}
