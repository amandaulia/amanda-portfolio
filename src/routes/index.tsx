// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import { Reveal, Chip } from "../components/portfolio-ui";
import { FeaturedSpotlight, FeaturedGrid } from "../components/featured-grid";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Amanda Hanggoro — Product Manager" },
      { name: "description", content: "Product Manager with 5+ years shipping consumer, AI/ML, healthtech, and social-impact products across SEA, MENA, and the US." },
      { property: "og:title", content: "Amanda Hanggoro — Product Manager" },
      { property: "og:description", content: "Selected work 2019 — 2026." },
    ],
  }),
  component: Home,
});

function Hero() {
  return (
    <section className="relative border-b border-rule overflow-hidden grad-hero">
      <div className="pointer-events-none absolute -top-48 -right-32 w-[680px] h-[680px] rounded-full opacity-35" style={{ background: "radial-gradient(circle, rgba(100,130,202,0.7) 0%, transparent 55%)", filter: "blur(50px)" }} />
      <div className="pointer-events-none absolute -bottom-56 -left-40 w-[700px] h-[700px] rounded-full opacity-50" style={{ background: "radial-gradient(circle, rgba(224,193,211,0.85) 0%, transparent 55%)", filter: "blur(50px)" }} />

      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-14 items-start">
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 flex-wrap">
                <span className="eyebrow-sm">Jakarta, ID</span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="display mt-7 text-ink text-[56px] sm:text-[72px] md:text-[88px] lg:text-[104px] leading-[0.94] tracking-[-0.04em]">
                Amanda
                <br />
                <span className="display-it grad-text">Hanggoro</span>
              </h1>
            </Reveal>

            <Reveal delay={140}>
              <p className="mt-8 text-[19px] md:text-[21px] leading-[1.55] text-ink/85 max-w-xl">
                Product Manager with <span className="text-ink font-medium">5+ years</span> shipping consumer, AI/ML, healthtech, and social-impact products across <span className="text-ink font-medium">SEA, MENA, and the US</span>.
              </p>
              <p className="mt-4 text-[17px] leading-[1.6] text-muted max-w-xl">
                This is a record of past work including seven case studies in full. I also build independently, check it at <a href="https://github.com/amandaulia" target="_blank" rel="noreferrer" className="ulink text-ink">github.com/amandaulia</a>.
              </p>
            </Reveal>

            <Reveal delay={260}>
              <div className="mt-12 pt-6 border-t border-rule flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-muted">
                <span><span className="text-teal">●</span>&nbsp; Open to consulting &amp; advisory</span>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={120}>
              <FeaturedSpotlight />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Ticker() {
  const items = ["Consumer", "AI / ML", "Healthtech", "Edtech", "Fintech", "Climate", "Social Impact", "Enterprise"];
  return (
    <section className="grad-band border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-6 flex flex-wrap items-center gap-x-3 gap-y-2">
        <span className="eyebrow text-teal mr-2">Industries —</span>
        {items.map((it) => <Chip key={it} variant="outline">{it}</Chip>)}
      </div>
    </section>
  );
}

function Home() {
  return (
    <>
      <Hero />
      <Ticker />
      <FeaturedGrid />
    </>
  );
}
