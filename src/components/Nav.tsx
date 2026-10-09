import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="hidden md:flex items-center gap-8 font-medium text-slate-700 text-sm">
      <Link href="#inicio" className="hover:text-brand-pink transition-colors">
        Início
      </Link>
      <Link href="#sobre" className="hover:text-brand-pink transition-colors">
        Sobre
      </Link>
      <Link href="#eventos" className="hover:text-brand-pink transition-colors">
        Eventos
      </Link>
    </nav>
  );
};
