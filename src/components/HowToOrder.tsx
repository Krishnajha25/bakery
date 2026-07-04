import Reveal from "@/components/Reveal";
import { site } from "@/lib/site";

export default function HowToOrder() {
  return (
    <section id="order" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">How to order</span>
          <h2>
            Three steps to <em>cookie o&apos;clock.</em>
          </h2>
        </Reveal>
        <div className="steps">
          <Reveal className="step">
            <h3>Slide into our DMs</h3>
            <p>
              Message us on{" "}
              <a href={site.instagramDm} target="_blank" rel="noopener noreferrer">
                Instagram
              </a>{" "}
              or{" "}
              <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>{" "}
              with what you&apos;re craving and when you need it — 1–2 days
              ahead.
            </p>
          </Reveal>
          <Reveal className="step">
            <h3>We confirm &amp; bake</h3>
            <p>
              You&apos;ll get a quick confirmation with pickup or delivery
              options. Then the oven goes on — your order is baked fresh, never
              ahead.
            </p>
          </Reveal>
          <Reveal className="step">
            <h3>Pick up or delivery</h3>
            <p>
              Collect from us or get it delivered locally. Boxes are sealed,
              ribboned, and honestly hard not to open in the car.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
