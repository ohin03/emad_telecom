import Link from "next/link";

const contactInfo = [
  {
    icon: "📍",
    title: "Visit Us",
    text: "Hazari Road / Mohipal, Feni Town, Bangladesh",
  },
  {
    icon: "📞",
    title: "Call Us",
    text: "01777-446536\n01971-676314",
  },
  {
    icon: "✉️",
    title: "Email",
    text: "ohinnurfoisal@gmail.com",
  },
];

export default function ContactPage() {
  return (
    <main>
      {/* =========================
          HERO
      ========================== */}
      <section className="page-hero">
        <div className="container">
          <span className="section-label">CONTACT</span>

          <h1 className="page-title">Let&apos;s Talk</h1>

          <p className="page-subtitle">
            Have a question about a smartphone, accessory, repair or
            servicing? Get in touch with EMAD TELECOM.
          </p>
        </div>
      </section>

      {/* =========================
          CONTACT INFORMATION
      ========================== */}
      <section className="section">
        <div className="container">
          <div className="row g-4">
            {contactInfo.map((item) => (
              <div className="col-12 col-md-4" key={item.title}>
                <div className="contact-card h-100">
                  <div className="contact-icon">{item.icon}</div>

                  <h3>{item.title}</h3>

                  <p style={{ whiteSpace: "pre-line" }}>
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================
          CONTACT FORM + QUICK CONTACT
      ========================== */}
      <section className="section section-light">
        <div className="container">
          <div className="row g-4 g-lg-5 align-items-start">
            {/* FORM */}
            <div className="col-12 col-lg-7">
              <div className="form-box">
                <span className="section-label">SEND A MESSAGE</span>

                <h2 className="section-title text-start">
                  How can we help?
                </h2>

                <p className="section-description text-start">
                  Tell us what you are looking for and our team will be
                  ready to help with smartphones, accessories and
                  professional mobile services.
                </p>

                <form>
                  <div className="row g-3">
                    {/* NAME */}
                    <div className="col-12 col-md-6">
                      <label
                        htmlFor="name"
                        className="form-label"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        className="form-control-custom"
                        placeholder="Enter your name"
                      />
                    </div>

                    {/* PHONE */}
                    <div className="col-12 col-md-6">
                      <label
                        htmlFor="phone"
                        className="form-label"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        className="form-control-custom"
                        placeholder="Enter your phone"
                      />
                    </div>

                    {/* EMAIL */}
                    <div className="col-12">
                      <label
                        htmlFor="email"
                        className="form-label"
                      >
                        Email
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="form-control-custom"
                        placeholder="Enter your email"
                      />
                    </div>

                    {/* MESSAGE */}
                    <div className="col-12">
                      <label
                        htmlFor="message"
                        className="form-label"
                      >
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="form-control-custom"
                        placeholder="Tell us what you need..."
                      />
                    </div>

                    {/* BUTTON */}
                    <div className="col-12">
                      <button
                        type="button"
                        className="btn-primary-custom border-0"
                      >
                        Send Message →
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>

            {/* QUICK CONTACT */}
            <div className="col-12 col-lg-5">
              {/* CALL */}
              <div className="contact-card mb-4">
                <div className="contact-icon">📱</div>

                <h3>Call EMAD TELECOM</h3>

                <p>
                  Speak directly with our team for product
                  information, service support or any other
                  questions.
                </p>

                <a
                  href="tel:01777446536"
                  className="btn-primary-custom mt-3"
                >
                  Call Now →
                </a>
              </div>

              {/* WHATSAPP */}
              <div className="contact-card">
                <div className="contact-icon">💬</div>

                <h3>WhatsApp</h3>

                <p>
                  Send us a message on WhatsApp for quick and
                  convenient communication with our team.
                </p>

                <a
                  href="https://wa.me/8801971676314"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary-custom mt-3"
                >
                  Chat on WhatsApp →
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
          FACEBOOK CTA
      ========================== */}
      <section className="final-cta">
        <div className="container text-center">
          <span className="section-label">STAY CONNECTED</span>

          <h2 className="mt-2">
            Follow EMAD TELECOM
          </h2>

          <p
            className="mx-auto mt-3"
            style={{
              maxWidth: "600px",
              color: "rgba(255,255,255,.65)",
              lineHeight: 1.8,
            }}
          >
            Connect with us for product updates, new smartphones,
            accessories and mobile service information.
          </p>

          <div className="hero-buttons justify-content-center mt-4">
            <a
              href="https://facebook.com/nur.foisal.ohin"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-custom"
            >
              Facebook →
            </a>

            <Link
              href="/"
              className="btn-outline-custom"
            >
              Back Home
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
                Smartphones, accessories, mobile repair and
                professional servicing in Feni, Bangladesh.
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