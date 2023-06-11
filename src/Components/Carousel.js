import React from "react";
import "./Carousel.css";
const Carousel = () => {
  return (
    <>
    <div id="carouselExampleDark" className="carousel  slide carousel-fade " data-bs-ride="carousel" data-pause="false" >
    <div className="carousel-indicators">
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true"  aria-label="Slide 1" style={{ height: "15px", 
      width: "20px",
     backgroundColor: "blue",
      borderRadius: "50%",    display: "inlineBlock"}}></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"  style={{ height: "15px", 
      width: "17px",
     backgroundColor: "blue",
      borderRadius: "50%",    display: "inlineBlock"}}></button>
      <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"  style={{ height: "15px", 
      width: "17px",
     backgroundColor: "blue",
      borderRadius: "50%",    display: "inlineBlock"}}></button>
    </div>
    <div className="carousel-inner">
      <div className="carousel-item active" >
        <img src="bgimg1.jpg"  alt="First slider" className='d-block w-100' data-bs-interval="4000" />
        
      </div>
      <div className="carousel-item" data-bs-interval="4000">
        <img src="/bgimg2.jpg"  alt="Second slider "  className='d-block w-100' data-bs-interval="4000" />
        
      </div>
      <div className="carousel-item" data-bs-interval="4000">
        <img src="/bgimg3.jpg"  alt="Third slider" className='d-block w-100' data-bs-interval="4000"/> 
       
      </div>
    </div>
   
  </div> 
    </>
  );
};

export default Carousel;
