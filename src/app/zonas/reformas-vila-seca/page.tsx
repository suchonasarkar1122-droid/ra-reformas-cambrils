import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Vila-seca · Empresa de Confianza | RAC",
  description: "Reformas en Vila-seca y La Pineda: pisos costeros, segundas residencias, locales junto a PortAventura. Plantilla propia desde Cambrils. 877 278 109.",
  alternates: { canonical: "/zonas/reformas-vila-seca" },
  openGraph: {
    title: "Reformas en Vila-seca · R.A Reformas Cambrils",
    description: "Reformas en La Pineda y Vila-seca centre. Pisos turísticos, viviendas familiares y locales del entorno PortAventura.",
    url: "/zonas/reformas-vila-seca",
    images: ["/images/cocina-isla-piso-costero-cambrils.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Pisos costeros de La Pineda y viviendas de Vila-seca centre, llave en mano.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas funcionales para pisos de uso habitual o segundas residencias.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "Cambio bañera por ducha, sanitarios suspendidos y materiales contra salitre.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Pisos de los años 80-90 en La Pineda con apertura de espacios y nueva luz.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Restaurantes, comercios y servicios en zona PortAventura. Plazos firmes para temporada.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Reformáis pisos en La Pineda?", a: "Sí. La Pineda es uno de los núcleos costeros más activos del Tarragonès, con pisos turísticos, segundas residencias y vivienda habitual. Reformamos teniendo en cuenta el uso (alquiler vacacional, familia, primera residencia) y los materiales que mejor aguantan." },
  { q: "¿Trabajáis con apartamentos turísticos junto a PortAventura?", a: "Es una zona muy activa. Adaptamos pisos para alquiler vacacional con licencia HUT, materiales para alta rotación y distribuciones funcionales. Coordinamos para minimizar el impacto en temporadas de máxima ocupación." },
  { q: "¿Hay diferencia entre reformar en Vila-seca centre y en La Pineda?", a: "Sí. Vila-seca centre tiene casas de pueblo y pisos antiguos del núcleo histórico que requieren más trabajo manual. La Pineda son edificios modernos junto a la playa, con sus propias particularidades de salitre y comunidades grandes." },
  { q: "¿Distancia desde Cambrils?", a: "Apenas 12 minutos por la N-340. Cobertura habitual y diaria. Formamos parte del mismo eje costero." },
];

export default function ZonaVilaSecaPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Zonas", url: "/zonas" }, { name: "Reformas en Vila-seca", url: "/zonas/reformas-vila-seca" }]} />

      <HeroService title="Reformas en Vila-seca — Empresa de Reformas de Confianza" h1Keyword="Reformas en Vila-seca" subtitle="Pisos costeros de La Pineda, viviendas de Vila-seca centre y locales junto a PortAventura. Cobertura habitual desde nuestra sede de Cambrils." image="/images/cocina-isla-piso-costero-cambrils.webp" imageAlt="Reformas integrales en Vila-seca" badge="Vila-seca + La Pineda" showCTA trustItems={["Plazos firmes", "Plantilla propia", "Garantía firmada"]} />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">R.A Reformas en Vila-seca</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1] mb-3">Reformas en Vila-seca y La Pineda</h2>
          <p className="font-display italic text-dark/70 text-lg md:text-xl mb-6">Vila-seca, La Pineda y entorno PortAventura</p>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Vila-seca combina un núcleo histórico interior con una zona costera muy activa: La Pineda. Es uno de los municipios turísticos más relevantes del Tarragonès, con un parque inmobiliario que va desde casas de pueblo en el centro hasta edificios de apartamentos en primera línea de mar y promociones más recientes en torno al complejo PortAventura.</p>
            <p>Reformamos en Vila-seca como una extensión natural de nuestra zona de Cambrils. La N-340 nos pone en obra en 12 minutos. Trabajamos con materiales adaptados al uso turístico intensivo (rotaciones rápidas, ventanas que aguantan corrientes de aire salado, suelos resistentes a la arena) y con plazos firmes para abrir antes de temporada.</p>
            <p>En Vila-seca centre, las casas tradicionales requieren más trabajo artesano: cal, madera, piedra. Lo afrontamos con la misma plantilla que reforma las casas de pueblo del Centre Vila de Cambrils.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] uppercase text-white leading-[1.1]">Servicios de reformas en Vila-seca</h2>
            <p className="font-display italic text-white/70 text-lg md:text-xl mt-3">Lo que hacemos en Vila-seca</p>
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">FAQ Vila-seca</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1]">Preguntas frecuentes sobre reformas en Vila-seca</h2>
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
              { name: "Riudoms", slug: "/zonas/reformas-riudoms" },
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white uppercase leading-[1.1]">Solicita presupuesto para tu reforma en Vila-seca</h2>
          <p className="font-display italic text-white/85 text-lg md:text-xl">¿Tu reforma en Vila-seca o La Pineda?</p>
          <p className="text-white/90 text-base md:text-lg max-w-[500px]">Cuéntanos lo que tienes en mente. En 24 horas tienes una valoración escrita y plazo firme.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
