import Link from "next/link";
import { MessageCircleHeart } from "lucide-react";

export function CtaCommunitySection() {
  return (
    <section
      id="comunidade"
      className="py-16 md:py-24 bg-brand-pink/10 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
        <div className="inline-flex items-center justify-center p-3 bg-brand-pink/10 text-brand-pink rounded-full mb-2">
          <MessageCircleHeart size={32} />
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-green leading-tight">
          Pronta para viver novas experiências e criar conexões reais?
        </h2>

        <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Faça parte do nosso grupo exclusivo no WhatsApp e fique por dentro de
          todos os encontros, novidades e conversas em primeira mão.
        </p>

        <div className="pt-4">
          <Link
            href="https://whatsapp.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold text-base px-8 py-4 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            Entrar no grupo oficial
          </Link>
        </div>
      </div>
    </section>
  );
}
