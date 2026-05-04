import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas Integrales en Cambrils | RAC",
  description:
    "Reformas integrales llave en mano en Cambrils: pisos, casas de pueblo, segundas residencias y chalets. Plantilla propia, coste pactado y garantía firmada. 877 278 164.",
  alternates: { canonical: "/servicios/reformas-integrales" },
  openGraph: {
    title: "Reformas Integrales en Cambrils · R.A Reformas",
    description: "Renovación completa de viviendas en Cambrils y el Baix Camp. Distribución, instalaciones y acabados llave en mano.",
    url: "/servicios/reformas-integrales",
    images: ["/images/reforma-integral-casa-cambrils.webp"],
  },
};

export default function ReformasIntegralesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Servicios", url: "/servicios" }, { name: "Reformas Integrales", url: "/servicios/reformas-integrales" }]} />
      <ServiceSchema
        name="Reformas integrales en Cambrils"
        description="Renovación completa de viviendas en Cambrils y el Baix Camp con plantilla propia, materiales mediterráneos y coste pactado por escrito."
        url="/servicios/reformas-integrales"
        image="/images/reforma-integral-casa-cambrils.webp"
      />

      <HeroService
        title="Reforma Integral de Viviendas en Cambrils: Proyecto Llave en Mano"
        subtitle="Renovamos tu piso, casa o segunda residencia de la Costa Daurada con un proyecto coordinado: distribución nueva, instalaciones, acabados mediterráneos y un único responsable."
        image="/images/reforma-integral-casa-cambrils.webp"
        imageAlt="Reforma integral llave en mano en Cambrils"
        imageTitle="Reformas integrales en Cambrils · R.A Reformas"
        h1Keyword="Reformas integrales en Cambrils"
        badge="Llave en mano"
        showCTA
        trustItems={["Coste pactado", "Plantilla propia", "Garantía firmada"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">
                Reforma integral, sin atajos
              </p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] uppercase text-dark leading-[1]">
                Reformas integrales en Cambrils llave en mano
              </h2>
              <p className="font-display italic text-dark/70 text-lg md:text-xl">
                Tu vivienda renovada de extremo a extremo
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Una reforma integral en Cambrils suele significar empezar de cero: tirar tabiques, revisar saneamientos, cambiar la electricidad, levantar cocina y baños y aplicar acabados nuevos. En las casas de pueblo del Centre Vila, además, hay que respetar arcos, vigas y muros de carga heredados.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Tu proyecto lo coordina una persona de principio a fin. Con plantilla propia, materiales pensados para el clima marítimo y un cronograma que se respeta semana a semana. Para segundas residencias gestionamos accesos, llaves y entrega final lista para vivir.
              </p>
              <p className="font-body font-semibold text-dark text-base">
                Coste pactado desde la primera visita. Sin partidas escondidas.
              </p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image
                src="/images/cocina-marinera-funcional-cambrils.webp"
                alt="Cocina abierta en reforma integral de vivienda en Cambrils"
                title="Reforma integral con cocina abierta en Cambrils"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Beneficios</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-white leading-[1]">
              ¿Por qué optar por reforma integral?
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Revaloriza tu vivienda costera", text: "El mercado inmobiliario de Cambrils premia las viviendas reformadas. Una intervención completa puede elevar tu inmueble entre un 25% y un 40% en una zona como Vilafortuny o Cap de Sant Pere." },
              { title: "Una sola interlocución", text: "Albañilería, fontanería, electricidad, carpintería, pintura. Si te coordinan los oficios desde fuera, salen problemas. Aquí hay un único nombre que responde por la obra entera." },
              { title: "Eficiencia y ahorro", text: "Aerotermia, aislamiento por el exterior, ventanas con rotura de puente térmico. Tu factura baja y tu vivienda en la costa gana confort tanto en agosto como en enero." },
              { title: "Acabados pensados para la costa", text: "Pintura transpirable, aluminio anodizado, suelos rectificados antideslizantes. Materiales seleccionados para resistir salitre, humedad y arena." },
            ].map((b) => (
              <div key={b.title} className="flex gap-5 bg-white/5 border border-white/10 rounded-[16px] p-7">
                <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2"><path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                </div>
                <div className="flex flex-col gap-2">
                  <h3 className="font-body font-bold text-lg text-white uppercase">{b.title}</h3>
                  <p className="font-body text-white/60 text-sm leading-relaxed">{b.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Cronograma</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-dark leading-[1]">Cómo hacemos tu reforma integral</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Visita técnica", text: "Acudimos a tu vivienda en Cambrils, tomamos medidas, fotos y notas de las particularidades del inmueble." },
              { step: "02", title: "Proyecto y oferta firme", text: "Planos, selección de materiales mediterráneos y precio pactado por partidas. Lo que firmas es lo que pagas." },
              { step: "03", title: "Obra coordinada", text: "Demolición, instalaciones, albañilería, carpintería y acabados. Un único responsable y comunicación constante del avance." },
              { step: "04", title: "Entrega y garantía", text: "Limpieza fin de obra, repaso punto por punto y firma de garantía sobre materiales y mano de obra." },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-[16px] p-7 flex flex-col gap-4 shadow-sm">
                <span className="font-display font-extrabold text-[48px] text-accent/20 leading-none">{s.step}</span>
                <h3 className="font-body font-bold text-lg uppercase text-dark">{s.title}</h3>
                <p className="font-body text-subtitle text-sm leading-relaxed">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Qué incluye</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-dark leading-[1]">Qué incluye la reforma integral</h2>
            <p className="font-display italic text-dark/70 text-lg md:text-xl mt-3">Todo bajo un mismo presupuesto</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {["Albañilería y tabiquería", "Fontanería y saneamiento", "Electricidad y domótica", "Suelos y revestimientos", "Carpintería interior y aluminio", "Pintura y acabados finales"].map((item) => (
              <div key={item} className="flex items-center gap-4 bg-white rounded-[12px] p-5 shadow-sm">
                <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                <span className="font-body font-semibold text-dark text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-dark leading-[1]">Preguntas frecuentes sobre reformas integrales</h2>
            <p className="font-display italic text-dark/70 text-lg md:text-xl mt-3">Lo que más nos preguntan</p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuánto cuesta una reforma integral en Cambrils?", a: "Damos referencia orientativa por m² según el alcance y los acabados: desde 380 €/m² en intervenciones esenciales, desde 480 €/m² en reformas integrales medias y desde 580 €/m² en reformas integrales con redistribución, aerotermia y acabados de alta gama. Las casas de pueblo del Centre Vila requieren más mano de obra. Cada proyecto se valora en visita técnica gratuita." },
              { q: "¿Cuánto se tarda en entregar la obra?", a: "Pisos costeros: 8 a 12 semanas. Casas unifamiliares: 16 a 24 semanas. Casas de pueblo con estructura antigua: 18 a 26 semanas. Te entregamos cronograma cerrado y te mantenemos informado del avance real con fotos durante la obra." },
              { q: "¿Puedo vivir en la casa durante la obra?", a: "En reforma integral, no es viable. Si la familia no puede mudarse, podemos ejecutar por fases: primero zona dormitorios y baño, después salón y cocina. Lo planteamos en la primera visita según tu situación." },
              { q: "¿Los materiales están incluidos?", a: "Sí. El coste pactado cubre materiales (cerámica, sanitarios, carpintería, pintura, suelos), mano de obra de plantilla propia, retirada de escombros y limpieza fin de obra. Te llevamos a showrooms de Reus para que elijas acabados." },
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
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-white leading-[1]">Solicita presupuesto para tu reforma integral</h2>
          <p className="font-display italic text-white/85 text-xl md:text-2xl">¿Empezamos por una visita?</p>
          <p className="font-body text-white/90 text-lg max-w-[500px]">Pasamos a verla, tomamos medidas y, en 24 horas, recibes una valoración escrita y un cronograma orientativo. Sin coste, sin compromiso.</p>
          <div className="flex flex-wrap items-center justify-center gap-4 mt-2">
            <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors">
              Pedir valoración
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </Link>
            <a href="https://wa.me/34623760710" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2.5 border-2 border-white/30 text-white px-7 py-4 rounded-full font-body font-bold text-[15px] hover:bg-white/10 transition-all">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
