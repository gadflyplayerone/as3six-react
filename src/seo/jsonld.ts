// src/seo/jsonld.ts
const ORIGIN = "https://as3six.com";

export const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "AS3SIX",
  url: ORIGIN,
  logo: `${ORIGIN}/og-default.png`,
  sameAs: [
    "https://www.youtube.com/@as3six", // edit as you add channels
  ],
  description:
    "AS3SIX develops CWEC—Coil With Enhanced Control—for step-response electromagnetic actuation across automotive, defense & space, audio, and industrial applications.",
};

export const webSiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AS3SIX",
  url: ORIGIN,
  potentialAction: {
    "@type": "SearchAction",
    target: `${ORIGIN}/?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

// CWEC as a technology/product
export const cwecProductLd = {
  "@context": "https://schema.org",
  "@type": "Product",
  name: "CWEC (Coil With Enhanced Control)",
  brand: "AS3SIX",
  description:
    "A control and coil design enabling nanosecond-class magnetic field steps, lower thermal load, and high-frequency response for mission-critical actuation.",
  url: `${ORIGIN}/#licensing`,
};

// Services verticalization
export const servicesLd = [
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Defense & Space Contractor",
    areaServed: "Global",
    serviceType: "Electromagnetic actuation, pulsed power, field control",
    url: `${ORIGIN}/#partnerships`,
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Automotive Supplier",
    areaServed: "Global",
    serviceType: "ABS/ESC valves, injectors, HV contactors, MR suspension",
    url: `${ORIGIN}/#industries`,
  },
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: "Audio Technology Partner",
    areaServed: "Global",
    serviceType: "High-fidelity speakers, extended high-frequency response",
    url: `${ORIGIN}/#industries`,
  },
];

// Contact page
export const contactPageLd = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact AS3SIX",
  url: `${ORIGIN}/#contact`,
  contactOption: "TollFree",
  inLanguage: "en",
};
