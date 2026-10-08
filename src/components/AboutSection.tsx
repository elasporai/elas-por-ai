import Link from "next/link";
import {
  Users,
  MessageCircle,
  MapPin,
  ArrowRight,
  MonitorSmartphone,
} from "lucide-react";

export function AboutSection() {
  const benefits = [
    {
      icon: Users,
      title: "Novas amizades",
    },
    {
      icon: MonitorSmartphone,
      title: "Eventos online",
    },
    {
      icon: MapPin,
      title: "Eventos presenciais.",
    },
    {
      icon: MessageCircle,
      title: "Troca de experiências",
    },
  ];

  return (
    <section id="sobre" className="py-16 md:py-24 bg-green-300/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="space-y-6 lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-green">
              Sobre o Elas por Aí
            </h2>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl">
              Somos uma comunidade criada para conectar mulheres que acreditam
              no poder da troca, da amizade e das experiências reais. Aqui, você
              encontra um espaço seguro, acolhedor e cheio de histórias, para
              viver o melhor da vida — juntas e por aí.
            </p>

            <div className="pt-2">
              <Link
                href="#comunidade"
                className="inline-flex items-center gap-2 text-brand-pink font-semibold hover:text-brand-pink-hover transition-colors group text-sm sm:text-base"
              >
                Conheça mais
                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          <div className="hidden lg:block">
            <div className="p-6 sm:p-8 rounded-3xl space-y-6">
              <ul className="space-y-5">
                {benefits.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <li key={index} className="flex items-center gap-4">
                      <div className=" text-brand-pink shrink-0">
                        <Icon size={22} />
                      </div>
                      <span className="font-medium text-slate-700 text-sm sm:text-base">
                        {item.title}
                      </span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
