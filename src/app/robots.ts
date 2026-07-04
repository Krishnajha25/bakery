import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

/**
 * Everything is intentionally open — including AI crawlers
 * (GPTBot, ClaudeBot, PerplexityBot, Google-Extended) — so the
 * bakery is findable through AI assistants as well as search.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
