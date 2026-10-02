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

const accessories = [
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
];

export default function Home() {
  return (
    <main>

      {/* =====================================================
          HERO
      ====================================================== */}

      <section className="hero-section">
        <div className="hero-background-grid" />

        <div className="container position-relative">

          <div className="hero-content-row">

            {/* LEFT */}

            <div className="hero-content">

              <div className="hero-badge">
                <span className="hero-badge-dot" />
                Trusted Mobile Shop in Feni
              </div>

              <h1 className="hero-title">
                Your Trusted
                <br />
                <span>Mobile Partner.</span>
              </h1>

              <p className="hero-description">
                EMAD TELECOM provides smartphones, genuine accessories,
                professional mobile repair and reliable servicing in
                Feni, Bangladesh.
              </p>

              <div className="hero-buttons">

                <Link
                  href="/contact"
                  className="btn-primary-custom hero-main-btn"
                >
                  Visit Our Store
                  <span>↗</span>
                </Link>

                <Link
                  href="/service"
                  className="btn-outline-custom"
                >
                  Explore Services
                </Link>

              </div>

              <div className="hero-trust">

                <div className="hero-trust-item">
                  <strong>Since 2020</strong>
                  <span>Serving Feni</span>
                </div>

                <div className="hero-trust-line" />

                <div className="hero-trust-item">
                  <strong>Genuine</strong>
                  <span>Products & Support</span>
                </div>

              </div>

            </div>


            {/* RIGHT IMAGE */}

            <div className="hero-visual">

              <div className="hero-image-wrapper">

                <div className="hero-image-glow" />

                <div className="hero-image-card">

                  <Image
                    src="/cover.jpg"
                    alt="EMAD TELECOM"
                    fill
                    priority
                    sizes="(max-width: 991px) 100vw, 48vw"
                    className="hero-main-image"
                  />

                  <div className="hero-image-overlay" />

                  <div className="hero-image-info">

                    <div>
                      <span>EMAD</span>
                      <strong>TELECOM</strong>
                    </div>

                    <span className="hero-image-arrow">
                      ↗
                    </span>

                  </div>

                </div>

              </div>

              <div className="hero-floating-card">

                <div className="hero-floating-check">
                  ✓
                </div>

                <div>
                  <strong>Reliable Service</strong>
                  <span>Mobile solutions in Feni</span>
                </div>

              </div>

              <div className="hero-number">
                01
              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          STATS
      ====================================================== */}

      <section className="stats-section">

        <div className="container">

          <div className="stats-row">

            {stats.map((stat, index) => (
              <div
                className={`stat-box ${
                  index !== stats.length - 1
                    ? "stat-border"
                    : ""
                }`}
                key={stat.label}
              >

                <div className="stat-number">
                  {stat.number}
                </div>

                <div className="stat-label">
                  {stat.label}
                </div>

              </div>
            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          PRODUCTS
      ====================================================== */}

      <section className="section products-home-section">

        <div className="container">

          <div className="section-heading home-section-heading">

            <div>

              <span className="section-label">
                FEATURED DEVICES
              </span>

              <h2 className="section-title">
                Popular Smartphones
              </h2>

              <p className="section-description">
                Discover some of the smartphones available through
                EMAD TELECOM.
              </p>

            </div>

            <Link
              href="/contact"
              className="section-view-link"
            >
              Ask About Devices
              <span>↗</span>
            </Link>

          </div>


          <div className="row g-4">

            {products.map((product, index) => (

              <div
                className="col-12 col-md-6 col-lg-4"
                key={product.name}
              >

                <article className="product-card premium-product-card">

                  <div className="product-number">
                    0{index + 1}
                  </div>

                  <div className="product-image">

                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw"
                      className="product-main-image"
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

                    <div className="product-bottom">

                      <div className="product-price">
                        {product.price}
                      </div>

                      <Link
                        href="/contact"
                        className="product-enquire"
                      >
                        Enquire
                        <span>↗</span>
                      </Link>

                    </div>

                  </div>

                </article>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          ABOUT
      ====================================================== */}

      <section className="section section-light">

        <div className="container">

          <div className="about-home-grid">

            <div className="about-home-image">

              <Image
                src="/mw.jpg"
                alt="EMAD TELECOM store"
                fill
                sizes="(max-width: 991px) 100vw, 50vw"
              />

              <div className="about-image-overlay" />

              <div className="about-image-badge">

                <span>EST.</span>

                <strong>2020</strong>

                <small>FENI</small>

              </div>

            </div>


            <div className="about-home-content">

              <span className="section-label">
                ABOUT EMAD TELECOM
              </span>

              <h2 className="section-title text-start">
                Technology, service and trust under one roof.
              </h2>

              <p className="section-description">
                Established in 2020 in Feni, EMAD TELECOM focuses on
                smartphones, genuine accessories and professional
                mobile services.
              </p>

              <p className="section-description">
                We also provide fresh-condition second-hand Android
                and iPhone devices, along with repair and servicing
                support.
              </p>

              <div className="about-mini-points">

                <div>
                  <span>✓</span>
                  Genuine smartphones & accessories
                </div>

                <div>
                  <span>✓</span>
                  Professional repair & servicing
                </div>

                <div>
                  <span>✓</span>
                  Customer-focused support
                </div>

              </div>

              <Link
                href="/about"
                className="btn-primary-custom mt-4"
              >
                Learn More
                <span>→</span>
              </Link>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVICES
      ====================================================== */}

      <section className="section services-home-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              WHAT WE OFFER
            </span>

            <h2 className="section-title">
              Services built around your needs
            </h2>

            <p className="section-description">
              From buying a new phone to repairing an existing device,
              our services cover everyday mobile needs.
            </p>

          </div>


          <div className="row g-3">

            {services.map((service, index) => (

              <div
                className="col-12 col-md-6 col-lg-4"
                key={service.title}
              >

                <Link
                  href="/service"
                  className="service-card premium-service-card"
                >

                  <div className="service-top">

                    <span className="service-number">
                      0{index + 1}
                    </span>

                    <span className="service-icon">
                      {service.icon}
                    </span>

                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                  <span className="service-link">
                    Explore Service
                    <span>↗</span>
                  </span>

                </Link>

              </div>

            ))}

          </div>


          <div className="text-center mt-5">

            <Link
              href="/service"
              className="btn-primary-custom"
            >
              View All Services
              <span>→</span>
            </Link>

          </div>

        </div>

      </section>


      {/* =====================================================
          ACCESSORIES
      ====================================================== */}

      <section className="section section-light accessories-home-section">

        <div className="container">

          <div className="section-heading">

            <span className="section-label">
              ACCESSORIES
            </span>

            <h2 className="section-title">
              Complete your mobile setup
            </h2>

            <p className="section-description">
              Browse useful accessories for your everyday smartphone
              needs.
            </p>

          </div>


          <div className="row g-3">

            {accessories.map((item, index) => (

              <div
                className="col-6 col-lg-3"
                key={item.title}
              >

                <Link
                  href="/contact"
                  className="accessory-card-new"
                >

                  <div className="accessory-image-new">

                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      sizes="(max-width: 767px) 50vw, 25vw"
                    />

                    <span>
                      0{index + 1}
                    </span>

                  </div>

                  <div className="accessory-body-new">

                    <h3>
                      {item.title}
                    </h3>

                    <span>
                      Enquire ↗
                    </span>

                  </div>

                </Link>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =====================================================
          WHY EMAD
      ====================================================== */}

      <section className="why-home-section">

        <div className="container">

          <div className="why-home-grid">

            <div>

              <span className="section-label">
                WHY EMAD TELECOM
              </span>

              <h2>
                A better way to
                <br />
                <span>handle your mobile needs.</span>
              </h2>

              <p>
                We focus on genuine products, practical guidance and
                dependable service to make your mobile experience
                easier.
              </p>

              <Link
                href="/contact"
                className="btn-primary-custom mt-4"
              >
                Talk With Us
                <span>↗</span>
              </Link>

            </div>


            <div className="why-list">

              <div className="why-item">

                <span>01</span>

                <div>
                  <h3>Genuine Products</h3>
                  <p>
                    Quality smartphones and accessories for everyday
                    customer needs.
                  </p>
                </div>

              </div>

              <div className="why-item">

                <span>02</span>

                <div>
                  <h3>Helpful Guidance</h3>
                  <p>
                    Practical product information before choosing
                    your device.
                  </p>
                </div>

              </div>

              <div className="why-item">

                <span>03</span>

                <div>
                  <h3>Technical Support</h3>
                  <p>
                    Professional assistance for common mobile repair
                    and servicing needs.
                  </p>
                </div>

              </div>

              <div className="why-item">

                <span>04</span>

                <div>
                  <h3>Customer Care</h3>
                  <p>
                    Support for warranty matters and after-sales
                    service requirements.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          FINAL CTA
      ====================================================== */}

      <section className="final-cta">

        <div className="final-cta-glow" />

        <div className="container text-center position-relative">

          <span className="section-label">
            EMAD TELECOM • FENI
          </span>

          <h2>
            Looking for a phone
            <br />
            <span>or mobile service?</span>
          </h2>

          <p>
            Visit EMAD TELECOM in Feni or get in touch with us for
            smartphones, accessories, repairs and servicing.
          </p>

          <div className="hero-buttons justify-content-center mt-4">

            <Link
              href="/contact"
              className="btn-primary-custom"
            >
              Contact Us
              <span>→</span>
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


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="site-footer">

        <div className="container">

          <div className="row g-5">

            <div className="col-lg-5">

              <div className="footer-brand">
                EMAD
                <span className="brand-accent">.</span>
                TELECOM
              </div>

              <p className="footer-text">
                Smartphones, accessories, mobile repair and
                professional servicing in Feni, Bangladesh.
              </p>

              <div className="footer-location">
                📍 Hazari Road / Mohipal, Feni
              </div>

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