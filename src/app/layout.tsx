import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Caveat } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-caveat",
});

export const metadata: Metadata = {
  title: "Elas por Aí | Comunidade para Mulheres",
  description:
    "Conexões reais, histórias incríveis. O seu lugar de conexão e acolhimento.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${caveat.variable}`}>
      <body className="font-sans bg-[#FDF7F8] text-slate-800 antialiased">
        {children}
      </body>
    </html>
  );
}
