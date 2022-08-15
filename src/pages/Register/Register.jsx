import { useState } from "react";
import "./style.css";
import Logo from "../../components/Logo/Logo";
// import { useNavigate } from "react-router-dom";

const Register = () =>{    


// const navigate = useNavigate();
const [box, setBox] = useState(true);
const [btn, setBtn] = useState(true);
const [credentials, setCredentials] = useState({
firstname: "",
lastname: "",
email: "",
contactno: "",
designation: "",
cnic: "",
password: ""
});

const handleInput = (e) =>{
setCredentials({...credentials, [e.target.name] : e.target.value});
}
const Submit = async (e) => {
const {firstname, lastname, email, cnic, designation, contactno, password} = credentials; 

try{
const response = await fetch("http://192.168.128.65:5000/api/auth/createuser", {
method: "POST",
headers: {
"Content-Type": "application/json", },
body: JSON.stringify({firstname, lastname, email, cnic, designation, contactno, password})});
const data = await response.json();
console.log(data);}

catch(error){
console.log(error)
}

};

return(
<>

{/* Main section starts here */}

<section>

{/* Heading stuff starts here */}

<div className="container-fluid">
<div className="row min-vh-100" >
{box && <Logo/>} 

{/* Heading stuff ends here */}

{/* Form container starts here */}

<div className="col-lg-7 box-2">
<div className="row">
<div className="col-lg-12 heading-set">
<h3>sign in</h3>
<p>Enter your Sign In details</p>
</div>
<div className="col-lg-12 form-set">
<form>
<div className="form-box">
<div className="col-lg-4 input-box form-floating">
<input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com" required/>
<label htmlFor="floatingEmail">Email Address</label>
</div>
<div className="col-lg-4 input-box form-floating">
<input type="password" class="form-control" id="floatingP" placeholder="name@example.com" required/>
<label htmlFor="floatingP">Password</label>
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

<form onSubmit={Submit}>
<div className="row">
<div className="col-md-6 input-box form-floating">
<input type="text" class="form-control" id="firstname" placeholder="name@example.com" required name="firstname" onChange={handleInput} value={credentials.firstname}/>
<label htmlFor="firstname" className="px-4">First Name</label>
</div>
<div className="col-md-6 input-box form-floating">
<input type="text" class="form-control" id="lastname" placeholder="name@example.com" required name="lastname" onChange={handleInput} value={credentials.lastname}/>
<label htmlFor="lastname" className="px-4">Last Name</label>
</div>
<div className="form-container">
<div className="col-md-12 input-box form-floating">
<input type="email" class="form-control" id="email" placeholder="name@example.com" required name="email" onChange={handleInput} value={credentials.email}/>
<label htmlFor="email">Email Address</label>
</div>
</div>
<div className="form-container">
<div className="col-md-12 input-box form-floating">
<input type="number" class="form-control" id="contactno" placeholder="name@example.com" required name="contactno" onChange={handleInput} value={credentials.contactno}/>
<label htmlFor="contactno">Contact Number</label>
</div>
</div>
<div className="form-container">
<div className="col-md-12 input-box form-floating">
<select class="form-select select" name="designation" onChange={handleInput} id="designation" value={credentials.designation}>
<option selected>Designation</option>
<option value="Admin">Admin</option>
<option value="Trainer">Trainer</option>
<option value="Student">Student</option>
</select>
</div>
</div>
<div className="form-container">
<div className="col-md-12 input-box form-floating">
<input type="number" class="form-control" id="cnic" placeholder="name@example.com" required name="cnic" onChange={handleInput} value={credentials.cnic}/>
<label htmlFor="cnic">CNIC</label>
<div className="form-text px-3 text-danger">XXXXX-XXXXXXX-X</div>
</div>
</div>
<div className="form-container">
<div className="col-md-12 input-box form-floating">
<input type="password" class="form-control" id="password" placeholder="name@example.com" required name="password" onChange={handleInput} value={credentials.password}/>
<label htmlFor="password">Password</label>
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
{/* Rendering of Modal ends here */}
</div>



</div>
</form>
</div>

{/* Form container ends here */}

</div>
</div>

{/* To bottom button starts here */}

{btn && <div class="scroll-down d-lg-none d-block"  onClick={() => {setBox(false); setBtn(false);}} id="scroll">
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