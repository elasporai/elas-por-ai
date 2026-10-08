import Link from "next/link";
import Image from "next/image";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative pt-8 pb-16 md:py-20 overflow-hidden"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
            <span className="inline-block text-xs uppercase tracking-widest font-bold text-slate-500">
              Conexões reais, histórias incríveis
            </span>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-green leading-[1.15] tracking-tight">
              Mulheres que se conectam vão mais{" "}
              <span className="text-brand-pink relative inline-block">
                longe.
              </span>
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
              O{" "}
              <strong className="text-brand-green font-semibold">
                Elas por Aí
              </strong>{" "}
              é uma comunidade para mulheres que querem fazer novas amizades,
              compartilhar experiências e viver eventos incríveis, presenciais e
              online.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <Link
                href="#comunidade"
                className="w-full sm:w-auto text-center bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
              >
                Quero fazer parte
              </Link>

              <Link
                href="#eventos"
                className="w-full sm:w-auto text-center bg-transparent border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
              >
                Ver eventos
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl aspect-[4/3] sm:aspect-[16/11]">
                <Image
                  src="/hero-section-image.jpg"
                  alt="Grupo de amigas sorrindo e se conectando"
                  fill
                  className="object-cover"
                  priority
                />

                <div className="absolute bottom-4 left-6 z-10">
                  <p className="font-handwriting text-white text-2xl sm:text-3xl drop-shadow-md -rotate-3">
                    Amizade também é<br />
                    um destino ♡
                  </p>
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
