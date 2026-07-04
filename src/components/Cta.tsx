import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function Cta() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="cta">
          <h2>
            Craving something? <em>The oven&apos;s already warm.</em>
          </h2>
          <p>
            DM us on Instagram or WhatsApp — tell us the occasion, we&apos;ll
            handle the rest.
          </p>
          <div className="hero-ctas">
            <a
              className="btn caramel"
              href={site.instagramDm}
              target="_blank"
              rel="noopener noreferrer"
            >
              DM {site.handle}
            </a>
            <a
              className="btn ghost"
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp us
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
