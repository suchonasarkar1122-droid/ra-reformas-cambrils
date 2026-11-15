import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Pisos en Cambrils",
  description:
    "Renovación y reforma de pisos a medida en Cambrils Mar, Vilafortuny, Centre Vila y L'Esquirol. Plantilla propia, coste pactado, garantía firmada. 877 278 164.",
  alternates: { canonical: "/servicios/reformas-pisos" },
  openGraph: {
    title: "Reformas de Pisos en Cambrils · R.A Reformas",
    description: "Reformamos pisos costeros y casas de pueblo del Centre Vila con materiales mediterráneos.",
    url: "/servicios/reformas-pisos",
    images: ["/images/piso-costero-reforma-completa-cambrils.webp"],
  },
};

export default function ReformasPisosPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Servicios", url: "/servicios" }, { name: "Reformas de Pisos", url: "/servicios/reformas-pisos" }]} />
      <ServiceSchema
        name="Reformas de pisos en Cambrils"
        description="Renovación de pisos costeros y casas de pueblo en Cambrils, Salou y Reus con coste pactado y plantilla propia."
        url="/servicios/reformas-pisos"
        image="/images/piso-costero-reforma-completa-cambrils.webp"
      />

      <HeroService
        title="Renovación y Reforma de Pisos a Medida en Cambrils"
        subtitle="Pisos en Cambrils Mar, segundas residencias en Vilafortuny y casas de pueblo del Centre Vila. Cada distribución, su solución."
        image="/images/piso-costero-reforma-completa-cambrils.webp"
        imageAlt="Piso costero reformado en Cambrils"
        h1Keyword="Reformas de pisos en Cambrils"
        badge="Pisos llave en mano"
        showCTA
        trustItems={["Coste pactado", "Plantilla propia", "Materiales mediterráneos"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Más luz, mejor distribución</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] uppercase text-dark leading-[1]">
                Reformas de pisos en Cambrils Mar y Vilafortuny
              </h2>
              <p className="font-display italic text-dark/70 text-lg md:text-xl">
                Tu piso, repensado para la vida en la costa
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Los pisos de Cambrils Mar y L&apos;Esquirol fueron construidos pensando en estancias de verano: cocinas pequeñas separadas del salón, dormitorios amplios y poca optimización del espacio. Hoy se buscan distribuciones abiertas que ganen luz natural y permitan el uso continuo durante todo el año.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Trabajamos cambiando tabiques no portantes, integrando cocina y comedor, redistribuyendo baños para crear suites y renovando instalaciones eléctricas que en muchos pisos de los 70 ya no cumplen REBT actual. El resultado: un piso preparado para 30 años más.
              </p>
              <p className="font-body font-semibold text-dark text-base">Un único interlocutor, un único responsable. Coste pactado.</p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image src="/images/espacio-diafano-luz-mediterranea-cambrils.webp" alt="Salón diáfano en piso reformado en Cambrils" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Tipologías</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-white leading-[1]">Tipos de reforma de pisos en Cambrils</h2>
            <p className="font-display italic text-white/70 text-lg md:text-xl mt-3">Pisos que reformamos a menudo</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Piso costero años 70-90", text: "Cambrils Mar y L'Esquirol. Renovación completa con apertura de cocina, baños nuevos y carpintería de aluminio anodizado." },
              { title: "Casa de pueblo Centre Vila", text: "Estructura tradicional con vigas de madera y muros de piedra. Trabajamos cal, mortero y respetamos el carácter histórico." },
              { title: "Piso de inversión / alquiler", text: "Reformas eficientes para alquilar todo el año o gestionar como apartamento turístico. Materiales robustos y mantenimiento sencillo." },
            ].map((b) => (
              <div key={b.title} className="bg-white/5 border border-white/10 rounded-[16px] p-7 flex flex-col gap-3">
                <h3 className="font-body font-bold text-white text-lg uppercase">{b.title}</h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Pisos de costa, pisos de vila</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1] mb-6">Qué cambia al reformar un piso según el barrio de Cambrils</h2>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Cambrils tiene muchos tipos de piso en pocos kilómetros. El apartamento de dos dormitorios cerca del puerto, el bloque de los ochenta junto a la playa de la Llosa o el piso del ensanche que se vive todo el año piden decisiones distintas.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Pisos de veraneo que pasan a vivienda habitual</h3>
            <p>Cada vez más propietarios convierten el apartamento de vacaciones en su casa todo el año. Lo que en agosto funcionaba (ventanas de corredera sin aislar, suelo de terrazo frío, un solo radiador eléctrico) en enero se queda corto. En estos casos priorizamos carpintería con rotura de puente térmico, una climatización eficiente y armarios de verdad, porque en verano casi nadie guardaba nada.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Edificios en primera y segunda línea</h3>
            <p>Cerca del mar las barandillas, las persianas y los marcos sufren el salitre más que en el interior. Revisamos el estado de las terrazas, la impermeabilización del suelo exterior y las juntas de las ventanas. Si la fachada o la terraza son elementos comunes, te indicamos qué puedes hacer tú y qué debe aprobar la comunidad.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Instalaciones que hay que renovar</h3>
            <p>En muchos pisos de los setenta y ochenta el cuadro eléctrico no tiene diferenciales suficientes y las tuberías de hierro galvanizado están al final de su vida. Renovarlas cuando las paredes están abiertas cuesta mucho menos que hacerlo después. Lo mismo ocurre con el baño: si el piso lo necesita, lo incluimos dentro de la misma obra siguiendo lo que explicamos en <Link href="/servicios/reformas-banos" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">reformas de baños</Link>.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Pisos que se alquilan</h3>
            <p>Si el piso se va a alquilar, a largo plazo o por temporadas, buscamos acabados resistentes y fáciles de reponer: porcelánico en todo el suelo, pintura lavable y mecanismos estándar que se encuentren en cualquier ferretería de la zona. Para viviendas más grandes, como casas pareadas en Cambrils Badia o chalets en Mas Clariana, el planteamiento se parece más a una <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">reforma integral</Link>. Y si te preocupan las manchas de moho en dormitorios, lee nuestra guía de <Link href="/blog/humedad-condensacion-invierno-cambrils" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">humedad y condensación en invierno</Link>.</p>
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-dark leading-[1]">Preguntas frecuentes sobre reformas de pisos</h2>
            <p className="font-display italic text-dark/70 text-lg md:text-xl mt-3">Pisos en la costa, dudas habituales</p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Reformáis pisos en comunidades de propietarios?", a: "Sí. Hablamos con la administración de la finca, presentamos las medidas pasivas (acústica, ventilación) y respetamos los horarios de trabajo del edificio. En Cambrils Mar y Cambrils centro estamos acostumbrados a la casuística de comunidad." },
              { q: "¿Trabajáis pisos para alquiler turístico?", a: "Es una de nuestras especialidades. Materiales que aguantan rotaciones intensivas en julio y agosto, distribuciones funcionales y acabados fáciles de limpiar. También gestionamos la documentación técnica para la licencia de uso turístico." },
              { q: "¿Cuánto cuesta reformar un piso en Cambrils?", a: "Te damos referencia orientativa por m²: desde 380 €/m² en una reforma esencial (pintura, suelos, baño y pequeñas mejoras), desde 480 €/m² en reforma media (cocina, baños, instalaciones, carpintería) y desde 580 €/m² en reforma integral con redistribución y aerotermia. Cada vivienda es un caso. La cifra firme se cierra tras visita técnica gratuita y desglose por partidas." },
              { q: "¿Os ocupáis de licencias y comunidad?", a: "Sí. Tramitamos declaración responsable o licencia mayor según el caso, presentamos la documentación al presidente de la comunidad y coordinamos accesos por escalera y ascensor para no molestar a vecinos." },
              { q: "¿Cuál es la mejor época para reformar un piso en Cambrils?", a: "De octubre a mayo. Muchas comunidades de la costa ponen limitaciones a las obras ruidosas en pleno verano y, además, en esos meses es más fácil coordinar entregas y aparcamiento en zonas como el Port o el paseo." },
            ].map((faq, i) => (
              <details key={i} className="group bg-white rounded-[12px] shadow-sm overflow-hidden">
                <summary className="flex items-center gap-4 p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display font-extrabold text-accent text-lg flex-shrink-0 w-8">{String(i + 1).padStart(2, "0")}</span>
                  <span className="font-body font-bold text-dark text-base flex-1">{faq.q}</span>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="flex-shrink-0 text-accent transition-transform duration-300 group-open:rotate-45"><path d="M12 5v14M5 12h14" /></svg>
                </summary>
                <div className="px-6 pb-6 pl-[56px]">
                  <p className="font-body text-subtitle text-sm leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-accent px-5 py-20 md:py-24">
        <div className="mx-auto max-w-[800px] text-center flex flex-col items-center gap-6">
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-white leading-[1]">Solicita presupuesto para tu reforma de piso</h2>
          <p className="font-display italic text-white/85 text-xl md:text-2xl">Tu piso renovado, sin sustos</p>
          <p className="font-body text-white/90 text-lg max-w-[500px]">Visita gratuita, propuesta por escrito en 24 horas y un único responsable durante toda la obra.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors">
            Pedir valoración gratuita
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
