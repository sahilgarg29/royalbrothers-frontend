import React from "react";
import "./signup.css";
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Checkbox from '@mui/material/Checkbox';
const Signup = () => {
  return <div>
      <div className="ride">
    <p>Rent . Ride . Explore </p>
    </div>
    <div className="signupDiv">
    <div className="signupbar"> 
          <div className="login">LOGIN</div>
          <div className="signin">SIGN UP</div>
         </div>
         <div className="nameDiv">
          
          <input className="nameInput" type="text" placeholder="Name as per Aadhaar/Passport"></input>
        </div>
        <div className="emailDiv">
          
          <input className="emailInput" type="text" placeholder="Email"></input>
        </div>
        <p style={{marginLeft:"14px"}}>Mobile</p>
        <div className="numberDiv">
          
          <input className="numberInput" type="text" placeholder="As per Aadhaar"></input>
        </div>

        <div className="passwordDiv">
          
          <input className="passwordInput" type="text" placeholder="Password"></input>
          <VisibilityOutlinedIcon style={{fill: "grey",marginTop:"12px"}}/>
        </div>

        <div className="signupcaptcha">
          <div className="signuprobot">
          <Checkbox     inputProps={{ 'aria-label': 'controlled' }} />
          <p >I'm not a robot</p>
          </div>
          <div className="signupcaptchalogo">
          <img height="30px" width="30px" src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha"></img>
          
          <p>reCaptcha Privacy Terms</p>
   
        
          </div>
        
        </div>
        <button className="signup">Sign Up</button>
  </div>;
  </div>
};

export default Signup;
