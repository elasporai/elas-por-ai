import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const menu: NavItem[] = [
  { label: "Inicio", href: "/" },
  { label: "Sobre", href: "/" },
  { label: "Eventos", href: "/" },
];

export const NavHeader = () => {
  return (
    <nav className="hidden md:flex items-center gap-8 font-medium text-green-950 text-sm">
      {menu.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="hover:text-brand-pink transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

export const NavFooter = () => {
  return (
    <nav className="flex flex-wrap md:items-center md:justify-center gap-4 text-sm font-medium text-green-100 pt-4">
      {menu.map((item) => (
        <Link
          key={item.label}
          href={item.href}
          className="hover:text-brand-pink transition-colors"
        >
          {item.label}
        </Link>
      ))}
    </nav>
  );
};

type NavMobileProps = {
  setIsMenuOpen: (value: boolean) => void;
};

export const NavMobile = ({ setIsMenuOpen }: NavMobileProps) => {
  return (
    <div className="h-full flex flex-col justify-between md:hidden bg-brand-cream border-b border-rose-100 px-6 pt-4 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
      <nav className="flex flex-col gap-3 font-medium text-slate-700 text-base">
        {menu.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            onClick={() => setIsMenuOpen(false)}
            className="hover:text-brand-pink transition-colors py-1"
          >
            {item.label}
          </Link>
        ))}
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
  );
};
