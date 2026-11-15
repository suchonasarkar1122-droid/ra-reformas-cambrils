import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Blog de Reformas en Cambrils",
  description:
    "Blog de R.A Reformas Cambrils: precios de reforma, humedades en invierno, tendencias en cocinas y subvenciones para viviendas de la Costa Daurada.",
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog · R.A Reformas Cambrils",
    description: "Guías, precios y consejos para reformas en Cambrils, Salou y el Baix Camp.",
    url: "/blog",
    images: ["/images/cocina-comparativa-reforma-completa-cambrils.webp"],
  },
};

const posts = [
  {
    slug: "humedad-condensacion-invierno-cambrils",
    title: "Humedad y condensación en invierno: guía para casas de Cambrils",
    excerpt:
      "Moho, cristales empañados y paredes frías en pisos y chalets de Cambrils: cómo distinguir condensación, filtración y capilaridad, y cuándo conviene una reforma.",
    image: "/images/dormitorio-renovado-cambrils.webp",
    imageAlt: "Dormitorio sin humedades en una vivienda de Cambrils",
    date: "15 noviembre 2026",
    category: "Mantenimiento",
  },
  {
    slug: "cuanto-cuesta-reformar-vivienda-cambrils",
    title: "¿Cuánto cuesta reformar una vivienda en Cambrils en 2026?",
    excerpt:
      "Precios actualizados por m² para pisos costeros, casas de pueblo y segundas residencias en Cambrils. Desglose por estancia y consejos para no pasarse del presupuesto.",
    image: "/images/cocina-comparativa-reforma-completa-cambrils.webp",
    imageAlt: "Reforma integral en vivienda de Cambrils - costes 2026",
    date: "12 marzo 2026",
    category: "Guía de precios",
  },
  {
    slug: "tendencias-cocinas-mediterraneas-2026",
    title: "Tendencias en cocinas mediterráneas 2026: luz, materiales y colores",
    excerpt:
      "Cocinas que respiran luz mediterránea: islas centrales, encimeras de Dekton, madera natural y soluciones funcionales para casas de la Costa Daurada.",
    image: "/images/cocina-abierta-salon-lujo-cambrils.webp",
    imageAlt: "Tendencias cocinas mediterráneas 2026",
    date: "5 marzo 2026",
    category: "Tendencias",
  },
  {
    slug: "ayudas-rehabilitacion-energetica-baix-camp",
    title: "Ayudas a la rehabilitación energética en el Baix Camp 2026",
    excerpt:
      "Subvenciones del Programa Next Generation, ayudas autonómicas catalanas y cómo aprovecharlas en viviendas costeras de Cambrils, Salou y el Baix Camp.",
    image: "/images/terraza-moderna-suelo-madera-cambrils.webp",
    imageAlt: "Rehabilitación energética en el Baix Camp",
    date: "28 febrero 2026",
    category: "Ayudas y subvenciones",
  },
];

export default function BlogPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Blog", url: "/blog" }]} />

      {/* ============ HERO ============ */}
      <section className="relative h-[340px] md:h-[420px] w-full overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <span className="font-body font-bold text-xs uppercase tracking-[0.3em] text-accent mb-4">
            R.A Reformas Cambrils
          </span>
          <h1 className="font-display font-extrabold text-[40px] md:text-[60px] lg:text-[72px] text-white uppercase leading-[0.95]">
            Blog — Consejos y Guías sobre Reformas en Cambrils
          </h1>
          <p className="text-white/60 text-base md:text-lg mt-4 max-w-[560px]">
            Precios reales, tendencias y notas técnicas para tu reforma en la Costa Daurada y el Baix Camp.
          </p>
        </div>
      </section>

      {/* ============ POSTS GRID ============ */}
      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-[20px] overflow-hidden border border-dark/5 hover:border-accent/30 transition-colors duration-300"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-accent text-white text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wider">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <span className="text-subtitle text-xs font-body uppercase tracking-wider">
                    {post.date}
                  </span>
                  <h2 className="font-body font-bold text-dark text-lg leading-tight group-hover:text-accent transition-colors">
                    {post.title}
                  </h2>
                  <p className="font-body text-subtitle text-sm leading-relaxed">
                    {post.excerpt}
                  </p>
                  <span className="font-body font-bold text-accent text-sm inline-flex items-center gap-1 mt-2">
                    Leer el artículo
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
