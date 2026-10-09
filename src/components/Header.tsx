"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { Nav } from "./Nav";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-brand-cream/90 backdrop-blur-md border-b border-rose-100/60">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-1 group">
          <Image
            src="/logo-floral.svg"
            alt="Logo Floral"
            width={90}
            height={30}
          />
        </Link>

        <Nav />

        <div className="hidden md:flex items-center">
          <Link
            href="#comunidade"
            className="bg-brand-pink hover:bg-brand-pink-hover text-white px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all shadow-sm hover:shadow-md"
          >
            Entrar na comunidade
          </Link>
        </div>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden text-brand-green p-2 focus:outline-none"
          aria-label="Abrir Menu"
        >
          {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-brand-cream border-b border-rose-100 px-6 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col gap-3 font-medium text-slate-700 text-base">
            <Link
              href="#inicio"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-brand-pink transition-colors py-1"
            >
              Início
            </Link>
            <Link
              href="#sobre"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-brand-pink transition-colors py-1"
            >
              Sobre
            </Link>
            <Link
              href="#eventos"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-brand-pink transition-colors py-1"
            >
              Eventos
            </Link>
            <Link
              href="#idealizadoras"
              onClick={() => setIsMenuOpen(false)}
              className="hover:text-brand-pink transition-colors py-1"
            >
              Idealizadoras
            </Link>
          </nav>

          <div className="pt-2">
            <Link
              href="#comunidade"
              onClick={() => setIsMenuOpen(false)}
              className="block text-center bg-brand-pink hover:bg-brand-pink-hover text-white px-5 py-3 rounded-full text-sm font-semibold transition-all shadow-sm"
            >
              Entrar na comunidade
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
