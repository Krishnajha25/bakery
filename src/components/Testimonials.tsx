import Reveal from "@/components/Reveal";

const quotes = [
  {
    text: "Ordered a dozen for a birthday, ate three before the party. No regrets, only crumbs.",
    cite: "— Priya, repeat offender",
  },
  {
    text: "The chocolate kunafa cookie is stupidly good. Crisp, gooey, gone in a minute.",
    cite: "— Daniel, converted",
  },
  {
    text: "Cutest packaging, kindest note, best cookies. This is what small business should feel like.",
    cite: "— Amara, gift-giver",
  },
];

export default function Testimonials() {
  return (
    <section style={{ paddingTop: 0 }}>
      <div className="wrap">
        <div className="quotes">
          {quotes.map((q) => (
            <Reveal key={q.cite} className="quote">
              <p>{q.text}</p>
              <cite>{q.cite}</cite>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
