import Reveal from "@/components/Reveal";
import { faqs } from "@/lib/site";

export default function Faq() {
  return (
    <section id="faq" style={{ paddingTop: 0 }}>
      <div className="wrap">
        <Reveal className="sec-head">
          <span className="eyebrow">FAQ</span>
          <h2>
            Good questions, <em>quick answers.</em>
          </h2>
        </Reveal>
        <div className="faq-list">
          {faqs.map((faq) => (
            <Reveal key={faq.question} className="faq-item">
              <details>
                <summary>
                  <span>{faq.question}</span>
                  <i aria-hidden="true">+</i>
                </summary>
                <p>{faq.answer}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
