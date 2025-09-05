// src/seo/SEO.tsx
import { Helmet } from "react-helmet-async";

type SEOProps = {
  title: string;
  description: string;
  path?: string;             // e.g., "/industries"
  image?: string;            // absolute or /relative in /public
  keywords?: string[];       // non-Google engines
  type?: "website" | "article" | "product";
  jsonLd?: object[];         // array of JSON-LD graphs
};

const ORIGIN = "https://as3six.com";

export default function SEO({
  title,
  description,
  path = "/",
  image = "/og-default.png",
  keywords = [],
  type = "website",
  jsonLd = [],
}: SEOProps) {
  const url = `${ORIGIN}${path}`;
  const kw = keywords.join(", ");

  return (
    <Helmet prioritizeSeoTags>
      <title>{title}</title>
      <meta name="description" content={description} />
      {/* “keywords” is ignored by Google but harmless for others */}
      {kw && <meta name="keywords" content={kw} />}
      <link rel="canonical" href={url} />

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:site" content="@as3six" />

      {/* JSON-LD */}
      {jsonLd.map((node, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(node)}</script>
      ))}
    </Helmet>
  );
}
