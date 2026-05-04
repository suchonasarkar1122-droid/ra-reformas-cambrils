import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Sobre Nosotros · R.A Reformas Cambrils",
  description:
    "Conoce R.A Reformas Cambrils: artesanos del Baix Camp con 15 años reformando pisos, casas de pueblo y segundas residencias en la Costa Daurada. Plantilla propia y trato directo.",
  alternates: { canonical: "/sobre-nosotros" },
  openGraph: {
    title: "Sobre Nosotros - R.A Reformas Cambrils",
    description:
      "Empresa de reformas en Cambrils con sello mediterráneo. Plantilla propia, materiales pensados para la costa y trato cercano.",
    url: "/sobre-nosotros",
    images: ["/images/equipo-artesanos-reforma-cambrils.webp"],
  },
};

const values = [
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2" strokeLinecap="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    title: "Palabra dada",
    description:
      "Nos gusta cerrar cifras y plazos por escrito desde la primera reunión. Trabajamos con el mismo compromiso para una pareja de Vilafortuny y para una familia que reforma su piso de Cambrils Mar a 800 km.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2" strokeLinecap="round">
        <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
      </svg>
    ),
    title: "Oficio mediterráneo",
    description:
      "Nuestros operarios crecieron viendo levantar casas en Cambrils, Riudoms y Mont-roig. Conocen la cal, la piedra del Baix Camp y la carpintería resistente al salitre. Esa memoria viva acaba en cada obra.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
    title: "Calendario firme",
    description:
      "Para una segunda residencia, las fechas no son negociables: la familia llega en julio. Cumplimos con cronograma cerrado y te mantenemos informado del avance para que sepas en todo momento qué pasa en tu obra.",
  },
  {
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2" strokeLinecap="round">
        <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Materiales que aguantan",
    description:
      "Pintura transpirable, aluminio con rotura de puente térmico, suelos rectificados, griferías cromadas. Probadas durante años en viviendas costeras. Nada de modas que duran un verano.",
  },
];

export default function SobreNosotrosPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Sobre Nosotros", url: "/sobre-nosotros" }]} />

      {/* ============ HERO ============ */}
      <HeroService
        title="Artesanos del Baix Camp con casa en Cambrils"
        h1Keyword="Sobre R.A Reformas Cambrils"
        subtitle="Quince años transformando pisos, casas de pueblo y segundas residencias en la Costa Daurada. Plantilla propia, oficio mediterráneo y trato directo con el dueño de la obra."
        image="/images/equipo-artesanos-reforma-cambrils.webp"
        imageAlt="Equipo de R.A Reformas Cambrils"
        badge="R.A Reformas Cambrils"
        showCTA
      />

      {/* ============ STORY ============ */}
      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="flex-1 flex flex-col gap-6 order-2 lg:order-1">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">
                De dónde venimos
              </p>
              <h2 className="font-display font-extrabold text-[32px] md:text-[44px] uppercase text-dark leading-[1.05]">
                Sobre R.A Reformas Cambrils
              </h2>
              <p className="font-display italic text-dark/70 text-xl md:text-2xl">
                Nacimos al pie del Mediterráneo
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed">
                R.A Reformas se formó en Cambrils a partir de un equipo de albañiles, fontaneros y carpinteros que llevaban años cruzándose en obra por toda la comarca del Baix Camp. La idea fue sencilla: hacer las cosas como las hacían nuestros oficios de toda la vida, pero con un proyecto coordinado, presupuestos claros y un único responsable que respondiera ante el cliente.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                Las primeras reformas fueron pisos de Cambrils Mar y casas de pueblo del Centre Vila. Luego llegaron las segundas residencias de Vilafortuny y Cap de Sant Pere, las masías agrícolas de Riudoms y Mont-roig, los locales del paseo marítimo. Hoy, una parte importante de nuestra agenda son propietarios franceses, ingleses y belgas que confían en nosotros para gestionar a distancia su rincón en la Costa Daurada.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed">
                No tenemos showroom de mármol ni concept store. Tenemos furgonetas que salen del taller cada mañana, fotos del avance que te hacemos llegar y un teléfono fijo donde siempre contesta alguien que ha estado en tu vivienda. Eso es lo que entendemos por reformar bien.
              </p>
              <CTAButtons />
            </div>

            <div className="flex-1 relative min-h-[400px] lg:min-h-[550px] w-full rounded-[20px] overflow-hidden order-1 lg:order-2">
              <Image
                src="/images/salon-moderno-atico-cambrils.webp"
                alt="Reforma integral entregada por R.A Reformas en Cambrils"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ============ NUMBERS / DATA ============ */}
      <section className="bg-dark-card px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1100px]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { n: "15+", l: "Años en activo" },
              { n: "120+", l: "Obras entregadas" },
              { n: "Sí", l: "Plantilla propia" },
              { n: "0", l: "Subcontratas externas" },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display font-extrabold text-accent text-[42px] md:text-[56px] leading-none mb-2">{s.n}</p>
                <p className="font-body text-white/60 text-xs uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ VALUES ============ */}
      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Cuatro principios
            </p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-white leading-[1] mb-5">
              Por qué elegir R.A Reformas Cambrils
            </h2>
            <p className="font-display italic text-white/70 text-xl md:text-2xl max-w-[600px] mx-auto mb-3">
              Lo que nos define
            </p>
            <p className="font-body text-white/50 text-base max-w-[520px] mx-auto">
              Pilares que sostienen cada obra que firmamos en Cambrils, Salou, Reus y el resto del Baix Camp.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white/5 border border-white/10 rounded-[16px] p-7 flex flex-col gap-4 hover:border-accent/40 transition-colors duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center">
                  {v.icon}
                </div>
                <h3 className="font-body font-bold text-white text-lg uppercase">
                  {v.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TEAM ============ */}
      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Personas, no figuras
            </p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-dark leading-[1] mb-5">
              Equipo de R.A Reformas Cambrils
            </h2>
            <p className="font-display italic text-dark/70 text-xl md:text-2xl max-w-[600px] mx-auto mb-3">
              Quién toca tu obra
            </p>
            <p className="font-body text-subtitle text-base max-w-[600px] mx-auto">
              Tres áreas de trabajo que comparten cocina cada día. Sin figuras intermedias, sin departamentos separados.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Coordinación de obra",
                role: "Planos, plazos y presupuesto",
                desc: "Levantamos el proyecto, tramitamos licencias en el Ayuntamiento de Cambrils o en el municipio donde toque, y supervisamos los avances en obra. Eres tú quien habla siempre con la misma persona.",
              },
              {
                name: "Equipo de obra",
                role: "Albañilería, fontanería, electricidad",
                desc: "Equipo propio en plantilla. Conocen el tipo de tabique de las casas de Centre Vila, los problemas de aislamiento de los pisos años 80 de Cambrils Mar y la salinidad que sufre la carpintería junto a la playa.",
              },
              {
                name: "Acabados y carpintería",
                role: "Madera, piedra, pintura",
                desc: "Trabajamos con proveedores del Baix Camp y showrooms de Reus para piedra natural y muebles a medida. Te acompañamos a ver materiales sin presión, hasta que el resultado encaje con lo que imaginabas.",
              },
            ].map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-[16px] p-8 border border-dark/5 flex flex-col gap-4"
              >
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="font-body font-bold text-dark text-lg uppercase">
                  {member.name}
                </h3>
                <p className="font-body text-accent text-sm font-semibold">
                  {member.role}
                </p>
                <p className="font-body text-subtitle text-sm leading-relaxed">
                  {member.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white uppercase leading-[1.1]">
            Solicita presupuesto para tu reforma
          </h2>
          <p className="font-display italic text-white/85 text-lg md:text-xl">
            ¿Hablamos de tu vivienda?
          </p>
          <p className="text-white/90 text-base md:text-lg max-w-[500px]">
            Pasamos a verla cuando puedas y, en 24 horas, recibes una valoración escrita. Sin coste, sin obligación y sin discursos comerciales.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-dark/80 transition-colors"
            >
              Pide tu valoración
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+34877278109"
              className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-7 py-4 rounded-full font-body font-bold text-[15px] hover:bg-white/10 transition-colors"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              877 278 109
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
