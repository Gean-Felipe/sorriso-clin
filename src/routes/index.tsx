import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustBar } from "@/components/site/TrustBar";
import { Transformamos } from "@/components/site/Transformamos";
import { Diferenciais } from "@/components/site/Diferenciais";
import { FormaDeCuidar } from "@/components/site/FormaDeCuidar";
import { Tecnologia } from "@/components/site/Tecnologia";
import { Tratamentos } from "@/components/site/Tratamentos";
import { Equipe } from "@/components/site/Equipe";
import { Resultados } from "@/components/site/Resultados";
import { Depoimentos } from "@/components/site/Depoimentos";
import { Galeria } from "@/components/site/Galeria";
import { CTAFinal } from "@/components/site/CTAFinal";
import { Contato } from "@/components/site/Contato";
import { Footer } from "@/components/site/Footer";

const TITLE = "Sorriso Clin | Clínica Odontológica em Várzea Grande — MT";
const DESCRIPTION =
  "Odontologia com experiência, tecnologia e atendimento humanizado em Várzea Grande — MT. Agende sua avaliação na Sorriso Clin.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Dentist",
          name: "Sorriso Clin",
          telephone: "+55 65 3685-7299",
          address: {
            "@type": "PostalAddress",
            streetAddress: "Av. Gonçalo Botelho de Campos, 2446",
            addressLocality: "Várzea Grande",
            addressRegion: "MT",
            postalCode: "78118-070",
            addressCountry: "BR",
          },
          aggregateRating: {
            "@type": "AggregateRating",
            ratingValue: "4.5",
            reviewCount: "27",
          },
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-dvh bg-background">
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Transformamos />
        <Diferenciais />
        <FormaDeCuidar />
        <Tecnologia />
        <Tratamentos />
        <Equipe />
        <Resultados />
        <Depoimentos />
        <Galeria />
        <CTAFinal />
        <Contato />
      </main>
      <Footer />
    </div>
  );
}
