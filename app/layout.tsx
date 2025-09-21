"use client"
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Link from "next/link";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
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
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);
  const pathname = usePathname()
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="navbar navbar-expand-lg bg-secondary " style={{position:'fixed', width:'100%', zIndex:'1'}}>
          <div className="container-fluid">
            <a className="navbar-brand text-light fw-bold Emad" href="#" >EMAD TELECOM</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav justify-content-center w-100 p-3 gap-3 me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link href="/" aria-current="page" className= {`nav-link active fw-bold ${pathname === "/" ? "text-dark" : "text-light"}`}>
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/about" className= {`nav-link fw-bold ${pathname === "/about" ? "text-dark" : "text-light"}`}>About</Link>
                </li>
                <li className="nav-item">
                  <Link href="/contact" className={`nav-link fw-bold ${pathname === "/contact" ? "text-dark" : "text-light"}`} >
                    Contact
                  </Link>
                </li>
                 <li className="nav-item">
                  <Link href="/service"  className= {`nav-link fw-bold ${pathname === "/service" ? "text-dark" : "text-light"}`}>
                    Service
                  </Link>
                </li>
              </ul>
              <form className="d-flex" role="search">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success text-warning fw-bold" type="submit">Search</button>
              </form>
            </div>
          </div>
        </nav>
        {children}
      </body>
    </html>
  );
}
