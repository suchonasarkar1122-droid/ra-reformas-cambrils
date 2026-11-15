export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": "https://rareformascambrils.es/#business",
    name: "R.A Reformas Cambrils",
    url: "https://rareformascambrils.es",
    logo: "https://rareformascambrils.es/images/hero-reforma-mediterranea-cambrils.webp",
    image: "https://rareformascambrils.es/images/hero-reforma-mediterranea-cambrils.webp",
    telephone: "+34 877 278 164",
    email: "info@rareformascambrils.es",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Carrer Ramon Berenguer IV, 25",
      addressLocality: "Cambrils",
      addressRegion: "Tarragona",
      postalCode: "43850",
      addressCountry: "ES",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.07007629999999,
      longitude: 1.0540353999999998,
    },
    areaServed: [
      { "@type": "City", name: "Cambrils" },
      { "@type": "City", name: "Salou" },
      { "@type": "City", name: "Reus" },
      { "@type": "City", name: "Mont-roig del Camp" },
      { "@type": "City", name: "Vila-seca" },
      { "@type": "City", name: "Riudoms" },
    ],
    sameAs: [],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:30",
        closes: "19:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "13:30",
      },
    ],
  };

  const website = {"@context":"https://schema.org","@type":"WebSite","@id":"https://rareformascambrils.es/#website","url":"https://rareformascambrils.es","name":"R.A Reformas Cambrils","inLanguage":"es-ES","publisher":{"@id":"https://rareformascambrils.es/#business"}};


  return (
    <>
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }} />
    </>
  );
}
