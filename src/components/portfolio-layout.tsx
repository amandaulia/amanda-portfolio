// @ts-nocheck
import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowUp, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

function NavItem({ to, children, exact = false }: any) {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const isActive = exact ? path === to : path === to || path.startsWith(to + "/");
  const base = "ulink text-[14px] font-medium transition-colors";
  return (
    <Link to={to} className={`${base} ${isActive ? "text-ink" : "text-ink/65 hover:text-ink"}`}>
      {children}
    </Link>
  );
}

export function TopNav() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [path]);

  return (
    <header className="sticky top-0 z-40 bg-paper/85 backdrop-blur supports-[backdrop-filter]:bg-paper/70 border-b border-rule">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="group flex items-baseline gap-3">
          <span className="display text-[22px] md:text-[24px] tracking-[-0.04em] text-ink">Amanda Hanggoro</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavItem to="/" exact>
            Works
          </NavItem>
          <NavItem to="/about">About</NavItem>
          <a
            href="mailto:amanda.hanggoro@gmail.com"
            className="text-[13px] font-medium bg-ink text-paper px-4 py-2 rounded-full hover:bg-teal transition-colors"
          >
            Get In Touch
          </a>
        </nav>

        <button
          className="md:hidden inline-flex h-10 w-10 items-center justify-center text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          style={{ backgroundColor: "transparent", color: "#1A1F2E" }}
        >
          {open ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-rule bg-paper">
          <div className="px-6 py-5 flex flex-col gap-4">
            <NavItem to="/" exact>
              Works
            </NavItem>
            <NavItem to="/about">About</NavItem>
            <a href="mailto:amanda.hanggoro@gmail.com" className="text-[13px] font-medium text-teal">
              amanda.hanggoro@gmail.com
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-32 border-t border-rule bg-card/40">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10 py-14">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <p className="display text-3xl md:text-[42px] mt-4 max-w-xl leading-[1.05]">
              Building products that move people, from <em className="display-it">behavior change</em> to{" "}
              <em className="display-it">operational transformation.</em>
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow-sm">Elsewhere</div>
            <ul className="mt-4 space-y-2 text-[15px]">
              <li>
                <a className="ulink" href="https://www.linkedin.com/in/amanda-aulia" target="_blank" rel="noreferrer">
                  LinkedIn
                </a>
              </li>
              <li>
                <a className="ulink" href="https://github.com/amandaulia" target="_blank" rel="noreferrer">
                  GitHub
                </a>
              </li>
              <li>
                <a className="ulink" href="mailto:amanda.hanggoro@gmail.com">
                  Email
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow-sm">Index</div>
            <ul className="mt-4 space-y-2 text-[15px]">
              <li>
                <Link className="ulink" to="/">
                  Works
                </Link>
              </li>
              <li>
                <Link className="ulink" to="/about">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col md:flex-row justify-between gap-4 eyebrow-sm">
          <div>© {new Date().getFullYear()} Amanda Hanggoro · Jakarta, ID</div>
          <div></div>
        </div>
      </div>
    </footer>
  );
}

export function useScrollTopOnRoute() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
  }, [path]);
}

export function ScrollToTopButton() {
  const path = useRouterState({ select: (s) => s.location.pathname });
  const [visible, setVisible] = useState(false);
  const hasSectionShortcuts = path === "/about" || path.startsWith("/work/");

  useEffect(() => {
    const updateVisibility = () => {
      const pageCanScroll = document.documentElement.scrollHeight > window.innerHeight + 24;
      setVisible(pageCanScroll && window.scrollY > 240);
    };

    updateVisibility();
    window.addEventListener("scroll", updateVisibility, { passive: true });
    window.addEventListener("resize", updateVisibility);
    return () => {
      window.removeEventListener("scroll", updateVisibility);
      window.removeEventListener("resize", updateVisibility);
    };
  }, [path]);

  if (hasSectionShortcuts || !visible) return null;

  return (
    <button
      type="button"
      aria-label="Scroll to top"
      onClick={() => {
        window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}`);
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="fixed bottom-6 left-1/2 z-50 flex h-12 w-12 -translate-x-1/2 items-center justify-center rounded-full border border-rule text-ink/75 shadow-lift backdrop-blur transition-colors hover:bg-[#eddce6] hover:text-ink focus:bg-[#eddce6] focus:text-ink focus:outline-none md:bottom-8"
      style={{
        background:
          "linear-gradient(90deg, rgba(198,186,224,0.76) 0%, rgba(238,207,222,0.76) 50%, rgba(198,186,224,0.76) 100%)",
        color: "rgba(28, 30, 46, 0.75)",
        boxShadow: "0 18px 44px -16px rgba(28, 30, 46, 0.34), 0 8px 22px -12px rgba(163, 82, 81, 0.34)",
      }}
    >
      <ArrowUp className="h-5 w-5" aria-hidden="true" />
    </button>
  );
}
