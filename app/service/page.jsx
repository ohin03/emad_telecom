import React from 'react'
import Link from 'next/link';
function page() {
  return (
    <main>
      <section
      className="d-flex align-items-center justify-content-center text-light"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518770660439-4636190af475')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "90px",
      }}
    >
      <div className="container bg-dark bg-opacity-75 p-5 rounded shadow-lg">
        {/* Hero */}
        <h2 className="text-center fw-bold mb-4 text-info">Our Services</h2>
        <p className="text-center mb-5">
          Complete mobile solutions under one roof. From sales to servicing,
          we’ve got you covered.
        </p>

        {/* Services Grid */}
        <div className="row text-center">
          {/* Smartphone Sales */}
          <div className="col-md-4 mb-4">
            <div className="card bg-transparent border-light text-light h-100">
              <div className="card-body">
                <img
                  src="https://img.icons8.com/ios-filled/80/00ffff/smartphone-tablet.png"
                  className="mb-3"
                  alt="Sales"
                />
                <h5 className="fw-bold text-info">Smartphone Sales</h5>
                <p>Latest branded smartphones at unbeatable prices.</p>
              </div>
            </div>
          </div>

          {/* Mobile Repair (Special Highlight) */}
          <div className="col-md-4 mb-4">
            <div className="card bg-info bg-opacity-25 border-info text-light h-100 shadow-lg">
              <div className="card-body">
                <img
                  src="as.jpeg"
                  className="mb-3"
                  alt="Repair"
                />
                <h5 className="fw-bold text-info">Mobile Repair</h5>
                <p>
                  Expert repairs for screen, battery, water damage, and hardware
                  issues.
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Servicing */}
          <div className="col-md-4 mb-4">
            <div className="card bg-transparent border-light text-light h-100">
              <div className="card-body">
                <img
                  src="https://img.icons8.com/ios-filled/80/00ffff/maintenance.png"
                  className="mb-3"
                  alt="Servicing"
                />
                <h5 className="fw-bold text-info">Mobile Servicing</h5>
                <p>Full device checkup, cleaning, and performance optimization.</p>
              </div>
            </div>
          </div>

          {/* Warranty & Support */}
          <div className="col-md-4 mb-4">
            <div className="card bg-transparent border-light text-light h-100">
              <div className="card-body">
                <img
                  src="https://img.icons8.com/ios-filled/80/00ffff/guarantee.png"
                  className="mb-3"
                  alt="Warranty"
                />
                <h5 className="fw-bold text-info">Warranty & Support</h5>
                <p>Original warranty with trusted after-sales service.</p>
              </div>
            </div>
          </div>

          {/* Accessories */}
          <div className="col-md-4 mb-4">
            <div className="card bg-transparent border-light text-light h-100">
              <div className="card-body">
                <img
                  src="acall.jpeg"
                  className="mb-3"
                  alt="Accessories"
                />
                <h5 className="fw-bold text-info">Accessories & Gadgets</h5>
                <p>Covers, chargers, headphones, and more.</p>
              </div>
            </div>
          </div>

          {/* Software Solutions */}
          <div className="col-md-4 mb-4">
            <div className="card bg-transparent border-light text-light h-100">
              <div className="card-body">
                <img
                  src="https://img.icons8.com/ios-filled/80/00ffff/software-box.png"
                  className="mb-3"
                  alt="Software"
                />
                <h5 className="fw-bold text-info">Software Solutions</h5>
                <p>OS updates, virus removal, and data recovery.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="text-center mt-5">
          <h4 className="fw-bold text-info mb-3">Why Choose Us?</h4>
          <p>
            ✔ Expert Technicians & Certified Service <br />
            ✔ Affordable & Transparent Pricing <br />
            ✔ Original Spare Parts <br />
            ✔ Fast & Reliable Support
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-5">
          <h4 className="fw-bold">Need urgent mobile repair?</h4>
          <p>Visit Emad Telecom or call us today.</p>
          <a href="tel:+8801234567890" className="btn btn-info btn-lg mt-2">
            📞 Call Now
          </a>
        </div>
  
    <div className="row mt-5">
      
      <div className="col-6 col-md-3 mb-3">
        <img src="service1.webp" className="img-fluid"   width="220" height="200" alt="img1"/>
      </div>

     
      <div className="col-6 col-md-3 mb-3">
        <img src="/service2.jpeg" className="img-fluid" width="220" height="200" alt="img2"/>
      </div>

      
      <div className="col-6 col-md-3 mb-3">
        <img src="/service3.jpg" className="img-fluid" width="220" height="200" alt="img3"/>
      </div>

     
      <div className="col-6 col-md-3 mb-3">
        <img src="/service4.webp" className="img-fluid" width="220" height="200" alt="img4"/>
      </div>
    </div>
  </div>



    </section>
    <footer className="bg-dark text-white pt-5 pb-3">
    <div className="container">
      <div className="row">
        
       
        <div className="col-md-4 mb-3">
          <h5 className="fw-bold text-danger">EMAD TELECOM</h5>
          <p>Your trusted mobile shop in Feni.</p>
          <p className="small mb-0">© 2025 EMAD TELECOM | All Rights Reserved</p>
        </div>
        
      
        <div className="col-md-4 mb-3">
          <h5 className="fw-bold text-warning">Quick Links</h5>
          <ul className="list-unstyled">
            <li>
            <Link href="/" className="nav-link active text-light fw-bold" aria-current="page">
                      Home
                    </Link>
                    </li>
            <li><Link className="nav-link text-light fw-bold" href="/contact" >
                      Contact
                    </Link></li>
            <li><Link className="nav-link text-light fw-bold" href="/about" >
                      About
                    </Link></li>
            <li><Link className="nav-link text-light fw-bold" href="/service" >
                      Service
                    </Link></li>
          </ul>
        </div>
        
      
        <div className="col-md-4 mb-3">
          <h5 className="fw-bold text-primary">Contact Us</h5>
          <p>📍Hazari Road, Mohipal , Feni Town</p>
          <p>📞 0177744-6536</p>
          <p>📧 ohinnurfoisal@gmail.com</p>
          <div>
            <a href="https://facebook.com/nur.foisal.ohin" className="btn btn-outline-light btn-sm me-2">Facebook</a>
            <a href="mailto:ohinnurfoisal@gmail.com" className="btn btn-outline-light btn-sm me-2">Mail</a>
            <a href="https://wa.me/8801971676314" className="btn btn-outline-light btn-sm">WhatsApp</a>
          </div>
        </div>
        
      </div>
    </div>
  </footer>
    </main>
  )
}
export default page;

export function generateMetadata(){
  return{
    title:"Service- Emad Telecom",
    description:"Wellcome to Emad Telecom Feni,Bangladesh"
  }
}