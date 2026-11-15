import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Humedad y condensación en invierno en Cambrils",
  description:
    "Moho, vaho y paredes frías en pisos y casas de Cambrils: cómo distinguir condensación de filtración, qué hacer este invierno y cuándo conviene una obra.",
  alternates: { canonical: "/blog/humedad-condensacion-invierno-cambrils" },
  openGraph: {
    title: "Humedad y condensación en invierno en Cambrils",
    description: "Guía práctica para evitar moho y condensación en viviendas de la costa de Cambrils durante el invierno.",
    url: "/blog/humedad-condensacion-invierno-cambrils",
    type: "article",
    images: ["/images/blog/humedad-condensacion-invierno-cambrils.webp"],
  },
};

const h2 = "font-display font-extrabold text-[24px] md:text-[32px] uppercase text-dark mt-12 mb-4";
const lnk = "text-accent font-semibold underline underline-offset-2 hover:text-dark";

export default function BlogHumedadCondensacion() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "Humedad y condensación en invierno: guía para casas de Cambrils",
    description: "Cómo distinguir condensación, filtración y capilaridad en viviendas de Cambrils, qué hacer en invierno y cuándo plantear una reforma.",
    image: "https://rareformascambrils.es/images/blog/humedad-condensacion-invierno-cambrils.webp",
    author: { "@type": "Organization", name: "R.A Reformas Cambrils" },
    publisher: {
      "@type": "Organization",
      name: "R.A Reformas Cambrils",
      logo: { "@type": "ImageObject", url: "https://rareformascambrils.es/images/hero-reforma-mediterranea-cambrils.webp" },
    },
    datePublished: "2026-11-15",
    dateModified: "2026-11-15",
  };

  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Blog", url: "/blog" }, { name: "Humedad y condensación en invierno", url: "/blog/humedad-condensacion-invierno-cambrils" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <section className="relative h-[400px] md:h-[480px] w-full overflow-hidden">
        <Image src="/images/blog/humedad-condensacion-invierno-cambrils.webp" alt="Humedad y condensación en invierno" fill className="object-cover" priority sizes="100vw" />
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <div className="max-w-[820px] flex flex-col items-center gap-4">
            <span className="bg-accent text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">Mantenimiento</span>
            <h1 className="font-display font-extrabold text-[28px] md:text-[44px] lg:text-[56px] text-white uppercase leading-[1]">Humedad y condensación en invierno: guía para casas de Cambrils</h1>
            <p className="text-white/60 text-sm">15 noviembre 2026 &middot; 9 min de lectura</p>
          </div>
        </div>
      </section>

      <article className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[780px]">
          <div className="prose prose-lg max-w-none font-body text-dark">
            <p className="text-lg text-subtitle leading-relaxed">
              Con noviembre llegan los primeros temporales de levante, las noches más largas y, en muchas casas de Cambrils, el mismo problema de cada año: cristales empañados por la mañana, un olor a cerrado que no se va y puntos negros en la esquina del dormitorio o detrás del armario. No es mala suerte ni falta de limpieza. Es humedad, y en una vivienda junto al mar tiene causas bastante concretas. En esta guía te explicamos cómo identificar de dónde viene, qué puedes hacer este mismo invierno sin obra y en qué casos merece la pena plantear una reforma.
            </p>

            <h2 className={h2}>Tres humedades distintas que se confunden</h2>
            <p className="text-subtitle leading-relaxed">
              Antes de pintar o de comprar un deshumidificador conviene saber qué tipo de humedad tienes, porque cada una se resuelve de forma diferente.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-subtitle">
              <li><strong>Condensación:</strong> el vapor de agua del aire se convierte en gotas al tocar una superficie fría. Aparece en cristales, esquinas, techos de baño, paredes que dan al exterior y detrás de muebles pegados a la pared. Empeora por la mañana y en los días sin sol.</li>
              <li><strong>Filtración:</strong> el agua entra desde fuera, por una terraza mal impermeabilizada, una junta de ventana, una fisura de fachada o una tubería. Suele dejar una mancha con cerco que crece después de llover.</li>
              <li><strong>Capilaridad:</strong> la humedad sube desde el terreno por el interior del muro. Es típica de plantas bajas antiguas y deja una franja de pintura abombada o salitre blanco en la parte baja de la pared.</li>
            </ul>
            <p className="text-subtitle leading-relaxed">
              En la práctica, a veces se combinan. Por eso en la visita miramos la posición de la mancha, cuándo aparece, si cambia con la lluvia y qué hay al otro lado de la pared.
            </p>

            <h2 className={h2}>Por qué en Cambrils pasa tanto</h2>
            <p className="text-subtitle leading-relaxed">
              El clima de la costa es suave, pero húmedo. Las temperaturas de invierno rara vez son extremas, así que muchas viviendas no tienen calefacción continua: se enciende un rato por la tarde y se apaga. Las paredes se quedan frías el resto del día y el vapor que generamos al cocinar, ducharnos, respirar o tender la ropa dentro acaba condensando en ellas.
            </p>
            <p className="text-subtitle leading-relaxed">
              A eso se suma la forma en que se construyó buena parte de la costa. Muchos edificios de los años setenta y ochenta tienen fachadas sin aislamiento, carpinterías de aluminio sin rotura de puente térmico y baños o cocinas interiores con conductos de ventilación que ya no funcionan. Y está el factor más propio de Cambrils: la gran cantidad de segundas residencias que pasan semanas o meses cerradas, sin ventilar ni calentar.
            </p>

            <h2 className={h2}>Dónde aparece según el tipo de vivienda</h2>
            <p className="text-subtitle leading-relaxed">
              <strong>Apartamentos del Port, la Llosa y el Regueral.</strong> El punto débil suelen ser los pilares y frentes de forjado de la fachada, las cajas de persiana y los baños interiores sin ventana. Es habitual ver moho en el techo del baño y en la esquina del dormitorio que da al exterior.
            </p>
            <p className="text-subtitle leading-relaxed">
              <strong>Casas de la Vila.</strong> En el casco antiguo los muros son gruesos y aguantan bien la temperatura, pero en planta baja la humedad del terreno es la protagonista. Revestir con materiales que no transpiran, como pinturas plásticas o alicatados, suele empeorar el problema.
            </p>
            <p className="text-subtitle leading-relaxed">
              <strong>Chalets de urbanizaciones como Mas Clariana, Mas d’en Bosch o Cambrils Badia.</strong> Cuando la casa pasa el invierno cerrada, la humedad se acumula en armarios, colchones y textiles. Al volver en primavera aparece el olor y, a veces, manchas en paredes orientadas al norte.
            </p>
            <p className="text-subtitle leading-relaxed">
              <strong>Áticos y últimas plantas.</strong> Aquí la sospecha principal es la cubierta o la terraza superior. Si la mancha crece tras las lluvias fuertes de otoño, casi siempre es filtración y no condensación.
            </p>

            <h2 className={h2}>Lo que puedes hacer este invierno sin obra</h2>
            <ul className="list-disc pl-6 space-y-2 text-subtitle">
              <li><strong>Ventila poco y bien:</strong> abrir de par en par diez minutos por la mañana renueva el aire sin enfriar la casa. Mejor eso que dejar una ventana entreabierta todo el día.</li>
              <li><strong>Evita tender dentro</strong> sin deshumidificador o sin una ventana abierta en la misma estancia.</li>
              <li><strong>Usa la campana y el extractor</strong> mientras cocinas y te duchas, y unos minutos después. Si el extractor del baño no tira, revisa el conducto.</li>
              <li><strong>Separa los muebles de las paredes exteriores</strong> unos centímetros para que circule el aire, sobre todo armarios y cabeceros.</li>
              <li><strong>Mantén una temperatura estable</strong> aunque sea moderada. Los grandes saltos de temperatura favorecen la condensación.</li>
              <li><strong>En segundas residencias,</strong> deja los armarios entreabiertos, protege los colchones y, si es posible, que alguien ventile la casa de vez en cuando.</li>
            </ul>
            <p className="text-subtitle leading-relaxed">
              Limpiar el moho con un producto específico y pintar encima con pintura antimoho ayuda, pero si no se corrige la causa volverá a salir en el mismo sitio.
            </p>

            <h2 className={h2}>Cuándo hace falta una reforma</h2>
            <p className="text-subtitle leading-relaxed">
              Si después de cambiar hábitos la condensación sigue, el problema está en la vivienda. Las soluciones más habituales que aplicamos en Cambrils son estas:
            </p>
            <ul className="list-disc pl-6 space-y-2 text-subtitle">
              <li><strong>Cambio de ventanas</strong> por carpintería con rotura de puente térmico y doble acristalamiento, incluyendo cajas de persiana aisladas.</li>
              <li><strong>Aislamiento de los puntos fríos</strong> con un trasdosado interior en paredes de fachada, especialmente en dormitorios orientados al norte.</li>
              <li><strong>Ventilación mecánica</strong> en baños y cocinas interiores, con extractores de funcionamiento automático por humedad.</li>
              <li><strong>Tratamiento de la capilaridad</strong> en plantas bajas, retirando revestimientos que no transpiran y aplicando morteros de cal.</li>
              <li><strong>Impermeabilización de terrazas y cubiertas</strong> cuando la mancha es de filtración.</li>
            </ul>
            <p className="text-subtitle leading-relaxed">
              Muchas de estas mejoras encajan dentro de una obra que ya tenías pensada. Si vas a renovar el baño, es el momento de resolver la ventilación, como explicamos en <Link href="/servicios/reformas-banos" className={lnk}>reformas de baños en Cambrils</Link>. Si el piso necesita ventanas e instalaciones nuevas, lo planteamos como una <Link href="/servicios/reformas-pisos" className={lnk}>reforma de piso</Link>. Y en casas de pueblo o chalets donde hay que actuar en muros, cubierta y carpinterías a la vez, lo razonable es una <Link href="/servicios/reformas-integrales" className={lnk}>reforma integral</Link> con un solo responsable.
            </p>

            <h2 className={h2}>Permisos y comunidad</h2>
            <p className="text-subtitle leading-relaxed">
              Las obras interiores, como un trasdosado o un extractor nuevo, suelen tramitarse con una comunicación previa ante el Ajuntament de Cambrils. Si cambias ventanas y el edificio tiene una estética de fachada que mantener, o si la obra afecta a terrazas o cubiertas comunes, habrá que hablar antes con la comunidad de propietarios. En la visita te indicamos qué corresponde en tu caso y nos ocupamos del trámite.
            </p>

            <h2 className={h2}>Diagnosticar en invierno, reformar en primavera</h2>
            <p className="text-subtitle leading-relaxed">
              El invierno es el mejor momento para ver la humedad en acción: las manchas están activas y es fácil saber dónde y cuándo aparecen. Te recomendamos hacer fotos con fecha, anotar si coinciden con lluvias y pedir la visita ahora. Así, con el diagnóstico hecho y los materiales decididos, la obra puede empezar en primavera y la vivienda estará lista antes del verano, cuando las comunidades de la costa suelen limitar los trabajos ruidosos. Si quieres orientarte sobre costes, puedes consultar también nuestra guía de <Link href="/blog/cuanto-cuesta-reformar-vivienda-cambrils" className={lnk}>cuánto cuesta reformar una vivienda en Cambrils</Link>.
            </p>

            <div className="bg-accent/10 border border-accent/20 rounded-[16px] p-6 md:p-8 my-10">
              <h3 className="font-body font-bold text-dark text-lg uppercase mb-3">¿Tienes humedades en casa?</h3>
              <p className="text-subtitle text-base mb-4">Pasamos a ver la vivienda, identificamos el origen de la humedad y te proponemos la solución por escrito. Sin coste, sin obligación.</p>
              <Link href="/contacto" className="inline-flex items-center gap-2 bg-accent text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-accent/90 transition-colors">
                Pedir una visita
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </Link>
            </div>
          </div>

          <div className="mt-16 pt-12 border-t border-dark/10">
            <h3 className="font-display font-extrabold text-[24px] uppercase text-dark mb-8">Sigue leyendo</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Link href="/blog/ayudas-rehabilitacion-energetica-baix-camp" className="group bg-white rounded-[16px] p-5 border border-dark/5 hover:border-accent/30 transition-colors flex gap-4">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-[10px] overflow-hidden">
                  <Image src="/images/terraza-moderna-suelo-madera-cambrils.webp" alt="Ayudas Baix Camp" fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-subtitle text-xs uppercase tracking-wider">Ayudas</span>
                  <h4 className="font-body font-bold text-dark text-sm group-hover:text-accent transition-colors">Ayudas a la rehabilitación energética en el Baix Camp</h4>
                </div>
              </Link>
              <Link href="/blog/cuanto-cuesta-reformar-vivienda-cambrils" className="group bg-white rounded-[16px] p-5 border border-dark/5 hover:border-accent/30 transition-colors flex gap-4">
                <div className="relative w-24 h-24 flex-shrink-0 rounded-[10px] overflow-hidden">
                  <Image src="/images/cocina-comparativa-reforma-completa-cambrils.webp" alt="Cuánto cuesta reformar en Cambrils" fill className="object-cover" sizes="96px" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-subtitle text-xs uppercase tracking-wider">Guía de precios</span>
                  <h4 className="font-body font-bold text-dark text-sm group-hover:text-accent transition-colors">¿Cuánto cuesta reformar una vivienda en Cambrils?</h4>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </article>
    </>
  );
}
