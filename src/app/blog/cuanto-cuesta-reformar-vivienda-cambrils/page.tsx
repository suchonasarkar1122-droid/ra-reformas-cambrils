import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "¿Cuánto cuesta reformar una vivienda en Cambrils en 2026?",
  description:
    "Guía de precios para reformar pisos costeros, casas de pueblo y segundas residencias en Cambrils. Desglose por m², partidas detalladas y consejos para optimizar el coste.",
  alternates: { canonical: "/blog/cuanto-cuesta-reformar-vivienda-cambrils" },
  openGraph: {
    title: "¿Cuánto cuesta reformar una vivienda en Cambrils en 2026?",
    description: "Precios reales y desglose para reformar viviendas en la Costa Daurada. Guía de R.A Reformas Cambrils.",
    url: "/blog/cuanto-cuesta-reformar-vivienda-cambrils",
    type: "article",
    images: ["/images/cocina-comparativa-reforma-completa-cambrils.webp"],
  },
};

export default function BlogCosteCambrils() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "¿Cuánto cuesta reformar una vivienda en Cambrils en 2026?",
    description: "Guía de precios actualizada para reformar viviendas en Cambrils y el Baix Camp.",
    image: "https://rareformascambrils.es/images/cocina-comparativa-reforma-completa-cambrils.webp",
    author: { "@type": "Organization", name: "R.A Reformas Cambrils" },
    publisher: {
      "@type": "Organization",
      name: "R.A Reformas Cambrils",
      logo: { "@type": "ImageObject", url: "https://rareformascambrils.es/images/hero-reforma-mediterranea-cambrils.webp" },
    },
    datePublished: "2026-03-12",
    dateModified: "2026-03-12",
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Coste reformar vivienda Cambrils", url: "/blog/cuanto-cuesta-reformar-vivienda-cambrils" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="relative h-[400px] md:h-[480px] w-full overflow-hidden">
        <Image src="/images/cocina-comparativa-reforma-completa-cambrils.webp" alt="Reforma integral en vivienda de Cambrils" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <div className="max-w-[820px] flex flex-col items-center gap-4">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Guía de precios</span>
            <h1 className="font-display font-extrabold text-[28px] md:text-[44px] lg:text-[56px] text-white uppercase leading-[1]">¿Cuánto cuesta reformar una vivienda en Cambrils?</h1>
            <p className="text-white/60 text-sm">12 marzo 2026 &middot; 8 min de lectura</p>
          </div>
        </div>
      </section>

      <article className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[780px]">
          <div className="prose prose-lg max-w-none font-body text-dark">
            <p className="text-lg text-subtitle leading-relaxed">
              Reformar una vivienda en Cambrils en 2026 cuesta lo que pesa el sentido común: depende del tipo de inmueble (piso costero, casa de pueblo, masía o segunda residencia), de su estado previo, de los materiales que elijas y del nivel de obra que necesites. En esta guía te damos rangos reales de precios para los tres formatos más habituales en la Costa Daurada y un desglose por partidas que puedes contrastar con cualquier presupuesto que recibas.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Precio por m² según tipología</h2>
            <p className="text-subtitle leading-relaxed">
              <strong>Piso costero (Cambrils Mar, L&apos;Esquirol, Cambrils Centre):</strong> 450 a 950 €/m². Para un piso de 80 m², la horquilla está entre 36.000 € (reforma media) y 76.000 € (reforma integral con materiales premium).
            </p>
            <p className="text-subtitle leading-relaxed">
              <strong>Casa de pueblo (Centre Vila):</strong> 700 a 1.300 €/m². Estructuras antiguas, vigas de madera y muros de carga obligan a más mano de obra artesana. Una casa de 120 m² puede ir de 84.000 € a 156.000 €.
            </p>
            <p className="text-subtitle leading-relaxed">
              <strong>Segunda residencia / chalet (Vilafortuny, Cap de Sant Pere):</strong> 600 a 1.200 €/m². Las viviendas unifamiliares con jardín y piscina suelen partir de 180 m². Presupuestos habituales entre 110.000 y 220.000 €.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Desglose por partidas</h2>
            <div className="bg-white rounded-[16px] p-6 md:p-8 border border-dark/5 my-8">
              <ul className="space-y-4 text-base">
                <li className="flex justify-between items-center border-b border-dark/5 pb-3">
                  <span className="font-semibold text-dark">Demolición y retirada de escombros</span>
                  <span className="text-accent font-bold">30 - 55 €/m²</span>
                </li>
                <li className="flex justify-between items-center border-b border-dark/5 pb-3">
                  <span className="font-semibold text-dark">Albañilería y tabiquería</span>
                  <span className="text-accent font-bold">65 - 130 €/m²</span>
                </li>
                <li className="flex justify-between items-center border-b border-dark/5 pb-3">
                  <span className="font-semibold text-dark">Instalación eléctrica completa</span>
                  <span className="text-accent font-bold">55 - 95 €/m²</span>
                </li>
                <li className="flex justify-between items-center border-b border-dark/5 pb-3">
                  <span className="font-semibold text-dark">Fontanería y saneamiento</span>
                  <span className="text-accent font-bold">45 - 85 €/m²</span>
                </li>
                <li className="flex justify-between items-center border-b border-dark/5 pb-3">
                  <span className="font-semibold text-dark">Suelos y revestimientos</span>
                  <span className="text-accent font-bold">55 - 165 €/m²</span>
                </li>
                <li className="flex justify-between items-center border-b border-dark/5 pb-3">
                  <span className="font-semibold text-dark">Cocina completa con muebles</span>
                  <span className="text-accent font-bold">8.000 - 22.000 €</span>
                </li>
                <li className="flex justify-between items-center border-b border-dark/5 pb-3">
                  <span className="font-semibold text-dark">Baño completo (por unidad)</span>
                  <span className="text-accent font-bold">4.500 - 12.000 €</span>
                </li>
                <li className="flex justify-between items-center border-b border-dark/5 pb-3">
                  <span className="font-semibold text-dark">Aerotermia y climatización</span>
                  <span className="text-accent font-bold">10.000 - 28.000 €</span>
                </li>
                <li className="flex justify-between items-center pb-1">
                  <span className="font-semibold text-dark">Pintura y acabados finales</span>
                  <span className="text-accent font-bold">15 - 32 €/m²</span>
                </li>
              </ul>
            </div>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Particularidades de Cambrils</h2>
            <p className="text-subtitle leading-relaxed">
              La proximidad al mar añade variables al presupuesto. Los acabados estándar fallan a los pocos años: pintura plástica que se levanta, juntas que se ennegrecen, herrajes oxidados, carpintería que se hincha. Por eso, en Cambrils no recomendamos el material más barato:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-subtitle">
              <li><strong>Pintura transpirable con tratamiento antimoho</strong> en lugar de plástica básica.</li>
              <li><strong>Carpintería de aluminio con rotura de puente térmico</strong> en vez de PVC blanco económico.</li>
              <li><strong>Suelo porcelánico rectificado de gran formato</strong> con menos juntas para reducir mantenimiento.</li>
              <li><strong>Griferías con cuerpo cromado</strong> y no termoplásticos lacados que pierden brillo en pocos años.</li>
            </ul>
            <p className="text-subtitle leading-relaxed">
              Estas elecciones suben el presupuesto inicial entre un 8% y un 15%, pero evitan retoques tempranos y mantienen la vivienda en buen estado a largo plazo.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Plazos según tipología</h2>
            <ul className="list-disc pl-6 space-y-2 text-subtitle">
              <li><strong>Piso costero 60-90 m²:</strong> 7 a 11 semanas.</li>
              <li><strong>Casa de pueblo 100-150 m² Centre Vila:</strong> 14 a 22 semanas.</li>
              <li><strong>Chalet o segunda residencia 180-300 m²:</strong> 18 a 28 semanas.</li>
            </ul>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Cómo no pasarse del presupuesto</h2>
            <ol className="list-decimal pl-6 space-y-3 text-subtitle">
              <li><strong>Cierra el proyecto antes de empezar.</strong> Cada cambio durante la obra es dinero. Define ahora qué quieres y respétalo.</li>
              <li><strong>Pide oferta por partidas.</strong> Si te dan un solo número global, no podrás comparar. Por partidas verás dónde estás pagando más.</li>
              <li><strong>Invierte en la envolvente y en las instalaciones.</strong> Aislamiento, ventanas, eléctrica y fontanería son la base. El resto cambia con la moda.</li>
              <li><strong>No elijas la oferta más barata.</strong> Suele faltar partida o cubrirla con material que no resiste. Compara con honestidad.</li>
              <li><strong>Trabaja con plantilla propia.</strong> Las cadenas de subcontratas encarecen y no cubren la garantía cuando algo falla.</li>
            </ol>

            <div className="bg-accent/10 border border-accent/20 rounded-[16px] p-6 md:p-8 my-10">
              <h3 className="font-body font-bold text-dark text-lg uppercase mb-3">¿Quieres saber qué costaría tu reforma?</h3>
              <p className="text-subtitle text-base mb-4">Visitamos tu vivienda en Cambrils, tomamos medidas y, en 24 horas, recibes una valoración por partidas. Sin coste, sin obligación.</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contacto" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent/90 transition-colors">
                  Pedir mi valoración
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                </Link>
                <a href="tel:+34877278109" className="inline-flex items-center gap-2 border-2 border-accent text-accent px-6 py-3 rounded-full font-bold text-sm hover:bg-accent hover:text-white transition-colors">877 278 109</a>
              </div>
            </div>
          </div>

          {/* ============ RELATED POSTS ============ */}
          <div className="mt-16 pt-12 border-t border-dark/10">
            <h3 className="font-display font-extrabold text-[24px] uppercase text-dark mb-8">Artículos relacionados</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/tendencias-cocinas-mediterraneas-2026" className="group bg-white rounded-[16px] p-5 border border-dark/5 hover:border-accent/30 transition-colors flex gap-4">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-[10px] overflow-hidden">
                  <Image src="/images/cocina-abierta-salon-lujo-cambrils.webp" alt="Tendencias cocinas mediterráneas 2026" fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-subtitle text-xs uppercase tracking-wider">Tendencias</span>
                  <h4 className="font-body font-bold text-dark text-sm group-hover:text-accent transition-colors">Tendencias en cocinas mediterráneas 2026</h4>
                </div>
              </Link>
              <Link href="/blog/ayudas-rehabilitacion-energetica-baix-camp" className="group bg-white rounded-[16px] p-5 border border-dark/5 hover:border-accent/30 transition-colors flex gap-4">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-[10px] overflow-hidden">
                  <Image src="/images/terraza-moderna-suelo-madera-cambrils.webp" alt="Ayudas rehabilitación energética Baix Camp" fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-subtitle text-xs uppercase tracking-wider">Ayudas</span>
                  <h4 className="font-body font-bold text-dark text-sm group-hover:text-accent transition-colors">Ayudas a la rehabilitación energética en el Baix Camp</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
