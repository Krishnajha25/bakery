import { site } from "@/lib/site";

export default function Footer() {
  return (
    <footer>
      <div className="wrap foot">
        <div>
          <div className="foot-logo">
            bake<em>ology</em>
          </div>
          <small>
            © {new Date().getFullYear()} {site.name} · baked from home in{" "}
            {site.location} · FSSAI registered
          </small>
        </div>
        <div className="foot-links">
          <a href={site.instagram} target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href={site.whatsapp} target="_blank" rel="noopener noreferrer">
            WhatsApp · {site.whatsappDisplay}
          </a>
          <a href="#menu">Menu</a>
        </div>
      </div>
    </footer>
  );
}
