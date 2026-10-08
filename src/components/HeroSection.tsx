import Image from "next/image";

interface GalleryImage {
  src: string;
  alt: string;
}

const HERO_IMAGES: GalleryImage[] = [
  // Coluna 1
  { src: "/hero-3.jpg", alt: "Grande encontro da comunidade" },
  { src: "/hero-2.jpg", alt: "Grande encontro da comunidade" },
  { src: "/hero-3-1.jpg", alt: "Grande encontro da comunidade" },

  // Coluna 2
  { src: "/hero-4.jpg", alt: "Grande encontro da comunidade" },
  { src: "/hero-5.jpg", alt: "Grande encontro da comunidade" },
  { src: "/hero-6.jpg", alt: "Grande encontro da comunidade" },

  // Coluna 3
  { src: "/hero-7.jpg", alt: "Grande encontro da comunidade" },
];

export function HeroSection() {
  return (
    <section id="inicio" className="bg-brand-cream overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        {/* Mosaico de 3 Colunas (Desktop - Grid 12 colunas) */}
        <div className="hidden md:grid grid-cols-12 gap-3.5 h-[580px] lg:h-[650px]">
          {/* COLUNA 1: 2 no topo (lado a lado) + 1 foto grande na parte inferior */}
          <div className="col-span-4 grid grid-rows-12 gap-3.5 h-full">
            <div className="row-span-5 grid grid-cols-2 gap-3.5">
              <div className="relative rounded-2xl overflow-hidden shadow-sm group">
                <Image
                  src={HERO_IMAGES[0].src}
                  alt={HERO_IMAGES[0].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-sm group">
                <Image
                  src={HERO_IMAGES[1].src}
                  alt={HERO_IMAGES[1].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>

            <div className="row-span-7 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image
                src={HERO_IMAGES[2].src}
                alt={HERO_IMAGES[2].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          </div>

          {/* COLUNA 2: 1 foto grande na parte superior + 2 fotos menores na parte inferior */}
          <div className="col-span-4 grid grid-rows-12 gap-3.5 h-full">
            <div className="row-span-7 relative rounded-2xl overflow-hidden shadow-sm group">
              <Image
                src={HERO_IMAGES[3].src}
                alt={HERO_IMAGES[3].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>

            <div className="row-span-5 grid grid-cols-2 gap-3.5">
              <div className="relative rounded-2xl overflow-hidden shadow-sm group">
                <Image
                  src={HERO_IMAGES[4].src}
                  alt={HERO_IMAGES[4].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
              <div className="relative rounded-2xl overflow-hidden shadow-sm group">
                <Image
                  src={HERO_IMAGES[5].src}
                  alt={HERO_IMAGES[5].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                />
              </div>
            </div>
          </div>

          {/* COLUNA 3: 1 foto grande ocupando toda a altura total */}
          <div className="col-span-4 relative rounded-2xl overflow-hidden shadow-sm group h-full">
            <Image
              src={HERO_IMAGES[6].src}
              alt={HERO_IMAGES[6].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>

        {/* Carrossel Mobile (< md) */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-4 px-4 pb-4">
          {HERO_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="snap-center shrink-0 w-[280px] h-[360px] relative rounded-2xl overflow-hidden shadow-sm group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
