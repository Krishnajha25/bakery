import Image from "next/image";
import Reveal from "@/components/Reveal";

export default function About() {
  return (
    <section id="about" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="about">
          <div className="about-inner">
            <div className="about-copy">
              <span className="eyebrow" style={{ color: "var(--butter)" }}>
                Our story
              </span>
              <h2>
                From a home oven, <em>with actual butter</em> and actual love.
              </h2>
              <p>
                Bakeology is a home bakery in Vasai-Virar, Mumbai — it started
                as weekend bakes for friends and got a little out of hand, in
                the best way. Everything is still baked at home in an
                FSSAI-registered kitchen, in small batches, with ingredients
                we&apos;d feed our own family. No preservatives, no shortcuts,
                no sad supermarket cookies.
              </p>
              <div className="about-stats">
                <div className="stat">
                  <b>100%</b>
                  <span>baked at home</span>
                </div>
                <div className="stat">
                  <b>FSSAI</b>
                  <span>registered kitchen</span>
                </div>
                <div className="stat">
                  <b>0</b>
                  <span>preservatives, ever</span>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <Image
                src="/photos/made-boxes.jpg"
                alt="Bakeology kraft boxes of cookies, made and packed at home"
                fill
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
              />
              <span className="tag">made &amp; boxed at home</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
