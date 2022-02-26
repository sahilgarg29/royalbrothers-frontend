import React from "react";
import { ImLocation2 } from "react-icons/im";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import "./header.css";
import { Link } from "react-router-dom";
import { deleteCity } from "../../redux/actions";

const Header = () => {
  const city = useSelector((store) => store.cities.selectedCity);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleChangeLocation = () => {
    dispatch(deleteCity());
  };

  const renderLogin = () => {
    if (user.token) {
      return (
        <div id="header-user">
          <CgProfile style={{ fontSize: "24px" }} /> {user.name}
          <BsChevronDown />
        </div>
      );
    }

    return (
      <div id="header-login-signup">
        <Link to="/login">Login</Link>
        <Link className="colored-btn" to="/signup">
          Sign up
        </Link>
      </div>
    );
  };

  return (
    <div>
      <nav>
        <div id="logo">
          <Link to="/">
            <img src="rb-logo.png" alt="" srcset="" />
          </Link>
        </div>
        <ul>
          <li>
            <a href="#">
              <img
                src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/RBX_logo-7618eb109a17dcfa44e88596c831606746fc124a000553458d6b7fc1bf9a6345.png"
                alt=""
                width="100%"
              />
            </a>
          </li>
          <li>
            <a href="">Tariff</a>
          </li>
          <li>
            <a href="#">Whats's new?</a>
          </li>
          <li>
            <a href="#">Offers</a>
          </li>
          <li>
            <a href="#">Partner with us</a>
          </li>
        </ul>
        <div id="header-right">
          <div id="location-btn" onClick={handleChangeLocation}>
            <ImLocation2 className="color-primary" />
            {city}
            <BsChevronDown />
          </div>
          {renderLogin()}
        </div>
      </nav>
    </div>
  );
};

export default Header;
