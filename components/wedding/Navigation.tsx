"use client";

import { useEffect, useState } from "react";
import { Monogram } from "./Monogram";

const links = [
  { href: "#invitation", label: "Invitation" },
  { href: "#details", label: "Details" },
  { href: "#sponsors", label: "Sponsors" },
  { href: "#gallery", label: "Gallery" },
];

export function Navigation() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => { if (event.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  return <header className={`site-header${open ? " menu-open" : ""}`}>
    <a href="#home" className="brand" aria-label="John Rey and Christine Ericka — home" onClick={() => setOpen(false)}><Monogram /></a>
    <span className="header-caption eyebrow">September twenty-eight · two thousand twenty-six</span>
    <button className="menu-toggle" type="button" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(value => !value)}>
      <span>{open ? "Close" : "Menu"}</span><span className="menu-lines" aria-hidden="true"><i /><i /></span>
    </button>
    <nav id="main-navigation" aria-label="Main navigation">
      {links.map(link => <a key={link.href} href={link.href} className="nav-link" onClick={() => setOpen(false)}>{link.label}</a>)}
    </nav>
  </header>;
}
