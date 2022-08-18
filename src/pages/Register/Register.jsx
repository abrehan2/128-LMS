import { useState } from "react";
import "../../pages/Register/Register.css";
import Logo from "../../components/Logo/Logo";
import { useNavigate } from "react-router-dom";

const Register = () =>{    

var getData;
var option = false;
const navigate = useNavigate();
const [box, setBox] = useState(true);
const [btn, setBtn] = useState(true);
const [credentials, setCredentials] = useState({
firstname: "",
lastname: "",
email: "",
contactno: "",
designation: "",
cnic: "",
password: "",
status: "False"
});

const [sign, setSign] = useState({signE: "", signP: ""});

const handleSign = (e) => {
    setSign({...sign, [e.target.name] : e.target.value})
}

// Sign in API starts here

const submitSign = async () => {
//    const {signEmail, signPassword} = sign;

try{

const response = await fetch("http://192.168.128.133:5000/api/auth/login", {
method: "POST",
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify({signE:sign.signE, signP:sign.signP})
});

const signData = await response.json();
getData = signData;

// console.log(signData)




}
catch(error){
console.log(error)
}
}

console.log(getData)


// Sign in API ends here

if(credentials.cnic.length!==13)
{
option = true;


}


// Sign up API starts here
const handleInput = (e) =>{
setCredentials({...credentials, [e.target.name] : e.target.value});

console.log(credentials.status)

}
const Submit = async (e) => {
const {firstname, lastname, email, cnic, designation, contactno, password, status} = credentials; 

try{
const response = await fetch("http://192.168.128.133:5000/api/auth/createuser", {
method: "POST",
headers: {
"Content-Type": "application/json", },
body: JSON.stringify({firstname, lastname, email,  contactno, cnic, designation, password, status})});
const data = await response.json();
console.log(data);}

catch(error){
console.log(error)
}

};
// Sign up API ends here

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
<form onSubmit={submitSign}>
<div className="form-box">
<div className="col-lg-4 input-box form-floating">
<input type="email" className="form-control" id="signE" placeholder="name@example.com" required name="signE" value={sign.signE} onChange={handleSign}/>
<label htmlhtmlFor="signEmail">Email Address</label>
</div>
<div className="col-lg-4 input-box form-floating">
<input type="password" className="form-control" id="signP" placeholder="name@example.com" required name="signP" value={sign.signP} onChange={handleSign}/>
<label htmlhtmlFor="signPassword">Password</label>
</div>
<div className="btn-box">
<button type="submit" className="btn">sign in</button>
</div>
<div className="form-text">
<p className="form-text-set">Dont have an account? <span id="signUp" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Sign Up</span></p>

{/* Rendering of Modal starts here */}


{/* Rendering of Modal ends here */}
</div>
</div>
</form>

</div>

{/* Form container ends here */}

</div>
</div>

{/* To bottom button starts here */}

{btn && <div className="scroll-down d-lg-none d-block"  onClick={() => {setBox(false); setBtn(false);}} id="scroll">
</div>
}

{/* To bottom button ends here */}

</div>
</div>          
</section>
{/* Main section ends here */}

<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" aria-labelledby="staticBackdropLabel" aria-hidden="true">
<div className="modal-dialog">
<div className="modal-content">
<div className="modal-header">
<button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" id="close-btn"></button>
</div>
<div className="modal-body">
<div className="modal-intro">
<h3 className="modal-title" id="staticBackdropLabel">Create an account</h3>
<p>Enter details to create an account</p>
</div>

{/* Modal form starts here */}

<form onSubmit={Submit} className="form-sign">
<div className="row form-set">
<div className="col-md-6 form-floating sign-box">
<input type="text" className="form-control sign-form" id="firstname" placeholder="name@example.com" required name="firstname" onChange={handleInput} value={credentials.firstname}/>
<label htmlhtmlFor="firstname" className="px-4">First Name</label>
</div>
<div className="col-md-6 form-floating sign-box">
<input type="text" className="form-control sign-form" id="lastname" placeholder="name@example.com" required name="lastname" onChange={handleInput} value={credentials.lastname}/>
<label htmlhtmlFor="lastname" className="px-4">Last Name</label>
</div>
<div className="form-container">
<div className="col-md-12 form-floating sign-box">
<input type="email" className="form-control sign-form" id="email" placeholder="name@example.com" required name="email" onChange={handleInput} value={credentials.email}/>
<label htmlhtmlFor="email">Email Address</label>
</div>
</div>
<div className="form-container">
<div className="col-md-12 form-floating sign-box">
<input type="number" className="form-control sign-form" id="contactno" placeholder="name@example.com" required name="contactno" onChange={handleInput} value={credentials.contactno}/>
<label htmlhtmlFor="contactno">Contact Number</label>
</div>
</div>
<div className="form-container">
<div className="col-md-12 form-floating sign-box">
<select className="form-select select sign-form" name="designation" onChange={handleInput} id="designation" value={credentials.designation}>
<option selected>Designation</option>
<option value="Admin">Admin</option>
<option value="Trainer">Trainer</option>
<option value="Student">Student</option>
</select>
</div>
</div>
<div className="form-container">
<div className="col-md-12 form-floating sign-box">
<input type="number" className="form-control sign-form" id="cnic" placeholder="name@example.com" required name="cnic" onChange={handleInput} value={credentials.cnic} />
<label htmlhtmlFor="cnic">CNIC</label>
<div className="form-text px-3 text-danger">XXXXXXXXXXXXX</div>
</div>
</div>
<div className="form-container">
<div className="col-md-12 form-floating sign-box">
<input type="password" className="form-control sign-form" id="password" placeholder="name@example.com" required name="password" onChange={handleInput} value={credentials.password}/>
<label htmlhtmlFor="password">Password</label>
</div>
</div>
<div className="form-container d-flex justify-content-center gy-3">
<div className="btn-box box-btn signBtn">



        
 <button type="submit" className="btn" disabled={option}>sign up</button>

    {/* <button type="submit" className="btn">sign up</button> */}

</div>
</div>
</div>
</form>
</div>

{/* Modal form ends here */}

</div> 
</div>
</div>


    

</>
)
}

export default Register;