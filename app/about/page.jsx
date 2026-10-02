import Image from "next/image";
import Link from "next/link";

const team = [
  {
    name: "Nurul Amin",
    role: "Owner",
    phone: "01777-446536",
    image: "/owner.jpg",
  },
  {
    name: "Nur Foisal Ohin",
    role: "Manager",
    phone: "01971-676314",
    image: "/manager.jpg",
  },
  {
    name: "Md Abid",
    role: "Technician",
    phone: "01832-574007",
    image: "/tec.jpg",
  },
];

export default function AboutPage() {
  return (
    <main>
      {/* =========================
          PAGE HERO
      ========================== */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">ABOUT US</span>

          <h1 className="page-title">
            About EMAD TELECOM
          </h1>

          <p className="page-subtitle">
            A local mobile retailer and service center focused on
            smartphones, accessories, repair and reliable customer service.
          </p>
        </div>
      </section>

      {/* =========================
          OUR STORY
      ========================== */}
      <section className="section">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <div className="about-image">
                <Image
                  src="/allteam.jpg"
                  alt="EMAD TELECOM team"
                  width={900}
                  height={650}
                  priority
                />
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <span className="section-label">
                OUR STORY
              </span>

              <h2 className="section-title text-start">
                Serving Feni since 2020
              </h2>

              <p className="section-description">
                EMAD TELECOM started its journey in 2020 in Feni,
                Bangladesh, with a focus on smartphones, genuine accessories
                and professional mobile services.
              </p>

              <p className="section-description mt-3">
                Alongside new smartphones, we also deal with fresh-condition
                second-hand Android and iPhone devices and provide support
                for customers who need repair or servicing.
              </p>

              <p className="section-description mt-3">
                Our goal is simple: provide genuine products, dependable
                service and a customer experience people can trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          MISSION & VISION
      ========================== */}
      <section className="section section-light">
        <div className="container">
          <div className="row g-4">
            <div className="col-12 col-lg-6">
              <div className="service-card h-100">
                <div className="service-icon">🎯</div>

                <h3>Our Mission</h3>

                <p>
                  To provide original smartphones, reliable accessories
                  and professional services while keeping customer
                  satisfaction at the center of our work.
                </p>
              </div>
            </div>

            <div className="col-12 col-lg-6">
              <div className="service-card h-100">
                <div className="service-icon">🚀</div>

                <h3>Our Vision</h3>

                <p>
                  To become a trusted and recognized mobile retailer and
                  service provider by consistently delivering quality
                  products and dependable customer support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          TEAM
      ========================== */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              OUR TEAM
            </span>

            <h2 className="section-title">
              Meet the people behind EMAD
            </h2>

            <p className="section-description">
              Our team works together to provide product guidance,
              technical support and customer service.
            </p>
          </div>

          <div className="row g-4">
            {team.map((person) => (
              <div
                className="col-12 col-md-6 col-lg-4"
                key={person.name}
              >
                <div className="team-card h-100">

                  {/* TEAM PHOTO */}
                  <div className="team-image">
                    <Image
                      src={person.image}
                      alt={`${person.name} - ${person.role}`}
                      width={600}
                      height={750}
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        objectPosition: "center 25%",
                        display: "block",
                      }}
                    />
                  </div>

                  {/* TEAM DETAILS */}
                  <div className="team-body">
                    <h3>{person.name}</h3>

                    <div className="team-role">
                      {person.role}
                    </div>

                    <p className="section-description mt-2">
                      📞 {person.phone}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CTA
      ========================== */}
      <section className="final-cta">
        <div className="container text-center">
          <span className="section-label">
            GET IN TOUCH
          </span>

          <h2 className="mt-2">
            Need a smartphone or mobile service?
          </h2>

          <div className="hero-buttons justify-content-center mt-4">
            <Link
              href="/contact"
              className="btn-primary-custom"
            >
              Contact EMAD →
            </Link>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================== */}
      <footer className="site-footer">
        <div className="container">
          <div className="row g-5">

            {/* BRAND */}
            <div className="col-12 col-lg-5">
              <div className="footer-brand">
                EMAD
                <span className="brand-accent">.</span>{" "}
                TELECOM
              </div>

              <p className="footer-text">
                Smartphones, accessories, mobile repair and professional
                servicing in Feni, Bangladesh.
              </p>
            </div>

            {/* QUICK LINKS */}
            <div className="col-6 col-lg-2">
              <div className="footer-title">
                QUICK LINKS
              </div>

              <ul className="footer-links">
                <li>
                  <Link href="/">Home</Link>
                </li>

                <li>
                  <Link href="/about">About</Link>
                </li>

                <li>
                  <Link href="/service">Services</Link>
                </li>

                <li>
                  <Link href="/contact">Contact</Link>
                </li>
              </ul>
            </div>

            {/* CONTACT */}
            <div className="col-12 col-sm-6 col-lg-5">
              <div className="footer-title">
                CONTACT
              </div>

              <ul className="footer-links">
                <li>
                  📍 Hazari Road / Mohipal, Feni
                </li>

                <li>
                  📞 01777-446536
                </li>

                <li>
                  📞 01971-676314
                </li>

                <li>
                  ✉️ ohinnurfoisal@gmail.com
                </li>
              </ul>
            </div>
          </div>

          <div className="footer-bottom text-center">
            © 2026 EMAD TELECOM. All rights reserved.
          </div>
        </div>
      </footer>
    </main>
  );
}