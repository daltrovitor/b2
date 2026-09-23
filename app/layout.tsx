// Hello World
import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScrollProvider from "./components/SmoothScrollProvider";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "PRX × B2 EVENTOS — A Próxima Geração Precisa de um Lugar Para Acontecer",
  description:
    "Proposta comercial estratégica entre a PRX e a B2 Eventos: a união entre o ecossistema digital da nova geração de Rafael Molina e a autoridade líder em eventos e experiências presenciais.",
  authors: [{ name: "PRX & B2 Eventos" }, { name: "ViraWeb", url: "https://viraweb.online" }],
  keywords: [
    "PRX",
    "B2 Eventos",
    "Rafael Molina",
    "Geração Z",
    "Eventos Universitários",
    "Formaturas",
    "PRX PASS",
    "PRX UP",
    "PRX RUN",
    "PRX FOUNDERS",
    "PRX BREAK",
    "Experiências",
    "Comunidade Jovem",
  ],
  openGraph: {
    title: "PRX × B2 EVENTOS — Proposta Estratégica",
    description:
      "A PRX leva a comunidade. A B2 transforma comunidade em experiência. Construindo um fluxo permanente de negócios para a nova geração.",
    type: "website",
    locale: "pt_BR",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "https://www.viraweb.online/favicon.png",
    shortcut: "https://www.viraweb.online/favicon.png",
    apple: "https://www.viraweb.online/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning className="scroll-smooth">
      <body
        suppressHydrationWarning
        className="font-sans antialiased bg-white text-slate-900 selection:bg-[#0B67FF] selection:text-white min-h-screen"
      >
        <SmoothScrollProvider>{children}</SmoothScrollProvider>
      </body>
    </html>
  );
}
