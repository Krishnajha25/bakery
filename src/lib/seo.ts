import { faqs, menuSections, site } from "@/lib/site";

/**
 * LocalBusiness (Bakery) schema — the core of local SEO.
 * Tells Google/AI assistants what we bake, what it costs,
 * and that we serve the Vasai-Virar area.
 */
export function bakerySchema() {
  return {
    "@type": "Bakery",
    "@id": `${site.url}/#bakery`,
    name: site.name,
    description: site.description,
    url: site.url,
    image: `${site.url}/og.jpg`,
    telephone: site.phone,
    priceRange: "₹₹",
    servesCuisine: "Bakery",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vasai-Virar",
      addressRegion: "Maharashtra",
      addressCountry: "IN",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 19.39,
      longitude: 72.84,
    },
    areaServed: site.areaServed.map((name) => ({ "@type": "City", name })),
    sameAs: [site.instagram],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: site.phone,
      contactType: "orders",
      availableLanguage: ["en", "hi", "mr"],
    },
    hasMenu: {
      "@type": "Menu",
      name: `${site.name} Menu`,
      hasMenuSection: menuSections.map((sec) => ({
        "@type": "MenuSection",
        name: sec.title,
        hasMenuItem: sec.items.map((item) => ({
          "@type": "MenuItem",
          name: item.name,
          description: item.description,
          image: `${site.url}${item.image}`,
          offers: {
            "@type": "Offer",
            priceCurrency: "INR",
            price: item.price.replace(/[^\d.]/g, "") || undefined,
            availability: "https://schema.org/InStock",
          },
        })),
      })),
    },
  };
}

export function faqSchema() {
  return {
    "@type": "FAQPage",
    "@id": `${site.url}/#faq`,
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

export function websiteSchema() {
  return {
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    name: site.name,
    url: site.url,
    publisher: { "@id": `${site.url}/#bakery` },
  };
}

export function pageSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [bakerySchema(), faqSchema(), websiteSchema()],
  };
}
