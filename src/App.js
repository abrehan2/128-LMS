import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Register from "./pages/Register/Register";
import Otp from './pages/OTP/Otp';


const App = () => {
  return (
   <>

<BrowserRouter>

<Routes>
<Route path='/' element = {<Register/>}/>
<Route path='/Otp' element = {<Otp/>}/>

</Routes>

</BrowserRouter>



   </>
  );
}

export default App;
