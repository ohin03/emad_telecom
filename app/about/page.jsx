import React from 'react'
import Link from 'next/link';


function page() {
  return (
    <main>
      <section className="py-5 bg-info-subtle about "> 
  <div className="container">
    
   
    <div className="row align-items-center mb-5">
      <div className="col-md-4">
        <h1 className="fw-bold mb-3">
          Emad Telecom
        </h1>
        <p>
          Emad Telecom started its journey in 2020 in Feni. 
          We are one of the most trusted mobile shops, providing the latest smartphones, 
          genuine accessories, and professional repair services. 
          Our goal is to bring the best technology at affordable prices.However, here available second hand fresh condition android mobile and iphone.
        </p>
      </div>
      <div className="col-md-4 text-center">
        <img src="/allteam.jpg" width="300" height="200" style={{ marginTop: '80px' }} className="img-fluid rounded shadow" alt="Shop Image"/>
      </div>
      <div className="col-md-4 text-center">
        <img src="/spim1.jpg" width="300" height="400" style={{ marginTop: '80px' }} className="img-fluid rounded shadow" alt="Shop Image"/>
      </div>
    </div>

    
    <div className="row text-center mb-5">
      <div className="col-md-6">
        <h4 className="fw-bold text-success">Our Mission</h4>
        <p>Deliver original mobile phones, reliable services, and customer satisfaction.</p>
      </div>
      <div className="col-md-6">
        <h4 className="fw-bold text-success">Our Vision</h4>
        <p>Become the most trusted and largest mobile retailer in Bangladesh.</p>
      </div>
    </div>

  
    <div className="mb-5">
      <h3 className="fw-bold text-center mb-4 bg-danger-subtle">Why Choose Us?</h3>
      <div className="row text-center">
        <div className="col-md-3 mb-3">
          <div className="p-4 bg-white shadow-sm rounded">
            <h1>✅</h1>
            <p>100% Genuine Products</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="p-4 bg-white shadow-sm rounded">
            <h1>🚚</h1>
            <p>Fast Delivery in Feni</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="p-4 bg-white shadow-sm rounded">
            <h1>🔧</h1>
            <p>Expert Repair Service</p>
          </div>
        </div>
        <div className="col-md-3 mb-3">
          <div className="p-4 bg-white shadow-sm rounded">
            <h1>🏆</h1>
            <p>5+ Years of Trust</p>
          </div>
        </div>
      </div>
    </div>

   
    <div className="mb-5">
      <h3 className="fw-bold text-center mb-4 bg-warning-subtle">Meet Our Team</h3>
      <div className="row text-center">
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <img src="/owner.jpg"  height="500" className="card-img-top" alt="Owner"/>
            <div className="card-body">
              <h5 className="card-title">Nurul Amin</h5>
              <p className="card-text">Owner</p>
              <p className="card-text">Phn no: 01777-446536</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <img src="/manager.jpg" height="500" className="card-img-top" alt="Manager"/>
            <div className="card-body">
              <h5 className="card-title">Nur Foisal Ohin</h5>
              <p className="card-text">Manager</p>
              <p className="card-text">Phn no: 01971-676314</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 mb-3">
          <div className="card shadow-sm">
            <img src="/tec.jpg" height="500" className="card-img-top" alt="Technician"/>
            <div className="card-body">
              <h5 className="card-title">Md Abid</h5>
              <p className="card-text">Technician</p>
              <p className="card-text">Phn no: 01832-574007</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="mb-5">
      <h3 className="fw-bold text-center mb-4 bg-success-subtle">What Our Customers Say</h3>
      <div className="row">
        <div className="col-md-6">
          <blockquote className="blockquote bg-white p-4 rounded shadow-sm">
            <p>"I bought my phone from Emad Telecom, best service in Feni!"</p>
            <footer className="blockquote-footer">Happy Customer</footer>
          </blockquote>
        </div>
        <div className="col-md-6">
          <blockquote className="blockquote bg-white p-4 rounded shadow-sm">
            <p>"Fast repair service, highly recommended."</p>
            <footer className="blockquote-footer">Satisfied Client</footer>
          </blockquote>
        </div>
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

export default page


export function generateMetadata(){
  return{
    title:"About- Emad Telecom",
    description:"Wellcome to Emad Telecom Feni,Bangladesh"
  }
}