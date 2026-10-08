import Image from "next/image";
import Link from "next/link";

interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
  instagram?: string;
  linkedin?: string;
}

const FOUNDERS: Founder[] = [
  {
    name: "Nome da Idealizadora 1",
    role: "Co-fundadora & Comunidade",
    bio: "Apaixonada por conectar pessoas, criar experiências marcantes e promover o protagonismo feminino por onde passa.",
    image: "/logo-floral.svg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
  {
    name: "Nome da Idealizadora 2",
    role: "Co-fundadora & Eventos",
    bio: "Especialista em criar encontros acolhedores, transformar boas conversas em memórias inesquecíveis e expandir a rede.",
    image: "/logo-floral.svg",
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
  },
];

export function FoundersSection() {
  return (
    <section
      id="idealizadoras"
      className="py-16 md:py-24 bg-white border-t border-rose-100/50"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs uppercase tracking-widest font-bold text-slate-500 block">
            Quem faz acontecer
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-green">
            Conheça as Idealizadoras
          </h2>
          <p className="text-slate-600 text-sm sm:text-base">
            Duas mulheres com o propósito comum de aproximar pessoas e
            transformar histórias por meio do acolhimento e da amizade.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-4xl mx-auto">
          {FOUNDERS.map((founder, index) => (
            <div
              key={index}
              className="bg-brand-card rounded-3xl p-6 sm:p-8 border border-rose-100/80 shadow-sm flex flex-col items-center text-center space-y-4 hover:shadow-md transition-all duration-300"
            >
              /
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-rose-100 shadow-md">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
              </div>
              {/* Informações */}
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-800">
                  {founder.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-brand-pink">
                  {founder.role}
                </p>
              </div>
              <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs">
                {founder.bio}
              </p>
              {/* Redes Sociais */}
              <div className="flex items-center gap-3 pt-2">
                {founder.instagram && (
                  <Link
                    href={founder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-brand-pink/10 text-brand-pink hover:bg-brand-pink hover:text-white transition-colors"
                    aria-label={`Instagram de ${founder.name}`}
                  ></Link>
                )}
                {founder.linkedin && (
                  <Link
                    href={founder.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-brand-pink/10 text-brand-pink hover:bg-brand-pink hover:text-white transition-colors"
                    aria-label={`LinkedIn de ${founder.name}`}
                  ></Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
