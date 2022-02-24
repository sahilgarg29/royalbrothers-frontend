import React from "react";
import "./signup.css";
import TextField from '@mui/material/TextField';
const Signup = () => {
  return <div>
      <div className="ride">
    <p>Rent . Ride . Explore </p>
    </div>
    <div className="loginDiv">
         <div className="loginbar"> 
          <div className="login">LOGIN</div>
          <div className="signin">SIGN UP</div>
         </div>
         <div className="email">
           <p>Email</p>
           <TextField  id="outlined-basic" label="Email" variant="outlined" />
           <TextField id="outlined-basic" label="Password" variant="outlined" />
       </div>
       <button className="password">Login with Password</button>
         <p>OR</p>
         <button className="otp">Login with OTP</button>
  </div>;
  </div>
};

export default Signup;
