import Image from "next/image";
import { site } from "@/lib/site";

export default function Hero() {
  return (
    <header>
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <span className="eyebrow">Home bakery · small batches, big love</span>
          <h1>
            Cookies &amp; tiramisu,
            <br />
            <span className="swash">
              baked slow,
              <svg viewBox="0 0 200 12" preserveAspectRatio="none" aria-hidden="true">
                <path
                  d="M2 8 Q 30 2, 60 7 T 120 7 T 198 6"
                  fill="none"
                  stroke="#C25E2A"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            eaten fast.
          </h1>
          <p>
            Cookies, giant cookie cakes and classic tiramisu — every batch is
            mixed, baked and boxed in a home kitchen. Never mass-produced,
            never frozen, never boring. Made to order, delivered warm-ish.
          </p>
          <div className="hero-ctas">
            <a
              className="btn caramel"
              href={site.instagramDm}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order on Instagram →
            </a>
            <a className="btn ghost" href="#menu">
              See the menu
            </a>
          </div>
          <p className="hero-note">
            <strong>FSSAI registered</strong> · pre-order 1–2 days ahead ·{" "}
            <strong>{site.location}</strong>
          </p>
        </div>

        <div className="hero-visual">
          <div className="photo ph-a">
            <Image
              src="/photos/cookie-box.jpg"
              alt="Box of assorted Bakeology cookies"
              fill
              priority
              sizes="(max-width: 900px) 90vw, 40vw"
              style={{ objectFit: "cover" }}
            />
            <span className="tag">fresh-baked cookie boxes</span>
          </div>
          <div className="photo ph-b">
            <Image
              src="/photos/tiramisu-dark.jpg"
              alt="Bakeology classic tiramisu tub dusted with cocoa"
              fill
              priority
              sizes="(max-width: 900px) 60vw, 25vw"
              style={{ objectFit: "cover" }}
            />
            <span className="tag">classic tiramisu</span>
          </div>
          <svg className="sticker" viewBox="0 0 132 132" aria-hidden="true">
            <circle cx="66" cy="66" r="64" />
            <path id="circ" d="M66,14 a52,52 0 1,1 -0.01,0" fill="none" />
            <text>
              <textPath href="#circ">
                FRESH FROM THE OVEN · SMALL BATCH ·{" "}
              </textPath>
            </text>
            <text className="mid" x="66" y="78" textAnchor="middle">
              ✳
            </text>
          </svg>
        </div>
      </div>
    </header>
  );
}
