import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import CTAButtons from "@/components/CTAButtons";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas en Mont-roig del Camp · Empresa de Confianza | RAC",
  description: "Reformas en Mont-roig del Camp y Miami Platja: casas de pueblo, segundas residencias y masías agrícolas. Plantilla propia desde Cambrils. 877 278 109.",
  alternates: { canonical: "/zonas/reformas-mont-roig" },
  openGraph: {
    title: "Reformas en Mont-roig del Camp · R.A Reformas Cambrils",
    description: "Casas de pueblo, masías y segundas residencias en Mont-roig Vila y Miami Platja.",
    url: "/zonas/reformas-mont-roig",
    images: ["/images/reforma-integral-fases-cambrils.webp"],
  },
};

const services = [
  { title: "Reformas Integrales", desc: "Renovamos casas de pueblo de Mont-roig Vila y apartamentos de Miami Platja.", href: "/servicios/reformas-integrales" },
  { title: "Reformas de Cocinas", desc: "Cocinas tradicionales con vigas vistas o cocinas modernas para segunda residencia.", href: "/servicios/reformas-cocinas" },
  { title: "Reformas de Baños", desc: "Cambio bañera por ducha en pisos de Miami Platja con materiales contra salitre.", href: "/servicios/reformas-banos" },
  { title: "Reformas de Pisos", desc: "Pisos costeros de Miami Platja y casas históricas del centro de Mont-roig.", href: "/servicios/reformas-pisos" },
  { title: "Reformas de Locales", desc: "Restaurantes, hostales y comercios. Cumplimiento normativo y plazos firmes.", href: "/servicios/reformas-locales" },
];

const faqs = [
  { q: "¿Trabajáis tanto Mont-roig Vila como Miami Platja?", a: "Sí. Mont-roig del Camp tiene dos núcleos muy distintos: el casco histórico interior (Mont-roig Vila) con casas de piedra y masías agrícolas, y la zona costera (Miami Platja) con apartamentos turísticos y segundas residencias. Reformamos ambos con criterios y materiales diferentes según la tipología." },
  { q: "¿Reformáis masías y casas antiguas?", a: "Es una de nuestras especialidades. Trabajamos cal, mortero tradicional, vigas de madera y muros de piedra de las masías de la zona. Conservamos el carácter rural respetando la normativa de patrimonio del Ayuntamiento de Mont-roig del Camp." },
  { q: "¿Qué tarda una reforma en Miami Platja?", a: "Para un piso costero de 70-90 m²: 8-12 semanas. Para un apartamento turístico con HUT: solemos planificar fuera de temporada (octubre a marzo) para no afectar al alquiler de verano." },
  { q: "¿Cuánto se tarda en llegar desde Cambrils?", a: "Mont-roig Vila está a 15 minutos por carretera interior. Miami Platja, en la N-340, también a 15 minutos por la costa. Cobertura habitual sin sobrecostes." },
];

export default function ZonaMontRoigPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Zonas", url: "/zonas" }, { name: "Reformas en Mont-roig del Camp", url: "/zonas/reformas-mont-roig" }]} />

      <HeroService title="Reformas en Mont-roig del Camp — Empresa de Reformas de Confianza" h1Keyword="Reformas en Mont-roig del Camp" subtitle="Casas de pueblo, masías agrícolas, apartamentos de Miami Platja. Reformas con sello mediterráneo desde nuestra sede de Cambrils." image="/images/reforma-integral-fases-cambrils.webp" imageAlt="Reformas integrales en Mont-roig del Camp" badge="Mont-roig + Miami Platja" showCTA trustItems={["Casas de pueblo", "Masías", "Segundas residencias"]} />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[900px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">R.A Reformas en Mont-roig</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1] mb-3">Reformas en Mont-roig del Camp y Miami Platja</h2>
          <p className="font-display italic text-dark/70 text-lg md:text-xl mb-6">Casas tradicionales y segundas residencias costeras</p>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Mont-roig del Camp es un municipio con dos almas: la rural, con su núcleo histórico de Mont-roig Vila lleno de casas de piedra, callejones empedrados y la herencia de Joan Miró que tantas veces lo retrató; y la marítima, con Miami Platja como zona costera con apartamentos, hoteles y kilómetros de playa.</p>
            <p>Trabajamos en ambos núcleos. En el casco histórico, reformamos casas de pueblo y masías agrícolas respetando vigas, arcos y materiales tradicionales. En Miami Platja, atendemos pisos costeros y segundas residencias con materiales que aguantan el salitre, igual que en Cambrils Mar.</p>
            <p>Estamos a 15 minutos en coche de cualquiera de los dos núcleos. La proximidad nos permite estar en obra cada día sin que los desplazamientos afecten al presupuesto que firmamos contigo.</p>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-12">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Servicios</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] uppercase text-white leading-[1.1]">Servicios de reformas en Mont-roig</h2>
            <p className="font-display italic text-white/70 text-lg md:text-xl mt-3">Lo que hacemos en Mont-roig</p>
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
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">FAQ Mont-roig</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1]">Preguntas frecuentes sobre reformas en Mont-roig</h2>
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
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white uppercase leading-[1.1]">Solicita presupuesto para tu reforma en Mont-roig</h2>
          <p className="font-display italic text-white/85 text-lg md:text-xl">¿Reformas en Mont-roig o Miami Platja?</p>
          <p className="text-white/90 text-base md:text-lg max-w-[500px]">Pasamos a verla, valoramos por escrito en 24 horas y planificamos cronograma. Sin coste, sin obligación.</p>
          <CTAButtons className="justify-center" />
        </div>
      </section>
    </>
  );
}
