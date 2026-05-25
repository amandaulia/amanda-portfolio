// @ts-nocheck
import { Link, useRouterState } from "@tanstack/react-router";
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
          <span className="display text-[22px] md:text-[24px] tracking-[-0.04em] text-ink">
            Amanda Hanggoro
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavItem to="/" exact>Home</NavItem>
          <NavItem to="/work">Work</NavItem>
          <NavItem to="/about">About</NavItem>
          <a href="mailto:amanda.hanggoro@gmail.com" className="text-[13px] font-medium bg-ink text-paper px-4 py-2 rounded-full hover:bg-teal transition-colors">
            Get In Touch
          </a>
        </nav>

        <button className="md:hidden text-[13px] font-medium" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? "Close" : "Menu"}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-rule bg-paper">
          <div className="px-6 py-5 flex flex-col gap-4">
            <NavItem to="/" exact>Home</NavItem>
            <NavItem to="/work">Work</NavItem>
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
              Building products that move people, from <em className="display-it">behavior change</em> to <em className="display-it">operational transformation.</em>
            </p>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow-sm">Elsewhere</div>
            <ul className="mt-4 space-y-2 text-[15px]">
              <li><a className="ulink" href="https://www.linkedin.com/in/amanda-aulia" target="_blank" rel="noreferrer">LinkedIn</a></li>
              <li><a className="ulink" href="https://github.com/amandaulia" target="_blank" rel="noreferrer">GitHub — amandaulia</a></li>
              <li><a className="ulink" href="mailto:amanda.hanggoro@gmail.com">Email</a></li>
            </ul>
          </div>
          <div className="md:col-span-3">
            <div className="eyebrow-sm">Index</div>
            <ul className="mt-4 space-y-2 text-[15px]">
              <li><Link className="ulink" to="/">Home</Link></li>
              <li><Link className="ulink" to="/work">All work</Link></li>
              <li><Link className="ulink" to="/about">About &amp; contact</Link></li>
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
