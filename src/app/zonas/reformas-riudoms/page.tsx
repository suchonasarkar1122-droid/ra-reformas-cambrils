import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Riudoms · Empresa de Confianza | RAC",
  description: "Reformas en Riudoms centre, masías y casas señoriales del Baix Camp. Plantilla propia con sede en Cambrils. Coste pactado y oficio tradicional. 877 278 164.",
  alternates: { canonical: "/zonas/reformas-riudoms" },
  openGraph: {
    title: "Reformas en Riudoms · R.A Reformas Cambrils",
    description: "Casas de pueblo, masías y obras tradicionales en el Riudoms agrícola.",
    url: "/zonas/reformas-riudoms",
    images: ["/images/dormitorio-renovado-cambrils.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Casas de pueblo, masías y viviendas señoriales del Riudoms tradicional.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas con vigas vistas, encimeras de piedra y carpintería de madera maciza.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "Baños nuevos respetando el carácter tradicional o estilos contemporáneos.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Pisos del centro de Riudoms con renovación de instalaciones y distribuciones.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Pequeños comercios, oficinas y servicios en Riudoms centre.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Reformáis masías agrícolas?", a: "Sí. Riudoms es tierra de masías rodeadas de campos de avellano, algarrobo y olivo. Trabajamos con cal, mortero tradicional, vigas de madera y muros de piedra original. Mantenemos el carácter rural cumpliendo normativa de patrimonio del Ayuntamiento de Riudoms." },
  { q: "¿Cuánto cuesta reformar una casa de pueblo?", a: "Las casas tradicionales de Riudoms suelen requerir más mano de obra (estructuras antiguas, instalaciones a renovar, materiales artesanos). Damos referencia orientativa por m²: desde 480 €/m² en reformas estándar y desde 580 €/m² en intervenciones integrales con cuidado patrimonial. Cada proyecto se valora en visita técnica gratuita." },
  { q: "¿Distancia desde Cambrils?", a: "Riudoms está a 12 minutos por la T-313, en pleno corazón agrícola del Baix Camp. Cobertura habitual sin sobrecostes." },
  { q: "¿Qué materiales recomendáis para casas tradicionales?", a: "Cal aérea para muros transpirables, mortero de cal hidráulica para morteros, madera de roble o castaño para vigas y puertas, baldosa hidráulica restaurada o pavimento porcelánico imitación. Cada elemento se elige para que dure décadas y respete el conjunto." },
];

export default function ZonaRiudomsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Zonas", url: "/zonas" }, { name: "Reformas en Riudoms", url: "/zonas/reformas-riudoms" }]} />

      <HeroService title="Reformas en Riudoms — Empresa de Reformas de Confianza" h1Keyword="Reformas en Riudoms" subtitle="Casas de pueblo, masías agrícolas y viviendas señoriales del Riudoms tradicional. Reformas con oficio, sello mediterráneo y plantilla propia." image="/images/dormitorio-renovado-cambrils.webp" imageAlt="Reformas integrales en Riudoms" badge="Riudoms agrícola" showCTA trustItems={["Oficio tradicional", "Cal y piedra", "Plantilla propia"]} />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">R.A Reformas en Riudoms</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1] mb-3">Reformas en Riudoms y masías del Baix Camp</h2>
          <p className="font-display italic text-dark/70 text-lg md:text-xl mb-6">Casas tradicionales y masías del Baix Camp</p>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Riudoms es uno de los municipios más característicos del interior del Baix Camp: un núcleo histórico bien conservado, casas señoriales del siglo XIX y XX, y un cinturón rural de masías agrícolas dedicadas tradicionalmente al avellano, el algarrobo y el olivo. La fiesta del Romaní y la cultura nyàmera son su seña de identidad.</p>
            <p>Reformamos casas de pueblo del centro, viviendas familiares de calles tranquilas y, sobre todo, masías rodeadas de campo. Cada intervención requiere oficio tradicional: trabajar la cal, restaurar vigas de madera, recuperar baldosa hidráulica, integrar bañeras o cocinas modernas sin romper la armonía del conjunto.</p>
            <p>Estamos a 12 minutos en coche desde Cambrils por la T-313. Riudoms forma parte de nuestra zona habitual de trabajo, sin sobrecoste por desplazamiento. Si tu casa está en Riudoms centre, el campo o una masía aislada, planificamos la obra con accesos, conexiones de agua y suministros temporales si hace falta.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] uppercase text-white leading-[1.1]">Servicios de reformas en Riudoms</h2>
            <p className="font-display italic text-white/70 text-lg md:text-xl mt-3">Lo que hacemos en Riudoms</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {services.map((s) => (
              <Link key={s.title} href={s.href} className="group bg-white/5 border border-white/10 rounded-[16px] p-7 flex flex-col gap-3 hover:border-accent/40 transition-colors">
                <h3 className="font-body font-bold text-white text-lg uppercase group-hover:text-accent transition-colors">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
                <span className="font-body font-bold text-accent text-sm inline-flex items-center gap-1 mt-auto pt-2">Más info <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">FAQ Riudoms</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1]">Preguntas frecuentes sobre reformas en Riudoms</h2>
          </div>
          <div className="space-y-5">
            {faqs.map((faq) => (
              <details key={faq.q} className="group bg-white rounded-[16px] border border-dark/5 overflow-hidden">
                <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer font-body font-bold text-dark text-base list-none">
                  {faq.q}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2" className="flex-shrink-0 transition-transform group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <div className="px-6 pb-6 font-body text-subtitle text-sm leading-relaxed">{faq.a}</div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-12">
        <div className="mx-auto max-w-[1200px]">
          <h3 className="font-body font-bold text-dark text-base uppercase mb-6 text-center">También trabajamos en</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Cambrils", slug: "/" },
              { name: "Salou", slug: "/zonas/reformas-salou" },
              { name: "Reus", slug: "/zonas/reformas-reus" },
              { name: "Mont-roig del Camp", slug: "/zonas/reformas-mont-roig" },
              { name: "Vila-seca", slug: "/zonas/reformas-vila-seca" },
            ].map((z) => (
              <Link key={z.slug} href={z.slug} className="inline-flex items-center gap-2 bg-white px-5 py-3 rounded-full font-body font-semibold text-dark text-sm border border-dark/10 hover:border-accent hover:text-accent transition-colors">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                Reformas en {z.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white uppercase leading-[1.1]">Solicita presupuesto para tu reforma en Riudoms</h2>
          <p className="font-display italic text-white/85 text-lg md:text-xl">¿Reformas en Riudoms?</p>
          <p className="text-white/90 text-base md:text-lg max-w-[500px]">Casa de pueblo, masía o vivienda familiar. Pasamos a verla y, en 24 horas, recibes valoración por escrito.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
