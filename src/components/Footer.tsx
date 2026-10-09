"use client";

import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { NavFooter } from "./Nav";

export function Footer() {
  return (
    <footer className="bg-brand-green text-green-100">
      <div className="px-4 space-y-4">
        <div className="flex md:items-center justify-between gap-6 border-b border-rose-100/60">
          <div className="flex items-center justify-between text-brand-pink mb-4">
            <Link href="/">
              <Image
                src="/logo-footer.png"
                alt="Logo Elas por Aí"
                width={150}
                height={50}
              />
            </Link>
          </div>

          <div className="flex flex-col gap-4 justify-start">
            <NavFooter />
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="rounded-full transition-colors flex justify-end"
            >
              <FaInstagram
                size={26}
                className="text-pink-400 hover:text-pink-500 transition-colors duration-300"
              />
            </Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs gap-4 pb-4">
          <p>
            © {new Date().getFullYear()} Elas por Aí. Todos os direitos
            reservados.
          </p>
          <p className="flex items-center gap-1">
            Feito com{" "}
            <Heart
              size={14}
              className="text-brand-pink fill-brand-pink inline"
            />{" "}
            para conectar mulheres.
          </p>
        </div>
      </div>
    </footer>
  );
}
