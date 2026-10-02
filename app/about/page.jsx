import Image from "next/image"; 
import Link from "next/link"; 
 
const team = [ 
  { 
    name: "Nurul Amin", 
    role: "Owner", 
    phone: "01777-446536", 
    image: "/owner.jpg", 
    description: 
      "Leading EMAD TELECOM with a focus on genuine products, customer trust and reliable service.", 
  }, 
  { 
    name: "Nur Foisal Ohin", 
    role: "Manager", 
    phone: "01971-676314", 
    image: "/manager.jpg", 
    description: 
      "Managing daily operations and helping customers choose the right mobile products and services.", 
  }, 
  { 
    name: "Md Abid", 
    role: "Technician", 
    phone: "01832-574007", 
    image: "/tec.jpg", 
    description: 
      "Providing technical support, mobile repair and servicing for everyday device needs.", 
  }, 
]; 
 
const highlights = [ 
  { 
    number: "2020", 
    title: "Established", 
    text: "Started our journey in Feni with a focus on mobile products and services.", 
  }, 
  { 
    number: "01", 
    title: "Trusted Team", 
    text: "A dedicated team working across sales, management and technical support.", 
  }, 
  { 
    number: "360°", 
    title: "Mobile Support", 
    text: "Smartphones, accessories, repair, servicing and after-sales support.", 
  }, 
]; 
 
export default function AboutPage() { 
  return ( 
    <main> 
      {/* ===================================================== 
          PAGE HERO 
      ====================================================== */} 
 
      <section className="page-hero about-page-hero"> 
        <div className="container"> 
          <div className="row"> 
            <div className="col-12 col-lg-9"> 
              <span className="section-label">ABOUT EMAD TELECOM</span> 
 
              <h1 className="page-title"> 
                Technology, 
                <br /> 
                <span className="about-hero-accent">service & trust.</span> 
              </h1> 
 
              <p className="page-subtitle"> 
                EMAD TELECOM is a mobile retailer and service center in 
                Feni, Bangladesh, providing smartphones, genuine 
                accessories, repair, servicing and dependable customer 
                support. 
              </p> 
 
              <div className="hero-buttons mt-4"> 
                <Link 
                  href="/contact" 
                  className="btn-primary-custom" 
                > 
                  Talk to Our Team → 
                </Link> 
 
                <Link 
                  href="/service" 
                  className="about-hero-link" 
                > 
                  Explore Services 
                  <span>↗</span> 
                </Link> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 
 
      {/* ===================================================== 
          COMPANY HIGHLIGHTS 
      ====================================================== */} 
 
      <section className="about-highlights"> 
        <div className="container"> 
          <div className="row g-0"> 
            {highlights.map((item, index) => ( 
              <div 
                className="col-12 col-md-4" 
                key={item.title} 
              > 
                <div 
                  className={`about-highlight ${ 
                    index !== highlights.length - 1 
                      ? "about-highlight-border" 
                      : "" 
                  }`} 
                > 
                  <div className="about-highlight-number"> 
                    {item.number} 
                  </div> 
 
                  <h3>{item.title}</h3> 
 
                  <p>{item.text}</p> 
                </div> 
              </div> 
            ))} 
          </div> 
        </div> 
      </section> 
 
      {/* ===================================================== 
          OUR STORY 
      ====================================================== */} 
 
      <section className="section"> 
        <div className="container"> 
          <div className="row align-items-center g-5"> 
            <div className="col-12 col-lg-6"> 
              <div className="about-story-image"> 
                <Image 
                  src="/allteam.jpg" 
                  alt="EMAD TELECOM team in Feni" 
                  width={1000} 
                  height={720} 
                  priority 
                /> 
 
                <div className="about-image-badge"> 
                  <span>Since</span> 
                  <strong>2020</strong> 
                </div> 
              </div> 
            </div> 
 
            <div className="col-12 col-lg-6"> 
              <span className="section-label"> 
                OUR STORY 
              </span> 
 
              <h2 className="section-title text-start"> 
                Built around people, 
                <br /> 
                powered by technology. 
              </h2> 
 
              <p className="section-description"> 
                EMAD TELECOM started its journey in 2020 in Feni, 
                Bangladesh, with a simple goal: make reliable mobile 
                products and professional mobile services more 
                accessible to local customers. 
              </p> 
 
              <p className="section-description mt-3"> 
                We work with smartphones, genuine accessories and 
                everyday mobile solutions. Alongside new devices, we 
                also deal with fresh-condition second-hand Android 
                and iPhone devices. 
              </p> 
 
              <p className="section-description mt-3"> 
                Our team also provides repair and servicing support, 
                helping customers get practical solutions when their 
                devices need attention. 
              </p> 
 
              <div className="about-story-points"> 
                <div> 
                  <span>✓</span> 
                  Genuine products 
                </div> 
 
                <div> 
                  <span>✓</span> 
                  Professional support 
                </div> 
 
                <div> 
                  <span>✓</span> 
                  Customer-focused service 
                </div> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 
 
      {/* ===================================================== 
          MISSION / VISION 
      ====================================================== */} 
 
      <section className="section section-light"> 
        <div className="container"> 
          <div className="section-heading text-center"> 
            <span className="section-label"> 
              WHAT DRIVES US 
            </span> 
 
            <h2 className="section-title"> 
              Our mission & vision 
            </h2> 
 
            <p className="section-description mx-auto"> 
              We believe a mobile business should offer more than 
              products. It should provide guidance, technical 
              support and a dependable customer experience. 
            </p> 
          </div> 
 
          <div className="row g-4"> 
            {/* Mission */} 
            <div className="col-12 col-lg-6"> 
              <div className="about-value-card mission-card h-100"> 
                <div className="about-value-top"> 
                  <div className="about-value-icon"> 
                    🎯 
                  </div> 
 
                  <span>01</span> 
                </div> 
 
                <h3>Our Mission</h3> 
 
                <p> 
                  To provide original smartphones, reliable 
                  accessories and professional mobile services while 
                  keeping customer satisfaction at the center of our 
                  work. 
                </p> 
 
                <div className="about-value-line" /> 
              </div> 
            </div> 
 
            {/* Vision */} 
            <div className="col-12 col-lg-6"> 
              <div className="about-value-card vision-card h-100"> 
                <div className="about-value-top"> 
                  <div className="about-value-icon"> 
                    🚀 
                  </div> 
 
                  <span>02</span> 
                </div> 
 
                <h3>Our Vision</h3> 
 
                <p> 
                  To become a trusted and recognized mobile retailer 
                  and service provider by consistently delivering 
                  quality products and dependable customer support. 
                </p> 
 
                <div className="about-value-line" /> 
              </div> 
            </div> 
          </div> 
        </div> 
      </section> 
 
      {/* ===================================================== 
          TEAM 
      ====================================================== */} 
 
      <section className="section"> 
        <div className="container"> 
          <div className="section-heading"> 
            <span className="section-label"> 
              THE PEOPLE 
            </span> 
 
            <h2 className="section-title"> 
              Meet our team 
            </h2> 
 
            <p className="section-description"> 
              A small, dedicated team combining business 
              management, customer service and technical expertise. 
            </p> 
          </div> 
 
          <div className="row g-4"> 
            {team.map((person) => ( 
              <div 
                className="col-12 col-md-6 col-lg-4" 
                key={person.name} 
              > 
                <article className="team-card"> 
                  {/* Photo */} 
                  <div className="team-image-wrapper"> 
                    <Image 
                      src={person.image} 
                      alt={`${person.name} - ${person.role}`} 
                      width={700} 
                      height={820} 
                      sizes="(max-width: 767px) 100vw, (max-width: 991px) 50vw, 33vw" 
                      className="team-image" 
                    /> 
 
                    <div className="team-role-badge"> 
                      {person.role} 
                    </div> 
                  </div> 
 
                  {/* Details */} 
                  <div className="team-body"> 
                    <div className="team-name-row"> 
                      <h3>{person.name}</h3> 
 
                      <span className="team-index"> 
                        / 
                      </span> 
                    </div> 
 
                    <div className="team-role-text"> 
                      {person.role} 
                    </div> 
 
                    <p className="team-description"> 
                      {person.description} 
                    </p> 
 
                    <a 
                      href={`tel:${person.phone.replace( 
                        /-/g, 
                        "" 
                      )}`} 
                      className="team-phone" 
                    > 
                      <span>☎</span> 
                      {person.phone} 
                      <strong>↗</strong> 
                    </a> 
                  </div> 
                </article> 
              </div> 
            ))} 
          </div> 
        </div> 
      </section> 
 
      {/* ===================================================== 
          SERVICE STATEMENT 
      ====================================================== */} 
 
      <section className="about-service-banner"> 
        <div className="container"> 
          <div className="about-service-banner-inner"> 
            <div> 
              <span className="section-label"> 
                ONE PLACE FOR YOUR MOBILE NEEDS 
              </span> 
 
              <h2> 
                From choosing a phone 
                <br /> 
                to keeping it running. 
              </h2> 
            </div> 
 
            <Link 
              href="/service" 
              className="about-banner-button" 
            > 
              View All Services 
              <span>↗</span> 
            </Link> 
          </div> 
        </div> 
      </section> 
 
      {/* ===================================================== 
          CTA 
      ====================================================== */} 
 
      <section className="final-cta"> 
        <div className="container text-center"> 
          <span className="section-label"> 
            GET IN TOUCH 
          </span> 
 
          <h2 className="mt-2"> 
            Let&apos;s find the right 
            <br /> 
            mobile solution for you. 
          </h2> 
 
          <p 
            className="mx-auto mt-3" 
            style={{ 
              maxWidth: "620px", 
              color: "rgba(255,255,255,.62)", 
              lineHeight: 1.8, 
            }} 
          > 
            Whether you need a new smartphone, an accessory, 
            repair or servicing support, our team is ready to help. 
          </p> 
 
          <div className="hero-buttons justify-content-center mt-4"> 
            <Link 
              href="/contact" 
              className="btn-primary-custom" 
            > 
              Contact EMAD TELECOM → 
            </Link> 
 
            <Link 
              href="/service" 
              className="about-cta-outline" 
            > 
              Explore Services 
            </Link> 
          </div> 
        </div> 
      </section> 
 
      {/* ===================================================== 
          FOOTER 
      ====================================================== */} 
 
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