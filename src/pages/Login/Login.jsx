import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/actions";
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

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Enter your password"
        />

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
