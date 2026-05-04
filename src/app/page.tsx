import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic";
import CTAButtons from "@/components/CTAButtons";
import TickerBand from "@/components/TickerBand";
import HeroFormDock from "@/components/HeroFormDock";

const AnimatedCounter = dynamic(() => import("@/components/AnimatedCounter"));
const ProcessCard = dynamic(() => import("@/components/ProcessCard"));
const CTAForm = dynamic(() => import("@/components/CTAForm"));

const services = [
  {
    title: "Reformas Integrales",
    href: "/servicios/reformas-integrales",
    image: "/images/reforma-integral-casa-cambrils.webp",
    alt: "Reforma integral llave en mano en Cambrils",
  },
  {
    title: "Reformas de Cocinas",
    href: "/servicios/reformas-cocinas",
    image: "/images/cocina-abierta-segunda-residencia-cambrils.webp",
    alt: "Cocina abierta reformada en Cambrils",
  },
  {
    title: "Reformas de Baños",
    href: "/servicios/reformas-banos",
    image: "/images/bano-tonos-arena-cambrils.webp",
    alt: "Baño con acabados arena y madera en Cambrils",
  },
  {
    title: "Reformas de Pisos",
    href: "/servicios/reformas-pisos",
    image: "/images/salon-luminoso-segunda-residencia-cambrils.webp",
    alt: "Piso costero reformado en Cambrils",
  },
  {
    title: "Reformas de Locales",
    href: "/servicios/reformas-locales",
    image: "/images/local-paseo-maritimo-cambrils.webp",
    alt: "Local comercial reformado en el paseo de Cambrils",
  },
];

const testimonials = [
  {
    name: "Marta",
    location: "Vilafortuny",
    quote: "Tenían un planning claro desde la primera visita. Renovaron nuestra casa de Vilafortuny en doce semanas y los acabados resisten la humedad de la costa sin problema.",
  },
  {
    name: "Joan",
    location: "Centre Vila",
    quote: "Reformaron una casa de pueblo del centro histórico respetando arcos y vigas originales. Trabajo de artesano, sin prisas y con presupuesto fijo cerrado por escrito.",
  },
  {
    name: "Anne",
    location: "Cap de Sant Pere",
    quote: "Vivimos en Lyon y nos coordinaron toda la reforma a distancia. Fotos del avance, materiales mediterráneos y entrega en la fecha pactada. De fiar.",
  },
];

const processSteps = [
  {
    title: "Visita y toma de medidas",
    description: "Quedamos en tu vivienda de Cambrils, recorremos cada estancia, escuchamos cómo la usas y planteamos posibilidades. Sin coste ni obligación.",
    image: "/images/equipo-artesanos-reforma-cambrils.webp",
  },
  {
    title: "Estudio y presupuesto fijo",
    description: "Preparamos el proyecto con planos, selección de materiales mediterráneos y un coste pactado por partidas. Lo que firmamos es lo que pagas.",
    image: "/images/estudio-personalizado-reforma-cambrils.webp",
  },
  {
    title: "Obra con plantilla propia",
    description: "Nuestros operarios coordinan demolición, instalaciones y carpintería. Te mantenemos informado del avance con fotos y un único interlocutor que conoce tu obra.",
    image: "/images/ejecucion-reforma-llave-mano-cambrils.webp",
    objectPosition: "center 60%",
  },
  {
    title: "Entrega y garantía firmada",
    description: "Te devolvemos la vivienda limpia, revisada y con garantía documentada sobre materiales y mano de obra. Si algo no encaja, lo solucionamos.",
    image: "/images/vivienda-reformada-luminosa-cambrils.webp",
  },
];

const faqs = [
  {
    q: "¿Trabajáis con segundas residencias y propietarios extranjeros?",
    a: "Sí, una parte importante de nuestro trabajo en Cambrils son segundas residencias de propietarios franceses, ingleses y del norte de España. Nos coordinamos por email, videollamada y fotos del avance. Recogemos llaves, gestionamos accesos a la finca y entregamos todo limpio antes de que vuelvas.",
  },
  {
    q: "¿Cuánto tarda una reforma en una vivienda de la costa?",
    a: "Para un piso de 80-100 m² en Cambrils Mar o L'Esquirol, calcula entre 7 y 10 semanas. Una casa unifamiliar en Vilafortuny o Cap de Sant Pere requiere de 14 a 22 semanas. Las casas de pueblo de Centre Vila, al tener estructura antigua, suelen extenderse 2-3 semanas más.",
  },
  {
    q: "¿Qué materiales recomendáis para una vivienda en la Costa Daurada?",
    a: "El salitre y la humedad marítima exigen acabados resistentes: pintura transpirable con tratamiento antimoho, carpintería de aluminio con rotura de puente térmico, suelos porcelánicos rectificados y griferías con cuerpo cromado. Trabajamos también con piedra natural y mortero de cal en las casas del centro histórico.",
  },
  {
    q: "¿Hace falta licencia para reformar en Cambrils?",
    a: "Las reformas que no toquen estructura ni fachada se tramitan con declaración responsable, que se resuelve en pocos días. Las obras mayores (cambio de distribución, ampliaciones) requieren licencia de obra del Ayuntamiento de Cambrils. Nosotros gestionamos todo el papeleo y los seguros.",
  },
  {
    q: "¿Atendéis Salou, Reus, Mont-roig y Vila-seca?",
    a: "Sí. Trabajamos en todo el Baix Camp. La cercanía entre Cambrils, Salou y Vila-seca nos permite estar en obra cada día sin sobrecoste por desplazamiento. Reus, capital comarcal, también entra en zona de servicio habitual.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* ============ HERO (Variante H · Dock) ============ */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* Video bg */}
        <div className="absolute inset-0 bg-dark">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="/images/hero-reforma-mediterranea-cambrils.webp"
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="/videos/hero.webm" type="video/webm" />
            <source src="/videos/hero.mp4" type="video/mp4" />
          </video>
          {/* Overlay base + gradiente para legibilidad del H1 y contraste con dock */}
          <div className="absolute inset-0 bg-dark/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-dark/55 via-transparent to-dark" />
        </div>

        {/* Top text */}
        <div className="relative z-10 max-w-[1200px] mx-auto px-5 md:px-10 pt-32 lg:pt-44 text-center">
          <p className="font-body text-accent text-xs uppercase tracking-[0.4em] font-semibold mb-6">R.A Reformas Cambrils</p>
          <h1 className="font-display font-extrabold text-white uppercase text-[42px] sm:text-[56px] md:text-[80px] lg:text-[104px] leading-[1] tracking-tight">
            Reformas <span className="text-accent">Cambrils</span>
          </h1>
          <p className="font-body text-white/70 mt-6 text-base md:text-lg max-w-[560px] mx-auto leading-[1.6]">
            Pisos, casas de pueblo y segundas residencias en Cambrils, Vilafortuny y Cap de Sant Pere. Equipo propio, materiales mediterráneos.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-3">
            <a href="#hero-form" className="bg-accent text-white px-7 py-4 rounded-full font-display font-bold text-sm hover:bg-accent-light transition-colors uppercase tracking-wider">
              Pide presupuesto
            </a>
            <a href="https://wa.me/34711270568" target="_blank" rel="noopener noreferrer" className="border border-white/20 text-white px-7 py-4 rounded-full font-body text-sm hover:bg-white/10 transition-colors inline-flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347" /></svg>
              WhatsApp
            </a>
            <a href="tel:+34877278109" className="text-white/70 px-5 py-4 font-body text-sm hover:text-white transition-colors inline-flex items-center gap-2">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" /></svg>
              877 278 109
            </a>
          </div>
        </div>

        {/* Bottom dock form */}
        <div id="hero-form" className="absolute bottom-0 left-0 right-0 z-10 bg-dark/85 backdrop-blur-md border-t border-white/10 px-5 py-6 md:py-7 scroll-mt-20">
          <div className="max-w-[1300px] mx-auto">
            <HeroFormDock
              formspreeId="mqenkrjn"
              origin="rareformascambrils.es"
              localities={["Cambrils", "Salou", "Reus", "Mont-roig del Camp", "Vila-seca", "Riudoms", "Vilafortuny", "Cap de Sant Pere", "Otra"]}
              serviceTypes={["Reforma integral", "Cocina", "Baño", "Piso completo", "Casa de pueblo", "Local comercial", "Otro"]}
            />
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="bg-accent py-10 px-5">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            <AnimatedCounter end={120} prefix="+" label="Obras entregadas" />
            <AnimatedCounter end={15} prefix="+" label="Años en el Baix Camp" />
            <AnimatedCounter end={5} prefix="" suffix="" label="Servicios llave en mano" />
            <AnimatedCounter end={6} prefix="+" suffix="" label="Municipios atendidos" />
          </div>
        </div>
      </section>

      {/* ============ SERVICES ============ */}
      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1400px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Lo que reformamos</p>
            <h2 className="font-display font-extrabold text-[36px] md:text-[48px] lg:text-[64px] uppercase text-dark leading-[1] mb-5">
              Servicios de reformas en Cambrils
            </h2>
            <p className="font-display italic text-dark/70 text-xl md:text-2xl max-w-[640px] mx-auto mb-3">
              Tu obra, llave en mano
            </p>
            <p className="font-body text-subtitle text-lg max-w-[560px] mx-auto">
              Pisos costeros, casas de pueblo del centro histórico, chalets de Vilafortuny, locales del paseo. Cada proyecto, su solución.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
            {services.slice(0, 3).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-[24px] overflow-hidden min-h-[280px] md:min-h-[480px] flex flex-col justify-end"
              >
                <Image src={service.image} alt={service.alt} title={service.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 33vw" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-accent/80 group-hover:via-accent/20 transition-all duration-500" />
                <div className="relative z-10 p-7 md:p-8">
                  <h3 className="font-display text-2xl md:text-3xl uppercase text-white leading-[1.1] inline-flex items-center gap-3 font-bold">
                    {service.title}
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </h3>
                </div>
              </Link>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {services.slice(3).map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group relative rounded-[24px] overflow-hidden min-h-[280px] md:min-h-[320px] flex flex-col justify-end"
              >
                <Image src={service.image} alt={service.alt} title={service.alt} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="(max-width: 640px) 100vw, 50vw" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent group-hover:from-accent/80 group-hover:via-accent/20 transition-all duration-500" />
                <div className="relative z-10 p-6 md:p-7">
                  <h3 className="font-display text-xl md:text-2xl uppercase text-white leading-[1.1] inline-flex items-center gap-3 font-bold">
                    {service.title}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" className="opacity-0 group-hover:opacity-100 transition-opacity">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <TickerBand
        items={["sello mediterráneo", "obras llave en mano", "materiales contra salitre", "casas de pueblo del centro", "segundas residencias", "Costa Daurada"]}
        bgColor="bg-accent"
        textColor="text-white"
        direction="right"
        size="small"
      />

      {/* ============ TRUST / WHY US ============ */}
      <section className="bg-dark py-20 md:py-28 px-5 overflow-hidden">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Por qué confiar en nosotros</p>
            <h2 className="font-display font-extrabold text-[36px] md:text-[52px] lg:text-[64px] uppercase text-white leading-[1] mb-5">
              Por qué elegir R.A Reformas Cambrils
            </h2>
            <p className="font-display italic text-white/70 text-xl md:text-2xl max-w-[640px] mx-auto mb-3">
              Reformar sin sobresaltos
            </p>
            <p className="font-body text-white/50 text-base md:text-lg max-w-[560px] mx-auto">
              Reformar una vivienda en la costa pide previsión: salitre, segundas residencias, propietarios fuera. Lo damos todo cubierto desde la primera reunión.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
            <div className="bg-dark-card border border-white/10 rounded-2xl p-8 flex gap-5 items-start hover:border-accent/40 transition-colors duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2" strokeLinecap="round">
                  <path d="M12 1v22M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
                </svg>
              </div>
              <div>
                <h3 className="font-body font-bold text-white text-lg mb-2">Coste pactado por escrito</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  El importe que firmamos cubre todas las partidas. Nada de extras inesperados ni medidas que aparecen a mitad de obra. Ese es nuestro compromiso desde la primera valoración.
                </p>
              </div>
            </div>

            <div className="bg-dark-card border border-white/10 rounded-2xl p-8 flex gap-5 items-start hover:border-accent/40 transition-colors duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2" strokeLinecap="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
              </div>
              <div>
                <h3 className="font-body font-bold text-white text-lg mb-2">Calendario que se cumple</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  Para una segunda residencia, perder dos semanas significa perder una temporada. Marcamos hitos por fases y los respetamos, manteniéndote informado del avance con fotos y vídeos.
                </p>
              </div>
            </div>

            <div className="bg-dark-card border border-white/10 rounded-2xl p-8 flex gap-5 items-start hover:border-accent/40 transition-colors duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2" strokeLinecap="round">
                  <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                </svg>
              </div>
              <div>
                <h3 className="font-body font-bold text-white text-lg mb-2">Operarios de nuestra empresa</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  Albañiles, fontaneros, electricistas y carpinteros en plantilla. Sin cadena de subcontratas. La obra la hace gente de Cambrils que conoce la construcción del Baix Camp.
                </p>
              </div>
            </div>

            <div className="bg-dark-card border border-white/10 rounded-2xl p-8 flex gap-5 items-start hover:border-accent/40 transition-colors duration-300">
              <div className="flex-shrink-0 w-14 h-14 bg-accent/15 rounded-xl flex items-center justify-center">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2" strokeLinecap="round">
                  <path d="M9 12l2 2 4-4" />
                  <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9c1.73 0 3.35.49 4.72 1.33" />
                  <path d="M22 4L12 14.01l-3-3" />
                </svg>
              </div>
              <div>
                <h3 className="font-body font-bold text-white text-lg mb-2">Garantía firmada</h3>
                <p className="font-body text-white/50 text-sm leading-relaxed">
                  Documento por escrito sobre materiales y mano de obra. Ante cualquier incidencia volvemos sin discusión. Tu segunda residencia o vivienda habitual queda cubierta.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <CTAButtons className="justify-center" />
          </div>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="bg-beige pt-20 px-5 pb-24">
        <div className="mx-auto max-w-[1400px] flex flex-col items-center gap-14">
          <div className="text-center max-w-[1100px]">
            <p className="font-body font-bold text-sm uppercase text-accent mb-4 tracking-[0.15em]">Cómo se desarrolla la obra</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] lg:text-[64px] uppercase text-dark mb-5 leading-[1] tracking-[0.01em]">
              Nuestro proceso de reforma paso a paso
            </h2>
            <p className="font-display italic text-dark/70 text-xl md:text-2xl mb-3">
              De la primera visita a las llaves
            </p>
            <p className="text-subtitle text-base font-medium">Cuatro fases pensadas para reformas en la costa: previsión, transparencia y un único responsable que conoce tu obra al detalle.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full">
            {processSteps.map((step, i) => (
              <ProcessCard key={step.title} step={i + 1} {...step} />
            ))}
          </div>
        </div>
      </section>

      {/* ============ TICKER ============ */}
      <TickerBand
        items={["plantilla propia", "trato cercano", "seguimiento del avance", "garantía firmada", "luz mediterránea", "obras del Baix Camp"]}
        bgColor="bg-accent"
        textColor="text-white"
        direction="right"
        size="small"
      />

      {/* ============ TESTIMONIALS — Card grid (estilo Tailark) ============ */}
      <section className="bg-beige py-20 md:py-28 px-5">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12 md:mb-16">
            <p className="font-body font-bold text-sm uppercase text-accent tracking-[0.2em] mb-4">Voces de clientes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[56px] uppercase text-dark leading-[1.05] tracking-[0.01em]">
              Opiniones de clientes en Cambrils
            </h2>
            <p className="font-display italic text-dark/70 text-lg md:text-xl mt-3">
              Lo que opinan quienes nos abrieron sus casas
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-white ring-1 ring-dark/10 rounded-2xl p-6 md:p-7 flex flex-col"
              >
                <div className="flex gap-1 mb-4" aria-label="5 estrellas">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 24 24" className="fill-accent">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                    </svg>
                  ))}
                </div>

                <p className="font-body text-dark text-[15px] md:text-base leading-[1.55] flex-1">
                  &ldquo;{t.quote}&rdquo;
                </p>

                <div className="flex items-center gap-2.5 mt-6 pt-5 border-t border-dark/10">
                  <div className="size-9 rounded-full bg-accent/15 ring-1 ring-accent/30 flex items-center justify-center text-accent font-display font-bold text-sm shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <span className="font-body font-semibold text-dark text-sm">{t.name}</span>
                  <span aria-hidden className="bg-dark/30 size-1 rounded-full" />
                  <span className="font-body text-grey-text text-sm">{t.location}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ZONES ============ */}
      <section className="bg-beige-warm py-16 md:py-20 px-5">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="font-body font-bold text-sm uppercase text-accent mb-4 tracking-wide">Zonas de servicio</p>
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-dark leading-[1] mb-4">
            Reformas en Cambrils y el Baix Camp
          </h2>
          <p className="font-body text-subtitle text-base max-w-[600px] mx-auto mb-8">
            Sede en el centro de Cambrils. Cobertura habitual a Salou, Reus, Mont-roig del Camp, Vila-seca y Riudoms sin sobrecoste por desplazamiento.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Salou", slug: "reformas-salou" },
              { name: "Reus", slug: "reformas-reus" },
              { name: "Mont-roig del Camp", slug: "reformas-mont-roig" },
              { name: "Vila-seca", slug: "reformas-vila-seca" },
              { name: "Riudoms", slug: "reformas-riudoms" },
            ].map((zone) => (
              <Link
                key={zone.slug}
                href={`/zonas/${zone.slug}`}
                className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full font-body font-semibold text-dark text-sm border border-dark/10 hover:border-accent hover:text-accent transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                Reformas en {zone.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PRICING ============ */}
      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Coste pactado</p>
            <h2 className="font-display font-extrabold text-[36px] md:text-[48px] lg:text-[56px] uppercase text-white leading-[1] mb-5">
              Cuánto cuesta una reforma en Cambrils
            </h2>
            <p className="font-display italic text-white/70 text-xl md:text-2xl max-w-[640px] mx-auto mb-3">
              Tres formatos, un mismo compromiso
            </p>
            <p className="font-body text-white/50 text-base max-w-[560px] mx-auto">
              Cifras orientativas por m² para viviendas en Cambrils y entorno. Te entregamos el desglose detallado tras la visita técnica.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "Reforma esencial", price: "desde 380 €/m²", features: ["Pintura y suelos", "Renovación de baño", "Pequeñas mejoras eléctricas", "Acabados estándar"] },
              { name: "Reforma media", price: "desde 480 €/m²", features: ["Cocina y baños completos", "Cambio de instalaciones", "Carpintería de aluminio", "Materiales mediterráneos"], featured: true },
              { name: "Reforma integral", price: "desde 580 €/m²", features: ["Distribución nueva", "Aerotermia y aislamiento", "Acabados de alta gama", "Llave en mano completa"] },
            ].map((p) => (
              <div key={p.name} className={`rounded-[20px] p-8 flex flex-col gap-5 ${p.featured ? 'bg-accent text-white' : 'bg-white/5 border border-white/10 text-white'}`}>
                <h3 className="font-display font-bold text-2xl uppercase">{p.name}</h3>
                <p className={`font-body font-bold text-lg ${p.featured ? 'text-white' : 'text-accent'}`}>{p.price}</p>
                <div className={`w-12 h-[2px] ${p.featured ? 'bg-white/40' : 'bg-accent/40'} rounded-full`} />
                <ul className="flex flex-col gap-2.5 text-sm">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 mt-1"><path d="M5 13l4 4L19 7" /></svg>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-center text-white/50 text-sm mt-8 font-body">Cifras orientativas. Cada proyecto se valora en visita técnica gratuita.</p>
        </div>
      </section>

      {/* ============ FAQ ============ */}
      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[820px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Dudas habituales</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[44px] uppercase text-dark leading-[1.1]">Preguntas frecuentes sobre reformas en Cambrils</h2>
          </div>
          <div className="flex flex-col gap-4">
            {faqs.map((faq, i) => (
              <details key={i} className="group bg-white rounded-[12px] shadow-sm overflow-hidden">
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-extrabold text-accent text-lg flex-shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-body font-bold text-dark text-base flex-1">{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <div className="px-6 pb-6 pl-[56px]">
                  <p className="font-body text-subtitle text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: faqs.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            }),
          }}
        />
      </section>

      {/* ============ CTA FINAL ============ */}
      <section className="bg-beige px-5 pb-12">
        <div className="mx-auto max-w-[1400px] rounded-[10px] overflow-hidden relative">
          <Image
            src="/images/proceso-demolicion-reforma-cambrils.webp"
            alt="Reforma en proceso en Cambrils"
            fill
            className="object-cover"
            sizes="100vw"
            loading="lazy"
          />
          <div className="relative z-10 px-4 py-16 md:px-8 md:py-20">
            <div className="max-w-[684px] bg-accent rounded-[10px] px-6 py-10 md:px-8 md:py-12 flex flex-col gap-8 md:gap-10">
              <div className="flex flex-col gap-4">
                <p className="font-body font-bold text-lg uppercase text-white">
                  Valoración sin coste
                </p>
                <h2 className="font-display font-extrabold text-[32px] md:text-[44px] lg:text-[56px] text-white uppercase leading-[1.2] tracking-[0.02em]">
                  Solicita presupuesto para tu reforma
                </h2>
                <p className="font-display italic text-white/85 text-xl md:text-2xl">
                  ¿Le damos una vuelta a tu vivienda?
                </p>
                <p className="text-white/90 text-[17px] leading-relaxed">
                  Cuéntanos qué quieres cambiar y en 24 horas tienes una valoración detallada para tu piso, casa o segunda residencia en Cambrils.
                </p>
                <div className="flex flex-col gap-2 text-beige text-sm mt-2">
                  <div className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Valoración detallada en 24 horas</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                    </svg>
                    <span>Plantilla propia, sin cadena de subcontratas</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Garantía firmada sobre todos los trabajos</span>
                  </div>
                </div>
              </div>

              <CTAForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
