import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Reus · Empresa de Confianza",
  description: "Reformas integrales y de pisos en Reus, capital del Baix Camp: Centre, Mas Iglesias, barrio Gaudí. Plantilla propia con sede en Cambrils. 877 278 164.",
  alternates: { canonical: "/zonas/reformas-reus" },
  openGraph: {
    title: "Reformas en Reus · R.A Reformas Cambrils",
    description: "Reformas en pisos del centro modernista, oficinas, comercios y casas señoriales en Reus.",
    url: "/zonas/reformas-reus",
    images: ["/images/vivienda-reformada-luminosa-cambrils.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Pisos del centro modernista, casas señoriales del barrio Gaudí, viviendas de Mas Iglesias.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas a medida con encimeras de Dekton, piedra natural y carpintería resistente.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "Cambio bañera por ducha, sanitarios suspendidos y baños accesibles para toda la familia.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Distribuciones nuevas en pisos de los años 60-90 del centro y ensanche de Reus.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Oficinas, clínicas y comercios. Cumplimiento normativo y plazos firmes.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Trabajáis en pisos del centro modernista de Reus?", a: "Sí. Reus es la cuna del modernismo catalán y conserva fincas de gran valor patrimonial. Trabajamos respetando las molduras, balcones y elementos protegidos, y coordinamos con los arquitectos y técnicos municipales cuando es necesario para licencias en zonas con protección." },
  { q: "¿Cuánto cuesta reformar un piso en Reus?", a: "Damos referencia orientativa por m²: desde 380 €/m² en intervenciones esenciales, desde 480 €/m² en reformas medias del centro, ensanche o Mas Iglesias y desde 580 €/m² en reformas integrales con redistribución y materiales premium. Las casas señoriales del barrio Gaudí o el casco antiguo requieren más trabajo artesano. La cifra firme se cierra tras visita técnica gratuita." },
  { q: "¿Hay distancia entre Cambrils y Reus?", a: "Apenas 13 kilómetros y 15 minutos por la C-14. Reus es la capital del Baix Camp y nuestra cobertura habitual incluye desplazamiento sin coste adicional. Estamos en obra cada día, igual que en Cambrils." },
  { q: "¿Reformáis oficinas y clínicas en Reus?", a: "Sí. Reus tiene un volumen importante de profesionales (medicina, abogacía, ingeniería). Adecuamos despachos, clínicas dentales, gabinetes y oficinas con divisiones acústicas, instalaciones modernas y normativa de actividad en regla." },
];

export default function ZonaReusPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Zonas", url: "/zonas" }, { name: "Reformas en Reus", url: "/zonas/reformas-reus" }]} />

      <HeroService title="Reformas en Reus — Empresa de Reformas de Confianza" h1Keyword="Reformas en Reus" subtitle="Pisos del centro modernista, casas señoriales y oficinas de la capital del Baix Camp. Cobertura habitual desde nuestra sede de Cambrils." image="/images/vivienda-reformada-luminosa-cambrils.webp" imageAlt="Reformas integrales en Reus" badge="Capital del Baix Camp" showCTA trustItems={["Cobertura Baix Camp", "Coste pactado", "Plantilla propia"]} />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">R.A Reformas en Reus</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1] mb-6">Especialistas en reformas en la capital del Baix Camp</h2>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Reus, con sus más de 106.000 habitantes, es la capital del Baix Camp y el polo comercial, sanitario y administrativo de la comarca. Su parque inmobiliario es heterogéneo: pisos en fincas modernistas del centro, ensanche con bloques de los años 60-80, casas señoriales en el barrio Gaudí y promociones más recientes en Mas Iglesias.</p>
            <p>Reformamos en Reus desde nuestra sede de Cambrils, a solo 13 kilómetros. Aunque está fuera de la comarca costera, la cercanía y el volumen de demanda nos llevan a tenerla como zona habitual. Nuestros operarios conocen el tipo de tabique de los edificios del ensanche, los problemas habituales de instalaciones en fincas pre-1970 y la normativa específica del centro histórico, donde algunas calles están en zona protegida.</p>
            <p>En Reus también atendemos a profesionales que reforman su despacho, clínica u oficina, con la rapidez y la limpieza que esa tipología requiere.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] uppercase text-white leading-[1.1]">Servicios de reformas en Reus</h2>
            <p className="font-display italic text-white/70 text-lg md:text-xl mt-3">Lo que hacemos en Reus</p>
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">FAQ Reus</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1]">Preguntas frecuentes sobre reformas en Reus</h2>
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
              { name: "Mont-roig del Camp", slug: "/zonas/reformas-mont-roig" },
              { name: "Vila-seca", slug: "/zonas/reformas-vila-seca" },
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white uppercase leading-[1.1]">Solicita presupuesto para tu reforma en Reus</h2>
          <p className="font-display italic text-white/85 text-lg md:text-xl">¿Tu reforma en Reus?</p>
          <p className="text-white/90 text-base md:text-lg max-w-[500px]">Pasamos a verla y, en 24 horas, recibes propuesta escrita por partidas. Sin coste, sin obligación.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
