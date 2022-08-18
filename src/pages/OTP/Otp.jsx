import React, {useState} from 'react';
import Logo from '../../components/Logo/Logo';
import "../../pages/OTP/Otp.css";

const Otp = () => {


const [box, setBox] = useState(true);
const [btn, setBtn] = useState(true);

  return (
    <>

{/* Section starts here */}

{/* Heading stuff starts here */}

<div className="container-fluid">
<div className="row min-vh-100">
{box && <Logo/>} 



{/* Heading stuff ends here */}


{/* To bottom button starts here */}
{btn && <div class="scroll-down d-lg-none d-block"  onClick={() => {setBox(false); setBtn(false);}} id="scroll">
</div>}
{/* To bottom button ends here */}

{/* Form container starts here */}

<div className="col-lg-7 major-box">
<div className="row">
<div className="col-lg-12 heading-set">
<h3 className='phone-text-heading'>Authentication code</h3>
<p className='phone-p-heading'>Code has been sent to your Email</p>
</div>
<div className="col-lg-12 form-set">
<form>
<div className="form-box">
<div className="col-lg-4 input-box form-floating">
<input type="number" class="form-control" id="signEmail" placeholder="name@example.com" required name="signEmail"/>
<label htmlFor="signEmail">Number</label>
</div>
<div className="form-text">
<p className="form-text-set"><span id="signUp">Resend Code?</span></p>

</div>
<div className="btn-box">
<button type="submit" className="btn">verify code</button>
</div>
</div>
</form>
</div>

{/* Form container ends here */}

</div>
</div>





</div>    
</div>














{/* Section ends here */}













    </>
  )
}

export default Otp