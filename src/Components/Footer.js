import React from 'react'
import { Link } from 'react-router-dom';
import './footer.css'
const Footer = () => {
   
  return (
<>
<footer className="text-center text-lg-start text-white" style={{backgroundColor:"#00004d"}}>
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left*/}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
  

    {/* Right */}
    <div>
    <Link to="#" className="me-4 link-secondary" >    <i className="fab fa-facebook-f iclass "></i></Link>
    <Link to="#" className="me-4 link-secondary" >     <i className="fab fa-twitter iclass " ></i></Link>
    <Link to="#" className="me-4 link-secondary" >    <i className="fab fa-google iclass "></i></Link>
    <Link to="#" className="me-4 link-secondary" >      <i className="fab fa-instagram iclass "></i></Link>
    <Link to="#" className="me-4 link-secondary" >     <i className="fab fa-linkedin iclass "></i></Link>
    <Link to="#" className="me-4 link-secondary" >     <i className="fab fa-github iclass "></i></Link>
    </div>
   
  </section>
 {/* Section: Social media end*/}

 {/* Section: Links*/}
  <section className="">
    <div className="container text-center text-md-start mt-5">
     {/* Grid Row*/}
      <div className="row mt-3">
      {/* Section: Grid Column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
       {/*  Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3 text-white iclass "></i>Innovators Academy
          </h6>
          <p>
            Innovators Academy Is India's Largest Growing Innovative Skill Development Organization.Its Aim Is To Skilled Youth With New Technology Alongwith Innovation in IOT(Internet Of Things). So, What Are You Waiting For , Let's Join Our Commmunity and Grow Your Career Rapidly.
          </p>
        </div>
     
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */} 
          <h6 className="text-uppercase fw-bold mb-4 ">
           Courses
        <p type="button" className=' toggles' data-bs-toggle="collapse" data-bs-target="#pluscollapse" aria-controls="pluscollapse" aria-expanded="false"><i className=" fa-solid fa-plus"></i> </p>
        </h6> 
          <div id='pluscollapse' className='collapse multi-collapse hatao'>
          <p>
          <Link to="#"  className="text-reset" > Internet Of Things</Link>
          </p>
          <p>
          <Link to="#"  className="text-reset" > Embeded System</Link>
          </p>
          <p>
          <Link to="#" className="text-reset" > PCB Designs</Link>
          </p>
          <p>
          <Link to="#" className="text-reset" >IOT + Web Development</Link>
          </p>
          <p>
          <Link to="#" className="text-reset" > IOT + Mobile Development</Link>
          </p>
          <p>
          <Link to="#" className="text-reset" >Electric Vehicle</Link>
          </p>
          <p>
          <Link to="#" className="text-reset" > Basic Computer Skills</Link>
          </p>
          </div>
        </div>
      
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4 ">
         {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Quick links
            <p type="button" className=' toggles' data-bs-toggle="collapse" data-bs-target="#pluscollapse2" aria-controls="pluscollapse" aria-expanded="false"><i className=" fa-solid fa-plus"></i> </p>
          </h6>
          <div id='pluscollapse2' className='collapse multi-collapse hatao'>
          <p>
          <Link to="#" className="text-reset" >Home</Link>
          </p>
          <p>
          <Link to="#" className="text-reset" >Courses</Link>
          </p>
          <p>
          <Link to="#" className="text-reset" >Career</Link>
          </p>
          <p>
          <Link to="#" className="text-reset" >About Us</Link>
          </p>
        </div>
       </div>
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
       
          <h6 className="text-uppercase  mb-4"><b>Contact</b></h6>
          <p><i className="fas fa-home me-3 text-secondary"></i>Jaipur Head Office</p>
          <p>
            <i className="fas fa-envelope me-3 text-secondary"></i>
            innovatorsacademy@example.com
          </p>
          <p><i className="fas fa-phone me-3 text-secondary"></i> 828 552 44 18</p>
          <p><i className="fas fa-print me-3 text-secondary"></i> 892 011 45 81</p>
        </div>
    
      </div>
 
    </div>
  </section>
 {/*Copyright*/}
  <div class="text-center p-4" style={{backgroundColor: "rgba(0, 0, 0, 0.025)"}}>
    © 2021 Copyright:
    <Link to="https://innovatorsacademy.in" className="text-reset " >innovatorsacademy.in</Link>
  </div>
  
</footer>

</>
  )
}

export default Footer;