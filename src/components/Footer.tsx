import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";
import { FaInstagram } from "react-icons/fa";
import { NavFooter } from "./Nav";

export function Footer() {
  return (
    <footer className="bg-brand-green border-t border-rose-100/80 text-green-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 border-b border-rose-100/60">
          <NavFooter />
          <div className="flex items-center justify-between text-brand-pink mb-4">
            <Link
              href="https://instagram.com"
              target="_blank"
              aria-label="Instagram"
              className="rounded-full hover:bg-brand-pink/10 transition-colors"
            >
              <FaInstagram size={26} />
            </Link>

            <Link href="/">
              <Image
                src="/logo-footer.png"
                alt="Logo Elas por Aí"
                width={150}
                height={50}
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
