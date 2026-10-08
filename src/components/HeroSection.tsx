// import Link from "next/link";
// import Image from "next/image";

// export function HeroSection() {
//   return (
//     <section
//       id="inicio"
//       className="relative pt-8 pb-16 md:py-20 overflow-hidden"
//     >
//       <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
//           <div className="lg:col-span-6 space-y-6 text-center lg:text-left">
//             <span className="inline-block text-xs uppercase tracking-widest font-bold text-slate-500">
//               Conexões reais, histórias incríveis
//             </span>

//             <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-green leading-[1.15] tracking-tight">
//               Mulheres que se conectam vão mais{" "}
//               <span className="text-brand-pink relative inline-block">
//                 longe.
//               </span>
//             </h1>

//             <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
//               O{" "}
//               <strong className="text-brand-green font-semibold">
//                 Elas por Aí
//               </strong>{" "}
//               é uma comunidade para mulheres que querem fazer novas amizades,
//               compartilhar experiências e viver eventos incríveis, presenciais e
//               online.
//             </p>

//             <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
//               <Link
//                 href="#comunidade"
//                 className="w-full sm:w-auto text-center bg-brand-pink hover:bg-brand-pink-hover text-white font-semibold px-7 py-3.5 rounded-full transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
//               >
//                 Quero fazer parte
//               </Link>

//               <Link
//                 href="#eventos"
//                 className="w-full sm:w-auto text-center bg-transparent border-2 border-brand-pink text-brand-pink hover:bg-brand-pink/5 font-semibold px-7 py-3.5 rounded-full transition-all duration-200"
//               >
//                 Ver eventos
//               </Link>
//             </div>
//           </div>

//           <div className="lg:col-span-6 relative">
//             <div className="relative mx-auto max-w-md lg:max-w-none">
//               <div className="relative rounded-[2.5rem] overflow-hidden border-4 border-white shadow-xl aspect-[4/3] sm:aspect-[16/11]">
//                 <Image
//                   src="/hero-section-image.jpg"
//                   alt="Grupo de amigas sorrindo e se conectando"
//                   fill
//                   className="object-cover"
//                   priority
//                 />

//                 <div className="absolute bottom-4 left-6 z-10">
//                   <p className="font-handwriting text-white text-2xl sm:text-3xl drop-shadow-md -rotate-3">
//                     Amizade também é<br />
//                     um destino ♡
//                   </p>
//                 </div>

//                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

const HERO_IMAGES: GalleryImage[] = [
  {
    src: "/hero-section-image.jpg",
    alt: "Encontro presencial da comunidade 1",
  },
  {
    src: "/hero-section-image.jpg",
    alt: "Mulheres conversando em mesa de café",
  },
  { src: "/hero-section-image.jpg", alt: "Grupo de mulheres juntas" },
  { src: "/hero-section-image.jpg", alt: "Atividade ao ar livre" },
  { src: "/hero-section-image.jpg", alt: "Mulher sorrindo na piscina" },
  { src: "/hero-section-image.jpg", alt: "Encontro de networking" },
];

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="pb-16 md:pt-36 md:pb-24 bg-brand-cream overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 md:space-y-16">
        {/* 1. Mosaico Desktop (Visível em md:) */}
        <div className="hidden md:grid grid-cols-4 grid-rows-2 gap-4 h-[480px] lg:h-[540px]">
          {/* Foto 1 - Esquerda Superior */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm group">
            <Image
              src={HERO_IMAGES[0].src}
              alt={HERO_IMAGES[0].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Foto 2 - Esquerda Inferior */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm group">
            <Image
              src={HERO_IMAGES[1].src}
              alt={HERO_IMAGES[1].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Foto 3 - Centro Grande (Destaque Principal) */}
          <div className="col-span-2 row-span-2 relative rounded-3xl overflow-hidden shadow-md group">
            <Image
              src={HERO_IMAGES[2].src}
              alt={HERO_IMAGES[2].alt}
              fill
              priority
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Foto 4 - Direita Topo Esquerda */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm group">
            <Image
              src={HERO_IMAGES[3].src}
              alt={HERO_IMAGES[3].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>

          {/* Foto 5 - Direita Topo Direita */}
          <div className="relative rounded-2xl overflow-hidden shadow-sm group">
            <Image
              src={HERO_IMAGES[4].src}
              alt={HERO_IMAGES[4].alt}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
            />
          </div>
        </div>

        {/* 2. Carrossel Mobile (Visível apenas em telas pequenas < md) */}
        <div className="md:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none -mx-4 px-4 pb-4">
          {HERO_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="snap-center shrink-0 w-[280px] h-[340px] relative rounded-2xl overflow-hidden shadow-sm group"
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
