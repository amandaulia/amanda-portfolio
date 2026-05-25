// @ts-nocheck
import { useEffect, useRef } from "react";

export function Reveal({ children, as: As = "div", delay = 0, className = "", ...rest }: any) {
  const ref = useRef<any>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setTimeout(() => el.classList.add("in"), delay);
            io.unobserve(el);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);
  return (
    <As ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </As>
  );
}

export function Chip({ children, variant = "solid", dotColor }: any) {
  const cls =
    variant === "outline" ? "chip chip-outline" :
    variant === "teal" ? "chip chip-teal" :
    variant === "ochre" ? "chip chip-ochre" :
    variant === "lavender" ? "chip chip-lavender" :
    variant === "sage" ? "chip chip-sage" :
    variant === "sky" ? "chip chip-sky" :
    variant === "rose" ? "chip chip-rose" :
    variant === "serenity" ? "chip chip-serenity" :
    variant === "ink" ? "chip chip-ink" :
    "chip";
  return (
    <span className={cls}>
      {dotColor && <span className="chip-dot" style={{ background: dotColor }}></span>}
      {children}
    </span>
  );
}

export function TagRow({ tags = [], lead = "teal", size = "md" }: any) {
  if (!tags || tags.length === 0) return null;
  return (
    <div className={`flex flex-wrap gap-2 ${size === "sm" ? "scale-[0.95] origin-left" : ""}`}>
      {tags.map((t: string, i: number) => (
        <Chip key={t} variant={i === 0 ? lead : "solid"}>{t}</Chip>
      ))}
    </div>
  );
}

export function Placeholder({ label, caption, h = 320, img }: any) {
  return (
    <figure className="reveal">
      <div className={`${img ? "bg-card" : "placeholder"} w-full rounded-sm flex items-center justify-center overflow-hidden`} style={{ height: h }}>
        {img ? (
          <img src={img} alt={label} className="w-full h-full object-cover object-top" />
        ) : (
          <div className="text-center px-6">
            <div className="eyebrow-sm">[ placeholder ]</div>
            <div className="display text-2xl md:text-3xl mt-2 text-ink/80">{label}</div>
          </div>
        )}
      </div>
      {caption && <figcaption className="mt-3 eyebrow-sm">Fig. — {caption}</figcaption>}
    </figure>
  );
}

export function SectionHead({ kicker, title, className = "", tone = "teal" }: any) {
  const kickerColor = tone === "ochre" ? "text-ochre" : tone === "ink" ? "text-ink" : "text-teal";
  return (
    <div className={className}>
      {kicker && <div className={`eyebrow ${kickerColor}`}>{kicker}</div>}
      {title && <h2 className="display text-4xl md:text-5xl mt-3 text-ink">{title}</h2>}
    </div>
  );
}
