import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/actions";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import Checkbox from "@mui/material/Checkbox";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [name, setName] = useState("");
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
    dispatch(register(name, email, password));
  };

  // return (
  //   <div>
  //     <form onSubmit={handleSubmit}>
  //       <input
  //         type="text"
  //         name="name"
  //         id="name"
  //         value={name}
  //         onChange={(e) => setName(e.target.value)}
  //         placeholder="Enter your name"
  //       />
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

  //       <input type="submit" value="Signup" />
  //     </form>
  //   </div>
  // );

  return (
    <div>
      <div className="ride">
        <p>Rent . Ride . Explore </p>
      </div>
      <div className="signupDiv">
        <div className="signupbar">
          <div className="signuplogin">
            {" "}
            <Link
              to="/login"
              style={{ textDecoration: "none", color: "#9e9e9e" }}
            >
              LOGIN
            </Link>
          </div>
          <div className="signupsignin">SIGN UP</div>
        </div>
        <div className="nameDiv">
          <input
            className="nameInput"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name as per Aadhaar/Passport"
          ></input>
        </div>
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

        <button className="signup" onClick={handleSubmit}>
          Sign Up
        </button>
      </div>
      ;
    </div>
  );
};

export default Signup;
