import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Baños en Cambrils | RAC",
  description:
    "Tu reforma de baño en Cambrils: cambio de bañera por ducha, griferías cromadas, porcelánico rectificado. Materiales que aguantan el salitre. 877 278 164.",
  alternates: { canonical: "/servicios/reformas-banos" },
  openGraph: {
    title: "Reformas de Baños en Cambrils · R.A Reformas",
    description: "Baños modernos con materiales pensados para resistir la humedad marítima de la Costa Daurada.",
    url: "/servicios/reformas-banos",
    images: ["/images/bano-tonos-arena-cambrils.webp"],
  },
};

export default function ReformasBanosPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Servicios", url: "/servicios" }, { name: "Reformas de Baños", url: "/servicios/reformas-banos" }]} />
      <ServiceSchema
        name="Reformas de baños en Cambrils"
        description="Cambio de bañera por ducha, griferías cromadas, porcelánico rectificado y materiales pensados para resistir la humedad marítima."
        url="/servicios/reformas-banos"
        image="/images/bano-tonos-arena-cambrils.webp"
      />

      <HeroService
        title="Tu Reforma de Baño en Cambrils: Diseño, Confort y Calidad"
        subtitle="Cambiamos bañera por ducha de obra, instalamos sanitarios suspendidos, griferías cromadas y revestimientos rectificados antideslizantes."
        image="/images/bano-tonos-arena-cambrils.webp"
        imageAlt="Baño en tonos arena reformado en Cambrils"
        imageTitle="Reformas de baños en Cambrils"
        h1Keyword="Reformas de baños en Cambrils"
        badge="Baños llave en mano"
        showCTA
        trustItems={["Cambio bañera por ducha", "Materiales contra salitre", "Garantía firmada"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Baños que duran décadas</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] uppercase text-dark leading-[1]">
                Reformas de baños en Cambrils contra la humedad
              </h2>
              <p className="font-display italic text-dark/70 text-lg md:text-xl">
                Tu baño, sin moho ni decoloración
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                La humedad de Cambrils ataca los baños mal aislados: pinturas que se levantan, juntas que se ennegrecen, griferías oxidadas. La clave está en el material elegido y en la ejecución de la impermeabilización antes de revestir.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Trabajamos con porcelánico rectificado de gran formato (menos juntas, menos moho), lámina impermeabilizante bajo el plato de ducha, ventilación mecánica con sensor de humedad y griferías con cuerpo cromado. El resultado se mantiene una década sin retoques.
              </p>
              <p className="font-body font-semibold text-dark text-base">Cambio de bañera por ducha: 7-10 días con coste pactado.</p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image src="/images/bano-ducha-mediterraneo-cambrils.webp" alt="Baño con ducha de obra en piso de Cambrils" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Tipos de intervención</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-white leading-[1]">Tipos de reforma de baño en Cambrils</h2>
            <p className="font-display italic text-white/70 text-lg md:text-xl mt-3">Lo que más nos piden</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Cambio de bañera por ducha", text: "La intervención más demandada. Quitamos la bañera, impermeabilizamos, instalamos plato de obra a ras de suelo y mampara de cristal." },
              { title: "Baño accesible para mayores", text: "Suelo continuo sin escalones, asiento abatible, barras de apoyo cromadas, grifería termostática. Ideal en pisos antiguos del Centre Vila." },
              { title: "Suite con baño en master", text: "En chalets de Vilafortuny y Cap de Sant Pere creamos baños suite con doble lavabo, ducha amplia y bañera exenta." },
              { title: "Baño de cortesía", text: "Aprovechamos esquinas para crear un aseo de invitados con sanitario suspendido y mueble lavabo a medida." },
            ].map((b) => (
              <div key={b.title} className="bg-white/5 border border-white/10 rounded-[16px] p-7 flex flex-col gap-3">
                <h3 className="font-body font-bold text-white text-lg uppercase">{b.title}</h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-dark leading-[1]">Preguntas frecuentes sobre reformas de baños</h2>
            <p className="font-display italic text-dark/70 text-lg md:text-xl mt-3">Lo que conviene saber</p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuánto cuesta reformar un baño en Cambrils?", a: "Trabajamos con cifras orientativas por m² según el nivel de acabados: desde 380 €/m² para cambios sencillos (bañera por ducha y revestimientos), desde 480 €/m² en una reforma completa estándar y desde 580 €/m² con redistribución, sanitarios suspendidos y materiales premium. Cada baño es distinto: la cifra firme la cerramos en visita técnica gratuita y te entregamos presupuesto por partidas." },
              { q: "¿Cuánto tarda?", a: "Reforma estándar de baño completo: 10-15 días. Cambio rápido de bañera por ducha sin tocar el resto: 5-7 días. En segundas residencias coordinamos con tu calendario para que esté listo al llegar." },
              { q: "¿Garantizáis impermeabilización?", a: "Sí. Aplicamos lámina impermeabilizante bajo el plato de ducha y en el muro hasta 1,8 m de altura, con ejecución cuidada y materiales adecuados. Te entregamos la obra con garantía firmada sobre materiales y mano de obra." },
              { q: "¿Hace falta licencia?", a: "Solo declaración responsable, que tramitamos nosotros. La licencia mayor solo aparece si modificas la posición del baño (afecta saneamiento general del edificio)." },
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
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-white leading-[1]">Solicita presupuesto para tu reforma de baño</h2>
          <p className="font-display italic text-white/85 text-xl md:text-2xl">Tu baño nuevo, en pocas semanas</p>
          <p className="font-body text-white/90 text-lg max-w-[500px]">Visita gratuita, oferta cerrada por escrito y obra coordinada con tu agenda. Garantía firmada sobre materiales y mano de obra.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors">
            Pedir mi valoración
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
