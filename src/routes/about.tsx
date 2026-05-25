// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import { SKILLS, EXPERIENCE, PUBLICATIONS, MENTORING, COMMUNITY, ACHIEVEMENTS } from "../lib/portfolio-data";
import { Reveal, Chip, SectionHead } from "../components/portfolio-ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Amanda Hanggoro" },
      { name: "description", content: "Product Manager · NYU Stern Tech MBA · Building products that move people, from behavior change to operational transformation." },
      { property: "og:title", content: "About — Amanda Hanggoro" },
      { property: "og:description", content: "Experience, publications, mentoring, community, and awards." },
    ],
  }),
  component: About,
});

function AboutHero() {
  return (
    <section className="relative border-b border-rule overflow-hidden grad-hero">
      <div className="pointer-events-none absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full opacity-35" style={{ background: "radial-gradient(circle, rgba(100,130,202,0.7) 0%, transparent 55%)", filter: "blur(50px)" }} />
      <div className="pointer-events-none absolute -bottom-48 -left-40 w-[640px] h-[640px] rounded-full opacity-50" style={{ background: "radial-gradient(circle, rgba(224,193,211,0.85) 0%, transparent 55%)", filter: "blur(50px)" }} />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-16 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <Reveal>
              <div className="flex items-center gap-3 flex-wrap">
                <Chip variant="teal" dotColor="#0E4D45">Currently — PM at Wego</Chip>
                <span className="eyebrow-sm">Jakarta, ID</span>
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display mt-7 text-[48px] md:text-[80px] leading-[0.96] tracking-[-0.04em]">
                Amanda
                <br />
                <span className="display-it grad-text">Hanggoro</span>
              </h1>
            </Reveal>
            <Reveal delay={140}>
              <p className="mt-8 text-[19px] md:text-[20px] leading-[1.6] text-ink/85 max-w-xl">
                Product Manager with <span className="text-ink font-medium">5+ years</span> across the public and private sector in SaaS, travel, healthcare, climate, education, and finance. Track record of driving conversion, retention, and operational efficiency across <span className="text-ink font-medium">Southeast Asia, MENA, and the United States.</span>
              </p>
              <p className="mt-5 text-[17px] leading-[1.6] text-muted max-w-xl">
                NYU Stern Tech MBA <span className="dot"></span> Dean's List, Beta Gamma Sigma Honor. I also build databases, automations, and full-stack applications independently, check it at <a href="https://github.com/amandaulia" target="_blank" rel="noreferrer" className="ulink text-ink">github.com/amandaulia</a>.
              </p>
            </Reveal>
          </div>
          <div className="md:col-span-5">
            <Reveal delay={120}>
              <div className="placeholder w-full overflow-hidden rounded-md shadow-warm border border-rule flex items-center justify-center" style={{ aspectRatio: "4 / 5" }}>
                <div className="text-center px-6">
                  <div className="eyebrow-sm">[ portrait ]</div>
                  <div className="display text-2xl md:text-3xl mt-2 text-ink/75">Amanda Hanggoro</div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function PullQuote() {
  return (
    <section className="border-b border-rule grad-warm">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal>
          <div className="eyebrow text-ochre">Working principle —</div>
          <p className="display mt-6 text-[34px] md:text-[52px] leading-[1.06] max-w-5xl">
            I try to do <em className="display-it">the smallest thing that proves the largest claim</em>, and then I scale what survives.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section className="border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal>
          <div className="flex items-end justify-between flex-wrap gap-6">
            <SectionHead kicker="Experience" title="Professional journey" />
            <div className="eyebrow-sm">{EXPERIENCE.length} roles · 2018 — present</div>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <ol className="mt-10 border-t border-rule">
            {EXPERIENCE.map((x: any, i: number) => (
              <li key={i} className={`grid grid-cols-12 gap-6 py-7 md:py-8 ${i === EXPERIENCE.length - 1 ? "" : "border-b border-rule"}`}>
                <div className="col-span-12 md:col-span-3">
                  <div className="eyebrow-sm">{x.period}</div>
                  <div className="text-[13px] text-muted mt-1">{x.location}</div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="display text-[22px] md:text-[26px] text-ink">{x.company}</h3>
                    {x.current && <Chip variant="teal" dotColor="#0E4D45">Current</Chip>}
                    {!x.current && x.tag && <Chip variant={x.accent === "ochre" ? "ochre" : "solid"}>{x.tag}</Chip>}
                  </div>
                  <div className="mt-1 text-[15px] text-ink/85 font-medium">{x.role}</div>
                  <p className="mt-3 text-[15.5px] leading-[1.6] text-ink/75 max-w-3xl">{x.note}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}

function PublicationsSection() {
  return (
    <section className="border-b border-rule grad-band">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal><SectionHead kicker="Press & Publications" title="Appearances" tone="ochre" /></Reveal>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
          {PUBLICATIONS.map((p: any, i: number) => (
            <li key={i} className="bg-paper">
              <a href={p.href} target="_blank" rel="noreferrer" className="cs-card block h-full p-7 md:p-8">
                <Reveal delay={i * 80}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="eyebrow-sm text-ochre">{p.source}</div>
                    <span className="arr text-[16px]">↗</span>
                  </div>
                  <h3 className="display text-[24px] md:text-[28px] leading-[1.1] mt-5 text-ink">{p.title}</h3>
                  <p className="mt-4 text-[15px] leading-[1.55] text-ink/75">{p.excerpt}</p>
                  <div className="mt-6 eyebrow-sm">{p.date}</div>
                </Reveal>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function CommunitySection() {
  const mentoringTints = [
    "linear-gradient(135deg, #FFF8F6 0%, #FDE6E4 100%)",
    "linear-gradient(135deg, #FFF8F6 0%, #E0E7F4 100%)",
    "linear-gradient(135deg, #FFF8F6 0%, #F5DDE7 100%)",
    "linear-gradient(135deg, #FFF8F6 0%, #ECE0EC 100%)",
  ];
  const communityTints = [
    "linear-gradient(135deg, #FFF8F6 0%, #E0E7F4 100%)",
    "linear-gradient(135deg, #FFF8F6 0%, #FDE6E4 100%)",
    "linear-gradient(135deg, #FFF8F6 0%, #ECE0EC 100%)",
    "linear-gradient(135deg, #FFF8F6 0%, #F5DDE7 100%)",
  ];
  return (
    <section className="border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal>
          <SectionHead kicker="Mentoring & Community" title="Volunteering activities" />
          <p className="mt-5 text-[16px] text-ink/75 max-w-2xl leading-[1.6]">
            Where I've given time outside paid work to mentoring aspiring product managers, building community around mental health, and contributing to international-development conversations.
          </p>
        </Reveal>

        <Reveal delay={80}>
          <div className="mt-14 flex items-baseline justify-between flex-wrap gap-3">
            <div className="eyebrow text-teal">Mentoring — 19 mentees to date</div>
            <div className="eyebrow-sm">2021 — 2026</div>
          </div>
        </Reveal>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
          {MENTORING.map((m: any, i: number) => (
            <li key={i} className="p-7 md:p-8" style={{ background: mentoringTints[i % mentoringTints.length] }}>
              <Reveal delay={i * 60}>
                <div className="flex items-start justify-between gap-4">
                  <div className="eyebrow-sm text-teal">{m.org}</div>
                  <div className="eyebrow-sm">{m.period}</div>
                </div>
                <h3 className="display text-[22px] md:text-[26px] leading-[1.15] mt-3 text-ink">{m.title}</h3>
                <p className="mt-3 text-[15px] leading-[1.6] text-ink/80">{m.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <Reveal delay={120}>
          <div className="mt-16 flex items-baseline justify-between flex-wrap gap-3">
            <div className="eyebrow text-ochre">Community & Leadership</div>
            <div className="eyebrow-sm">2019 — present</div>
          </div>
        </Reveal>
        <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-px bg-rule border border-rule">
          {COMMUNITY.map((c: any, i: number) => (
            <li key={i} className="p-7 md:p-9" style={{ background: communityTints[i % communityTints.length] }}>
              <Reveal delay={i * 60}>
                <div className="eyebrow-sm text-teal">{c.org}</div>
                <h3 className="display text-[22px] md:text-[26px] leading-[1.15] mt-2 text-ink">{c.title}</h3>
                <div className="mt-2 text-[13px] text-muted">{c.period}</div>
                <p className="mt-4 text-[15px] leading-[1.6] text-ink/80">{c.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="mt-10 text-[14px] text-muted">
          Full details on{" "}
          <a href="https://www.linkedin.com/in/amanda-aulia/details/volunteering-experiences/" target="_blank" rel="noreferrer" className="ulink text-ink">LinkedIn ↗</a>.
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section className="border-b border-rule grad-signature text-ink">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal>
          <div className="eyebrow text-ink/65">Achievements</div>
          <h2 className="display text-4xl md:text-6xl mt-4 text-ink">Awards and honors</h2>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {ACHIEVEMENTS.map((a: any, i: number) => (
            <li key={i}>
              <Reveal delay={i * 60}>
                <div className="flex items-start gap-5 py-2 border-b border-ink/15">
                  <div className="display text-[28px] md:text-[32px] text-ink/70 min-w-[64px]">{a.year}</div>
                  <div>
                    <div className="display text-[22px] md:text-[24px] text-ink">{a.title}</div>
                    <div className="mt-1 text-[14px] text-ink/65">{a.org}</div>
                  </div>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ToolkitContactSection() {
  return (
    <section>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-14">
          <div className="md:col-span-6">
            <Reveal>
              <SectionHead kicker="Toolkit" title="What I utilized to build" />
              <div className="mt-10 space-y-8">
                {Object.entries(SKILLS).map(([group, items]) => (
                  <div key={group}>
                    <div className="eyebrow-sm text-ochre">{group}</div>
                    <ul className="mt-3 flex flex-wrap gap-2">
                      {(items as string[]).map((s) => <li key={s}><Chip>{s}</Chip></li>)}
                    </ul>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-14">
                <SectionHead kicker="Education" />
                <div className="mt-4 space-y-5">
                  <div>
                    <div className="display text-[22px] md:text-[26px]">NYU Stern · Leonard N. Stern School of Business</div>
                    <div className="text-[14px] text-muted mt-1">MBA, Tech MBA Program · Dean's List · Beta Gamma Sigma Honor</div>
                    <div className="text-[13px] text-muted mt-0.5">May 2023 — May 2024 · New York, USA</div>
                  </div>
                  <div>
                    <div className="display text-[22px] md:text-[26px]">Bandung Institute of Technology</div>
                    <div className="text-[14px] text-muted mt-1">B.B.M. Finance · Cum Laude</div>
                    <div className="text-[13px] text-muted mt-0.5">Aug 2017 — Oct 2020 · Bandung, ID</div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-6">
            <Reveal>
              <SectionHead kicker="Contact" title="Say hello" />
              <ul className="mt-10 divide-y divide-rule border-y border-rule">
                <li className="py-5 flex items-center justify-between gap-6">
                  <div>
                    <div className="eyebrow-sm">Email</div>
                    <div className="display text-[22px] md:text-[26px] mt-1">amanda.hanggoro@gmail.com</div>
                  </div>
                  <a href="mailto:amanda.hanggoro@gmail.com" className="ulink text-[14px] font-medium">→</a>
                </li>
                <li className="py-5 flex items-center justify-between gap-6">
                  <div>
                    <div className="eyebrow-sm">LinkedIn</div>
                    <div className="display text-[22px] md:text-[26px] mt-1">/in/amanda-aulia</div>
                  </div>
                  <a href="https://www.linkedin.com/in/amanda-aulia" target="_blank" rel="noreferrer" className="ulink text-[14px] font-medium">↗</a>
                </li>
                <li className="py-5 flex items-center justify-between gap-6">
                  <div>
                    <div className="eyebrow-sm">GitHub</div>
                    <div className="display text-[22px] md:text-[26px] mt-1">/amandaulia</div>
                  </div>
                  <a href="https://github.com/amandaulia" target="_blank" rel="noreferrer" className="ulink text-[14px] font-medium">↗</a>
                </li>
              </ul>
              <a href="mailto:amanda.hanggoro@gmail.com" className="mt-10 inline-block text-[14px] font-medium bg-ink text-paper px-5 py-3 rounded-full hover:bg-teal transition-colors">
                Start a conversation →
              </a>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <>
      <AboutHero />
      <PullQuote />
      <ExperienceSection />
      <PublicationsSection />
      <CommunitySection />
      <AchievementsSection />
      <ToolkitContactSection />
    </>
  );
}
