import Image from "next/image";
import Link from "next/link";

const products = [
  {
    name: "REDMI 13C 5G",
    details: "4/128GB • 6/128GB • 8/256GB",
    price: "From ৳13,999",
    image: "/redmi.webp",
  },
  {
    name: "VIVO V50 LITE 5G",
    details: "8/128GB • 8/256GB",
    price: "From ৳28,500",
    image: "/vivo.png",
  },
  {
    name: "OPPO RENO 14F 5G",
    details: "8/256GB • 6000mAh Battery",
    price: "৳42,990",
    image: "/oppo.webp",
  },
];

const services = [
  {
    icon: "📱",
    title: "Smartphone Sales",
    text: "Explore smartphones from popular brands with genuine products and reliable customer support.",
  },
  {
    icon: "🔧",
    title: "Mobile Repair",
    text: "Professional repair support for common smartphone hardware and software issues.",
  },
  {
    icon: "⚙️",
    title: "Mobile Servicing",
    text: "Reliable servicing focused on keeping your device working smoothly.",
  },
  {
    icon: "🛡️",
    title: "Warranty & Support",
    text: "Get assistance with warranty-related services and after-sales support.",
  },
  {
    icon: "🎧",
    title: "Accessories & Gadgets",
    text: "Find useful mobile accessories, chargers, cables, memory cards and more.",
  },
  {
    icon: "💻",
    title: "Software Solutions",
    text: "Software-related support and solutions for everyday smartphone needs.",
  },
];

const stats = [
  { number: "2020", label: "Established" },
  { number: "6+", label: "Core Services" },
  { number: "100%", label: "Customer Focus" },
  { number: "Feni", label: "Our Location" },
];

export default function Home() {
  return (
    <main>
      {/* HERO */}
      <section className="hero-section">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <div className="hero-content">
                <div className="hero-badge">
                  ● Trusted Mobile Shop in Feni
                </div>

                <h1 className="hero-title">
                  Your Trusted
                  <br />
                  <span>Mobile Partner.</span>
                </h1>

                <p className="hero-description">
                  EMAD TELECOM provides smartphones, genuine accessories,
                  professional mobile repair and reliable servicing in Feni,
                  Bangladesh.
                </p>

                <div className="hero-buttons">
                  <Link href="/contact" className="btn-primary-custom">
                    Visit Our Store →
                  </Link>

                  <Link href="/service" className="btn-outline-custom">
                    Explore Services
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-image-card">
                <Image
                  src="/cover.jpg"
                  alt="EMAD TELECOM"
                  width={700}
                  height={700}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="stats-section">
        <div className="container">
          <div className="row">
            {stats.map((stat) => (
              <div className="col-6 col-lg-3" key={stat.label}>
                <div className="stat-box">
                  <div className="stat-number">{stat.number}</div>
                  <div className="stat-label">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">Featured Devices</span>

            <h2 className="section-title">
              Popular Smartphones
            </h2>

            <p className="section-description">
              Discover some of the smartphones available through EMAD TELECOM.
            </p>
          </div>

          <div className="row g-4">
            {products.map((product) => (
              <div className="col-md-6 col-lg-4" key={product.name}>
                <div className="product-card">
                  <div className="product-image">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={500}
                      height={500}
                    />
                  </div>

                  <div className="product-body">
                    <div className="product-brand">
                      Smartphone
                    </div>

                    <h3 className="product-title">
                      {product.name}
                    </h3>

                    <p className="product-text">
                      {product.details}
                    </p>

                    <div className="product-price">
                      {product.price}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT PREVIEW */}
      <section className="section section-light">
        <div className="container">
          <div className="row align-items-center g-5">
            <div className="col-lg-6">
              <div className="about-image">
                <Image
                  src="/mw.jpg"
                  alt="EMAD TELECOM store"
                  width={800}
                  height={600}
                />
              </div>
            </div>

            <div className="col-lg-6">
              <span className="section-label">
                About EMAD TELECOM
              </span>

              <h2 className="section-title text-start">
                Technology, service and trust under one roof.
              </h2>

              <p className="section-description">
                Established in 2020 in Feni, EMAD TELECOM focuses on
                smartphones, genuine accessories and professional mobile
                services.
              </p>

              <p className="section-description">
                We also provide fresh-condition second-hand Android and
                iPhone devices, along with repair and servicing support.
              </p>

              <Link
                href="/about"
                className="btn-primary-custom mt-3"
              >
                Learn More →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              What We Offer
            </span>

            <h2 className="section-title">
              Services built around your needs
            </h2>

            <p className="section-description">
              From buying a new phone to repairing an existing device,
              our services cover everyday mobile needs.
            </p>
          </div>

          <div className="row g-4">
            {services.map((service) => (
              <div
                className="col-md-6 col-lg-4"
                key={service.title}
              >
                <div className="service-card">
                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <h3>{service.title}</h3>

                  <p>{service.text}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-5">
            <Link
              href="/service"
              className="btn-primary-custom"
            >
              View All Services →
            </Link>
          </div>
        </div>
      </section>

      {/* ACCESSORIES */}
      <section className="section section-light">
        <div className="container">
          <div className="section-heading">
            <span className="section-label">
              Accessories
            </span>

            <h2 className="section-title">
              Complete your mobile setup
            </h2>

            <p className="section-description">
              Browse useful accessories for your everyday smartphone needs.
            </p>
          </div>

          <div className="row g-4">
            {[
              {
                image: "/glass.webp",
                title: "Screen Protection",
              },
              {
                image: "/memory.jpg",
                title: "Memory Cards",
              },
              {
                image: "/bluttoth.webp",
                title: "Bluetooth Devices",
              },
              {
                image: "/cable.jpg",
                title: "Charging Cables",
              },
            ].map((item) => (
              <div className="col-6 col-lg-3" key={item.title}>
                <div className="product-card">
                  <div className="product-image">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={400}
                      height={400}
                    />
                  </div>

                  <div className="product-body">
                    <h3 className="product-title">
                      {item.title}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="final-cta">
        <div className="container text-center">
          <span className="section-label">
            EMAD TELECOM • FENI
          </span>

          <h2 className="mt-2">
            Looking for a phone or mobile service?
          </h2>

          <p
            className="mx-auto mt-3"
            style={{
              maxWidth: "650px",
              color: "rgba(255,255,255,.65)",
              lineHeight: 1.8,
            }}
          >
            Visit EMAD TELECOM in Feni or get in touch with us for
            smartphones, accessories, repairs and servicing.
          </p>

          <div className="hero-buttons justify-content-center mt-4">
            <Link
              href="/contact"
              className="btn-primary-custom"
            >
              Contact Us →
            </Link>

            <a
              href="https://wa.me/8801971676314"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-custom"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="site-footer">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="footer-brand">
                EMAD<span className="brand-accent">.</span> TELECOM
              </div>

              <p className="footer-text">
                Smartphones, accessories, mobile repair and professional
                servicing in Feni, Bangladesh.
              </p>
            </div>

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

            <div className="col-6 col-lg-5">
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

