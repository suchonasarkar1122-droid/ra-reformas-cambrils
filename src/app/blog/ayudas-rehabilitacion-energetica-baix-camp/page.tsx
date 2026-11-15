import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: { absolute: "Ayudas a la rehabilitación energética en el Baix Camp 2026" },
  description:
    "Subvenciones disponibles en el Baix Camp y la Costa Daurada para rehabilitar tu vivienda: Next Generation, ICF, programas autonómicos catalanes y deducción.",
  alternates: { canonical: "/blog/ayudas-rehabilitacion-energetica-baix-camp" },
  openGraph: {
    title: "Ayudas a la rehabilitación energética en el Baix Camp 2026",
    description: "Guía actualizada de subvenciones para rehabilitar tu vivienda en Cambrils, Salou, Reus y entorno.",
    url: "/blog/ayudas-rehabilitacion-energetica-baix-camp",
    type: "article",
    images: ["/images/terraza-moderna-suelo-madera-cambrils.webp"],
  },
};

export default function BlogAyudasBaixCamp() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Ayudas a la rehabilitación energética en el Baix Camp 2026",
    description: "Guía de subvenciones para rehabilitación energética en viviendas del Baix Camp y la Costa Daurada.",
    image: "https://rareformascambrils.es/images/terraza-moderna-suelo-madera-cambrils.webp",
    author: { "@type": "Organization", name: "R.A Reformas Cambrils" },
    publisher: {
      "@type": "Organization",
      name: "R.A Reformas Cambrils",
      logo: { "@type": "ImageObject", url: "https://rareformascambrils.es/images/hero-reforma-mediterranea-cambrils.webp" },
    },
    datePublished: "2026-02-28",
    dateModified: "2026-02-28",
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Ayudas rehabilitación Baix Camp", url: "/blog/ayudas-rehabilitacion-energetica-baix-camp" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="relative h-[400px] md:h-[480px] w-full overflow-hidden">
        <Image src="/images/terraza-moderna-suelo-madera-cambrils.webp" alt="Vivienda rehabilitada energéticamente en el Baix Camp" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <div className="max-w-[820px] flex flex-col items-center gap-4">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Ayudas y subvenciones</span>
            <h1 className="font-display font-extrabold text-[28px] md:text-[44px] lg:text-[56px] text-white uppercase leading-[1]">Ayudas a la rehabilitación energética en el Baix Camp</h1>
            <p className="text-white/60 text-sm">28 febrero 2026 &middot; 8 min de lectura</p>
          </div>
        </div>
      </section>

      <article className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[780px]">
          <div className="prose prose-lg max-w-none font-body text-dark">
            <p className="text-lg text-subtitle leading-relaxed">
              Si reformas o rehabilitas tu vivienda en Cambrils, Salou, Reus, Vila-seca, Mont-roig del Camp o cualquier otro municipio del Baix Camp en 2026, hay un mapa de ayudas que conviene conocer antes de firmar nada. Aquí te resumimos las que más estamos tramitando para clientes en la Costa Daurada y qué obras cubren.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Programa Next Generation EU</h2>
            <p className="text-subtitle leading-relaxed">
              Los fondos europeos siguen siendo la principal fuente de ayudas a la rehabilitación. En Cataluña se gestionan a través del ICAEN (Institut Català d&apos;Energia) y el Departament de Drets Socials. Hay tres programas activos:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-subtitle">
              <li><strong>Programa 3 (rehabilitación a nivel de edificio):</strong> hasta 18.800 € por vivienda si se reduce el consumo energético al menos un 30%. Cubre fachadas, cubiertas, ventanas, calefacción.</li>
              <li><strong>Programa 4 (mejora de eficiencia en vivienda):</strong> hasta 3.000 € por vivienda para actuaciones individuales (cambio de ventanas, aerotermia, suelo radiante).</li>
              <li><strong>Programa 5 (informe técnico previo):</strong> ayuda al pago del Libro del Edificio o el certificado energético previo.</li>
            </ul>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Bonificación del IBI municipal</h2>
            <p className="text-subtitle leading-relaxed">
              Varios ayuntamientos del Baix Camp aplican bonificaciones del IBI cuando rehabilitas energéticamente tu vivienda. En el Ayuntamiento de Cambrils, esta bonificación puede llegar al 50% durante 3 años en obras certificadas con mejora de calificación energética. Conviene consultar la ordenanza fiscal vigente en tu municipio.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Deducción en IRPF</h2>
            <p className="text-subtitle leading-relaxed">
              Existen deducciones en el IRPF estatal por obras de mejora de eficiencia energética en vivienda habitual y arrendada. Tres tramos según el ahorro conseguido:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-subtitle">
              <li><strong>20% de deducción</strong> si reduces la demanda de calefacción y refrigeración en al menos un 7%.</li>
              <li><strong>40% de deducción</strong> si reduces el consumo de energía primaria no renovable en al menos un 30%.</li>
              <li><strong>60% de deducción</strong> en rehabilitaciones de edificio que mejoren la calificación a clase A o B.</li>
            </ul>
            <p className="text-subtitle leading-relaxed">
              Las bases máximas de deducción son altas (hasta 15.000 € en algunos casos), por lo que merece la pena planificar la obra teniendo esto en cuenta.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Préstamos del ICF (Institut Català de Finances)</h2>
            <p className="text-subtitle leading-relaxed">
              El ICF ofrece préstamos a tipos de interés bonificados para rehabilitación energética. Son una buena alternativa cuando las ayudas no cubren toda la inversión y prefieres financiar el resto a tipo bajo en lugar de tirar de hipoteca.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Qué obras se subvencionan</h2>
            <ul className="list-disc pl-6 space-y-2 text-subtitle">
              <li><strong>Aislamiento de fachada (SATE):</strong> recubrimiento por el exterior con paneles aislantes. Ideal en pisos antiguos de Cambrils Mar y Vilafortuny donde la pared es delgada.</li>
              <li><strong>Cambio de ventanas:</strong> de aluminio antiguo a aluminio o PVC con rotura de puente térmico y vidrio de baja emisividad.</li>
              <li><strong>Aerotermia:</strong> sustitución de calderas de gas natural o eléctricas por bombas de calor aire-agua. Reduce el consumo entre un 60% y un 75%.</li>
              <li><strong>Suelo radiante:</strong> sistema de calefacción y refrigeración invisible y eficiente.</li>
              <li><strong>Placas solares fotovoltaicas:</strong> autoconsumo eléctrico, ideal en chalets de Vilafortuny y Cap de Sant Pere con cubiertas amplias.</li>
            </ul>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Cómo lo gestionamos en R.A Reformas</h2>
            <p className="text-subtitle leading-relaxed">
              En las obras donde aplican estas ayudas, te acompañamos en todo el proceso administrativo: certificado energético previo, proyecto firmado por técnico colegiado, presentación de la solicitud ante el ICAEN o el ayuntamiento correspondiente, certificado energético final con la nueva calificación y justificación documental. No es un servicio independiente: forma parte de cualquier reforma con componente de eficiencia energética que ejecutamos en el Baix Camp.
            </p>
            <p className="text-subtitle leading-relaxed">
              Conviene avisar de tu intención de pedir ayuda <strong>antes</strong> de empezar la obra: hay procedimientos que requieren la solicitud previa al inicio de los trabajos para que la subvención sea válida.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Antes de pedir una ayuda, revisa la convocatoria vigente</h2>
            <p className="text-subtitle leading-relaxed">
              Las ayudas a la rehabilitación cambian con frecuencia: se abren y cierran convocatorias, se agotan fondos y se ajustan requisitos y porcentajes. Las cifras de este artículo son orientativas; antes de decidir la obra, comprueba la convocatoria vigente en la web de la Agència de l’Habitatge de Catalunya, del ICAEN o de tu ayuntamiento, y consulta con tu asesor fiscal todo lo relativo a deducciones en la renta.
            </p>
            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Qué mejoras tienen más sentido en Cambrils</h2>
            <p className="text-subtitle leading-relaxed">
              En una vivienda de costa con inviernos suaves, las actuaciones que más se notan suelen ser las ventanas con rotura de puente térmico, el aislamiento de cubiertas en casas y áticos, y la sustitución de calderas o radiadores eléctricos antiguos por bomba de calor. En pisos cerrados buena parte del invierno, mejorar el aislamiento en los puntos fríos reduce también la condensación y el moho, algo que explicamos en nuestra guía sobre <Link href="/blog/humedad-condensacion-invierno-cambrils" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">humedad y condensación en invierno</Link>.
            </p>
            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Integrarlo en la reforma</h2>
            <p className="text-subtitle leading-relaxed">
              La forma más eficiente de aprovechar estas ayudas es incluir la mejora energética en una obra que ya ibas a hacer. Si vas a renovar la vivienda entera, lo planificamos dentro de una <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">reforma integral</Link>; si solo cambias ventanas y climatización en un apartamento, puede encajar en una <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">reforma de piso</Link> más acotada.
            </p>

            <div className="bg-accent/10 border border-accent/20 rounded-[16px] p-6 md:p-8 my-10">
              <h3 className="font-body font-bold text-dark text-lg uppercase mb-3">¿Quieres rehabilitar aprovechando las ayudas?</h3>
              <p className="text-subtitle text-base mb-4">Te asesoramos sobre qué subvenciones encajan con tu vivienda y cuáles aprovechar para que la obra te cueste menos.</p>
              <Link href="/contacto" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent/90 transition-colors">
                Pedir asesoramiento
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-dark/10">
            <h3 className="font-display font-extrabold text-[24px] uppercase text-dark mb-8">Sigue leyendo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/cuanto-cuesta-reformar-vivienda-cambrils" className="group bg-white rounded-[16px] p-5 border border-dark/5 hover:border-accent/30 transition-colors flex gap-4">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-[10px] overflow-hidden">
                  <Image src="/images/cocina-comparativa-reforma-completa-cambrils.webp" alt="Coste reformar vivienda Cambrils" fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-subtitle text-xs uppercase tracking-wider">Guía de precios</span>
                  <h4 className="font-body font-bold text-dark text-sm group-hover:text-accent transition-colors">¿Cuánto cuesta reformar una vivienda en Cambrils?</h4>
                </div>
              </Link>
              <Link href="/blog/tendencias-cocinas-mediterraneas-2026" className="group bg-white rounded-[16px] p-5 border border-dark/5 hover:border-accent/30 transition-colors flex gap-4">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-[10px] overflow-hidden">
                  <Image src="/images/cocina-abierta-salon-lujo-cambrils.webp" alt="Tendencias cocinas mediterráneas 2026" fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-subtitle text-xs uppercase tracking-wider">Tendencias</span>
                  <h4 className="font-body font-bold text-dark text-sm group-hover:text-accent transition-colors">Tendencias en cocinas mediterráneas 2026</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
