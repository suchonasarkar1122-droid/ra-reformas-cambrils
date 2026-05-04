import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Salou · Empresa de Confianza | RAC",
  description: "Reformas integrales y de pisos en Salou: Salou Centre, Cap Salou y Capellans. Plantilla propia desde Cambrils, coste pactado y plazos firmes. 877 278 164.",
  alternates: { canonical: "/zonas/reformas-salou" },
  openGraph: {
    title: "Reformas en Salou · R.A Reformas Cambrils",
    description: "Especialistas en pisos costeros, segundas residencias y locales del paseo en Salou.",
    url: "/zonas/reformas-salou",
    images: ["/images/piso-costero-reforma-completa-cambrils.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Renovamos por completo apartamentos turísticos y segundas residencias en Salou.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas abiertas y materiales que aguantan rotaciones intensivas en julio y agosto.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "Cambio bañera por ducha en pisos de Cap Salou y Salou Centre. Impermeabilización con garantía.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Distribuciones nuevas que ganan luz para uso continuo todo el año.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Restaurantes, bares y comercios del paseo de Salou. Adecuación a tiempo para temporada.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Qué cuesta reformar un piso en Salou?", a: "Damos referencia orientativa por m²: desde 380 €/m² en actualizaciones ligeras (cocina, baño, pintura, suelos), desde 480 €/m² en reformas medias y desde 580 €/m² en reformas integrales con redistribución. La rotación turística aconseja materiales superiores que se amortizan rápido. La cifra firme se cierra tras visita técnica gratuita." },
  { q: "¿Trabajáis con apartamentos turísticos (HUT)?", a: "Sí. Conocemos las exigencias del registro HUT en Cataluña y reformamos teniendo en cuenta materiales resistentes a uso intensivo, distribuciones funcionales y cumplimiento de la normativa de habitabilidad." },
  { q: "¿Hay distancia entre Cambrils y Salou?", a: "Apenas 8 minutos en coche. Estamos en obra cada día sin sobrecoste. Para nuestro equipo, Salou y Cambrils se trabajan como una misma zona." },
  { q: "¿Tramitáis licencias en el Ayuntamiento de Salou?", a: "Sí. Estamos al día con declaraciones responsables, licencias de obra mayor y normativa de actividad. En zonas turísticas ofrecemos planificación específica para no afectar a vecinos en alquiler." },
];

export default function ZonaSalouPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Zonas", url: "/zonas" }, { name: "Reformas en Salou", url: "/zonas/reformas-salou" }]} />

      <HeroService title="Reformas en Salou — Empresa de Reformas de Confianza" h1Keyword="Reformas en Salou" subtitle="Apartamentos turísticos, segundas residencias y comercios del paseo. Plantilla propia con sede en Cambrils, a 8 minutos." image="/images/piso-costero-reforma-completa-cambrils.webp" imageAlt="Reformas integrales en Salou" badge="Zona de servicio" showCTA trustItems={["Coste pactado", "Plantilla propia", "Garantía firmada"]} />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">R.A Reformas en Salou</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1] mb-6">Especialistas en reformas en Salou y Cap Salou</h2>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Salou es uno de los municipios con mayor demanda de reformas de la Costa Daurada. El parque inmobiliario combina pisos costeros de los años 70 y 80 que necesitan actualización, segundas residencias de propietarios de Lleida y Aragón, y un mercado activo de apartamentos turísticos con licencia HUT que exige rotación rápida y materiales resistentes.</p>
            <p>Trabajamos en Salou desde nuestra sede en Cambrils, a apenas 8 kilómetros. La proximidad nos permite estar en obra cada día, gestionar entregas y resolver imprevistos sin que el desplazamiento se note en el presupuesto. Conocemos bien Salou Centre, Cap Salou, Capellans y la zona de Llevant, con sus particularidades de comunidad y normativa.</p>
            <p>El reto en Salou siempre es el mismo: terminar antes de Semana Santa o de junio. Por eso planificamos cronogramas con margen y, sobre todo, los respetamos.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] uppercase text-white leading-[1.1]">Servicios de reformas en Salou</h2>
            <p className="font-display italic text-white/70 text-lg md:text-xl mt-3">Lo que hacemos en Salou</p>
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">FAQ Salou</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1]">Preguntas frecuentes sobre reformas en Salou</h2>
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
              { name: "Reus", slug: "/zonas/reformas-reus" },
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white uppercase leading-[1.1]">Solicita presupuesto para tu reforma en Salou</h2>
          <p className="font-display italic text-white/85 text-lg md:text-xl">¿Tu reforma en Salou?</p>
          <p className="text-white/90 text-base md:text-lg max-w-[500px]">Cuéntanos la idea y, en 24 horas, recibes valoración por escrito. Sin coste, sin obligación.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
