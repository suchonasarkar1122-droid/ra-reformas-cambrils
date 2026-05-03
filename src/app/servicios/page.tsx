import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Servicios de Reformas en Cambrils | RAC",
  description:
    "Servicios de reformas en Cambrils y el Baix Camp: reformas integrales, cocinas, baños, pisos y locales. Plantilla propia, coste pactado y garantía firmada. 877 278 164.",
  alternates: { canonical: "/servicios" },
  openGraph: {
    title: "Servicios de Reformas · R.A Reformas Cambrils",
    description: "Reformamos pisos, casas de pueblo, segundas residencias y locales en la Costa Daurada con materiales pensados para el clima marítimo.",
    url: "/servicios",
    images: ["/images/hero-reforma-mediterranea-cambrils.webp"],
  },
};

const services = [
  {
    title: "Reformas Integrales",
    slug: "reformas-integrales",
    image: "/images/reforma-integral-casa-cambrils.webp",
    alt: "Reforma integral llave en mano en Cambrils",
    description:
      "Renovación completa de tu vivienda en Cambrils: distribución nueva, instalaciones, acabados mediterráneos y un único responsable de obra.",
  },
  {
    title: "Reformas de Cocinas",
    slug: "reformas-cocinas",
    image: "/images/cocina-abierta-segunda-residencia-cambrils.webp",
    alt: "Cocina abierta reformada en Cambrils",
    description:
      "Cocinas abiertas al salón, isla central, encimeras de Dekton o piedra natural y carpintería resistente a la humedad de la costa.",
  },
  {
    title: "Reformas de Baños",
    slug: "reformas-banos",
    image: "/images/bano-tonos-arena-cambrils.webp",
    alt: "Baño con tonos arena reformado en Cambrils",
    description:
      "Cambio de bañera por ducha, griferías cromadas, porcelánico rectificado y soluciones que aguantan el salitre del Mediterráneo.",
  },
  {
    title: "Reformas de Pisos",
    slug: "reformas-pisos",
    image: "/images/salon-luminoso-segunda-residencia-cambrils.webp",
    alt: "Piso costero reformado en Cambrils",
    description:
      "Renovación de pisos de Cambrils Mar, Vilafortuny y Centre Vila. Distribuciones que ganan luz y materiales que resisten años.",
  },
  {
    title: "Reformas de Locales",
    slug: "reformas-locales",
    image: "/images/local-paseo-maritimo-cambrils.webp",
    alt: "Local comercial reformado en el paseo de Cambrils",
    description:
      "Adecuación de locales en el paseo marítimo, casco antiguo y zonas de Salou y Reus. Cumplimos normativa y plazos de apertura.",
  },
];

export default function ServiciosPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Servicios", url: "/servicios" }]} />

      <HeroService
        title="Reformas con sello mediterráneo"
        subtitle="Pisos, casas de pueblo, chalets de segunda residencia y locales en Cambrils, Salou, Reus, Vila-seca, Mont-roig y Riudoms."
        image="/images/hero-reforma-mediterranea-cambrils.webp"
        imageAlt="Servicios de reformas en Cambrils"
        h1Keyword="Servicios de reformas en Cambrils"
        badge="Soluciones llave en mano"
        showCTA
      />

      {/* ============ LISTADO DE SERVICIOS ============ */}
      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-16">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">
              Lo que reformamos
            </p>
            <h2 className="font-display font-extrabold text-[36px] md:text-[48px] lg:text-[56px] uppercase text-dark leading-[1]">
              Servicios de reformas en Cambrils
            </h2>
            <p className="font-display italic text-dark/70 text-xl md:text-2xl mt-3">
              Elige el formato que necesitas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <Link
                key={service.slug}
                href={`/servicios/${service.slug}`}
                className="group bg-white rounded-[20px] overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-500"
              >
                <div className="relative h-[260px] overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    title={service.alt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <h3 className="font-display font-extrabold text-xl uppercase text-dark group-hover:text-accent transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="font-body text-subtitle text-sm leading-relaxed">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 font-body font-bold text-accent text-sm uppercase tracking-wide">
                    Ver más detalle
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ============ POR QUÉ NOSOTROS ============ */}
      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">
            Por qué elegirnos
          </p>
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-white leading-[1] mb-3">
            Por qué elegir R.A Reformas Cambrils
          </h2>
          <p className="font-display italic text-white/70 text-xl md:text-2xl mb-12">
            Cuatro garantías firmadas
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2">
                    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
                    <circle cx="9" cy="7" r="4" />
                    <path d="M22 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
                  </svg>
                ),
                title: "Operarios propios",
                text: "Sin cadena de subcontratas. Las personas que firman el presupuesto son las mismas que ejecutan tu obra.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Coste pactado",
                text: "El número que aparece en la oferta es el número que pagas al final. Sin imprevistos ni partidas que aparecen.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "Calendario firme",
                text: "Cronograma por fases con hitos verificables. Te mantenemos informado del avance real de tu obra.",
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2">
                    <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                ),
                title: "Garantía firmada",
                text: "Cobertura escrita sobre materiales y mano de obra. Sin asteriscos ni excusas.",
              },
            ].map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-4 p-6">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-body font-bold text-lg uppercase text-white">
                  {item.title}
                </h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-white leading-[1]">
            Solicita presupuesto para tu reforma
          </h2>
          <p className="font-display italic text-white/85 text-xl md:text-2xl">
            ¿Hablamos de tu vivienda?
          </p>
          <p className="font-body text-white/90 text-lg max-w-[500px]">
            Cuéntanos qué quieres hacer y, en 24 horas, recibes una valoración detallada por escrito. Sin coste, sin obligación.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors"
            >
              Pide tu valoración
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
            <a
              href="tel:+34877278164"
              className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-7 py-4 rounded-full font-body font-bold text-[15px] hover:bg-white/10 transition-all"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
              </svg>
              877 278 164
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
