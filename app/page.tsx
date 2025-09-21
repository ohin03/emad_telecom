"use client"
import { collectRoutesUsingEdgeRuntime } from 'next/dist/build/utils';
import { text } from 'node:stream/consumers';
import React from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function HomePage() {
  const router=useRouter();
  return (
    <main
       style={{
          height:'500px',
          backgroundImage: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('/mbb1.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          
        }}
     >
       <div className='navHero'>
        <h1>Wellcome to EMAD TELECOM</h1>
        <p>Best collection of smartphones, accessories and trusted mobile service center in Feni</p>
        <button className='btn btn-primary'>Shop Now</button>
       </div>







        <section className="section3 bg-danger-subtle my-section" >
    <div className="container">
    <div className="row ">
      <h3 className="text-center mt-4">Trending Near You</h3>
      <div className="col-md-4">
       <div className="card">
         <img src="/redmi.webp"  alt="" className="card-img-top" />
        <div className="card-body">
          <h5>REDMI 13C 5G</h5>
        <p>6/128gb and 8/256gb</p>
        <p>4+128GB BDT 13,999TK 6+128GB BDT 14,999TK 8+256GB BDT 16,999TK (VAT Applicable)</p>
        <div className="btn-group gap-2">
          <button className="btn btn-danger" type='button' onClick={()=> router.push("/contact")}>contact</button>
          <button className="btn btn-primary">Buy Now</button>
       </div>
        </div>
        </div>
      </div>


         <div className="col-md-4">
       <div className="card">
         <img src="/vivo.png" alt="" className="card-img-top"/>
        <div className="card-body">
          <h5>VIVO V50 LITE 5G</h5>
        <p>8/128gb and 8/256gb</p>
        <p>8/128 price BDT 28500TK and 8/256 price BDT 31300TK</p>
        <div className="btn-group gap-2">
          <button className="btn btn-danger" type='button' onClick={()=> router.push("/contact")}>contact</button>
          <button className="btn btn-primary">Buy Now</button>
       </div>
        </div>
        </div>
      </div>

         <div className="col-md-4">
       <div className="card">
         <img src="/oppo.webp" alt="" className="card-img-top"/>
        <div className="card-body">
          <h5>OPPO RENO 14F 5G</h5>
        <p>8/256gb</p>
        <p>8/256gb price BDT 42,990TK Battery Li-Po 6000mAh Waterproof, IP68/IP69</p>
        <div className="btn-group gap-2">
          <button className="btn btn-danger" type='button' onClick={()=> router.push("/contact")}>contact</button>
          <button className="btn btn-primary">Buy Now</button>
       </div>
        </div>
        </div>
      </div>
    </div>
    </div>
   </section>



   <section className='accesoris bg-primary-subtle text-black pt-5 mb-3'>
    <div className="container">
    <div className="row">
      <h2 className='text-center text-success'>Our some accesories items</h2>
       <div className="col-md-3">
       <div className="card">
         <img src="/dm10.jpg"  alt="" className="card-img-top" />
        <div className="card-body">
          <h5>DM10</h5>
        <p>You can find all unique item in here</p>
        </div>
        </div>
      </div>
      
      <div className="col-md-3">
       <div className="card">
         <img src="/applec.png"  alt="" className="card-img-top" />
        <div className="card-body">
          <h5>Iphone Charger</h5>
        <p>USB-C Fast PD Charging Cable Lead</p>
        </div>
        </div>
      </div>
      
      <div className="col-md-3">
       <div className="card">
         <img src="/glass.webp"  alt="" className="card-img-top" />
        <div className="card-body">
          <h5>SuperX Glass</h5>
        <p>Protection glass save your display</p>
        </div>
        </div>
      </div>

      <div className="col-md-3">
       <div className="card">
         <img src="/cover.jpg"  alt="" className="card-img-top" />
        <div className="card-body">
          <h5>Mobile Case</h5>
          <p>All kind of cover available</p>
        </div>
        </div>
      </div>

      <div className="col-md-3">
       <div className="card">
         <img src="/memory.jpg"  alt="" className="card-img-top" />
        <div className="card-body">
          <h5>Memory</h5>
          <p>8gb, 16gb, 32gb, 64gb, 128gb</p>
        </div>
        </div>
      </div>
      
      <div className="col-md-3">
       <div className="card">
         <img src="/bluttoth.webp"  alt="" className="card-img-top" />
        <div className="card-body">
          <h5>Bluttoth</h5>
          <p>Here available many kinds of bluttoth</p>
        </div>
        </div>
      </div>

      <div className="col-md-3">
       <div className="card">
         <img src="/bl2.jpeg"  alt="" className="card-img-top" />
        <div className="card-body">
          <h5>Bluttoth</h5>
          <p>Another Sample</p>
        </div>
        </div>
      </div>

      <div className="col-md-3">
       <div className="card">
         <img src="/cable.jpg"  alt="" className="card-img-top" />
        <div className="card-body">
          <h5>Cable</h5>
          <p>type-B, type-C, Iphone</p>
        </div>
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
        <h5 className="fw-bold text-warning text-warning">Quick Links</h5>
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
  );
}

