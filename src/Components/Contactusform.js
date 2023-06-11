import React, {useState} from 'react'
import './Contactus.css';

const Contactusform = () => {
 const[userData,setUserData]  = useState({
    firstname:"",
    lastname : "",
    phone:"",
    email:"",
    query:""
 });

 let name, value;
 const postUserdata = (event) =>{
    name=event.target.name;
    value=event.target.value;
    setUserData({...userData,[name]:value})
 }
   //connect to Firebase 
   const submitdata = async (event)=>{
    event.preventDefault();
    const {firstname,lastname,phone,email, query } =userData;
    if(firstname && lastname && phone && email && query ){
   const res = await  fetch('https://innovation-8d5d8-default-rtdb.firebaseio.com//userDataRecords.json',
   {
    method:"POST",
    headers : {
        "Content-Type":"application/json",
    },
    body:JSON.stringify({
        firstname,
        lastname,
        phone,
        email, 
        query, 
    })
   });
   if(res){
    setUserData({
        firstname:"",
        lastname : "",
        phone:"",
        email:"",
        query:""
    })
    alert("Your Message has been Sent Successfully , Team come back to you shortly");
   }
   else {
    alert("Please Fill All Data ")
   }
}
else {
    alert("Please Fill All Field Of Data ")
   }
   }
  return (
    <>
        <section className="contact-us" >
            <div className="container">
                <div className="row">
                    <div className="col-md-7 ">
                        <div className="section-title text-center">
                            <h2 className="contacth2">Contact Us</h2>
                            <p className="paragraph"><b>Thank you for your interest in Innovators Academy Platform. We are Always Ready For Your Help. Ask Your Doubts Freely.</b></p>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-7">
      <form method='POST' className="mb-4 mb-lg-0">
                            <div className="form-row">
                                <div className="col-md-6 form-group">
                                    <input
                                     type="text"  
                                     className="form-control"
                                      id="Fname"
                                      name='firstname'
                                     placeholder="Your Firstname"
                                     value={userData.firstname} 
                                    onChange={postUserdata}
                                     />
                                </div>
                                <div className="col-md-6 form-group">
                                    <input 
                                    type="text" 
                                    className="form-control" 
                                    id="Lname" 
                                    name='lastname'
                                    placeholder="Your Last Name" 
                                    value={userData.lastname} 
                                    onChange={postUserdata}
                                    />
                                </div>
                                <div className=" form-group">
                                    <input 
                                    type="number" 
                                    className="form-control" 
                                    id="phoneno" 
                                    name='phone'
                                    placeholder="Write Your Phone Number" 
                                    value={userData.phone} 
                                    onChange={postUserdata}
                                    />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text"
                                 className="form-control"  
                                 id="emailid"
                                 name='email'
                                 placeholder="Write Your Email" 
                                 value={userData.email} 
                                  onChange={postUserdata}
                                 />
                            </div>
                            <div className="form-group">
                                <textarea 
                                className="form-control"
                                 id="Query"
                                 name='query'
                                 placeholder="Type Your  Query"
                                 value={userData.query} 
                                 onChange={postUserdata}></textarea>
                            </div>
                            <button type="submit" onClick={submitdata} className="btn btn-light mt-3" >Contact Now</button>
                        </form>
                 
                    </div>
                
                    <div className="col-lg-5 ">
                        <div className="map">
                            <iframe  title="myFrame" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d28489.378513693086!2d75.80813107756649!3d26.802641423183914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396dc98e1f33788b%3A0x9a2730f2d96e4e45!2sPratap%20Nagar%2C%20Jaipur%2C%20Rajasthan!5e0!3m2!1sen!2sin!4v1664791447165!5m2!1sen!2sin" width={"600px"} height={"350"} style={{border:"0px"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                             </div>
                    </div>
                </div>
            </div>
        </section>

         {/*function gotowhatsapp(){
        var fname=document.getElementById("Fname").value;
        var lname=document.getElementById("Lname").value;
         var subject=document.getElementById("subject").value;
        var doubt=document.getElementById("doubts").value;
        var url="https://wa.me/918285524418?text= "
        +"First name:"+fname+"%0a"
        +"Last name:"+lname+"%0a"
        +"Subject:"+subject+"%0a"
        +"Doubt:"+doubt+"%0a";
        window.open(url,'_blank').focus();
      } */} 
    </>
  )
}

export default Contactusform;