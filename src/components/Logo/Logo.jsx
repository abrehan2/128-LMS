import React from 'react';
import "./Logo.css";
import image from "../../images/logo.png";

const Logo = () => {
  return (
   <>
<div className="col-lg-5 heading-box box-1" id="box-1">     
<img src={image} alt="logo" className="img-fluid" data-aos="zoom-in"/>
</div>
   </>
  )
}

export default Logo;