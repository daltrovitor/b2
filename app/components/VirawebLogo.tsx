// Hello World
"use client";

import React from "react";

interface VirawebLogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
}

export default function VirawebLogo({
  className = "",
  size = "md",
}: VirawebLogoProps) {
  const sizeMap = {
    sm: "h-8 w-auto",
    md: "h-10 w-auto",
    lg: "h-12 w-auto",
  };

  return (
    <a
      href="https://viraweb.online"
      target="_blank"
      rel="noopener noreferrer"
      title="ViraWeb — Engenharia de Software & Inteligência Artificial"
      className={`inline-flex items-center gap-2 group select-none transition-transform duration-200 hover:scale-[1.03] cursor-pointer overflow-visible ${className}`}
    >
      <img
        src="https://viraweb.online/viraweb3.png"
        alt="ViraWeb — Soluções Digitais"
        className={`${sizeMap[size]} max-w-none object-contain drop-shadow-xs`}
        loading="lazy"
      />
    </a>
  );
}
