import { tickerItems } from "@/lib/site";

export default function Ticker() {
  // duplicated so the -50% translate loops seamlessly
  const items = [...tickerItems, ...tickerItems];

  return (
    <div className="ticker" aria-hidden="true">
      <div className="ticker-track">
        {items.map((item, i) => (
          <span key={i}>
            {item} <b>✳</b>
          </span>
        ))}
      </div>
    </div>
  );
}
