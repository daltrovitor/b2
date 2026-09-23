// Hello World
"use client";

import React, { useState, useEffect, useCallback } from "react";
import { PRX_LOGO_DATA, B2_LOGO_DATA } from "../data/logoPartsData";

interface IntroSplashProps {
  isOpen: boolean;
  onClose: () => void;
}

/**
 * Splash Screen de Introdução Cinética com Física Baseada em cubic-bezier(0.16, 1, 0.3, 1)
 * Metodologia ViraWeb de fatiamento SVG transparente com Base64 Data URIs:
 * Cadência de 0.6s (600ms) por elemento:
 * 0.0s: Símbolo/Emblema
 * 0.6s: Letra P
 * 1.2s: Letra R
 * 1.8s: Letra X
 * 2.4s: Subtítulo Institucional + Parceria B2
 * ~1.0s: Respiro para apreciação da marca unificada
 * Encerramento suave com fade-out (opacity: 0, scale: 1.05, pointer-events-none).
 */
export default function IntroSplash({ isOpen, onClose }: IntroSplashProps) {
  // Passos da animação: 0 = inicial/emblema, 1 = P, 2 = R, 3 = X, 4 = Subtítulo, 5 = Respiro/Completo
  const [step, setStep] = useState(0);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const handleSkip = useCallback(() => {
    setIsFadingOut(true);
    setTimeout(() => {
      onClose();
      setIsFadingOut(false);
      setStep(0);
    }, 600);
  }, [onClose]);

  useEffect(() => {
    if (!isOpen) return;

    setStep(0);
    setIsFadingOut(false);

    const timers: NodeJS.Timeout[] = [];

    // Cadência estrita a cada 0.6s (600ms) conforme requisito 3
    // t=1: 600ms -> Letra P
    const t1 = setTimeout(() => setStep(1), 600);
    // t=2: 1200ms -> Letra R
    const t2 = setTimeout(() => setStep(2), 1200);
    // t=3: 1800ms -> Letra X
    const t3 = setTimeout(() => setStep(3), 1800);
    // t=4: 2400ms -> Subtítulo institucional
    const t4 = setTimeout(() => setStep(4), 2400);
    // t=5: 3500ms -> Respiro de ~1s para apreciação da marca
    const t5 = setTimeout(() => setStep(5), 3500);
    // t=6: 4500ms -> Transição de abertura da página principal
    const t6 = setTimeout(() => {
      handleSkip();
    }, 4500);

    timers.push(t1, t2, t3, t4, t5, t6);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" || e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        handleSkip();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      timers.forEach(clearTimeout);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, handleSkip]);

  if (!isOpen) return null;

  // Recupera as partes individuais dos metadados
  const prxEmblem = PRX_LOGO_DATA.parts.find((p) => p.id === "emblem")!;
  const prxP = PRX_LOGO_DATA.parts.find((p) => p.id === "letter-p")!;
  const prxR = PRX_LOGO_DATA.parts.find((p) => p.id === "letter-r")!;
  const prxX = PRX_LOGO_DATA.parts.find((p) => p.id === "letter-x")!;
  const prxSubtitle = PRX_LOGO_DATA.parts.find((p) => p.id === "subtitle")!;

  // Estilo de transição física suave
  const transitionPhysics = "transform 0.55s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s cubic-bezier(0.16, 1, 0.3, 1)";

  // Estados dos elementos
  const emblemActive = step >= 0;
  const pActive = step >= 1;
  const rActive = step >= 2;
  const xActive = step >= 3;
  const subtitleActive = step >= 4;

  return (
    <aside
      aria-label="Apresentação animada da marca PRX × B2 Eventos"
      className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-white transition-all duration-700 select-none ${
        isFadingOut ? "opacity-0 pointer-events-none scale-105" : "opacity-100 scale-100"
      }`}
    >
      {/* Botão de Pular no Canto Superior Direito (Padrão ViraWeb) */}
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
        {/* Logotipo PRX em SVG com Fatiamento Exato e Animação por Grupos <g> */}
        <div className="w-full max-w-[440px] sm:max-w-[480px]">
          <svg
            viewBox={PRX_LOGO_DATA.viewBox}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto overflow-visible"
            role="img"
            aria-label="Logotipo Animado PRX"
          >
            {/* 1. Símbolo / Emblema (Entra no início, t=0.0s) */}
            <g
              id="part-emblem"
              style={{
                transform: emblemActive ? "translateY(0px)" : "translateY(-140px)",
                opacity: emblemActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <image
                href={prxEmblem.href}
                x={prxEmblem.x}
                y={prxEmblem.y}
                width={prxEmblem.w}
                height={prxEmblem.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>

            {/* 2. Letra P (Entra em t=0.6s) */}
            <g
              id="part-p"
              style={{
                transform: pActive ? "translateY(0px)" : "translateY(-140px)",
                opacity: pActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <image
                href={prxP.href}
                x={prxP.x}
                y={prxP.y}
                width={prxP.w}
                height={prxP.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>

            {/* 3. Letra R (Entra em t=1.2s) */}
            <g
              id="part-r"
              style={{
                transform: rActive ? "translateY(0px)" : "translateY(-140px)",
                opacity: rActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <image
                href={prxR.href}
                x={prxR.x}
                y={prxR.y}
                width={prxR.w}
                height={prxR.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>

            {/* 4. Letra X (Entra em t=1.8s) */}
            <g
              id="part-x"
              style={{
                transform: xActive ? "translateY(0px)" : "translateY(-140px)",
                opacity: xActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <image
                href={prxX.href}
                x={prxX.x}
                y={prxX.y}
                width={prxX.w}
                height={prxX.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>

            {/* 5. Subtítulo Institucional + Linha (Entra em t=2.4s) */}
            <g
              id="part-subtitle"
              style={{
                transform: subtitleActive ? "translateY(0px)" : "translateY(-60px)",
                opacity: subtitleActive ? 1 : 0,
                transition: transitionPhysics,
              }}
            >
              <image
                href={prxSubtitle.href}
                x={prxSubtitle.x}
                y={prxSubtitle.y}
                width={prxSubtitle.w}
                height={prxSubtitle.h}
                preserveAspectRatio="xMidYMid meet"
              />
            </g>
          </svg>
        </div>

        {/* Revelação da Aliança Comercial com a B2 Eventos (surge em t=2.4s) */}
        <div
          style={{
            transform: subtitleActive ? "translateY(0px)" : "translateY(30px)",
            opacity: subtitleActive ? 1 : 0,
            transition: "transform 0.6s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out",
          }}
          className="mt-6 flex flex-col items-center"
        >
          <div className="flex items-center gap-3 px-4 py-2 border border-zinc-200 bg-zinc-50/80 rounded-sm">
            <span className="text-xs font-mono font-medium tracking-wider text-zinc-500 uppercase">
              Aliança Estratégica
            </span>
            <span className="text-zinc-300">×</span>
            {/* Logo B2 em SVG puro fatiado */}
            <div className="w-16 h-auto">
              <svg
                viewBox={B2_LOGO_DATA.viewBox}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto overflow-visible"
                role="img"
                aria-label="B2 Eventos"
              >
                {B2_LOGO_DATA.parts.map((p) => {
                  if (p.id === "letter-b" || p.id === "letter-2") return null;
                  return (
                    <g id={`splash-b2-part-${p.id}`} key={p.id}>
                      <image
                        href={p.href}
                        x={p.x}
                        y={p.y}
                        width={p.w}
                        height={p.h}
                        preserveAspectRatio="xMidYMid meet"
                      />
                    </g>
                  );
                })}
              </svg>
            </div>
          </div>
        </div>

        {/* Barra de Progresso em Pílulas (1 a 5) */}
        <div className="mt-8 flex items-center justify-center gap-2" aria-hidden="true">
          {[0, 1, 2, 3, 4].map((i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                step >= i ? "w-6 bg-[#0066FF]" : "w-2 bg-zinc-200"
              }`}
            />
          ))}
        </div>
      </div>
    </aside>
  );
}
