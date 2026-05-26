// @ts-nocheck
import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CASE_STUDIES } from "../lib/portfolio-data";
import { Reveal, Chip, TagRow, SectionHead, Placeholder } from "./portfolio-ui";

export function FeaturedSpotlight() {
  const heros = CASE_STUDIES.filter((c) => c.kind === "hero");
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const c = heros[idx];

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % heros.length), 6500);
    return () => clearInterval(t);
  }, [paused, heros.length]);

  return (
    <div
      className="relative bg-white rounded-2xl shadow-lift p-5 md:p-6 border border-rule"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="eyebrow text-teal">Featured Work</div>
        <div className="flex items-center gap-3">
          <span className="eyebrow-sm">
            {String(idx + 1).padStart(2, "0")} / {String(heros.length).padStart(2, "0")}
          </span>
          <div className="flex gap-1">
            <button aria-label="Previous" onClick={() => setIdx((i) => (i - 1 + heros.length) % heros.length)} className="w-8 h-8 rounded-full border border-rule flex items-center justify-center hover:border-ink hover:text-ink text-muted transition-colors">←</button>
            <button aria-label="Next" onClick={() => setIdx((i) => (i + 1) % heros.length)} className="w-8 h-8 rounded-full border border-rule flex items-center justify-center hover:border-ink hover:text-ink text-muted transition-colors">→</button>
          </div>
        </div>
      </div>

      <Link to="/work/$slug" params={{ slug: c.slug }} className="block group">
        <div className="relative">
          <Placeholder {...(c.placeholders?.[0] ?? {})} aspectRatio="4 / 3" className="w-full rounded-xl" />
          <div className="absolute top-4 left-4"><Chip variant="ink">{c.category}</Chip></div>
          <div className="absolute bottom-4 right-4 eyebrow-sm" style={{ background: "rgb(26,31,46)", color: "#FFF8F6", padding: "6px 10px", borderRadius: 9999 }}>
            {c.period}
          </div>
        </div>

        <div className="mt-5 flex items-start justify-between gap-6">
          <div className="flex-1 min-w-0">
            <div className="eyebrow-sm text-teal">{c.company}</div>
            <h3 className="display text-2xl md:text-[30px] leading-[1.05] mt-2 text-ink group-hover:text-teal transition-colors">{c.title}</h3>
          </div>
          <span className="arr inline-block text-[20px] text-ink mt-1">→</span>
        </div>
      </Link>

      <div className="mt-6 flex gap-1.5">
        {heros.map((h, i) => (
          <button key={h.slug} onClick={() => setIdx(i)} aria-label={`Show ${h.company}`} className={`flex-1 h-[3px] rounded-full transition-colors ${i === idx ? "bg-teal" : "bg-rule hover:bg-muted"}`} />
        ))}
      </div>
    </div>
  );
}

export function FeaturedGrid() {
  const heros = CASE_STUDIES.filter((c) => c.kind === "hero");

  return (
    <section className="border-t border-rule">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-20 md:pt-24 pb-20 md:pb-24">
        <div className="flex items-end justify-between flex-wrap gap-6">
          <SectionHead kicker="2019 — 2026" title="Case Studies" />
        </div>

        <ul className="mt-12 border-t border-rule">
          {heros.map((c) => (
            <li key={c.slug}>
              <Link to="/work/$slug" params={{ slug: c.slug }} className="cs-card block border-b border-rule">
                <Reveal>
                  <div className="grid grid-cols-12 gap-6 py-9 md:py-11 px-1 md:px-4 items-baseline">
                    <div className="col-span-2 md:col-span-1 eyebrow-sm">{c.number}</div>
                    <div className="col-span-10 md:col-span-6">
                      <div className="eyebrow-sm text-teal">{c.company}</div>
                      <h3 className="display text-[28px] md:text-[44px] leading-[1.02] mt-2 text-ink">{c.title}</h3>
                    </div>
                    <div className="col-span-12 md:col-span-4 md:pl-6">
                      <p className="text-[15.5px] text-ink/80 leading-[1.55]">{c.hook}</p>
                      <div className="mt-4"><TagRow tags={c.tags} lead="teal" /></div>
                    </div>
                    <div className="col-span-12 md:col-span-1 md:text-right">
                      <span className="arr inline-block text-[18px] text-ink">→</span>
                    </div>
                  </div>
                </Reveal>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
