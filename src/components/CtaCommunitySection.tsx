import Link from "next/link";
import { MessageCircleHeart } from "lucide-react";

export function CtaCommunitySection() {
  return (
    <section
      id="comunidade"
      className="py-4 bg-brand-pink/10 relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 relative z-10 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-extrabold text-brand-green leading-tight">
            Pronta para viver tudo isso?
          </h2>

          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Faça parte do Elas por Ai e entre para uma comunidade <br /> feita
            de mulheres reais como você.
          </p>
        </div>

        <Link
          href="https://whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold text-base px-8 py-2 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
        >
          Quero fazer parte
        </Link>
      </div>
    </section>
  );
}
