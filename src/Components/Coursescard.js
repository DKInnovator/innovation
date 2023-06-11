import React from 'react'
import { Link } from 'react-router-dom';
import './coursecard.css';
const Coursescard = () => {
  return (
 <>
 <h3 className='text-center mt-5 mb-5'> Top Recommendations </h3>
<div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
    <div className="cards-wrapper">
  <div className="card " >
    <img src="bgimage1.jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to="#" className="btn btn-primary"aria-current="page" >First photo</Link>
    </div>
  </div>
  <div className="card d-none d-sm-block">
    <img src="bgimage2.gif" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to="#" className="btn btn-primary"aria-current="page" >second photo</Link>
    </div>
  </div>
  <div className="card d-none d-sm-block">
    <img src="bgimage3.jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to="#" className="btn btn-primary"aria-current="page" >Third photo</Link>
    </div>
  </div>
</div>
    </div>
    <div className="carousel-item ">
    <div className="cards-wrapper">
  <div className="card  d-md-block">
    <img src="bgimage1.jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to="#" className="btn btn-primary"aria-current="page" >First photo</Link>
    </div>
  </div>
  <div className="card d-none d-sm-block" >
    <img src="bgimage2.gif" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to="#" className="btn btn-primary"aria-current="page" >second photo</Link>
    </div>
  </div>
  <div className="card d-none d-md-block">
    <img src="bgimage3.jpg" className="card-img-top" alt="..." />
    <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      <Link to="#" className="btn btn-primary"aria-current="page" >Third photo</Link>
    </div>
  </div>
</div>
    </div>
</div>
  <Link to="#carouselExampleControls" className="carousel-control-prev"  role="button" data-bs-slide="prev" >
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="sr-only">Previous</span>
    </Link>
    <Link to="#carouselExampleControls" className="carousel-control-next"  role="button" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="sr-only">Next</span>
 </Link>
  </div>
 </>
  )
}

export default Coursescard