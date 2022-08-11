import { useState } from "react";
import "./assets/style.css";
import Logo from "../../images/logo.png"

const Register = () =>{
     
   

     const [box, setBox] = useState(true);
     const [btn, setBtn] = useState(true);   
      

    return(
        <>
         
         {/* Main section starts here */}

            <section>

            {/* Heading stuff starts here */}
             
             <div className="container-fluid">
                <div className="row min-vh-100" >
           
                 {
     box && <div className="col-lg-5 heading-box box-1" id="box-1">     
       <img src={Logo} alt="logo" className="img-fluid" data-aos="zoom-in"/>
                    </div>
                    }
                    

            {/* Heading stuff ends here */}

            {/* Form container starts here */}

        <div className="col-lg-7 box-2">
                       
     <div className="row">

<div className="col-lg-12 heading-set">
    <h3>sign in</h3>
    <p>Enter your Sign In details</p>
</div>
<div className="col-lg-12 form-set">

<form action="">

<div className="form-box">
<div className="col-lg-4 input-box form-floating">
   <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com"/>
  <label for="floatingEmail">Email Address</label>
</div>

<div className="col-lg-4 input-box form-floating">
   <input type="password" class="form-control" id="floatingPass" placeholder="name@example.com"/>
  <label for="floatingPass">Password</label>
</div>

<div className="btn-box">
    <button type="submit" className="btn">sign in</button>
    
</div>

<div className="form-text">
    <p className="form-text-set">Dont have an account? <span id="signUp" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Sign Up</span></p>

{/* Rendering of Modal starts here */}



<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
       
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-btn"></button>
      </div>
      <div class="modal-body">

     <div className="modal-intro">
     <h3 class="modal-title" id="staticBackdropLabel">Create an account</h3>
     <p>Enter details to create an account</p>
      </div>
      
{/* Modal form starts here */}

<form>
  <div className="row">

  
<div className="col-md-6 input-box form-floating">
   <input type="text" class="form-control" id="floatingFirst" placeholder="name@example.com"/>
  <label for="floatingFirst" className="px-4">First Name</label>
</div>

<div className="col-md-6 input-box form-floating">
   <input type="text" class="form-control" id="floatingLast" placeholder="name@example.com"/>
  <label for="floatingLast" className="px-4">Last Name</label>
</div>

<div className="form-container">

<div className="col-md-12 input-box form-floating">
   <input type="email" class="form-control" id="floatingmodalEmail" placeholder="name@example.com"/>
  <label for="floatingmodalEmail">Email Address</label>
</div>
</div>

<div className="form-container">

<div className="col-md-12 input-box form-floating">
   <input type="number" class="form-control" id="floatingNum" placeholder="name@example.com"/>
  <label for="floatingNum">Contact Number</label>
</div>
</div>

<div className="form-container">

<div className="col-md-12 input-box form-floating">

<select class="form-select select" >
  <option selected>Designation</option>
  <option value="Admin">Admin</option>
  <option value="Trainer">Trainer</option>
  <option value="Student">Student</option>
</select>

 
</div>
</div>

<div className="form-container">

<div className="col-md-12 input-box form-floating">
   <input type="number" class="form-control" id="floatingCNIC" placeholder="name@example.com"/>
  <label for="floatingCNIC">CNIC</label>
</div>
</div>


<div className="form-container">

<div className="col-md-12 input-box form-floating">
   <input type="password" class="form-control" id="floatingPass" placeholder="name@example.com"/>
  <label for="floatingPass">Password</label>
</div>
</div>


<div className="form-container d-flex justify-content-center gy-3">

<div className="btn-box box-btn">
    <button type="submit" className="btn">sign up</button>
    
</div>

</div>

  </div>

 
</form>





{/* Modal form ends here */}

     </div> 
    </div>
  </div>
</div>
</div>
{/* Rendering of Modal ends here */}

</div>




</form>

</div>

  {/* Form container ends here */}

     </div>                     

    </div>

    {/* To bottom button starts here */}


    {
        btn &&

 <div class="scroll-down d-lg-none d-block"  onClick={() => {

 setBox(false); 
 setBtn(false)
 
 ;}} id="scroll">
    
    </div>
    
    }

    {/* To bottom button ends here */}
                </div>

             </div>          
            </section>


         {/* Main section ends here */}    
        </>
    )
}


export default Register;