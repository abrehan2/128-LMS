import React, {useState} from 'react';
import Logo from '../../components/Logo/Logo';
import "./style.css";

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
</div>    
</div>














{/* Section ends here */}













    </>
  )
}

export default Otp