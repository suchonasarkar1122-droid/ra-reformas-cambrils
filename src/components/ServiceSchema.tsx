interface ServiceSchemaProps {
  name: string;
  description: string;
  url: string;
  image: string;
}

export default function ServiceSchema({ name, description, url, image }: ServiceSchemaProps) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `https://rareformascambrils.es${url}`,
    image: `https://rareformascambrils.es${image}`,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      "@id": "https://rareformascambrils.es/#business",
      name: "R.A Reformas Cambrils",
      telephone: "+34 877 278 109",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Carrer Ramon Berenguer IV, 25",
        addressLocality: "Cambrils",
        addressRegion: "Tarragona",
        postalCode: "43850",
        addressCountry: "ES",
      },
    },
    areaServed: [
      { "@type": "City", name: "Cambrils" },
      { "@type": "City", name: "Salou" },
      { "@type": "City", name: "Reus" },
      { "@type": "City", name: "Mont-roig del Camp" },
      { "@type": "City", name: "Vila-seca" },
      { "@type": "City", name: "Riudoms" },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}
