import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal de R.A Reformas Cambrils. Información sobre el titular del sitio web, condiciones de uso y propiedad intelectual.",
  alternates: { canonical: "/aviso-legal" },
  robots: { index: false, follow: true },
};

export default function AvisoLegalPage() {
  return (
    <>
      <section className="bg-dark px-5 pt-32 pb-16">
        <div className="mx-auto max-w-[800px] text-center">
          <h1 className="font-display font-extrabold text-[36px] md:text-[52px] text-white uppercase leading-[1]">
            Aviso Legal
          </h1>
        </div>
      </section>

      <section className="bg-beige px-5 py-16 md:py-24">
        <div className="mx-auto max-w-[800px] font-body text-dark space-y-8">
          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] uppercase text-dark mb-4">
              1. Datos identificativos del titular
            </h2>
            <p className="text-subtitle leading-relaxed">
              En cumplimiento del deber de información recogido en el artículo 10 de la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSICE), a continuación se reflejan los siguientes datos:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-subtitle mt-3">
              <li><strong>Denominación comercial:</strong> R.A Reformas Cambrils</li>
              <li><strong>Domicilio:</strong> Carrer Ramon Berenguer IV, 25, 43850 Cambrils, Tarragona</li>
              <li><strong>Teléfono:</strong> 877 278 164</li>
              <li><strong>Email:</strong> info@rareformascambrils.es</li>
              <li><strong>Sitio web:</strong> rareformascambrils.es</li>
            </ul>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] uppercase text-dark mb-4">
              2. Objeto
            </h2>
            <p className="text-subtitle leading-relaxed">
              El presente sitio web tiene como finalidad dar a conocer los servicios de reformas integrales, reformas de cocinas, baños, pisos y locales comerciales que ofrece R.A Reformas Cambrils en el municipio de Cambrils y en localidades limítrofes del Baix Camp y la Costa Daurada.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] uppercase text-dark mb-4">
              3. Condiciones de uso
            </h2>
            <p className="text-subtitle leading-relaxed">
              El acceso al sitio web atribuye la condición de usuario e implica la aceptación plena y sin reservas de todas y cada una de las disposiciones incluidas en este Aviso Legal. El usuario se compromete a hacer un uso adecuado de los contenidos y servicios que R.A Reformas Cambrils ofrece a través de su sitio web, absteniéndose de emplearlos para incurrir en actividades ilícitas o contrarias a la buena fe y al ordenamiento legal.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] uppercase text-dark mb-4">
              4. Propiedad intelectual e industrial
            </h2>
            <p className="text-subtitle leading-relaxed">
              Todos los contenidos del sitio web, incluyendo sin carácter limitativo, textos, fotografías, gráficos, imágenes, iconos, tecnología, software, enlaces y demás contenidos audiovisuales o sonoros, así como su diseño gráfico y códigos fuente, son propiedad intelectual de R.A Reformas Cambrils o de terceros que han autorizado su uso, sin que puedan entenderse cedidos al usuario ninguno de los derechos de explotación reconocidos por la normativa vigente en materia de propiedad intelectual.
            </p>
            <p className="text-subtitle leading-relaxed mt-3">
              Queda prohibida la reproducción, distribución, comunicación pública y transformación de la totalidad o parte de los contenidos de este sitio web sin el consentimiento expreso y por escrito de R.A Reformas Cambrils.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] uppercase text-dark mb-4">
              5. Exclusión de responsabilidad
            </h2>
            <p className="text-subtitle leading-relaxed">
              R.A Reformas Cambrils no se hace responsable de los daños y perjuicios de toda naturaleza que pudieran derivarse de la falta de disponibilidad, continuidad o calidad del funcionamiento del sitio web y de sus contenidos, ni del incumplimiento de la expectativa de utilidad que los usuarios hubieran podido atribuir al sitio web.
            </p>
            <p className="text-subtitle leading-relaxed mt-3">
              R.A Reformas Cambrils se reserva el derecho de efectuar sin previo aviso las modificaciones que considere oportunas en su portal, pudiendo cambiar, suprimir o añadir tanto los contenidos y servicios que se presten a través de la misma como la forma en la que estos aparezcan presentados o localizados en su portal.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] uppercase text-dark mb-4">
              6. Enlaces de terceros
            </h2>
            <p className="text-subtitle leading-relaxed">
              En el caso de que en el sitio web se incluyesen enlaces o hipervínculos hacia otros sitios de internet, R.A Reformas Cambrils no ejercerá ningún tipo de control sobre dichos sitios y contenidos. En ningún caso asumirá responsabilidad alguna por los contenidos de algún enlace perteneciente a un sitio web ajeno, ni garantizará la disponibilidad técnica, calidad, fiabilidad, exactitud, amplitud, veracidad, validez y constitucionalidad de cualquier material o información contenida en dichos hipervínculos u otros sitios de internet.
            </p>
          </div>

          <div>
            <h2 className="font-display font-extrabold text-[20px] md:text-[24px] uppercase text-dark mb-4">
              7. Legislación aplicable y jurisdicción
            </h2>
            <p className="text-subtitle leading-relaxed">
              Para la resolución de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades en él desarrolladas, será de aplicación la legislación española, a la que se someten expresamente las partes, siendo competentes para la resolución de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales de Tarragona.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
