import React, { useState } from 'react'

import './careerblock.css';
import Data from './Userdata.json';
const Careerblock = () => {
 
   const [searchterm,setSearchterm]=useState("");
  return (
   <>
   <div className="container mt-3 careerblockbody">

<div className="row  d-flex justify-content-center align-items-center bg-white">

  <div className="col-md-8">

    <div className="search">
      <i className="fa fa-search"></i>
      <input type="text" className="form-control" placeholder="Search Suited Career Option" onChange={(event)=>{
        setSearchterm(event.target.value);
      }}/>
    
    </div>
    
  </div>
  
</div>
</div>
  <div className="container text-center mt-5 mb-4">
  <div className="row careerrow row-cols-2 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 align-items-center ">
{ 
  Data.filter((val) => {
    if(searchterm===""){
      return val;
    }
    else if (val.title.toLowerCase().includes(searchterm.toLowerCase())){
      return val;
    }
  }).map((val)=>{
  return(
  
   <div className="col careercol1">
    <div className="card  careercard" >
  <img src={val.image} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title" >{val.text}  web development</h5>
    <p className="card-text">{val.title}</p>
    
  </div>
</div>
    </div>
  

  )
  })
}
</div>
</div>

   </>
  )
}

export default Careerblock;