import type { Metadata } from "next";
import Link from "next/link";
import HeroService from "@/components/HeroService";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Zonas de servicio",
  description:
    "Cobertura desde Cambrils a Salou, Reus, Mont-roig del Camp, Vila-seca y Riudoms. Reformas integrales con plantilla propia en todo el Baix Camp y Costa Daurada.",
  alternates: { canonical: "/zonas" },
  openGraph: {
    title: "Zonas de servicio · R.A Reformas Cambrils",
    description: "Reformas integrales en Cambrils y municipios cercanos: Salou, Reus, Mont-roig, Vila-seca y Riudoms.",
    url: "/zonas",
    images: ["/images/hero-reforma-mediterranea-cambrils.webp"],
  },
};

const zones = [
  { name: "Salou", slug: "reformas-salou", description: "Reformas de pisos costeros, apartamentos turísticos y segundas residencias en Salou Centre, Cap Salou y Capellans." },
  { name: "Reus", slug: "reformas-reus", description: "Reformas integrales en la capital del Baix Camp: pisos del centro, modernismo, Mas Iglesias y barrio Gaudí." },
  { name: "Mont-roig del Camp", slug: "reformas-mont-roig", description: "Atendemos Miami Platja, Mont-roig Vila y las masías agrícolas del entorno. Casas de pueblo y segundas residencias." },
  { name: "Vila-seca", slug: "reformas-vila-seca", description: "Reformas en La Pineda y Vila-seca centre. Pisos costeros, chalets y locales del entorno PortAventura." },
  { name: "Riudoms", slug: "reformas-riudoms", description: "Reformas en Riudoms centre, masías y casas señoriales. Trabajamos cal, piedra y carpintería tradicional." },
];

export default function ZonasPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Zonas de servicio", url: "/zonas" }]} />

      <HeroService
        title="Cobertura en el Baix Camp y la Costa Daurada"
        h1Keyword="Zonas de servicio"
        subtitle="Damos servicio desde Cambrils a los municipios cercanos del Baix Camp y la Tarragona costera, sin sobrecostes por desplazamiento."
        image="/images/hero-reforma-mediterranea-cambrils.webp"
        imageAlt="Reformas integrales en el Baix Camp"
        badge="Cobertura comarcal"
        showCTA
      />

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Municipios donde trabajamos</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[44px] uppercase text-dark leading-[1.1]">Reformas en el Baix Camp y zonas cercanas</h2>
            <p className="font-display italic text-dark/70 text-lg md:text-xl mt-3">
              Cambrils y municipios cercanos
            </p>
            <p className="font-body text-subtitle text-base max-w-[600px] mx-auto mt-4">
              Cambrils es nuestro punto de partida. Desde aquí cubrimos toda la zona costera de Tarragona: la cercanía con Salou, Vila-seca y Reus nos permite estar en obra cada día.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link href="/" className="bg-accent rounded-[20px] p-8 flex flex-col gap-4 text-white hover:bg-accent-light transition-colors">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
              </div>
              <h3 className="font-display font-extrabold text-xl uppercase">Cambrils</h3>
              <p className="text-white/80 text-sm leading-relaxed">Sede en el centro. Más de 120 obras entregadas entre Centre Vila, Vilafortuny, Cap de Sant Pere, La Llosa, L&apos;Esquirol y Cambrils Mar.</p>
              <span className="inline-flex items-center gap-1 text-white/60 text-xs font-bold uppercase tracking-wider mt-auto">
                <span className="w-2 h-2 bg-white rounded-full animate-pulse" />Sede central
              </span>
            </Link>

            {zones.map((zone) => (
              <Link key={zone.slug} href={`/zonas/${zone.slug}`} className="group bg-white rounded-[20px] p-8 flex flex-col gap-4 border border-dark/5 hover:border-accent/30 transition-colors duration-300">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2" strokeLinecap="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
                </div>
                <h3 className="font-display font-extrabold text-dark text-xl uppercase group-hover:text-accent transition-colors">{zone.name}</h3>
                <p className="text-subtitle text-sm leading-relaxed">{zone.description}</p>
                <span className="font-body font-bold text-accent text-sm inline-flex items-center gap-1 mt-auto">
                  Ver zona <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Cómo trabajamos la comarca</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1] mb-6">Cambrils como base: barrios, urbanizaciones y municipios vecinos</h2>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>La mayor parte de nuestras obras están en el propio término de Cambrils, que es mucho más variado de lo que parece desde el paseo. A partir de ahí nos movemos a los municipios cercanos con la misma plantilla.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Dentro de Cambrils</h3>
            <p>En el barrio del Port y en la zona de la Llosa y el Regueral predominan los pisos y apartamentos de los años setenta a noventa, muchos de segunda residencia o alquiler turístico. En la Vila, el núcleo antiguo del interior, las casas de pueblo con vigas de madera y muros de carga. Vilafortuny, hacia Salou, combina chalets y bloques junto a la playa. Y hacia poniente están Cambrils Badia y urbanizaciones como Mas Clariana o Mas d’en Bosch, con casas unifamiliares que pasan parte del año cerradas.</p>
            <p>Cada una de estas zonas tiene su propio desgaste: el salitre en primera línea, la humedad del terreno en las plantas bajas de la Vila o la falta de uso en invierno en las urbanizaciones. Lo tenemos en cuenta al proponer una <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">reforma de piso</Link> o una <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">reforma integral</Link>.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Costa: Salou, Vila-seca y Mont-roig</h3>
            <p>Hacia el este, <Link href="/zonas/reformas-salou" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">Salou</Link> y <Link href="/zonas/reformas-vila-seca" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">Vila-seca con La Pineda</Link> repiten muchos de los retos de Cambrils: apartamentos turísticos, comunidades grandes y obras que deben terminar antes de la temporada. Hacia el oeste, <Link href="/zonas/reformas-mont-roig" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">Mont-roig del Camp y Miami Platja</Link> mezclan urbanizaciones de playa con un núcleo interior de casas de piedra.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Interior: Riudoms y alrededores</h3>
            <p>Tierra adentro, <Link href="/zonas/reformas-riudoms" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">Riudoms</Link> y su entorno agrícola son casas de pueblo y masías, donde se trabaja más con cal, madera y piedra. El clima cambia: menos salitre y más frío nocturno en invierno.</p>
            <p>Si tu municipio no está en la lista, llámanos igualmente: te diremos con sinceridad si podemos atender la obra con la calidad y la frecuencia de visitas que necesita.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Misma forma de trabajar en todos los municipios</h3>
            <p>Trabajemos en Cambrils o en un pueblo vecino, el planteamiento es el mismo: visita previa, propuesta por partidas, un único responsable de obra y la gestión del permiso que corresponda en cada ayuntamiento. Cada municipio tiene sus propios impresos y plazos para la comunicación previa o la licencia de obras, y los tenemos en cuenta al preparar el calendario.</p>
          </div>
        </div>
      </section>

      <section className="bg-accent px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] text-white uppercase leading-[1.1]">Solicita presupuesto para tu reforma</h2>
          <p className="font-display italic text-white/85 text-lg md:text-xl">
            ¿Tu municipio no aparece?
          </p>
          <p className="text-white/90 text-base md:text-lg max-w-[500px]">Cubrimos buena parte del Baix Camp y la Costa Daurada. Llámanos y te confirmamos si damos servicio en tu zona sin coste de desplazamiento.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-dark text-white px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-dark/80 transition-colors">
            Consultar mi zona <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
