// Hello World
"use client";

import React, { useState } from "react";
import PRXLogo from "./components/PRXLogo";
import B2Logo from "./components/B2Logo";
import VirawebLogo from "./components/VirawebLogo";
import {
  ArrowRight,
  Sparkles,
  Users,
  Compass,
  GraduationCap,
  Calendar,
  CheckCircle2,
  Share2,
  Award,
  Zap,
  Coffee,
  Activity,
  Briefcase,
  Ticket,
  Flame,
  School,
  ExternalLink,
  ChevronRight,
  TrendingUp,
  FileDown,
} from "lucide-react";

export default function ProposalPage() {
  const [activeTab, setActiveTab] = useState<"prx-b2" | "b2-prx">("prx-b2");
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    if (typeof window !== "undefined") {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-[#0B67FF] selection:text-white relative overflow-x-hidden">
      {/* ========================================================================= */}
      {/* 1. CABEÇALHO INSTITUCIONAL FIXO (Top Bar)                                 */}
      {/* ========================================================================= */}
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Aliança de Logos no Topo */}
          <div className="flex items-center gap-3 sm:gap-5">
            <PRXLogo size="sm" animated={false} className="w-24 sm:w-28" />
            <span className="text-slate-300 font-light text-xl sm:text-2xl select-none">
              ×
            </span>
            <B2Logo size="sm" animated={false} className="w-20 sm:w-24" />
          </div>

          {/* Navegação F-Pattern Anchor Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-7 text-xs font-semibold tracking-wider uppercase text-slate-600">
            <a
              href="#oportunidade"
              className="hover:text-[#0B67FF] transition-colors cursor-pointer"
            >
              A Oportunidade
            </a>
            <a
              href="#quem-somos"
              className="hover:text-[#0B67FF] transition-colors cursor-pointer"
            >
              Rafael Molina
            </a>
            <a
              href="#parceria"
              className="hover:text-[#0B67FF] transition-colors cursor-pointer"
            >
              A Parceria
            </a>
            <a
              href="#prx-pass"
              className="hover:text-[#0B67FF] transition-colors cursor-pointer"
            >
              PRX Pass
            </a>
            <a
              href="#escolas"
              className="hover:text-[#0B67FF] transition-colors cursor-pointer"
            >
              Escolas
            </a>
            <a
              href="#visao"
              className="hover:text-[#0B67FF] transition-colors cursor-pointer"
            >
              A Visão
            </a>
          </nav>

          {/* Ações Rápidas do Cabeçalho */}
          <div className="flex items-center gap-3">
            <button
              onClick={handlePrint}
              title="Salvar ou Imprimir Proposta em PDF"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 text-xs font-medium text-slate-700 bg-slate-100 hover:bg-slate-200/70 rounded-sm border border-slate-200 transition-colors cursor-pointer no-print"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>Exportar PDF</span>
            </button>
            <a
              href="#visao"
              className="inline-flex items-center justify-center gap-2 px-4 sm:px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-[#0B67FF] hover:bg-[#0052D4] rounded-sm transition-all shadow-sm active:scale-[0.98] cursor-pointer"
            >
              <span>Validar Aliança</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* ========================================================================= */}
        {/* COMPOSIÇÃO EM PADRÃO F (F-PATTERN LAYOUT)                                 */}
        {/* ========================================================================= */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* ======================================================================= */}
          {/* HASTE VERTICAL ESQUERDA (The F-Spine / Navegação e Indicadores)         */}
          {/* ======================================================================= */}
          <aside className="lg:col-span-3 hidden lg:block">
            <div className="sticky top-28 space-y-8">
              {/* Box de Status da Proposta */}
              <div className="p-5 border border-slate-200 bg-slate-50/60 rounded-sm">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase">
                    Documento Estratégico
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 text-[10px] font-semibold text-[#0B67FF] bg-blue-50 border border-blue-200 rounded-sm">
                    Confidencial
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  PRX × B2 Eventos
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Parceria de Geração Recorrente de Negócios & Experiências
                </p>
                <div className="mt-4 pt-4 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                  <span>Ano de Ativação</span>
                  <span className="font-mono font-semibold text-slate-900">
                    2026 / 2027
                  </span>
                </div>
              </div>

              {/* Trilhas em Padrão F (Índice de Leitura Rápida) */}
              <div className="space-y-1">
                <p className="text-[11px] font-mono uppercase font-bold tracking-wider text-slate-400 mb-2 px-3">
                  Índice da Proposta
                </p>
                {[
                  { id: "hero", label: "01. Aliança da Nova Geração" },
                  { id: "oportunidade", label: "02. A Oportunidade" },
                  { id: "quem-somos", label: "03. Quem Está por Trás" },
                  { id: "parceria", label: "04. Modelo de Parceria" },
                  { id: "prx-pass", label: "05. B2 no PRX PASS" },
                  { id: "escolas", label: "06. Frentes Escolares" },
                  { id: "visao", label: "07. A Visão & Fechamento" },
                ].map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-600 hover:text-[#0B67FF] hover:bg-slate-50 rounded-sm transition-colors group cursor-pointer"
                  >
                    <span>{item.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-[#0B67FF]" />
                  </a>
                ))}
              </div>

              {/* Cartão de Apoio Institucional */}
              <div className="p-4 border border-slate-200/70 bg-white rounded-sm text-xs text-slate-600 space-y-2.5">
                <div className="flex items-center gap-2 text-slate-900 font-semibold">
                  <Sparkles className="w-4 h-4 text-[#0B67FF]" />
                  <span>Sinergia Imediata</span>
                </div>
                <p className="text-[11px] leading-relaxed text-slate-500">
                  A PRX entra com a base e a fidelização digital. A B2 entra com
                  a operação líder em experiências ao vivo.
                </p>
                <button
                  onClick={handleShare}
                  className="w-full mt-2 inline-flex items-center justify-center gap-2 px-3 py-2 text-xs font-medium text-slate-700 bg-slate-50 hover:bg-slate-100 border border-slate-200 rounded-sm transition-colors cursor-pointer"
                >
                  <Share2 className="w-3.5 h-3.5" />
                  <span>{copied ? "Link Copiado!" : "Compartilhar Proposta"}</span>
                </button>
              </div>
            </div>
          </aside>

          {/* ======================================================================= */}
          {/* CONTEÚDO PRINCIPAL (Barras Horizontais do Padrão F)                     */}
          {/* ======================================================================= */}
          <div className="lg:col-span-9 space-y-16 sm:space-y-24">
            {/* --------------------------------------------------------------------- */}
            {/* SEÇÃO 01: HERO SECTION (Barra Horizontal Superior do F)               */}
            {/* --------------------------------------------------------------------- */}
            <section id="hero" className="scroll-mt-24 space-y-8">
              {/* Bloco de Animação de Entrada PRX com Queda de Letras em 0.3s */}
              <div className="p-8 sm:p-12 border border-slate-200 bg-gradient-to-b from-slate-50/80 via-white to-white rounded-sm shadow-xs flex flex-col items-center justify-center text-center relative overflow-hidden">
                <div className="absolute top-3 right-3 text-[10px] font-mono text-slate-400 uppercase tracking-widest no-print">
                  ✦ Clique no logo para rever a animação
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-14 my-4">
                  {/* Logo PRX Vetorial em SVG com Queda em 0.3s */}
                  <div className="flex flex-col items-center">
                    <PRXLogo size="lg" animated={true} />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#0B67FF] font-semibold mt-3">
                      Comunidade & Plataforma
                    </span>
                  </div>

                  <span className="text-3xl sm:text-4xl font-light text-slate-300 select-none">
                    ×
                  </span>

                  {/* Logo B2 Eventos Vetorial em SVG sem Fundo */}
                  <div className="flex flex-col items-center">
                    <B2Logo size="lg" animated={true} />
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#EA580C] font-semibold mt-3">
                      Operação & Experiências
                    </span>
                  </div>
                </div>

                {/* Linha de separação técnica */}
                <div className="w-16 h-[2px] bg-slate-200 my-4" />

                <div className="max-w-2xl text-center space-y-3">
                  <p className="text-xs uppercase tracking-widest font-mono font-bold text-slate-500">
                    Aliança Comercial Estratégica
                  </p>
                  <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.08]">
                    PRX × B2 EVENTOS
                  </h1>
                  <p className="text-lg sm:text-2xl font-medium text-slate-600 max-w-xl mx-auto leading-relaxed pt-1">
                    A próxima geração precisa de um lugar para acontecer.
                  </p>
                </div>
              </div>

              {/* Tríade de Métricas & Tese Base */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-5 border border-slate-200 bg-white rounded-sm">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Comunidade Ativa
                  </div>
                  <div className="text-xl font-bold text-slate-900 mt-1">
                    Geração Z & Escolas
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Influência contínua e presença no dia a dia da juventude.
                  </div>
                </div>

                <div className="p-5 border border-slate-200 bg-white rounded-sm">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Operação e Estrutura
                  </div>
                  <div className="text-xl font-bold text-slate-900 mt-1">
                    Autoridade B2
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Execução de eventos memoráveis e experiências de alto impacto.
                  </div>
                </div>

                <div className="p-5 border border-slate-200 bg-white rounded-sm">
                  <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
                    Modelo de Negócio
                  </div>
                  <div className="text-xl font-bold text-slate-900 mt-1">
                    Geração Recorrente
                  </div>
                  <div className="text-xs text-slate-500 mt-1">
                    Negócios perenes através de produtos, ativações e formaturas.
                  </div>
                </div>
              </div>
            </section>

            {/* --------------------------------------------------------------------- */}
            {/* SEÇÃO 02: A OPORTUNIDADE (Segunda Barra Horizontal do F)              */}
            {/* --------------------------------------------------------------------- */}
            <section id="oportunidade" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B67FF]">
                  01 / Panorama Estratégico
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
                  A OPORTUNIDADE
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
                {/* Pilar PRX */}
                <div className="p-7 border border-slate-200 bg-slate-50/50 rounded-sm flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-[#0B67FF] bg-blue-50 border border-blue-200 rounded-sm">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Ecossistema PRX</span>
                    </div>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A <strong>PRX</strong> nasce com uma proposta simples:{" "}
                      <span className="text-slate-900 font-semibold">
                        ser o ecossistema da nova geração
                      </span>
                      .
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      Um aplicativo completo que conecta, em um único ambiente,{" "}
                      <strong>clube de benefícios</strong>,{" "}
                      <strong>banco digital</strong>, <strong>investimentos</strong>{" "}
                      e <strong>experiências exclusivas</strong>, acompanhando o
                      jovem em diferentes momentos da sua vida diária.
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-sm text-xs font-medium text-slate-800 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#0B67FF]" />
                    <span>A PRX leva a comunidade engajada.</span>
                  </div>
                </div>

                {/* Pilar B2 Eventos */}
                <div className="p-7 border border-slate-200 bg-slate-50/50 rounded-sm flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-[#EA580C] bg-orange-50 border border-orange-200 rounded-sm">
                      <Flame className="w-3.5 h-3.5" />
                      <span>Autoridade B2 Eventos</span>
                    </div>
                    <p className="text-base text-slate-700 leading-relaxed">
                      A <strong>B2</strong> já domina um território essencial dessa
                      jornada:{" "}
                      <span className="text-slate-900 font-semibold">
                        eventos e experiências presenciais de alto padrão
                      </span>
                      .
                    </p>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      A proposta é conectar de forma perene esses dois mundos. O
                      virtual alimenta o presencial, e cada evento alimenta a
                      recorrência do aplicativo e dos benefícios dos parceiros.
                    </p>
                  </div>
                  <div className="p-4 bg-white border border-slate-200 rounded-sm text-xs font-medium text-slate-800 flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#EA580C]" />
                    <span>A B2 transforma comunidade em experiência.</span>
                  </div>
                </div>
              </div>

              {/* Destaque Sintético Central */}
              <div className="p-6 bg-slate-950 text-white rounded-sm flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="space-y-1">
                  <div className="text-xs font-mono tracking-widest uppercase text-slate-400">
                    A Tese Fundamental
                  </div>
                  <p className="text-base sm:text-lg font-medium text-slate-200">
                    "A PRX leva a comunidade. A B2 transforma comunidade em
                    experiência."
                  </p>
                </div>
                <div className="shrink-0 flex items-center gap-3 font-mono text-xs text-slate-400">
                  <span className="text-[#0B67FF] font-bold">PRX</span>
                  <span>+</span>
                  <span className="text-[#EA580C] font-bold">B2</span>
                  <span>=</span>
                  <span className="text-white font-bold">Ecossistema Total</span>
                </div>
              </div>
            </section>

            {/* --------------------------------------------------------------------- */}
            {/* SEÇÃO 03: QUEM ESTÁ POR TRÁS (Liderança e Conexões)                   */}
            {/* --------------------------------------------------------------------- */}
            <section id="quem-somos" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B67FF]">
                  02 / Liderança & Conexões
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
                  QUEM ESTÁ POR TRÁS
                </h2>
              </div>

              <div className="p-8 border border-slate-200 bg-white rounded-sm">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-8 space-y-4">
                    <div className="flex items-center gap-3">
                      <h3 className="text-2xl font-bold text-slate-950">
                        Rafael Molina
                      </h3>
                      <span className="text-xs font-medium text-slate-500 bg-slate-100 px-2.5 py-1 rounded-sm">
                        Jornalista & Empresário
                      </span>
                    </div>

                    <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                      Rafael Molina é <strong>jornalista</strong>,{" "}
                      <strong>empresário</strong> e{" "}
                      <strong>criador de conteúdo</strong> com forte e consolidada
                      atuação junto ao público jovem, colégios de ponta e grandes
                      marcas do mercado nacional.
                    </p>

                    <p className="text-sm text-slate-600 leading-relaxed">
                      Essa conexão orgânica deu origem à PRX: transformar
                      relacionamento e influência em um{" "}
                      <span className="text-slate-900 font-semibold">
                        ecossistema capaz de gerar consumo, experiências,
                        oportunidades e negócios
                      </span>{" "}
                      reais para a nova geração.
                    </p>

                    <p className="text-sm font-semibold text-[#0B67FF]">
                      Agora, buscamos parceiros estratégicos que queiram crescer e
                      liderar dentro desse ecossistema.
                    </p>
                  </div>

                  <div className="md:col-span-4 p-5 bg-slate-50 border border-slate-200 rounded-sm space-y-3">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Pilares de Influência
                    </div>
                    <ul className="space-y-2 text-xs text-slate-700">
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0B67FF] shrink-0" />
                        <span>Conexão direta com escolas e diretórios</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0B67FF] shrink-0" />
                        <span>Canal de comunicação jovem de alta tração</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0B67FF] shrink-0" />
                        <span>Relacionamento com marcas de primeira linha</span>
                      </li>
                      <li className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#0B67FF] shrink-0" />
                        <span>Criação de formatos autorais para a Gen Z</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* --------------------------------------------------------------------- */}
            {/* SEÇÃO 04: A PARCERIA ESTRATÉGICA (O Núcleo da Proposta)               */}
            {/* --------------------------------------------------------------------- */}
            <section id="parceria" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B67FF]">
                  03 / Estrutura da Parceria
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
                  A PARCERIA
                </h2>
                <p className="text-sm sm:text-base text-slate-600 mt-2 max-w-3xl">
                  Propomos que a <strong>B2 Eventos</strong> se torne parceira
                  estratégica da <strong>PRX</strong> para eventos e
                  experiências, construindo uma relação de geração recorrente de
                  negócios.
                </p>
              </div>

              {/* Seletor Interativo das Duas Vias da Parceria */}
              <div className="flex items-center gap-2 border-b border-slate-200 pb-3">
                <button
                  onClick={() => setActiveTab("prx-b2")}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                    activeTab === "prx-b2"
                      ? "bg-[#0B67FF] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 bg-slate-100"
                  }`}
                >
                  Via 1: PRX → B2 (Geração de Negócios)
                </button>
                <button
                  onClick={() => setActiveTab("b2-prx")}
                  className={`px-4 py-2 text-xs font-bold uppercase tracking-wider rounded-sm transition-all cursor-pointer ${
                    activeTab === "b2-prx"
                      ? "bg-[#0B67FF] text-white shadow-xs"
                      : "text-slate-600 hover:text-slate-900 bg-slate-100"
                  }`}
                >
                  Via 2: B2 → PRX (Eventos Proprietários)
                </button>
              </div>

              {/* Conteúdo da Via 1: PRX -> B2 */}
              {activeTab === "prx-b2" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="p-6 border border-blue-200 bg-blue-50/40 rounded-sm">
                    <h3 className="text-lg font-bold text-slate-950">
                      PRX → B2: Novo Canal Comercial e de Comunicação
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      A PRX atua como um acelerador ativo de vendas, demanda e
                      autoridade para o portfólio da B2 Eventos:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Divulgação nas Redes de Rafael Molina",
                        desc: "Exposição massiva e qualificada dos eventos da B2 para uma audiência jovem e engajada.",
                      },
                      {
                        title: "Realização Preferencial dos Eventos",
                        desc: "Todos os eventos do calendário PRX priorizam a estrutura e a operação da B2 como parceira.",
                      },
                      {
                        title: "Indicação Direta para Marcas",
                        desc: "Conexão da B2 com marcas parceiras e patrocinadores comerciais do ecossistema PRX.",
                      },
                      {
                        title: "Aproximação com Escolas & Colégios",
                        desc: "Acesso aos colégios do relacionamento de Rafael para formaturas, festas e encontros.",
                      },
                      {
                        title: "Geração de Oportunidades Múltiplas",
                        desc: "Captação contínua para formaturas universitárias, eventos corporativos e encontros escolares.",
                      },
                      {
                        title: "Criação de Projetos para a Geração Z",
                        desc: "Desenvolvimento conjunto de novos produtos e formatos com a linguagem da nova geração.",
                      },
                    ].map((item, idx) => (
                      <div
                        key={idx}
                        className="p-5 border border-slate-200 bg-white rounded-sm hover:border-[#0B67FF]/50 transition-colors"
                      >
                        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#0B67FF] mb-2">
                          <span>0{idx + 1}</span>
                          <span className="w-6 h-[1px] bg-blue-300" />
                        </div>
                        <h4 className="text-sm font-bold text-slate-900 mb-1">
                          {item.title}
                        </h4>
                        <p className="text-xs text-slate-600 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="p-4 bg-slate-100 border border-slate-200 rounded-sm text-center">
                    <p className="text-xs font-semibold text-slate-700">
                      🎯{" "}
                      <span className="text-slate-900">
                        Não queremos apenas divulgar a B2.
                      </span>{" "}
                      Queremos gerar negócios recorrentes para a B2.
                    </p>
                  </div>
                </div>
              )}

              {/* Conteúdo da Via 2: B2 -> PRX */}
              {activeTab === "b2-prx" && (
                <div className="space-y-6 animate-fadeIn">
                  <div className="p-6 border border-orange-200 bg-orange-50/40 rounded-sm">
                    <h3 className="text-lg font-bold text-slate-950">
                      B2 → PRX: Parceria nos Eventos Proprietários
                    </h3>
                    <p className="text-sm text-slate-600 mt-1">
                      Entrada da B2 como co-produtora e parceira operacional do
                      calendário autoral da PRX, com divisão de receitas e modelo
                      comercial pré-definido:
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {[
                      {
                        name: "PRX UP",
                        icon: Coffee,
                        tag: "Lifestyle & Conexão",
                        desc: "Coffee party, música, esporte e lifestyle para a juventude urbana.",
                      },
                      {
                        name: "PRX RUN",
                        icon: Activity,
                        tag: "Saúde & Performance",
                        desc: "Corrida e experiência imersiva de bem-estar para a nova geração.",
                      },
                      {
                        name: "PRX FOUNDERS",
                        icon: Briefcase,
                        tag: "Empreendedorismo",
                        desc: "Jovens empreendedores, founders, investidores e novas ideias de negócios.",
                      },
                      {
                        name: "PRX PASS EXPERIENCES",
                        icon: Ticket,
                        tag: "Exclusividade",
                        desc: "Experiências e acessos restritos para membros do clube de benefícios.",
                      },
                      {
                        name: "RESENHA",
                        icon: Flame,
                        tag: "Festa Mensal Autoral",
                        desc: "A cada edição, um jovem diferente assume o papel de host, trazendo sua identidade, seus convidados e sua rede.",
                      },
                      {
                        name: "Modelos Específicos",
                        icon: TrendingUp,
                        tag: "Customização",
                        desc: "Cada projeto conta com modelo de sociedade, divisão de receitas e responsabilidades alinhadas caso a caso.",
                      },
                    ].map((item, idx) => {
                      const IconComponent = item.icon;
                      return (
                        <div
                          key={idx}
                          className="p-5 border border-slate-200 bg-white rounded-sm hover:border-[#EA580C]/50 transition-colors flex flex-col justify-between"
                        >
                          <div>
                            <div className="flex items-center justify-between mb-3">
                              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                                {item.tag}
                              </span>
                              <IconComponent className="w-4 h-4 text-[#EA580C]" />
                            </div>
                            <h4 className="text-base font-bold text-slate-900 mb-1">
                              {item.name}
                            </h4>
                            <p className="text-xs text-slate-600 leading-relaxed">
                              {item.desc}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </section>

            {/* --------------------------------------------------------------------- */}
            {/* SEÇÃO 05: B2 DENTRO DO PRX PASS (Presença Permanente no App)          */}
            {/* --------------------------------------------------------------------- */}
            <section id="prx-pass" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B67FF]">
                  04 / Presença Contínua
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
                  B2 DENTRO DO PRX PASS
                </h2>
              </div>

              <div className="p-8 border border-slate-200 bg-gradient-to-r from-blue-50/30 via-white to-slate-50/50 rounded-sm">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                  <div className="md:col-span-8 space-y-4">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold text-[#0B67FF] bg-blue-50 border border-blue-200 rounded-sm">
                      <Award className="w-3.5 h-3.5" />
                      <span>Benefício Permanente no Aplicativo</span>
                    </span>

                    <h3 className="text-xl sm:text-2xl font-bold text-slate-950">
                      A B2 presente todos os dias no bolso do jovem.
                    </h3>

                    <p className="text-sm text-slate-700 leading-relaxed">
                      Queremos transformar a B2 em benefício permanente dentro do
                      aplicativo PRX. A empresa poderá criar vantagens exclusivas
                      para membros do <strong>PRX PASS</strong>.
                    </p>

                    {/* Exemplo de Chamada de Ação no App */}
                    <div className="p-4 bg-white border border-blue-200 rounded-sm shadow-2xs">
                      <p className="text-xs font-mono uppercase text-[#0B67FF] font-bold">
                        Exemplo de Ativação no PRX PASS:
                      </p>
                      <p className="text-sm font-semibold text-slate-900 mt-1 italic">
                        “Faça seu evento com a B2 através da PRX e ganhe 10% de
                        benefício na decoração.”
                      </p>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      Descontos, upgrades, experiências VIP e condições especiais
                      podem ser desenvolvidos em conjunto. Assim, a B2 deixa de
                      aparecer para o jovem apenas quando ele procura um evento:{" "}
                      <span className="text-slate-900 font-semibold">
                        ela passa a fazer parte do ecossistema diário dele
                      </span>
                      .
                    </p>
                  </div>

                  <div className="md:col-span-4 p-5 bg-white border border-slate-200 rounded-sm space-y-4 text-center">
                    <div className="text-xs font-mono uppercase tracking-wider text-slate-400">
                      Vantagem Estratégica
                    </div>
                    <div className="text-3xl font-black text-slate-900">
                      365 dias
                    </div>
                    <p className="text-xs text-slate-500">
                      Presença constante da marca B2 no cotidiano do jovem,
                      antecipando o momento da decisão da formatura ou festa.
                    </p>
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-center gap-2 text-xs font-semibold text-[#0B67FF]">
                      <CheckCircle2 className="w-4 h-4" />
                      <span>Fidelização e LTV Ampliado</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* --------------------------------------------------------------------- */}
            {/* SEÇÃO 06: PRX × B2 × ESCOLAS (A Terceira Frente)                      */}
            {/* --------------------------------------------------------------------- */}
            <section id="escolas" className="scroll-mt-24 space-y-6">
              <div className="border-b border-slate-200 pb-4">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#0B67FF]">
                  05 / Expansão Escolar
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-950 tracking-tight mt-1">
                  PRX × B2 × ESCOLAS
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
                <div className="md:col-span-7 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-semibold text-slate-800 bg-slate-100 border border-slate-200 rounded-sm">
                    <School className="w-3.5 h-3.5 text-[#0B67FF]" />
                    <span>Canal Institucional Escolar</span>
                  </div>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    A relação de Rafael com escolas e colégios abre uma terceira
                    frente de imenso valor comercial. Queremos levar a B2 para
                    dentro das instituições através de ativações, experiências e
                    projetos especiais.
                  </p>

                  <div className="p-5 border border-slate-200 bg-white rounded-sm space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-900">
                      <Zap className="w-4 h-4 text-[#0B67FF]" />
                      <span>Exemplo de Formato: PRX BREAK</span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Intervenções rápidas e vibrantes no horário de
                      intervalo/almoço, unindo <strong>música</strong>,{" "}
                      <strong>tecnologia</strong>,{" "}
                      <strong>empreendedorismo</strong>, novos talentos e
                      experiências de marca.
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    A partir daí, PRX e B2 podem desenvolver novos formatos
                    proprietários para o ambiente escolar — transformando esse
                    relacionamento direto em{" "}
                    <strong className="text-slate-900">
                      futuras oportunidades de formaturas e grandes eventos
                    </strong>
                    .
                  </p>
                </div>

                <div className="md:col-span-5 p-6 border border-slate-200 bg-slate-50/60 rounded-sm space-y-4">
                  <h4 className="text-xs font-mono uppercase tracking-wider text-slate-500 font-bold">
                    Ciclo de Conversão Escolar
                  </h4>
                  <div className="space-y-3 text-xs">
                    <div className="p-3 bg-white border border-slate-200 rounded-sm">
                      <span className="font-bold text-slate-900 block">
                        Passo 1: Presença Orgânica
                      </span>
                      <span className="text-slate-500 text-[11px]">
                        Ativações e breaks no cotidiano dos alunos.
                      </span>
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded-sm">
                      <span className="font-bold text-slate-900 block">
                        Passo 2: Download do PRX PASS
                      </span>
                      <span className="text-slate-500 text-[11px]">
                        Engajamento da comissão de formatura no ecossistema.
                      </span>
                    </div>
                    <div className="p-3 bg-white border border-slate-200 rounded-sm">
                      <span className="font-bold text-slate-900 block">
                        Passo 3: Fechamento com B2
                      </span>
                      <span className="text-slate-500 text-[11px]">
                        Contratação de formatura ou evento com benefício exclusivo.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* --------------------------------------------------------------------- */}
            {/* SEÇÃO 07: A VISÃO (Fechamento Monumental e Assinatura)                */}
            {/* --------------------------------------------------------------------- */}
            <section
              id="visao"
              className="scroll-mt-24 p-8 sm:p-14 border border-slate-900 bg-slate-950 text-white rounded-sm space-y-8"
            >
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase tracking-widest text-[#00D2FF] font-bold">
                  06 / O Próximo Nível
                </span>
                <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                  A VISÃO
                </h2>
              </div>

              <div className="space-y-5 text-slate-300 text-sm sm:text-base leading-relaxed max-w-3xl">
                <p className="text-lg sm:text-xl font-medium text-white leading-relaxed">
                  Esta não é uma proposta para fazer um evento juntos.
                </p>
                <p>
                  É uma proposta para construir um{" "}
                  <strong className="text-white">
                    fluxo permanente de negócios
                  </strong>{" "}
                  entre a PRX, a B2 Eventos, escolas, marcas de peso e uma nova
                  geração de consumidores que busca experiências autênticas.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-sm">
                    <span className="text-xs font-mono uppercase text-[#EA580C] font-bold block mb-1">
                      A Força da B2
                    </span>
                    <p className="text-xs text-slate-400">
                      Tem a estrutura, o know-how e a excelência operacional para
                      fazer acontecer.
                    </p>
                  </div>
                  <div className="p-4 bg-slate-900/80 border border-slate-800 rounded-sm">
                    <span className="text-xs font-mono uppercase text-[#00D2FF] font-bold block mb-1">
                      A Força da PRX
                    </span>
                    <p className="text-xs text-slate-400">
                      Está construindo a comunidade, os produtos digitais e o
                      relacionamento íntimo com quem vem depois.
                    </p>
                  </div>
                </div>
              </div>

              {/* Manifesto Central */}
              <div className="pt-6 border-t border-slate-800 space-y-3 text-center sm:text-left">
                <p className="text-sm font-mono uppercase tracking-widest text-slate-400">
                  B2 faz eventos. PRX conecta uma geração.
                </p>
                <p className="text-2xl sm:text-3xl font-extrabold text-white">
                  Juntas, podemos criar onde essa geração vai acontecer.
                </p>
                <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="text-xl sm:text-2xl font-black tracking-widest uppercase text-transparent bg-clip-text bg-gradient-to-r from-white via-[#00D2FF] to-[#7928CA]">
                    PRX × B2
                  </div>
                  <div className="text-sm sm:text-base font-mono font-bold tracking-widest text-[#00D2FF]">
                    THE NXT PLACE IS PRX.
                  </div>
                </div>
              </div>

              {/* Gatilho de Ação Final */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 no-print">
                <div className="text-xs text-slate-400 text-center sm:text-left">
                  Pronto para transformar essa aliança em resultados práticos?
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    onClick={handlePrint}
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-5 py-3 text-xs font-semibold text-slate-300 bg-slate-900 hover:bg-slate-800 border border-slate-700 rounded-sm transition-colors cursor-pointer"
                  >
                    <FileDown className="w-4 h-4" />
                    <span>Salvar PDF</span>
                  </button>
                  <a
                    href="mailto:contato@prx.com.br?subject=Alian%C3%A7a%20Estrat%C3%A9gica%20PRX%20%C3%97%20B2%20Eventos"
                    className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-slate-950 bg-white hover:bg-slate-100 rounded-sm transition-all shadow-md active:scale-[0.98] cursor-pointer"
                  >
                    <span>Agendar Reunião Executiva</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* ========================================================================= */}
      {/* RODAPÉ OFICIAL (Com Assinatura ViraWeb & viraweb3.png)                    */}
      {/* ========================================================================= */}
      <footer className="border-t border-slate-200 bg-slate-50/70 py-12 mt-16 no-print">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            {/* Logos da Parceria no Rodapé */}
            <div className="flex items-center gap-4">
              <PRXLogo size="sm" animated={false} className="w-20" />
              <span className="text-slate-300 text-sm">×</span>
              <B2Logo size="sm" animated={false} className="w-16" />
              <span className="text-xs text-slate-500 font-medium border-l border-slate-200 pl-4 ml-2">
                © 2026 Aliança PRX & B2 Eventos. Todos os direitos reservados.
              </span>
            </div>

            {/* Assinatura Mandatória: Desenvolvido por ViraWeb com viraweb3.png */}
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-500 font-medium">
                Desenvolvido por
              </span>
              <VirawebLogo size="md" />
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
