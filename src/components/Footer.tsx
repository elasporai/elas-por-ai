import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-cream border-t border-rose-100/80 pt-12 pb-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-rose-100/60">
          {/* Logo */}
          <Link href="/">
            <Image
              src="/logo-floral.svg"
              alt="Logo Elas por Aí"
              width={100}
              height={35}
            />
          </Link>

          <nav className="flex flex-wrap items-center justify-center gap-6 text-sm font-medium text-slate-600">
            <Link
              href="#inicio"
              className="hover:text-brand-pink transition-colors"
            >
              Início
            </Link>
            <Link
              href="#sobre"
              className="hover:text-brand-pink transition-colors"
            >
              Sobre
            </Link>
            <Link
              href="#eventos"
              className="hover:text-brand-pink transition-colors"
            >
              Eventos
            </Link>
            <Link
              href="#idealizadoras"
              className="hover:text-brand-pink transition-colors"
            >
              Idealizadoras
            </Link>
          </nav>

          <div className="flex items-center gap-4 text-brand-pink">
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="p-2 rounded-full hover:bg-brand-pink/10 transition-colors"
            ></Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              aria-label="LinkedIn"
              className="p-2 rounded-full hover:bg-brand-pink/10 transition-colors"
            ></Link>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
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
