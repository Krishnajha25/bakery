"use client";

import { useCallback, useEffect, useState } from "react";
import { site } from "@/lib/site";

const links = [
  { href: "#menu", id: "menu", label: "Menu" },
  { href: "#about", id: "about", label: "Our story" },
  { href: "#order", id: "order", label: "How to order" },
] as const;

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter((el): el is HTMLElement => el !== null);

    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-35% 0px -60% 0px" },
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  // lock body scroll + close on Escape while the mobile menu is open
  useEffect(() => {
    if (!open) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  return (
    <>
      <div className={`site-nav${scrolled ? " scrolled" : ""}`}>
        <div className="wrap">
          <div className="nav-pill">
            <a className="logo" href="#" onClick={close}>
              bake<em>ology</em>
            </a>

            <div className="nav-links">
              {links.map((l) => (
                <a
                  key={l.id}
                  href={l.href}
                  className={active === l.id ? "active" : undefined}
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="nav-actions">
              <a
                className="btn nav-cta"
                href={site.instagramDm}
                target="_blank"
                rel="noopener noreferrer"
              >
                DM to order
              </a>
              <button
                type="button"
                className={`burger${open ? " is-open" : ""}`}
                aria-label={open ? "Close menu" : "Open menu"}
                aria-expanded={open}
                aria-controls="mobile-menu"
                onClick={() => setOpen((v) => !v)}
              >
                <span />
                <span />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div
        id="mobile-menu"
        className={`mobile-menu${open ? " open" : ""}`}
        aria-hidden={!open}
      >
        <nav className="mobile-links">
          {links.map((l, i) => (
            <a
              key={l.id}
              href={l.href}
              style={{ transitionDelay: open ? `${0.08 + i * 0.06}s` : "0s" }}
              onClick={close}
            >
              <span className="mobile-num">0{i + 1}</span>
              {l.label}
            </a>
          ))}
        </nav>
        <div
          className="mobile-foot"
          style={{ transitionDelay: open ? "0.3s" : "0s" }}
        >
          <a
            className="btn caramel"
            href={site.instagramDm}
            target="_blank"
            rel="noopener noreferrer"
          >
            Order on Instagram →
          </a>
          <a
            className="btn ghost"
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp us
          </a>
          <p>
            {site.location} · <strong>{site.handle}</strong>
          </p>
        </div>
      </div>
    </>
  );
}
