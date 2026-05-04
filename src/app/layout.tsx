import type { Metadata } from "next";
import { Sora, Work_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import StructuredData from "@/components/StructuredData";

const body = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const display = Sora({
  weight: ["400", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rareformascambrils.es"),
  alternates: {
    canonical: "/",
  },
  title: {
    default: "Reformas en Cambrils · Cocinas, Baños y Viviendas | RAC",
    template: "%s | R.A Reformas Cambrils",
  },
  description:
    "Empresa de reformas en Cambrils con sello mediterráneo. Pisos, casas de pueblo, segundas residencias, cocinas y baños llave en mano. Presupuesto sin coste: 877 278 109.",
  authors: [{ name: "R.A Reformas Cambrils" }],
  creator: "R.A Reformas Cambrils",
  publisher: "R.A Reformas Cambrils",
  category: "Reformas y construcción",
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "https://rareformascambrils.es",
    siteName: "R.A Reformas Cambrils",
    title: "Reformas en Cambrils · Cocinas, Baños y Viviendas | RAC",
    description:
      "Reformas integrales en Cambrils y el Baix Camp. Cocinas, baños, pisos y casas de pueblo con sello mediterráneo. Costa Daurada.",
    images: [
      {
        url: "/images/hero-reforma-mediterranea-cambrils.webp",
        width: 1200,
        height: 630,
        alt: "R.A Reformas Cambrils - Reformas integrales en la Costa Daurada",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Reformas en Cambrils · R.A Reformas",
    description:
      "Reformas integrales, cocinas y baños en Cambrils y el Baix Camp. Presupuesto sin compromiso.",
    images: ["/images/hero-reforma-mediterranea-cambrils.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  // verification: añadir cuando tengas los códigos de Google Search Console y Bing Webmaster
  // verification: {
  //   google: "TU_CODIGO_GSC",
  //   other: { "msvalidate.01": "TU_CODIGO_BING" },
  // },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link rel="preload" href="/images/hero-reforma-mediterranea-cambrils.webp" as="image" type="image/webp" />
      </head>
      <body
        className={`${body.variable} ${display.variable} antialiased`}
      >
        <StructuredData />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppFloat />
      </body>
    </html>
  );
}
