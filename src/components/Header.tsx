"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import { NavHeader, NavMobile } from "./Nav";

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

        <NavHeader />

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

      {isMenuOpen && <NavMobile setIsMenuOpen={setIsMenuOpen} />}
    </header>
  );
}
