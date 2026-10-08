import Image from "next/image";

interface Founder {
  name: string;
  role: string;
  bio: string;
  image: string;
}

const FOUNDERS: Founder[] = [
  {
    name: "Francisca Elaine",
    role: "Co-fundadora",
    bio: "Especialista em criar encontros acolhedores, transformar boas conversas em memórias inesquecíveis e expandir a rede.",
    image: "/fa-member.jpeg",
  },
  {
    name: "Nome da Idealizadora 2",
    role: "Co-fundadora & Eventos",
    bio: "Apaixonada por conectar pessoas, criar experiências marcantes e promover o protagonismo feminino por onde passa.",
    image: "/logo-floral.svg",
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
              className="bg-brand-card rounded-3xl border border-rose-100/80 shadow-sm flex items-center gap-4"
            >
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-3xl overflow-hidden">
                <Image
                  src={founder.image}
                  alt={founder.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-xl font-bold text-slate-800">
                  {founder.name}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-brand-pink">
                  {founder.role}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed max-w-xs pr-4">
                  {founder.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
