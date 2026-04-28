import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/#home", label: "Home" },
  { href: "/#shows", label: "Shows" },
  { href: "/#music", label: "Music" },
  { href: "/#connect", label: "Connect" },
];

export const Nav = () => {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHome = pathname === "/";
  const solid = scrolled || !onHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        solid ? "bg-espresso/95 backdrop-blur-md border-b border-gold/15" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <Link to="/" className="font-script text-3xl text-ivory leading-none translate-y-1">
          Nontokozo
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-ivory/85 hover:text-gold transition-colors text-sm tracking-[0.2em] uppercase font-light"
            >
              {l.label}
            </a>
          ))}
          <Link
            to="/bookings"
            className="px-6 py-2.5 bg-gold text-espresso text-xs tracking-[0.25em] uppercase font-medium hover:bg-ivory transition-colors"
          >
            Bookings
          </Link>
        </div>

        <button className="md:hidden text-ivory" onClick={() => setOpen(!open)} aria-label="menu">
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-espresso border-t border-gold/15 px-6 py-6 flex flex-col gap-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="text-ivory/90 tracking-widest uppercase text-sm">
              {l.label}
            </a>
          ))}
          <Link to="/bookings" onClick={() => setOpen(false)} className="px-6 py-3 bg-gold text-espresso text-xs tracking-widest uppercase text-center">
            Bookings
          </Link>
        </div>
      )}
    </header>
  );
};
