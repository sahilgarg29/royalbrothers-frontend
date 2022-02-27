import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions";
import { Link } from "react-router-dom";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Checkbox from "@mui/material/Checkbox";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);

  useEffect(() => {
    if (user.token) {
      navigate("/");
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="email"
  //         name="email"
  //         id="email"
  //         value={email}
  //         onChange={(e) => setEmail(e.target.value)}
  //         placeholder="Enter your email"
  //       />
  //       <input
  //         type="password"
  //         name="password"
  //         id="password"
  //         value={password}
  //         onChange={(e) => setPassword(e.target.value)}
  //         placeholder="Enter your password"
  //       />

  //       <input type="submit" value="Login" />
  //     </form>
  //   </div>
  // );

  return (
    <div>
      <div className="ride">
        <p>Rent . Ride . Explore </p>
      </div>
      <div className="loginDiv">
        <div className="loginbar">
          <div className="login">LOGIN</div>
          <div className="signin">
            {" "}
            <Link
              to="/signup"
              style={{ textDecoration: "none", color: "#9e9e9e" }}
            >
              SIGN UP
            </Link>
          </div>
        </div>
        <p style={{ marginLeft: "14px" }}>Email</p>
        <div className="emailDiv">
          <input
            className="emailInput"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="passwordDiv">
          <input
            className="passwordInput"
            type="text"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
          <VisibilityOutlinedIcon style={{ fill: "grey", marginTop: "12px" }} />
        </div>
        <div className="remember">
          <Checkbox
            // checked={checked}
            // onChange={handleChange}
            inputProps={{ "aria-label": "controlled" }}
          />
          <p style={{ color: "#9e9e9e" }}>Remember password?</p>
          <p style={{ color: "#2680eb", marginLeft: "36px" }}>
            Forget Password?
          </p>
        </div>

        <button className="password" onClick={handleSubmit}>
          Login with Password
        </button>
        <p style={{ textAlign: "center" }}>OR</p>
        <button className="otp">Login with OTP</button>
      </div>
    </div>
  );
};

export default Login;
