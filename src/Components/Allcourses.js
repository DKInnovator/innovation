import React from 'react';
import { Link } from 'react-router-dom';
import './Allcourses.css';
const Allcourses = () => {
  return (
   <>
       <h5 className="text-center container mt-5">All Courses</h5>
    <div className="container text-center mt-5 mb-4">
  <div className="row  row-cols-2 row-cols-sm-2  row-cols-md-3 row-cols-lg-4 align-items-center allcoursesrow">
    <div className="col allcoursescol1">
    <div class="card allcard" >
  <img src="bgimg1.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">New Course</h5>
    <p class="card-text">Web Development</p>
    <Link to="#" className="btn btn-primary"aria-current="page" >Register</Link>
  </div>
</div>
    </div>
    <div className="col ">
    <div class="card allcard" >
  <img src="bgimg2.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Trending</h5>
    <p class="card-text">Mobile Development .</p>
    <Link to="#" className="btn btn-primary"aria-current="page" >Register</Link>
  </div>
</div>
    </div>
    <div className="col allcoursescol3">
    <div class="card allcard" >
  <img src="bgimg3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">Trending</h5>
    <p class="card-text">IOT</p>
    <Link to="#" className="btn btn-primary"aria-current="page" >Register</Link>
  </div>
</div>
    </div>
  
    <div className="col ">
    <div class="card allcard" >
  <img src="bgimg3.jpg" class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">New Course</h5>
    <p class="card-text">Basic Skills</p>
    <Link to="#" className="btn btn-primary"aria-current="page" >Register</Link>
  </div>
  </div>
    </div>
  </div>
</div>
   </>
  )
}

export default Allcourses