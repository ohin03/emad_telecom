import React from 'react'
import Link from 'next/link';
function page() {
  return (
    <div
       style={{
          minHeight: '100vh',
          backgroundImage: "url('/mw.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
     >
     <section
      className="d-flex align-items-center justify-content-center text-light"
      style={{
        minHeight: "100vh",
        
        backgroundSize: "cover",
        backgroundPosition: "center",
        paddingTop: "90px",
      }}
    >
      <div className="container bg-dark bg-opacity-75 p-5 rounded shadow-lg">
        <h2 className="text-center fw-bold mb-4 text-info">Contact Us</h2>
        <p className="text-center mb-5">
          Have questions about our mobiles or services? We’d love to hear from
          you.
        </p>

        <div className="row text-center">
          {/* Address */}
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded h-100 bg-transparent">
              <img
                src="https://img.icons8.com/ios-filled/80/00ffff/marker.png"
                alt="Address"
                className="mb-3"
              />
              <h5 className="fw-bold text-info">Visit Us</h5>
              <p>
                Emad Telecom
                <br />
                The west end of the Hajari Road, Mohipal, Feni, Bangladesh
              </p>
            </div>
          </div>

          {/* Phone */}
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded h-100 bg-transparent">
              <img
                src="https://img.icons8.com/ios-filled/80/00ffff/phone.png"
                alt="Phone"
                className="mb-3"
              />
              <h5 className="fw-bold text-info">Call Now</h5>
              <p>
                +880 1777446536
                <br />
                +880 1971676314
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="col-md-4 mb-4">
            <div className="p-4 border rounded h-100 bg-transparent">
              <img
                src="https://img.icons8.com/ios-filled/80/00ffff/new-post.png"
                alt="Email"
                className="mb-3"
              />
              <h5 className="fw-bold text-info">Email</h5>
              <p>
                nurulamin@gnail.com 
                <br />
                ohinnurfoisal@gmail.com
              </p>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="text-center mt-5">
          <h5 className="fw-bold text-info mb-3">Follow Us</h5>
          <a href="https://facebook.com/nur.foisal.ohin" className="btn btn-outline-info btn-lg m-2">
            Facebook
          </a>
          <a href="mailto:ohinnurfoisal@gmail.com" className="btn btn-outline-info btn-lg m-2">
            Mail
          </a>
          <a href="https://wa.me/8801971676314" className="btn btn-outline-info btn-lg m-2">
            WhatsApp
          </a>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-5">
          <h4 className="fw-bold">Need help choosing the right phone?</h4>
          <p>Call us today or visit our shop for expert advice.</p>
          <a href="tel:+8801777446536" className="btn btn-info btn-lg mt-2">
            📞 Call Now
          </a>
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
    </div>
  )
}

export default page


export function generateMetadata(){
  return{
    title:"Contact- Emad Telecom",
    description:"Wellcome to Emad Telecom Feni,Bangladesh"
  }
}