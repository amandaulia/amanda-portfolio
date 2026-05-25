// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import { Reveal } from "../components/portfolio-ui";
import { FeaturedGrid } from "../components/featured-grid";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Amanda Hanggoro" },
      { name: "description", content: "Eight projects across consumer tech, AI/ML, healthtech, social impact, enterprise and fintech." },
      { property: "og:title", content: "Work — Amanda Hanggoro" },
      { property: "og:description", content: "Selected work 2019 — 2026." },
    ],
  }),
  component: WorkIndex,
});

function WorkIndex() {
  return (
    <section>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 pt-16 md:pt-20 pb-10">
        <Reveal>
          <div className="eyebrow text-teal">CASE STUDIES</div>
          <h1 className="display text-[44px] md:text-[80px] leading-[0.98] mt-4 tracking-[-0.04em]">
            Selected work
            <br />
            <span className="display-it">2019 — 2026</span>
          </h1>
          <p className="mt-6 text-[17px] text-ink/80 max-w-2xl leading-[1.6]">
            Eight projects across consumer tech, AI/ML, healthtech, social impact, enterprise and fintech. Four case studies in full, four shorter snapshots.
          </p>
        </Reveal>
      </div>
      <FeaturedGrid />
    </section>
  );
}
