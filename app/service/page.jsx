import Link from "next/link";

const services = [
  {
    icon: "📱",
    title: "Smartphone Sales",
    text: "Choose from smartphones from popular brands with genuine products and helpful product guidance.",
  },
  {
    icon: "🔧",
    title: "Mobile Repair",
    text: "Professional repair support for smartphone hardware and common device problems.",
  },
  {
    icon: "⚙️",
    title: "Mobile Servicing",
    text: "Reliable servicing designed to keep your mobile device performing properly.",
  },
  {
    icon: "🛡️",
    title: "Warranty & Support",
    text: "Assistance with warranty-related matters and after-sales customer support.",
  },
  {
    icon: "🎧",
    title: "Accessories & Gadgets",
    text: "Find chargers, cables, Bluetooth devices, memory cards, screen protection and other accessories.",
  },
  {
    icon: "💻",
    title: "Software Solutions",
    text: "Software-related support for smartphone setup, configuration and everyday mobile requirements.",
  },
];

export const metadata = {
  title: "Services - EMAD TELECOM",
  description:
    "Mobile phone sales, repair, servicing, accessories and software support from EMAD TELECOM in Feni, Bangladesh.",
};

export default function ServicePage() {
  return (
    <main>
      {/* HERO */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">OUR SERVICES</span>

          <h1 className="page-title">Mobile Services</h1>

          <p className="page-subtitle">
            From smartphone sales to repair and servicing, EMAD TELECOM
            provides practical mobile solutions for customers in Feni.
          </p>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="row g-4">
            {services.map((service) => (
              <div
                className="col-12 col-md-6 col-lg-4"
                key={service.title}
              >
                <div className="service-card h-100">
                  <div className="service-icon">{service.icon}</div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>

                  <Link
                    href="/contact"
                    className="btn-primary-custom mt-3"
                  >
                    Get Support →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE IMAGE / SUPPORT */}
      <section className="section section-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-12 col-lg-6">
              <span className="section-label">PROFESSIONAL SUPPORT</span>

              <h2 className="section-title text-start">
                More than just a mobile shop
              </h2>

              <p className="section-description">
                Whether you are looking for a new smartphone, need an
                accessory or have a device that requires technical support,
                our team is ready to help.
              </p>

              <Link
                href="/contact"
                className="btn-primary-custom mt-3"
              >
                Contact Us →
              </Link>
            </div>

            <div className="col-12 col-lg-6">
              <div className="about-image">
                <img
                  src="/service1.webp"
                  alt="EMAD TELECOM professional mobile service"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="section">
        <div className="container">
          <div className="section-heading text-center">
            <span className="section-label">WHY EMAD TELECOM</span>

            <h2 className="section-title">
              Service you can count on
            </h2>

            <p className="section-description mx-auto">
              We focus on genuine products, practical solutions and
              dependable customer support.
            </p>
          </div>

          <div className="row g-4 mt-2">
            <div className="col-12 col-sm-6 col-lg-3">
              <div className="service-card h-100 text-center">
                <div className="service-icon">✓</div>
                <h3>Genuine Products</h3>
                <p>
                  Original smartphones and reliable accessories for
                  everyday use.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="service-card h-100 text-center">
                <div className="service-icon">🔧</div>
                <h3>Expert Support</h3>
                <p>
                  Professional assistance for common mobile repair and
                  servicing needs.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="service-card h-100 text-center">
                <div className="service-icon">💬</div>
                <h3>Helpful Guidance</h3>
                <p>
                  Get practical product information before choosing a
                  smartphone or accessory.
                </p>
              </div>
            </div>

            <div className="col-12 col-sm-6 col-lg-3">
              <div className="service-card h-100 text-center">
                <div className="service-icon">🛡️</div>
                <h3>Customer Care</h3>
                <p>
                  Support for warranty matters and after-sales service
                  requirements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="container text-center">
          <span className="section-label">EMAD TELECOM</span>

          <h2 className="mt-2">Need help with your mobile?</h2>

          <p
            className="mx-auto mt-3"
            style={{
              maxWidth: "620px",
              color: "rgba(255,255,255,.65)",
              lineHeight: 1.8,
            }}
          >
            Talk to our team about smartphones, accessories, repair or
            servicing.
          </p>

          <Link
            href="/contact"
            className="btn-primary-custom mt-4"
          >
            Contact Us →
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="row g-5">
            <div className="col-12 col-lg-5">
              <div className="footer-brand">
                EMAD<span className="brand-accent">.</span> TELECOM
              </div>

              <p className="footer-text">
                Smartphones, accessories, mobile repair and professional
                servicing in Feni, Bangladesh.
              </p>
            </div>

            <div className="col-6 col-lg-2">
              <div className="footer-title">QUICK LINKS</div>

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

            <div className="col-12 col-sm-6 col-lg-5">
              <div className="footer-title">CONTACT</div>

              <ul className="footer-links">
                <li>📍 Hazari Road / Mohipal, Feni</li>
                <li>📞 01777-446536</li>
                <li>📞 01971-676314</li>
                <li>✉️ ohinnurfoisal@gmail.com</li>
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