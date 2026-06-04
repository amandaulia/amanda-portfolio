// @ts-nocheck
import { createFileRoute } from "@tanstack/react-router";
import { ArrowUp, BriefcaseBusiness, CircleUserRound, Newspaper, Sparkles, Trophy, Users } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { SKILLS, EXPERIENCE, PUBLICATIONS, MENTORING, COMMUNITY, ACHIEVEMENTS } from "../lib/portfolio-data";
import { Reveal, Chip, SectionHead } from "../components/portfolio-ui";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Amanda Hanggoro" },
      {
        name: "description",
        content:
          "Product Manager · Building products that move people, from behavior change to operational transformation.",
      },
      { property: "og:title", content: "About — Amanda Hanggoro" },
      { property: "og:description", content: "Experience, publications, mentoring, community, and awards." },
    ],
  }),
  component: About,
});

function AboutHero() {
  return (
    <section className="relative border-b border-rule overflow-hidden grad-hero" id="about">
      <div
        className="pointer-events-none absolute -top-40 -right-32 w-[600px] h-[600px] rounded-full opacity-35"
        style={{
          background: "radial-gradient(circle, rgba(100,130,202,0.7) 0%, transparent 55%)",
          filter: "blur(50px)",
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-48 -left-40 w-[640px] h-[640px] rounded-full opacity-50"
        style={{
          background: "radial-gradient(circle, rgba(224,193,211,0.85) 0%, transparent 55%)",
          filter: "blur(50px)",
        }}
      />
      <div className="relative max-w-[1280px] mx-auto px-6 md:px-10 pt-14 md:pt-20 pb-12 md:pb-14">
        <Reveal>
          <div className="flex items-center gap-3 flex-wrap">
            <Chip variant="teal" dotColor="#0E4D45">
              Currently — PM at Wego
            </Chip>
            <span className="eyebrow-sm">Jakarta, ID</span>
          </div>
        </Reveal>
        <Reveal delay={80}>
          <div className="hidden md:flex items-start gap-8 mt-7">
            <div className="flex-shrink-0">
              <img
                src="https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Headshot.jpeg"
                alt="Amanda Hanggoro"
                className="w-36 h-36 lg:w-44 lg:h-44 rounded-full object-cover object-top shadow-warm border-2 border-rule"
              />
            </div>
            <div className="flex-1 min-w-0">
              <h1 className="display text-[80px] leading-[0.96] tracking-[-0.04em]">
                Amanda <span className="display-it grad-text">Hanggoro</span>
              </h1>
              <p className="mt-8 text-[20px] leading-[1.6] text-ink/85">
                Product Manager with <span className="text-ink font-medium">5+ years</span> across the public and
                private sector in SaaS, travel, healthcare, climate, education, and finance. Track record of driving
                conversion, retention, and operational efficiency across{" "}
                <span className="text-ink font-medium">Southeast Asia, MENA, and the United States.</span>
              </p>
              <p className="mt-5 text-[17px] leading-[1.6] text-muted">
                I also build databases, automations, and full-stack applications independently, check it at{" "}
                <a href="https://github.com/amandaulia" target="_blank" rel="noreferrer" className="ulink text-ink">
                  github.com/amandaulia
                </a>
                .
              </p>
            </div>
          </div>
        </Reveal>
        <div className="mt-7 md:hidden">
          <div className="flex items-start gap-4">
            <Reveal delay={120}>
              <div className="mt-1 h-24 w-24 flex-shrink-0 overflow-hidden rounded-full shadow-warm border-2 border-rule">
                <img
                  src="https://oiajuwfpkxcvklxwyriz.supabase.co/storage/v1/object/public/images/Headshot.jpeg"
                  alt="Amanda Hanggoro"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </Reveal>
            <Reveal delay={80}>
              <h1 className="display min-w-0 text-[44px] leading-[0.96] tracking-[-0.04em]">
                Amanda <span className="display-it grad-text">Hanggoro</span>
              </h1>
            </Reveal>
          </div>
          <Reveal delay={140}>
            <div className="mt-6">
              <p className="text-[16px] leading-[1.55] text-ink/85">
                Product Manager with <span className="text-ink font-medium">5+ years</span> across the public and
                private sector in SaaS, travel, healthcare, climate, education, and finance. Track record of driving
                conversion, retention, and operational efficiency across{" "}
                <span className="text-ink font-medium">Southeast Asia, MENA, and the United States.</span>
              </p>
              <p className="mt-4 text-[15px] leading-[1.55] text-muted">
                I also build databases, automations, and full-stack applications independently, check it at{" "}
                <a href="https://github.com/amandaulia" target="_blank" rel="noreferrer" className="ulink text-ink">
                  github.com/amandaulia
                </a>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function SectionShortcuts() {
  const links = [
    { id: "about", href: "#about", label: "Profile", Icon: CircleUserRound },
    { id: "experience", href: "#experience", label: "Experience", Icon: BriefcaseBusiness },
    { id: "achievements", href: "#achievements", label: "Achievements", Icon: Trophy },
    { id: "press-publications", href: "#press-publications", label: "Press & Publications", Icon: Newspaper },
    { id: "mentoring-community", href: "#mentoring-community", label: "Mentoring & Community", Icon: Users },
    { id: "toolkit", href: "#toolkit", label: "Toolkit", Icon: Sparkles },
  ];
  const [activeId, setActiveId] = useState<string | null>("experience");
  const [expanded, setExpanded] = useState(false);
  const [hasScrolledBelowFold, setHasScrolledBelowFold] = useState(false);
  const activeLink = activeId ? links.find((link) => link.id === activeId) : null;

  useEffect(() => {
    const getSections = () => links.map((link) => document.getElementById(link.id)).filter(Boolean);
    const updateActiveFromScroll = () => {
      const hasScrolled = window.scrollY > 24;
      setHasScrolledBelowFold(hasScrolled);
      if (!hasScrolled) {
        setExpanded(false);
      }
      const anchorY = window.scrollY + window.innerHeight * 0.45;
      const sections = getSections();
      const lastSection = sections[sections.length - 1];
      if (lastSection && anchorY > lastSection.offsetTop + lastSection.offsetHeight) {
        setExpanded(false);
        setActiveId(null);
        return;
      }
      const passed = sections.filter((section) => section.offsetTop <= anchorY);
      const current = passed[passed.length - 1] ?? sections[0];
      if (current?.id) setActiveId(current.id);
    };
    const syncFromHash = () => {
      const hash = window.location.hash.replace("#", "");
      if (links.some((link) => link.id === hash)) setActiveId(hash);
      else updateActiveFromScroll();
    };
    syncFromHash();
    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll);
    window.addEventListener("hashchange", syncFromHash);
    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, []);

  const visibleLinks = expanded && activeLink ? links : activeLink ? [activeLink] : [];
  if (!hasScrolledBelowFold) return null;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2 pointer-events-none md:bottom-8"
      onPointerEnter={(e) => {
        if (e.pointerType === "mouse" && activeLink) setExpanded(true);
      }}
      onPointerLeave={(e) => {
        if (e.pointerType === "mouse") setExpanded(false);
      }}
      onFocus={() => {
        if (activeLink) setExpanded(true);
      }}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setExpanded(false);
      }}
    >
      <nav
        aria-label="About page sections"
        className="pointer-events-auto flex flex-col items-center gap-2 rounded-[28px] border border-rule p-2 shadow-lift backdrop-blur transition-all"
        style={{
          background:
            "linear-gradient(90deg, rgba(198,186,224,0.76) 0%, rgba(238,207,222,0.76) 50%, rgba(198,186,224,0.76) 100%)",
          boxShadow: "0 18px 44px -16px rgba(28, 30, 46, 0.34), 0 8px 22px -12px rgba(163, 82, 81, 0.34)",
        }}
      >
        {!activeLink && (
          <button
            type="button"
            aria-label="Scroll to top"
            onClick={() => {
              window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="group flex h-8 w-8 items-center justify-center rounded-full text-ink/75 transition-colors hover:bg-[#eddce6] hover:text-ink focus:bg-[#eddce6] focus:text-ink focus:outline-none"
            style={{ background: "transparent", color: "inherit" }}
          >
            <ArrowUp className="h-4 w-4" aria-hidden="true" />
          </button>
        )}
        {visibleLinks.map(({ Icon, ...link }) =>
          expanded ? (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeId === link.id ? "location" : undefined}
              onClick={() => {
                setActiveId(link.id);
                setExpanded(false);
              }}
              className="group flex min-h-11 items-center justify-end gap-3 rounded-full px-3 py-2 text-[13px] font-medium text-ink/75 transition-colors hover:bg-[#eddce6] hover:text-ink focus:bg-[#eddce6] focus:text-ink focus:outline-none"
            >
              <span className="whitespace-nowrap">{link.label}</span>
              <span className="flex h-7 w-7 items-center justify-center rounded-full">
                <Icon className="h-4 w-4" aria-hidden="true" />
              </span>
            </a>
          ) : (
            <button
              key={link.href}
              type="button"
              aria-label="Open about section shortcuts"
              onClick={() => setExpanded(true)}
              className="group flex min-h-8 items-center justify-center gap-2 rounded-full px-3 py-1.5 text-[12px] font-medium text-ink/75 transition-colors hover:bg-[#eddce6] hover:text-ink focus:bg-[#eddce6] focus:text-ink focus:outline-none"
              style={{ background: "transparent", color: "inherit" }}
            >
              <span className="whitespace-nowrap">{link.label}</span>
              <span className="flex h-5 w-5 items-center justify-center rounded-full">
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
              </span>
            </button>
          ),
        )}
        {!expanded && (
          <button
            type="button"
            className="sr-only"
            onClick={() => setExpanded(true)}
            aria-label="Expand about section shortcuts"
          />
        )}
      </nav>
    </div>
  );
}

function ExperienceSection() {
  return (
    <section id="experience" className="scroll-mt-28 border-b border-rule">
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
              <li
                key={i}
                className={`grid grid-cols-12 gap-6 py-7 md:py-8 ${i === EXPERIENCE.length - 1 ? "" : "border-b border-rule"}`}
              >
                <div className="col-span-12 md:col-span-3">
                  <div className="eyebrow-sm">{x.period}</div>
                  <div className="text-[13px] text-muted mt-1">{x.location}</div>
                </div>
                <div className="col-span-12 md:col-span-9">
                  <div className="flex items-baseline gap-3 flex-wrap">
                    <h3 className="display text-[22px] md:text-[26px] text-ink">{x.company}</h3>
                    {x.current && (
                      <Chip variant="teal" dotColor="#0E4D45">
                        Current
                      </Chip>
                    )}
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
    <section id="press-publications" className="scroll-mt-28 border-b border-rule" style={{ background: "#fff8f6" }}>
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal>
          <SectionHead kicker="Press & Publications" title="Appearances" tone="ochre" />
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px bg-rule border border-rule">
          {PUBLICATIONS.map((p: any, i: number) => (
            <li key={i} style={{ background: "#e5eaf6" }}>
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
    <section id="mentoring-community" className="scroll-mt-28 border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal>
          <SectionHead kicker="Mentoring & Community" title="Volunteering activities" />
          <p className="mt-5 text-[16px] text-ink/75 max-w-2xl leading-[1.6]">
            Where I've given time outside paid work to mentoring aspiring product managers, building community around
            mental health, and contributing to international-development conversations.
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
          <a
            href="https://www.linkedin.com/in/amanda-aulia/details/volunteering-experiences/"
            target="_blank"
            rel="noreferrer"
            className="ulink text-ink"
          >
            LinkedIn ↗
          </a>
          .
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  const sortedAchievements = [...ACHIEVEMENTS].sort((a: any, b: any) => Number(b.year) - Number(a.year));

  return (
    <section id="achievements" className="scroll-mt-28 border-b border-rule grad-signature text-ink">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-20 md:py-24">
        <Reveal>
          <div className="eyebrow text-ink/65">Achievements</div>
          <h2 className="display text-4xl md:text-6xl mt-4 text-ink">Awards and honors</h2>
        </Reveal>
        <ul className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {sortedAchievements.map((a: any, i: number) => (
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
    <section id="toolkit" className="scroll-mt-28">
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
                      {(items as string[]).map((s) => (
                        <li key={s}>
                          <Chip>{s}</Chip>
                        </li>
                      ))}
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
                    <div className="display text-[22px] md:text-[26px]">
                      NYU Stern · Leonard N. Stern School of Business
                    </div>
                    <div className="text-[14px] text-muted mt-1">
                      MBA, Tech MBA Program · Dean's List · Beta Gamma Sigma Honor
                    </div>
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
                  <a href="mailto:amanda.hanggoro@gmail.com" className="ulink text-[14px] font-medium">
                    →
                  </a>
                </li>
                <li className="py-5 flex items-center justify-between gap-6">
                  <div>
                    <div className="eyebrow-sm">LinkedIn</div>
                    <div className="display text-[22px] md:text-[26px] mt-1">/in/amanda-aulia</div>
                  </div>
                  <a
                    href="https://www.linkedin.com/in/amanda-aulia"
                    target="_blank"
                    rel="noreferrer"
                    className="ulink text-[14px] font-medium"
                  >
                    ↗
                  </a>
                </li>
                <li className="py-5 flex items-center justify-between gap-6">
                  <div>
                    <div className="eyebrow-sm">GitHub</div>
                    <div className="display text-[22px] md:text-[26px] mt-1">/amandaulia</div>
                  </div>
                  <a
                    href="https://github.com/amandaulia"
                    target="_blank"
                    rel="noreferrer"
                    className="ulink text-[14px] font-medium"
                  >
                    ↗
                  </a>
                </li>
              </ul>
              <a
                href="mailto:amanda.hanggoro@gmail.com"
                className="mt-10 inline-block text-[14px] font-medium bg-ink text-paper px-5 py-3 rounded-full hover:bg-teal transition-colors"
              >
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
      <SectionShortcuts />
      <ExperienceSection />
      <AchievementsSection />
      <PublicationsSection />
      <CommunitySection />
      <ToolkitContactSection />
    </>
  );
}
