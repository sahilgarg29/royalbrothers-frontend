import React from "react";
import "./login.css";
import {Link} from "react-router-dom"
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import Checkbox from '@mui/material/Checkbox';
const Login = () => {
  // const [checked, setChecked] = React.useState(false);

  // const handleChange = (event) => {
  //   setChecked(event.target.checked);
  // };
  
  return <div>

    {/* <div className="ride">
    <p>Rent . Ride . Explore </p>
    </div>
    <div className="loginDiv">
         <div className="loginbar"> 
          <div className="login">LOGIN</div>
          <div className="signin">   <Link to="/signup" style={{textDecoration:"none",color:"#9e9e9e"}}>SIGN UP</Link></div>
         </div>
          <p style={{marginLeft:"14px"}}>Email</p>
          <div className="emailDiv">
          
            <input className="emailInput" type="text" placeholder="Email"></input>
          </div>
          <div className="passwordDiv">
          
          <input className="passwordInput" type="text" placeholder="Password"></input>
          <VisibilityOutlinedIcon style={{fill: "grey",marginTop:"12px"}}/>
        </div>
        <div className="remember">
        <Checkbox
        
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
      
    />
          <p style={{color:"#9e9e9e"}}>Remember password?</p>
          <p style={{color:"#2680eb",marginLeft:"36px"}}>Forget Password?</p>
        </div>
        <div className="captcha">
          <div className="robot">
          <Checkbox     inputProps={{ 'aria-label': 'controlled' }} />
          <p >I'm not a robot</p>
          </div>
          <div className="captchalogo">
          <img height="30px" width="30px" src="https://www.gstatic.com/recaptcha/api2/logo_48.png" alt="captcha"></img>
          
          <p>reCaptcha Privacy Terms</p>
   
        
          </div>
        
        </div>
         <button className="password">Login with Password</button>
         <p style={{textAlign:"center"}}>OR</p>
         <button className="otp">Login with OTP</button>
       </div>
     */}
    
    
  </div>;
};

export default Login;
