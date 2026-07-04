import Image from "next/image";
import Reveal from "@/components/Reveal";
import { menuSections, site } from "@/lib/site";

export default function Menu() {
  return (
    <section id="menu">
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">The menu</span>
          <h2>
            Baked in small batches, <em>gone in smaller ones.</em>
          </h2>
          <p>Everything is made to order — mix and match whatever you like.</p>
        </Reveal>

        {menuSections.map((sec) => (
          <div key={sec.title} className="menu-section">
            <Reveal className="menu-section-head">
              <h3 className="menu-section-title">{sec.title}</h3>
              {sec.note && <p className="menu-section-note">{sec.note}</p>}
            </Reveal>
            <div className="menu-grid">
              {sec.items.map((item) => (
                <Reveal key={item.name} className="card">
                  <div className="card-img">
                    <Image
                      src={item.image}
                      alt={item.imageAlt}
                      fill
                      sizes="(max-width: 900px) 100vw, 33vw"
                      style={{ objectFit: "cover" }}
                    />
                    {item.flag && <span className="flag">{item.flag}</span>}
                  </div>
                  <div className="card-body">
                    <div className="card-row">
                      <h3>{item.name}</h3>
                      <span className="price">{item.price}</span>
                    </div>
                    <p>{item.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <Reveal className="menu-cta">
          <a
            className="btn"
            href={site.instagramDm}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order — DM us
          </a>
          <p>Custom flavours for events &amp; parties? Just ask.</p>
        </Reveal>
      </div>
    </section>
  );
}
