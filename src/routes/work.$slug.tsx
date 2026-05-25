// @ts-nocheck
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CASE_STUDIES, CS_BY_SLUG } from "../lib/portfolio-data";
import { Reveal, TagRow, SectionHead, Placeholder } from "../components/portfolio-ui";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const c = CS_BY_SLUG[params.slug];
    if (!c) throw notFound();
    return c;
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.company ?? "Case study"} — Amanda Hanggoro` },
      { name: "description", content: loaderData?.hook ?? "" },
      { property: "og:title", content: `${loaderData?.company ?? ""} — ${loaderData?.title ?? ""}` },
      { property: "og:description", content: loaderData?.hook ?? "" },
    ],
  }),
  component: CaseStudyPage,
});

function ArtifactCarousel({ items }: any) {
  if (!items || items.length === 0) return null;
  const [idx, setIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused || items.length < 2) return;
    const t = setInterval(() => setIdx((i) => (i + 1) % items.length), 5500);
    return () => clearInterval(t);
  }, [paused, items.length]);
  const p = items[idx];
  return (
    <div
      className="relative bg-white rounded-2xl shadow-lift p-5 md:p-6 border border-rule"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="eyebrow text-teal">Artifacts</div>
        <div className="flex items-center gap-3">
          <span className="eyebrow-sm">{String(idx + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}</span>
          <div className="flex gap-1">
            <button aria-label="Previous" onClick={() => setIdx((i) => (i - 1 + items.length) % items.length)} className="w-8 h-8 rounded-full border border-rule flex items-center justify-center hover:border-ink hover:text-ink text-muted transition-colors">←</button>
            <button aria-label="Next" onClick={() => setIdx((i) => (i + 1) % items.length)} className="w-8 h-8 rounded-full border border-rule flex items-center justify-center hover:border-ink hover:text-ink text-muted transition-colors">→</button>
          </div>
        </div>
      </div>

      <div className="placeholder w-full rounded-xl flex items-center justify-center overflow-hidden" style={{ aspectRatio: "4 / 3" }}>
        <div className="text-center px-6">
          <div className="eyebrow-sm">[ placeholder ]</div>
          <div className="display text-xl md:text-2xl mt-2 text-ink/75">{p.label}</div>
        </div>
      </div>
      {p.caption && <div className="mt-4 eyebrow-sm">Fig. — {p.caption}</div>}
      <div className="mt-5 flex gap-1.5">
        {items.map((_: any, i: number) => (
          <button key={i} onClick={() => setIdx(i)} className={`flex-1 h-[3px] rounded-full transition-colors ${i === idx ? "bg-teal" : "bg-rule hover:bg-muted"}`} />
        ))}
      </div>
    </div>
  );
}

function CaseHero({ c }: any) {
  return (
    <section className="border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-16 md:pb-20">
        <Reveal>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="eyebrow-sm text-muted">
              Case Study {c.number} <span className="dot"></span>
              <span className="text-teal">{c.company}</span>
            </div>
            <div className="eyebrow-sm text-muted">
              {c.role} <span className="dot"></span> {c.period} <span className="dot"></span> {c.geo}
            </div>
          </div>
        </Reveal>

        <div className="mt-10 md:mt-14 grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12 items-start">
          <div className="md:col-span-7">
            <Reveal delay={80}>
              <h1 className="display text-[44px] sm:text-[56px] md:text-[64px] lg:text-[76px] leading-[0.98] tracking-[-0.04em]">
                <span className="grad-text">{c.title}</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="display display-it mt-7 md:mt-8 text-[22px] md:text-[26px] text-ink/85 max-w-2xl leading-[1.25]">{c.hook}</p>
            </Reveal>
            <Reveal delay={200}>
              <div className="mt-8"><TagRow tags={c.tags} lead="teal" /></div>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={120}>
              <ArtifactCarousel items={c.placeholders} />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function TwoColSection({ kicker, title, body, side, children }: any) {
  return (
    <section className="border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <Reveal>
              <SectionHead kicker={kicker} title={title} />
              {side}
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={80}>
              {body && <p className="display text-2xl md:text-[28px] leading-snug text-ink max-w-3xl">{body}</p>}
              {children}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessTimeline({ steps }: any) {
  const n = Math.max(1, Math.min(steps.length, 6));
  const colsMap: any = { 1: "md:grid-cols-1", 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "md:grid-cols-4", 5: "md:grid-cols-5", 6: "md:grid-cols-6" };
  return (
    <ol className={`mt-10 grid grid-cols-1 ${colsMap[n]} gap-px bg-rule border border-rule`}>
      {steps.map((s: any, i: number) => (
        <li key={i} className="p-5 md:p-6" style={{ background: "#e5eaf6" }}>
          <div className="eyebrow-sm text-teal">Step {String(i + 1).padStart(2, "0")}</div>
          <div className="display text-xl md:text-2xl mt-3 text-ink leading-tight">{s.t}</div>
          <p className="mt-3 text-sm text-ink/75 leading-relaxed">{s.d}</p>
        </li>
      ))}
    </ol>
  );
}

function ElysiumTimeline({ items }: any) {
  return (
    <ol className="mt-12 relative">
      <div className="absolute left-[10px] md:left-[120px] top-2 bottom-2 w-px bg-rule" aria-hidden="true"></div>
      {items.map((it: any, i: number) => (
        <Reveal key={i} delay={i * 60}>
          <li className="relative pl-8 md:pl-[180px] pb-12 md:pb-14">
            <div className="absolute left-0 md:left-[112px] top-2 w-[18px] h-[18px] rounded-full bg-paper border-2 border-teal"></div>
            <div className="absolute left-0 md:left-0 -top-1 md:top-0 hidden md:block">
              <div className="display text-3xl md:text-4xl text-teal">{it.year}</div>
            </div>
            <div className="md:hidden eyebrow-sm text-teal mb-2">{it.year}</div>
            <h3 className="display text-2xl md:text-3xl text-ink">{it.title}</h3>
            <p className="mt-3 text-ink/80 leading-relaxed max-w-2xl">{it.body}</p>
          </li>
        </Reveal>
      ))}
    </ol>
  );
}

function NextNav({ current }: any) {
  const all = CASE_STUDIES;
  const idx = all.findIndex((x) => x.slug === current.slug);
  const next = all[(idx + 1) % all.length];
  const prev = all[(idx - 1 + all.length) % all.length];
  return (
    <section>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-3">
            <Link to="/" className="ulink eyebrow-sm">← Back to home</Link>
          </div>
          <div className="md:col-span-9 grid grid-cols-1 md:grid-cols-2 gap-6">
            <Link to="/work/$slug" params={{ slug: prev.slug }} className="cs-card block border border-rule p-6">
              <div className="eyebrow-sm text-muted">← Previous · {prev.number}</div>
              <div className="eyebrow-sm text-teal mt-4">{prev.company}</div>
              <div className="display text-2xl md:text-3xl mt-1">{prev.title}</div>
            </Link>
            <Link to="/work/$slug" params={{ slug: next.slug }} className="cs-card block border border-rule p-6 md:text-right">
              <div className="eyebrow-sm text-muted">Next · {next.number} →</div>
              <div className="eyebrow-sm text-teal mt-4">{next.company}</div>
              <div className="display text-2xl md:text-3xl mt-1">{next.title}</div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetricsBand({ c }: any) {
  if (!c.metrics) return null;
  return (
    <section className="border-y border-rule grad-signature text-paper">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <Reveal>
          <div className="eyebrow" style={{ color: "rgb(24,31,48)" }}>Outcome</div>
          <h2 className="display text-4xl md:text-6xl mt-4" style={{ color: "rgb(24,31,48)" }}>The numbers</h2>
        </Reveal>
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-12">
          {c.metrics.map((m: any, i: number) => (
            <Reveal key={i} delay={i * 80}>
              <div>
                <div className="metric-num text-7xl md:text-8xl" style={{ color: "rgb(24,31,48)" }}>{m.value}</div>
                <div className="mt-3 eyebrow" style={{ color: "rgb(24,31,48)" }}>{m.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function HeroCase({ c }: any) {
  const isElysium = c.slug === "elysium";
  return (
    <>
      <CaseHero c={c} />
      <TwoColSection kicker="Problem" title="What we were actually solving" body={c.problem} />
      {isElysium ? (
        <section className="border-b border-rule">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-4">
                <Reveal>
                  <SectionHead kicker="Journey" title="Seven years in progress" />
                  <p className="mt-6 text-ink/80 leading-relaxed">A directory that started as a community, became a one-page site, became a researched product, and now became a full-stack application with an AI ingestion pipeline behind it.</p>
                </Reveal>
              </div>
              <div className="md:col-span-8">
                <ElysiumTimeline items={c.timeline} />
              </div>
            </div>
          </div>
        </section>
      ) : (
        <section className="border-b border-rule">
          <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              <div className="md:col-span-4">
                <Reveal>
                  <SectionHead kicker="Process" title="How we got there" />
                  {c.team && (
                    <div className="mt-8">
                      <div className="eyebrow-sm text-muted">Team</div>
                      <p className="mt-2 text-ink/80 leading-relaxed">{c.team}</p>
                    </div>
                  )}
                </Reveal>
              </div>
              <div className="md:col-span-8">
                <Reveal delay={80}>
                  <ProcessTimeline steps={c.process} />
                </Reveal>
              </div>
            </div>
          </div>
        </section>
      )}
      <TwoColSection kicker="Solution" title="What shipped" body={c.solution} />
      <MetricsBand c={c} />
      <NextNav current={c} />
    </>
  );
}

function CaseStudyPage() {
  const c = Route.useLoaderData() as any;
  return <HeroCase c={c} />;
}
