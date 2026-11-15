import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTAButtons from "@/components/CTAButtons";
import HeroService from "@/components/HeroService";
import ServiceSchema from "@/components/ServiceSchema";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Reformas de Locales en Cambrils",
  description:
    "Reforma de locales comerciales en Cambrils, Salou y Reus: paseo marítimo, casco antiguo y polígonos. Cumplimiento normativo y plazos para abrir a tiempo.",
  alternates: { canonical: "/servicios/reformas-locales" },
  openGraph: {
    title: "Reformas de Locales en Cambrils · R.A Reformas",
    description: "Adecuación de locales para abrir a tiempo en la temporada estival.",
    url: "/servicios/reformas-locales",
    images: ["/images/local-paseo-maritimo-cambrils.webp"],
  },
};

export default function ReformasLocalesPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Servicios", url: "/servicios" }, { name: "Reformas de Locales", url: "/servicios/reformas-locales" }]} />
      <ServiceSchema
        name="Reformas de locales comerciales en Cambrils"
        description="Adecuación de locales en el paseo marítimo, casco antiguo y zonas de Salou y Reus. Cumplimiento normativo, accesibilidad y plazos firmes."
        url="/servicios/reformas-locales"
        image="/images/local-paseo-maritimo-cambrils.webp"
      />

      <HeroService
        title="Reforma de Locales Comerciales: Diseño y Obra en Cambrils"
        subtitle="Restaurantes, comercios y oficinas en el paseo marítimo, en Centre Vila o en zona PortAventura. Adecuación con cronograma firme para abrir a tiempo."
        image="/images/local-paseo-maritimo-cambrils.webp"
        imageAlt="Local comercial reformado en el paseo de Cambrils"
        h1Keyword="Reformas de locales en Cambrils"
        badge="Locales llave en mano"
        showCTA
        trustItems={["Cumplimiento normativo", "Plazos para abrir", "Accesibilidad"]}
        tall
      />

      <section className="bg-beige px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row items-stretch gap-12 lg:gap-16">
            <div className="flex-1 min-w-[300px] flex flex-col justify-center gap-6 py-6">
              <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold">Locales que abren a tiempo</p>
              <h2 className="font-display font-extrabold text-[36px] md:text-[48px] uppercase text-dark leading-[1]">
                Reformas de locales comerciales en Cambrils
              </h2>
              <p className="font-display italic text-dark/70 text-lg md:text-xl">
                Tu negocio listo antes de la temporada
              </p>
              <div className="w-16 h-[3px] bg-accent rounded-full" />
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Reformar un local en Cambrils a 6 semanas de Semana Santa o de junio no admite improvisaciones. Trabajamos con cronograma cerrado, gestionamos licencias en el Ayuntamiento, presentamos certificados de instalación eléctrica, fontanería y antiincendios y entregamos el local con todo en regla para abrir.
              </p>
              <p className="font-body text-subtitle text-base leading-relaxed max-w-[520px]">
                Nuestra experiencia abarca restaurantes y bares del paseo marítimo, comercios del Centre Vila, cafeterías de Salou Centre, oficinas y consultas en Reus y locales de la zona PortAventura en Vila-seca. Cada tipología tiene su normativa: la conocemos y la aplicamos sin demoras.
              </p>
              <p className="font-body font-semibold text-dark text-base">Coste pactado y planificación realista para que abras a tiempo.</p>
              <CTAButtons />
            </div>
            <div className="flex-1 min-w-[300px] min-h-[500px] lg:min-h-[600px] relative rounded-[20px] overflow-hidden">
              <Image src="/images/reforma-negocio-comercio-cambrils.webp" alt="Reforma de comercio en Cambrils" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" loading="lazy" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-dark px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Tipologías habituales</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-white leading-[1]">Tipos de reforma de locales en Cambrils</h2>
            <p className="font-display italic text-white/70 text-lg md:text-xl mt-3">Locales que reformamos</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Restaurantes y bares", text: "Cocinas industriales, salidas de humos, mostradores, terrazas. Cumplimos normativa de actividad, ruido y accesibilidad." },
              { title: "Comercios y boutiques", text: "Tiendas en Centre Vila o paseo marítimo. Escaparates, iluminación LED, pavimentos resistentes y zona de almacén optimizada." },
              { title: "Oficinas y consultas", text: "En Reus y Cambrils trabajamos despachos, clínicas dentales, gabinetes y oficinas con divisiones acústicas." },
              { title: "Apartamentos turísticos", text: "Adecuación de pisos y locales para alquiler vacacional con licencia HUT. Materiales para uso intensivo." },
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
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Negocios de temporada y de todo el año</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1] mb-6">Cómo organizamos la reforma de un local en Cambrils</h2>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Un local en el paseo del Port no tiene las mismas prisas que una consulta en una calle interior de la Vila. Lo primero es entender el negocio: si vive del verano, si abre todo el año y qué licencia necesita para funcionar.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Calendario hacia atrás desde la apertura</h3>
            <p>En hostelería y comercio de playa, la fecha que manda es la de apertura. Partimos de ella y vamos hacia atrás: pedidos de mobiliario y maquinaria, instalaciones, acabados y, antes de todo, la documentación para el Ajuntament. Así sabes desde el primer día qué semana hay que tener decidido cada elemento.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Trámites y documentación técnica</h3>
            <p>Según la actividad y el alcance de la obra, el Ajuntament de Cambrils pedirá una comunicación previa, una licencia de obras o un proyecto técnico con la documentación de actividad. Trabajamos con técnicos colegiados que redactan y firman lo necesario, y coordinamos la obra para que lo construido coincida con lo presentado. Es la forma más segura de que la inspección no retrase la apertura.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Locales junto al mar</h3>
            <p>En los bajos del paseo marítimo el salitre y la arena entran con cada cliente. Elegimos pavimentos antideslizantes que soporten el tránsito, carpintería exterior que no se corroa, cierres metálicos tratados y una instalación eléctrica protegida frente a la humedad. Si el local tiene terraza, estudiamos también el desagüe del suelo y los toldos.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Pisos para alquiler turístico y pequeñas oficinas</h3>
            <p>Además de bares y tiendas, adecuamos apartamentos para alquiler vacacional y oficinas de pequeño tamaño. En los primeros, la resistencia de los materiales es lo que más importa; si es tu caso, mira también cómo trabajamos las <Link href="/servicios/reformas-pisos" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">reformas de pisos</Link>. Si tu negocio está fuera de Cambrils, también nos movemos a <Link href="/zonas/reformas-salou" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">Salou</Link> y a <Link href="/zonas/reformas-vila-seca" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">Vila-seca y La Pineda</Link>.</p>
          </div>
        </div>
      </section>

      <section className="bg-beige-warm px-5 py-20 md:py-28">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Preguntas frecuentes</p>
            <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-dark leading-[1]">Preguntas frecuentes sobre reformas de locales</h2>
            <p className="font-display italic text-dark/70 text-lg md:text-xl mt-3">Locales en la Costa Daurada</p>
          </div>
          <div className="flex flex-col gap-4">
            {[
              { q: "¿Cuánto cuesta reformar un local en Cambrils?", a: "Damos referencia orientativa por m² según la actividad: desde 380 €/m² en comercio básico (suelos, pintura, iluminación, mostradores), desde 480 €/m² en reformas completas con cambio de instalaciones y desde 580 €/m² en hostelería con cocina industrial y salida de humos. Cada actividad requiere normativa específica: valoramos sobre el local concreto en visita técnica gratuita." },
              { q: "¿Cuánto se tarda?", a: "Comercio sin actividad regulada: 4-6 semanas. Restaurante o bar (con cocina y salida de humos): 8-12 semanas. Apartamento turístico con licencia HUT: 6-10 semanas. Plazos firmes en contrato." },
              { q: "¿Tramitáis la licencia de actividad?", a: "Sí. Trabajamos con técnicos colegiados que firman el proyecto y la documentación de actividad para presentar en el Ayuntamiento de Cambrils, Salou, Reus o municipio que corresponda." },
              { q: "¿Trabajáis con propietarios o también con arrendatarios?", a: "Con ambos. En arrendamientos, antes de empezar revisamos el contrato para confirmar que el inquilino puede ejecutar la obra y qué retorna al propietario al final." },
              { q: "¿Podéis trabajar por la noche o con el local abierto?", a: "Depende de la actividad y de las ordenanzas de ruido. En comercios se pueden hacer fases con el local abierto y zonas cerradas al público; en hostelería suele ser mejor concentrar la obra en temporada baja. Lo valoramos en la visita." },
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
          <h2 className="font-display font-extrabold text-[32px] md:text-[48px] uppercase text-white leading-[1]">Solicita presupuesto para tu reforma de local</h2>
          <p className="font-display italic text-white/85 text-xl md:text-2xl">¿Cuándo quieres abrir?</p>
          <p className="font-body text-white/90 text-lg max-w-[500px]">Dinos la fecha objetivo y planificamos hacia atrás. Cumplimos plazos firmes y trámites en regla.</p>
          <Link href="/contacto" className="inline-flex items-center gap-2 bg-white text-accent px-8 py-4 rounded-full font-body font-bold text-[15px] hover:bg-beige transition-colors">
            Pedir valoración para mi local
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
          </Link>
        </div>
      </section>
    </>
  );
}
