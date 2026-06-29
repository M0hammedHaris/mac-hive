const SITE_URL = "https://machive.in";
const BRAND_NAME = "Machive";
const FOUNDER_NAME = "Mohammed Haris";
const DESCRIPTION =
  "Machive helps growing businesses worldwide improve lead generation, operations, and internal workflows with websites, dashboards, automation, and business software built end-to-end by a senior engineer.";

export function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    name: BRAND_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.svg`,
    description: DESCRIPTION,
    founder: {
      "@type": "Person",
      name: FOUNDER_NAME,
      url: SITE_URL,
      sameAs: [
        "https://linkedin.com/in/mohammed-haris-k",
        "https://github.com/M0hammedHaris",
      ],
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      url: `${SITE_URL}/contact`,
      availableLanguage: ["English"],
    },
    sameAs: [
      "https://linkedin.com/in/mohammed-haris-k",
      "https://github.com/M0hammedHaris",
    ],
    areaServed: ["Worldwide"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    knowsAbout: [
      "Business Software",
      "Lead-Generation Websites",
      "Dashboard Development",
      "Workflow Automation",
      "Internal Tools",
      "Reporting Dashboards",
      "SaaS MVP Development",
      "Lead Capture Systems",
    ],
    priceRange: "$$-$$$",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function WebSiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND_NAME,
    url: SITE_URL,
    description: DESCRIPTION,
    publisher: {
      "@type": "Organization",
      name: BRAND_NAME,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/portfolio?search={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: FOUNDER_NAME,
    url: SITE_URL,
    jobTitle: "Senior Full Stack Engineer",
    worksFor: {
      "@type": "Organization",
      name: BRAND_NAME,
      url: SITE_URL,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: "Coimbatore",
      addressRegion: "Tamil Nadu",
      addressCountry: "IN",
    },
    sameAs: [
      "https://linkedin.com/in/mohammed-haris-k",
      "https://github.com/M0hammedHaris",
    ],
    knowsAbout: [
      "Backend Systems",
      "Automation",
      "Cloud Infrastructure",
      "Product Engineering",
      "Business Software",
      "Lead-Generation Websites",
      "Dashboards",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface BreadcrumbItem {
  name: string;
  url: string;
}

interface BreadcrumbSchemaProps {
  items: BreadcrumbItem[];
}

export function BreadcrumbSchema({ items }: BreadcrumbSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSchemaProps {
  items: FAQItem[];
}

export function FAQSchema({ items }: FAQSchemaProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
