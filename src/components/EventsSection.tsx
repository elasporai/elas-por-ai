import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

interface EventItem {
  id: string;
  title: string;
  category: "Presencial" | "Online";
  price: string;
  date: string;
  time: string;
  location: string;
  image: string;
  link: string;
}

const UPCOMING_EVENTS: EventItem[] = [
  {
    id: "1",
    title: "Piquenique & Conexões no Parque",
    category: "Presencial",
    price: "Gratuito",
    date: "18 de Outubro",
    time: "15:00",
    location: "Parque do Ibirapuera - São Paulo, SP",
    image: "/about-image.jpg",
    link: "#comunidade",
  },
  {
    id: "2",
    title: "Clube do Livro Online: Leitura & Café",
    category: "Online",
    price: "Gratuito",
    date: "25 de Outubro",
    time: "19:30",
    location: "Transmissão ao vivo via Zoom",
    image: "/about-image.jpg",
    link: "#comunidade",
  },
  {
    id: "3",
    title: "Encontro de Networking & Empreendedorismo",
    category: "Presencial",
    price: "R$ 35,00",
    date: "08 de Novembro",
    time: "10:00",
    location: "Espaço de Co-working - Vitória, ES",
    image: "/about-image.jpg",
    link: "#comunidade",
  },
];

export function EventsSection() {
  return (
    <section id="eventos" className="py-16 md:py-24 bg-brand-cream">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
          <div>
            <span className="text-xs uppercase tracking-widest font-bold text-slate-500 block mb-2">
              Agenda da comunidade
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-green">
              Próximos Encontros & Eventos
            </h2>
          </div>
          <p className="text-slate-600 text-sm sm:text-base max-w-md">
            Participe dos nossos momentos de troca, encontros presenciais e
            dinâmicas online.
          </p>
        </div>

        {/* Grid de Cards de Eventos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {UPCOMING_EVENTS.map((event) => (
            <div
              key={event.id}
              className="bg-brand-card rounded-3xl border border-rose-100/80 overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group"
            >
              {/* Imagem do Card com Badge de Categoria */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />

                <div className="absolute top-4 left-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-md ${
                      event.category === "Presencial"
                        ? "bg-brand-green/90 text-white"
                        : "bg-brand-pink/90 text-white"
                    }`}
                  >
                    {event.category}
                  </span>
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-slate-800 group-hover:text-brand-pink transition-colors line-clamp-2">
                    {event.title}
                  </h3>

                  <div className="space-y-2 text-xs sm:text-sm text-slate-600">
                    <div className="flex items-center gap-2">
                      <Calendar
                        size={16}
                        className="text-brand-pink shrink-0"
                      />
                      <span>{event.date}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-brand-pink shrink-0" />
                      <span>{event.time}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin size={16} className="text-brand-pink shrink-0" />
                      <span className="line-clamp-1">{event.location}</span>
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-rose-100/60 space-y-3">
                  <div className="flex items-center justify-between text-xs sm:text-sm">
                    <span className="font-bold text-brand-green bg-emerald-50 text-emerald-800 px-3 py-0.5 rounded-full border border-emerald-200">
                      {event.price}
                    </span>
                    <Link
                      href={event.link}
                      className="inline-flex items-center justify-center gap-2 border border-brand-pink text-brand-pink hover:bg-brand-pink hover:text-white font-medium py-1 px-4 rounded-full text-xs sm:text-sm transition-all duration-200"
                    >
                      Garantir minha vaga
                      <ArrowUpRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/eventos"
            className="inline-flex items-center gap-2 text-brand-pink font-semibold hover:text-brand-pink-hover transition-colors group text-base sm:text-lg"
          >
            Ver todos os eventos
            <ArrowRight
              size={20}
              className="transition-transform group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
