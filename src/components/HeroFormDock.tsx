"use client";

import { useState } from "react";
import { submitLead } from "@/lib/submitLead";

type Props = {
  formspreeId: string;
  origin: string;
  localities: string[];
  serviceTypes: string[];
};

export default function HeroFormDock({ formspreeId, origin, localities, serviceTypes }: Props) {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(false);
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await submitLead(data, `https://formspree.io/f/${formspreeId}`);
      if (res.ok) setSubmitted(true);
      else setError(true);
    } catch {
      setError(true);
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div className="text-center py-3">
        <p className="font-display font-bold text-white text-base md:text-lg">
          ¡Solicitud recibida! Te contactaremos en menos de 24h.
        </p>
      </div>
    );
  }

  const inputClass =
    "w-full px-4 py-3 rounded-xl bg-white/10 text-white placeholder:text-white/40 border border-white/10 text-sm font-body focus:outline-none focus:border-accent/60 focus:ring-1 focus:ring-accent/30 transition-colors";

  return (
    <>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
        <p className="font-body text-accent text-[11px] uppercase tracking-[0.3em] font-semibold">
          Pide tu presupuesto · Te llamamos en 24h
        </p>
        <p className="font-body text-white/40 text-[11px] hidden md:block">Sin compromiso</p>
      </div>

      <form onSubmit={handleSubmit} className="grid grid-cols-2 lg:grid-cols-5 gap-2 md:gap-3">
        <input type="hidden" name="_subject" value={`Nuevo presupuesto desde ${origin} (hero)`} />

        <input
          type="text"
          name="name"
          placeholder="Nombre *"
          required
          className={inputClass}
        />
        <input
          type="tel"
          name="phone"
          placeholder="Teléfono *"
          required
          className={inputClass}
        />
        <select
          name="locality"
          required
          defaultValue=""
          className={`${inputClass} text-white/70 cursor-pointer`}
        >
          <option value="" disabled className="text-dark">Localidad *</option>
          {localities.map(l => <option key={l} value={l} className="text-dark">{l}</option>)}
        </select>
        <select
          name="serviceType"
          defaultValue=""
          className={`${inputClass} text-white/70 cursor-pointer`}
        >
          <option value="" disabled className="text-dark">Tipo de obra</option>
          {serviceTypes.map(s => <option key={s} value={s} className="text-dark">{s}</option>)}
        </select>
        <button
          type="submit"
          disabled={loading}
          className="col-span-2 lg:col-span-1 bg-accent text-white py-3 rounded-xl font-display font-bold text-sm hover:bg-accent-light transition-colors disabled:opacity-60 inline-flex items-center justify-center gap-2"
        >
          {loading ? (
            <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
          ) : (
            <>
              Solicitar
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </>
          )}
        </button>
      </form>

      {error && (
        <p className="text-center text-red-400 text-xs mt-3 font-body">
          Error al enviar. Inténtalo de nuevo o llámanos.
        </p>
      )}

      <p className="text-white/30 text-[11px] text-center mt-3 font-body">
        Al solicitar aceptas nuestra <a href="/politica-privacidad" target="_blank" className="underline hover:text-white/60">Política de Privacidad</a>
      </p>
    </>
  );
}
