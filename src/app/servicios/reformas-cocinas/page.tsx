import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Cocinas en Cambrils",
  description:
    "Especialistas en reformas de cocinas en Cambrils: cocinas abiertas, isla central, encimeras de Dekton y carpintería resistente al clima marítimo. 877 278 164.",
  alternates: { canonical: "/servicios/reformas-cocinas" },
  openGraph: {
    title: "Reformas de Cocinas en Cambrils · R.A Reformas",
    description: "Cocinas abiertas, encimeras de piedra y muebles a medida. Reformas con sello mediterráneo.",
    url: "/servicios/reformas-cocinas",
    images: ["/images/cocina-abierta-segunda-residencia-cambrils.webp"],
  },
};

export default function ReformasCocinasPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Servicios", url: "/servicios" }, { name: "Reformas de Cocinas", url: "/servicios/reformas-cocinas" }]} />
      <ServiceSchema
        name="Reformas de cocinas en Cambrils"
        description="Cocinas abiertas, encimeras de piedra natural y muebles a medida para viviendas de la Costa Daurada y el Baix Camp."
        url="/servicios/reformas-cocinas"
        image="/images/cocina-abierta-segunda-residencia-cambrils.webp"
      />

      <section className="relative h-[600px] md:h-[750px] w-full overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/cocina-abierta-segunda-residencia-cambrils.webp"
          className="absolute inset-0 w-full h-full object-cover opacity-50"
        >
          <source src="/videos/cocina.webm" type="video/webm" />
          <source src="/videos/cocina.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <div className="max-w-[900px] flex flex-col items-center gap-5">
            <div className="inline-flex items-center gap-2 bg-accent/90 backdrop-blur-sm text-white text-xs font-bold px-4 py-2 rounded-full uppercase tracking-wider">
              <span className="w-2 h-2 bg-beige rounded-full animate-pulse" />
              Cocinas a medida
            </div>
            <h1 className="font-body text-accent text-sm md:text-base uppercase tracking-[0.2em] font-semibold">Reformas de cocinas en Cambrils</h1>
            <h2 className="font-body font-black text-[36px] md:text-[56px] lg:text-[72px] text-white uppercase leading-[0.95]">
              Especialistas en Reformas de Cocinas a Medida en Cambrils
            </h2>
            <p className="text-white/85 text-lg md:text-xl max-w-[600px] leading-relaxed">
              Cocinas abiertas al salón, isla central, encimeras de Dekton o piedra natural y carpintería pensada para resistir el salitre del Mediterráneo.
            </p>
            <CTAButtons className="justify-center" />
            <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-white/70 text-sm">
              <span className="flex items-center gap-1.5">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="#D4A044">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
                Diseño 3D incluido
              </span>
              <span>Materiales mediterráneos</span>
              <span>Garantía firmada</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Cocinas con luz mediterránea</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] uppercase text-dark leading-[1]">
                Reformas de cocinas abiertas en Cambrils
              </h2>
              <p className="font-display italic text-dark/70 text-lg md:text-xl">
                Una cocina abierta, una vivienda diferente
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                En las viviendas de Cambrils Mar y Vilafortuny, abrir la cocina al salón gana metros, gana luz y multiplica el valor del piso. Trabajamos con muebles lacados resistentes a la humedad, encimeras de Dekton, Silestone o piedra natural y griferías cromadas pensadas para soportar el agua salina.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Cocinas pensadas para sobremesas, calçotades y comidas largas: isla central con bancada, frigorífico americano, placa de inducción amplia y zona office orientada a la luz natural. En segundas residencias, cuidamos la robustez para uso intensivo en verano.
              </p>
              <p className="font-body font-semibold text-dark text-base">Diseño 3D antes de empezar la obra. Cero sorpresas en obra.</p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image src="/images/cocina-renovada-isla-cambrils.webp" alt="Cocina con isla en piso reformado en Cambrils" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Tipologías</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-white leading-[1]">Tipos de reforma de cocina en Cambrils</h2>
            <p className="font-display italic text-white/70 text-lg md:text-xl mt-3">Tres formatos habituales en la costa</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "Cocina abierta al salón", text: "Tirar el tabique entre cocina y comedor para ganar amplitud y luz. Ideal en pisos de los años 70-90 de Cambrils Mar." },
              { title: "Cocina con isla central", text: "Para viviendas grandes en Vilafortuny o Cap de Sant Pere. La isla agrupa cocción, lavado y barra para taburetes." },
              { title: "Cocina office tradicional", text: "En casas de pueblo del Centre Vila respetamos vigas de madera y arcos de piedra, integrando muebles que dialogan con lo existente." },
            ].map((b) => (
              <div key={b.title} className="bg-white/5 border border-white/10 rounded-[16px] p-7 flex flex-col gap-3">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2"><path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" /></svg>
                </div>
                <h3 className="font-body font-bold text-white text-lg uppercase">{b.title}</h3>
                <p className="font-body text-white/60 text-sm leading-relaxed">{b.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Antes de elegir muebles</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1] mb-6">Lo que revisamos en una cocina de Cambrils antes de diseñarla</h2>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Una cocina bonita que no funciona se nota a la semana. Por eso la visita técnica empieza por lo que no se ve: humos, desagües, potencia eléctrica y la forma en que realmente usas la cocina a lo largo del año.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Salida de humos y ventilación</h3>
            <p>En muchos pisos de la zona del Port y del Regueral la campana expulsa a un patio de luces compartido o a un conducto que no llega a cubierta. Antes de prometer una campana potente comprobamos por dónde puede salir el aire. Si no hay conducto válido, planteamos una campana de recirculación con filtros de carbón y lo decimos claro desde el principio, para que no haya sorpresas.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Potencia eléctrica para inducción y horno</h3>
            <p>La instalación de muchas viviendas de veraneo se pensó para una nevera y poco más. Una placa de inducción amplia, horno, lavavajillas y aire acondicionado funcionando a la vez piden circuitos independientes y, a veces, aumentar la potencia contratada. Lo revisamos en la visita y lo incluimos en el presupuesto, no a mitad de obra.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Materiales según el uso real</h3>
            <p>Si la cocina se usa todo el año, se puede apostar por madera natural y acabados más delicados. Si es una segunda residencia en Vilafortuny o un apartamento que se alquila en verano, conviene un frente de muebles que soporte golpes y limpieza intensa, herrajes de calidad que no se oxiden con la humedad del mar y una encimera sin poros. En nuestro artículo sobre <Link href="/blog/tendencias-cocinas-mediterraneas-2026" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">tendencias en cocinas mediterráneas</Link> comparamos las encimeras que más instalamos.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Casas de pueblo y cocinas con carácter</h3>
            <p>En la Vila encontramos cocinas con bóvedas, vigas y muros gruesos que no admiten un mueble estándar. Ahí trabajamos a medida y aprovechamos nichos y huecos de la propia casa. Cuando la cocina forma parte de una renovación mayor, la coordinamos dentro de una <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">reforma integral</Link> para que fontanería, electricidad y suelos se hagan una sola vez.</p>
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-dark leading-[1]">Preguntas frecuentes sobre reformas de cocinas</h2>
            <p className="font-display italic text-dark/70 text-lg md:text-xl mt-3">Dudas habituales</p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuánto cuesta reformar una cocina en Cambrils?", a: "Damos referencia orientativa por m²: desde 380 €/m² para cocinas sencillas sin cambio de distribución, desde 480 €/m² en cocinas completas con instalaciones nuevas y desde 580 €/m² para cocinas abiertas con isla, encimera de Dekton y muebles a medida. En segundas residencias con uso intensivo recomendamos acabados premium. La cifra final se cierra tras visita técnica gratuita." },
              { q: "¿Tiráis tabiques sin afectar a la estructura?", a: "Antes de tocar nada hacemos un estudio del muro: si es de carga, planteamos una viga IPN o HEB y tramitamos la licencia con el Ayuntamiento de Cambrils. Si no, abrimos la cocina al salón en una semana." },
              { q: "¿Qué encimera aguanta mejor el clima costero?", a: "Dekton y Silestone son los más resistentes al sol, calor y humedad. La piedra natural (mármol, granito) es preciosa pero requiere mantenimiento. Te asesoramos según el uso real de la cocina." },
              { q: "¿Cuánto tarda la obra de cocina?", a: "Una cocina sin cambio de tabiques: 3-4 semanas. Con apertura y obra de albañilería: 5-7 semanas. Si cambiamos electricidad y fontanería completas, puede llegar a 8 semanas." },
              { q: "¿Puedo seguir usando la vivienda mientras reformáis la cocina?", a: "En la mayoría de pisos, sí, aunque durante unas semanas no tendrás cocina operativa. Te ayudamos a montar un rincón provisional con microondas y nevera en otra estancia y organizamos el trabajo para que el polvo quede contenido." },
              { q: "¿Hacéis la cocina antes del verano en segundas residencias?", a: "Es lo más habitual. Lo ideal es cerrar diseño y materiales en invierno para empezar la obra en cuanto lleguen los muebles y tenerla terminada antes de que la familia vuelva." },
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
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-white leading-[1]">Solicita presupuesto para tu reforma de cocina</h2>
          <p className="font-display italic text-white/85 text-xl md:text-2xl">Diseñamos tu cocina sin coste</p>
          <p className="font-body text-white/90 text-lg max-w-[500px]">Visita gratuita, propuesta 3D, materiales recomendados y precio cerrado. En 24-48 horas, sobre la mesa.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors">
            Pedir mi valoración
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
