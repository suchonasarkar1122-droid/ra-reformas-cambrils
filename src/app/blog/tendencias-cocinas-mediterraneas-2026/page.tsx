import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Tendencias en cocinas mediterráneas 2026",
  description:
    "Cocinas con luz mediterránea: islas centrales, encimeras de Dekton y madera natural. Tendencias para reformar tu cocina en Cambrils y la Costa Daurada en 2026.",
  alternates: { canonical: "/blog/tendencias-cocinas-mediterraneas-2026" },
  openGraph: {
    title: "Tendencias en cocinas mediterráneas 2026",
    description: "Tendencias de diseño aplicadas a cocinas en viviendas de la Costa Daurada.",
    url: "/blog/tendencias-cocinas-mediterraneas-2026",
    type: "article",
    images: ["/images/blog/tendencias-cocinas-mediterraneas-2026.webp"],
  },
};

export default function BlogTendenciasCocinas() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Tendencias en cocinas mediterráneas 2026: luz, materiales y colores",
    description: "Tendencias actuales en cocinas para viviendas en la Costa Daurada y el Baix Camp.",
    image: "https://rareformascambrils.es/images/blog/tendencias-cocinas-mediterraneas-2026.webp",
    author: { "@type": "Organization", name: "R.A Reformas Cambrils" },
    publisher: {
      "@type": "Organization",
      name: "R.A Reformas Cambrils",
      logo: { "@type": "ImageObject", url: "https://rareformascambrils.es/images/hero-reforma-mediterranea-cambrils.webp" },
    },
    datePublished: "2026-03-05",
    dateModified: "2026-03-05",
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Tendencias cocinas 2026", url: "/blog/tendencias-cocinas-mediterraneas-2026" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="relative h-[400px] md:h-[480px] w-full overflow-hidden">
        <Image src="/images/blog/tendencias-cocinas-mediterraneas-2026.webp" alt="Tendencias en cocinas mediterráneas 2026 en Cambrils" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <div className="max-w-[820px] flex flex-col items-center gap-4">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Tendencias</span>
            <h1 className="font-display font-extrabold text-[28px] md:text-[44px] lg:text-[56px] text-white uppercase leading-[1]">Tendencias en cocinas mediterráneas 2026</h1>
            <p className="text-white/60 text-sm">5 marzo 2026 &middot; 7 min de lectura</p>
          </div>
        </div>
      </section>

      <article className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[780px]">
          <div className="prose prose-lg max-w-none font-body text-dark">
            <p className="text-lg text-subtitle leading-relaxed">
              La cocina ya no es un cuarto cerrado donde se cocina y se va. En 2026, en una vivienda de la Costa Daurada, es el espacio donde la familia se reúne, los amigos se sientan al final de una comida larga y el sol de la tarde entra dorado. Estas son las tendencias reales que estamos aplicando en las cocinas que reformamos en Cambrils, Salou, Reus y el resto del Baix Camp.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">1. Cocina abierta al salón</h2>
            <p className="text-subtitle leading-relaxed">
              Tirar el tabique entre cocina y comedor es la intervención que más sigue creciendo. En pisos de los años 70-90 de Cambrils Mar, abrir esta pared multiplica la luz natural, gana percepción de metros y permite cocinar mientras los invitados están en el salón. Una mesa de calçotada o una sobremesa con xató fluyen de otra manera cuando todo el espacio respira junto.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">2. Isla central con barra integrada</h2>
            <p className="text-subtitle leading-relaxed">
              En viviendas grandes (chalets de Vilafortuny, Cap de Sant Pere, casas de pueblo de Centre Vila con suficiente metro), la isla central es el corazón funcional: cocción, fregadero, almacenamiento y, sobre todo, una barra elevada para taburetes. Es el sitio donde se desayuna, se hace deberes con los niños y se toma una copa con amigos antes de cenar.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">3. Encimeras de Dekton, Silestone y piedra natural</h2>
            <p className="text-subtitle leading-relaxed">
              El laminado y el granito han perdido protagonismo. En 2026, las encimeras que más estamos instalando en Cambrils son:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-subtitle">
              <li><strong>Dekton:</strong> resistente al sol y al calor, sin poros, ideal para cocinas con mucha luz natural.</li>
              <li><strong>Silestone:</strong> cuarzo aglomerado que tolera bien la humedad y mantiene el color con los años.</li>
              <li><strong>Piedra natural (mármol travertino, arenisca clara):</strong> para quienes buscan un acabado mediterráneo cálido. Requiere algo más de mantenimiento pero el carácter es único.</li>
            </ul>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">4. Madera natural en muebles</h2>
            <p className="text-subtitle leading-relaxed">
              El blanco lacado brillante baja. Sube la madera natural (roble, fresno, nogal en zonas concretas) combinada con tonos arena, terracota y verde oliva. En segundas residencias junto al mar, el lacado mate suaviza el reflejo del sol y dura mucho más sin amarillear.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">5. Iluminación LED por capas</h2>
            <p className="text-subtitle leading-relaxed">
              Tres niveles de luz: general (downlights regulables en techo), de trabajo (tira LED bajo los muebles altos para iluminar la encimera) y ambiental (lámpara colgante sobre la isla o la mesa). Todas con regulación cálida-fría según hora del día.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">6. Electrodomésticos integrados y placas grandes</h2>
            <p className="text-subtitle leading-relaxed">
              Frigoríficos americanos full-size, hornos a la altura de los ojos, placas de inducción de 80-90 cm con cuatro o cinco zonas y campanas integradas en el techo o downdraft. Para una familia que recibe en verano, el espacio de cocción no es opcional.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">7. Colores tierra, arena y blanco roto</h2>
            <p className="text-subtitle leading-relaxed">
              El blanco puro pierde frente a tonos cálidos: blanco roto, beige, arena, terracota suave, verde oliva. Combinan con la luz mediterránea y dan a la cocina un aire más cercano a un riad o a una masía rehabilitada que a un catálogo nórdico.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">8. Almacenaje extremo</h2>
            <p className="text-subtitle leading-relaxed">
              Cajones grandes en lugar de puertas con baldas, columnas extraíbles para despensa, sistemas para reciclar separado bajo el fregadero, especieros estrechos. Las cocinas modernas ganan al detalle: que cada robot, sartén o tupper tenga su sitio.
            </p>

            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Tendencias que conviene adaptar a la costa</h2>
            <p className="text-subtitle leading-relaxed">
              No todo lo que se ve en revistas funciona igual en un piso junto al mar. Los tiradores y perfiles de latón sin tratar se oscurecen con el salitre; las encimeras porosas absorben manchas si la cocina se usa intensamente en verano; y los muebles de fondo de madera maciza necesitan una cocina bien ventilada para no deformarse. En Cambrils solemos aplicar la tendencia, pero con versiones más resistentes: herrajes de acero inoxidable, frentes con buen canto sellado y encimeras compactas.
            </p>
            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Cocinas pequeñas en apartamentos del Port</h2>
            <p className="text-subtitle leading-relaxed">
              Muchos apartamentos cercanos al puerto tienen cocinas de pocos metros, a veces con ventana a un patio interior. Aquí la mejor tendencia es la sencilla: muebles altos hasta el techo para ganar almacenaje, colores claros, una sola encimera continua y una buena campana. Si se puede abrir hacia el salón sin tocar un muro de carga, la sensación de espacio cambia por completo.
            </p>
            <h2 className="font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4">Cocinas de casa de pueblo en la Vila</h2>
            <p className="text-subtitle leading-relaxed">
              En las casas del casco antiguo la tendencia de recuperar materiales tiene todo el sentido: vigas de madera vistas, baldosa hidráulica, muros encalados. Lo combinamos con instalaciones nuevas y una iluminación cuidada para que la cocina sea práctica sin perder carácter. Si estás pensando en tu cocina, te contamos cómo la planteamos en nuestra página de <Link href="/servicios/reformas-cocinas" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">reformas de cocinas</Link> y, si forma parte de una renovación mayor, en <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">reformas integrales</Link>.
            </p>

            <div className="bg-accent/10 border border-accent/20 rounded-[16px] p-6 md:p-8 my-10">
              <h3 className="font-body font-bold text-dark text-lg uppercase mb-3">¿Quieres rediseñar tu cocina?</h3>
              <p className="text-subtitle text-base mb-4">Visitamos tu vivienda, hacemos diseño 3D y propuesta cerrada en 48 horas. Sin coste, sin obligación.</p>
              <Link href="/contacto" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent/90 transition-colors">
                Diseñar mi cocina
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-dark/10">
            <h3 className="font-display font-extrabold text-[24px] uppercase text-dark mb-8">Sigue leyendo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/cuanto-cuesta-reformar-vivienda-cambrils" className="group bg-white rounded-[16px] p-5 border border-dark/5 hover:border-accent/30 transition-colors flex gap-4">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-[10px] overflow-hidden">
                  <Image src="/images/cocina-comparativa-reforma-completa-cambrils.webp" alt="Cuánto cuesta reformar en Cambrils" fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-subtitle text-xs uppercase tracking-wider">Guía de precios</span>
                  <h4 className="font-body font-bold text-dark text-sm group-hover:text-accent transition-colors">¿Cuánto cuesta reformar una vivienda en Cambrils?</h4>
                </div>
              </Link>
              <Link href="/blog/ayudas-rehabilitacion-energetica-baix-camp" className="group bg-white rounded-[16px] p-5 border border-dark/5 hover:border-accent/30 transition-colors flex gap-4">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-[10px] overflow-hidden">
                  <Image src="/images/terraza-moderna-suelo-madera-cambrils.webp" alt="Ayudas Baix Camp" fill className="object-cover" sizes="96px" />
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
