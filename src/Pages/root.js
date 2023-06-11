import React from 'react'
import Header from '../Components/header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import Whatsappicon from '../Components/Whatsappicon';

const Root = () => {
  return (
    <>
      <Header /> 
    <Outlet />
    <Footer /> 
    <Whatsappicon />
 
    </>
    
  )
}

     

export default Root;
