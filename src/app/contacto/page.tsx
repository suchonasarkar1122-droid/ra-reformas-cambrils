import type { Metadata } from "next";
import Link from "next/link";
import dynamic from "next/dynamic";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

const CTAForm = dynamic(() => import("@/components/CTAForm"));

export const metadata: Metadata = {
  title: "Contacto y valoración gratuita",
  description:
    "Contacta con R.A Reformas Cambrils: visita gratuita, valoración escrita en 24h y atención directa. Cambrils, Salou, Reus, Vila-seca y Mont-roig.",
  alternates: { canonical: "/contacto" },
  openGraph: {
    title: "Contacto · R.A Reformas Cambrils",
    description:
      "Pide una visita sin coste para tu reforma en la Costa Daurada. Atención directa con artesanos del Baix Camp.",
    url: "/contacto",
    images: ["/images/equipo-artesanos-reforma-cambrils.webp"],
  },
};

export default function ContactoPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Inicio", url: "/" }, { name: "Contacto", url: "/contacto" }]} />

      {/* ============ HERO ============ */}
      <section className="relative h-[340px] md:h-[420px] w-full overflow-hidden bg-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark/80" />
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-5">
          <span className="font-body font-bold text-xs uppercase tracking-[0.3em] text-accent mb-4">
            Hablemos de tu reforma
          </span>
          <h1 className="font-display font-extrabold text-[40px] md:text-[60px] lg:text-[72px] text-white uppercase leading-[0.95]">
            Contacta con R.A Reformas
          </h1>
          <p className="text-white/60 text-base md:text-lg mt-4 max-w-[520px]">
            Cuéntanos qué quieres hacer y, en 24 horas, te llamamos para concertar una visita sin coste a tu vivienda en Cambrils o en el resto del Baix Camp.
          </p>
        </div>
      </section>

      {/* ============ CONTACT CONTENT ============ */}
      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[1200px]">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* --- Form column --- */}
            <div className="flex-1 min-w-0">
              <h2 className="font-display font-extrabold text-[28px] md:text-[36px] uppercase text-dark leading-[1.1] mb-3">
                Solicita presupuesto para tu reforma
              </h2>
              <p className="font-body text-subtitle text-base mb-8">
                Indícanos tipo de vivienda, superficie aproximada y qué te gustaría cambiar. Si es una segunda residencia y no puedes desplazarte, también podemos quedar por videollamada.
              </p>

              <div className="bg-accent rounded-[16px] p-6 md:p-10">
                <CTAForm />
              </div>
            </div>

            {/* --- Info sidebar --- */}
            <aside className="lg:w-[380px] flex flex-col gap-8">
              {/* Phone */}
              <div className="bg-white rounded-[16px] p-6 border border-dark/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2" strokeLinecap="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                  </div>
                  <h3 className="font-body font-bold text-dark text-base uppercase">Teléfono</h3>
                </div>
                <a href="tel:+34877278164" className="font-body font-semibold text-accent text-lg hover:underline">
                  877 278 164
                </a>
                <p className="text-subtitle text-sm mt-1">Horario: Lunes - Viernes: 8:00 - 20:00 · Sábado: 8:00 - 14:00</p>
              </div>

              {/* WhatsApp */}
              <div className="bg-white rounded-[16px] p-6 border border-dark/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-[#25D366]/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="#25D366">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <h3 className="font-body font-bold text-dark text-base uppercase">WhatsApp</h3>
                </div>
                <a
                  href="https://wa.me/34623760710"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body font-semibold text-[#25D366] text-lg hover:underline"
                >
                  Háblanos por WhatsApp
                </a>
                <p className="text-subtitle text-sm mt-1">Respuesta en horas hábiles</p>
              </div>

              {/* Email */}
              <div className="bg-white rounded-[16px] p-6 border border-dark/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2" strokeLinecap="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" />
                      <path d="M22 7l-10 7L2 7" />
                    </svg>
                  </div>
                  <h3 className="font-body font-bold text-dark text-base uppercase">Email</h3>
                </div>
                <a href="mailto:info@rareformascambrils.es" className="font-body font-semibold text-accent text-base hover:underline break-all">
                  info@rareformascambrils.es
                </a>
              </div>

              {/* Address */}
              <div className="bg-white rounded-[16px] p-6 border border-dark/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2" strokeLinecap="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <h3 className="font-body font-bold text-dark text-base uppercase">Oficina</h3>
                </div>
                <p className="font-body text-dark text-base font-medium">
                  Carrer Ramon Berenguer IV, 25
                </p>
                <p className="text-subtitle text-sm">43850 Cambrils, Tarragona</p>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-[16px] p-6 border border-dark/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D4A044" strokeWidth="2" strokeLinecap="round">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 6v6l4 2" />
                    </svg>
                  </div>
                  <h3 className="font-body font-bold text-dark text-base uppercase">Horario</h3>
                </div>
                <ul className="space-y-1 text-sm">
 <li className="flex justify-between">
                    <span className="text-subtitle">Lunes - Viernes</span>
                    <span className="font-body font-semibold text-dark">8:00 - 20:00</span>
                  </li>
 <li className="flex justify-between">
                    <span className="text-subtitle">Sábado</span>
                    <span className="font-body font-semibold text-dark">8:00 - 14:00</span>
                  </li>
 <li className="flex justify-between">
                    <span className="text-subtitle">Domingo</span>
                    <span className="font-body font-semibold text-dark">Cerrado</span>
                  </li>
 </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px]">
          <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-4">Después de escribirnos</p>
          <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1] mb-6">Qué pasa cuando nos pides presupuesto</h2>
          <div className="w-16 h-[3px] bg-accent rounded-full mb-6" />
          <div className="space-y-4 font-body text-subtitle text-base leading-relaxed">
            <p>Contestamos personalmente cada solicitud. Para que la primera conversación sea útil, te contamos cómo seguimos y qué información nos ayuda.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">Datos que nos ayudan</h3>
            <p>Indica la zona de la vivienda (por ejemplo el Port, la Vila, Vilafortuny o una urbanización como Cambrils Badia), los metros aproximados, si es vivienda habitual, segunda residencia o alquiler turístico, y qué te gustaría cambiar. Si puedes, adjunta fotos o un plano cuando te escribamos: con eso preparamos mejor la visita.</p>
            <h3 className="font-body font-bold text-dark text-lg uppercase pt-4">La visita y la propuesta</h3>
            <p>Concertamos una visita en la vivienda o, si estás fuera, una videollamada con alguien que pueda abrirnos. Después recibes una valoración por partidas con el alcance, los plazos orientativos y el trámite que corresponde ante el Ajuntament. Si aún no sabes qué tipo de obra necesitas, puedes echar un vistazo antes a <Link href="/servicios" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">nuestros servicios</Link>, por ejemplo a <Link href="/servicios/reformas-banos" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">reformas de baños</Link> o <Link href="/servicios/reformas-integrales" className="text-accent font-semibold underline underline-offset-2 hover:text-dark">reformas integrales</Link>.</p>
            <p>Si la vivienda es una segunda residencia y no vives en la zona, no hace falta que vengas a Cambrils para empezar: podemos hacer la primera revisión con fotos y vídeo y concertar la visita técnica cuando alguien pueda abrirnos.</p>
          </div>
        </div>
      </section>

      {/* ============ MAP ============ */}
      <section className="bg-beige-warm px-5 py-16 md:py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-10">
            <p className="font-body text-accent text-sm uppercase tracking-[0.2em] font-bold mb-3">Dónde estamos</p>
            <h2 className="font-display font-extrabold text-[28px] md:text-[40px] uppercase text-dark leading-[1.1]">
              Oficina de R.A Reformas en Cambrils
            </h2>
            <p className="font-display italic text-dark/70 text-lg md:text-xl mt-3">
              En el centro de Cambrils
            </p>
          </div>
          <div className="rounded-[20px] overflow-hidden border border-dark/10 shadow-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3007.950424236034!2d1.0540353999999998!3d41.07007629999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a145f0ce33370b%3A0x6eb3fc627d402695!2sR.A%20Reformas%20Cambrils!5e0!3m2!1ses!2sfr!4v1788097539637!5m2!1ses!2sfr"
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ubicación R.A Reformas Cambrils"
            />
          </div>
        </div>
      </section>
    </>
  );
}
