"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const geistSans = Geist({
variable: "--font-geist-sans",
subsets: ["latin"],
});

const geistMono = Geist_Mono({
variable: "--font-geist-mono",
subsets: ["latin"],
});

export default function RootLayout({
children,
}: Readonly<{
children: React.ReactNode;
}>) {
const pathname = usePathname();
const [menuOpen, setMenuOpen] = useState(false);

useEffect(() => {
setMenuOpen(false);
}, [pathname]);

return ( <html lang="en">
<body
className={`${geistSans.variable} ${geistMono.variable} antialiased`}
>
{/* =====================================================
HEADER
====================================================== */} <header className="site-header"> <div className="site-header-inner">

```
        {/* LOGO */}
        <Link
          href="/"
          className="site-logo"
          aria-label="EMAD TELECOM Home"
        >
          <span className="site-logo-icon">E</span>

          <span className="site-logo-text">
            EMAD<span>.</span>
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <nav className="desktop-navigation" aria-label="Main navigation">
          <Link
            href="/"
            className={`desktop-nav-link ${
              pathname === "/" ? "active" : ""
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`desktop-nav-link ${
              pathname === "/about" ? "active" : ""
            }`}
          >
            About
          </Link>

          <Link
            href="/service"
            className={`desktop-nav-link ${
              pathname === "/service" ? "active" : ""
            }`}
          >
            Services
          </Link>

          <Link
            href="/contact"
            className={`desktop-nav-link ${
              pathname === "/contact" ? "active" : ""
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* DESKTOP CTA */}
        <div className="desktop-actions">
          <Link href="/contact" className="header-cta">
            Visit Store
            <span>↗</span>
          </Link>
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          className={`mobile-menu-button ${
            menuOpen ? "open" : ""
          }`}
          onClick={() => setMenuOpen((current) => !current)}
          aria-label={menuOpen ? "Close navigation" : "Open navigation"}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* ===================================================
          MOBILE NAVIGATION
      ==================================================== */}
      <div
        className={`mobile-navigation ${
          menuOpen ? "show" : ""
        }`}
      >
        <div className="mobile-navigation-inner">

          <Link
            href="/"
            className={`mobile-nav-link ${
              pathname === "/" ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <span>01</span>
            Home
          </Link>

          <Link
            href="/about"
            className={`mobile-nav-link ${
              pathname === "/about" ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <span>02</span>
            About
          </Link>

          <Link
            href="/service"
            className={`mobile-nav-link ${
              pathname === "/service" ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <span>03</span>
            Services
          </Link>

          <Link
            href="/contact"
            className={`mobile-nav-link ${
              pathname === "/contact" ? "active" : ""
            }`}
            onClick={() => setMenuOpen(false)}
          >
            <span>04</span>
            Contact
          </Link>

          <Link
            href="/contact"
            className="mobile-header-cta"
            onClick={() => setMenuOpen(false)}
          >
            Visit Store
            <span>↗</span>
          </Link>

        </div>
      </div>
    </header>

    {/* =====================================================
        PAGE CONTENT
    ====================================================== */}
    <main>{children}</main>
  </body>
</html>


);
}
