import React, { useEffect } from "react";
import { ImLocation2 } from "react-icons/im";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { CgProfile } from "react-icons/cg";
import "./header.css";
import { Link } from "react-router-dom";
import { deleteCity } from "../../redux/actions";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const city = useSelector((store) => store.cities.selectedCity);
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  const handleChangeLocation = () => {
    dispatch(deleteCity());
  };

  const renderLogin = () => {
    if (user.token) {
      return (
        <div>

       
        <Button id="header-user"
        
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <CgProfile style={{ fontSize: "24px" }} /> {user.name}
          <BsChevronDown />
      </Button>
      
       <Menu
       id="basic-menu"
       anchorEl={anchorEl}
       open={open}
       onClose={handleClose}
       MenuListProps={{
         'aria-labelledby': 'basic-button',
       }}
     >
       <MenuItem onClick={handleClose}>My profile</MenuItem>
       <MenuItem onClick={handleClose}>My Rides</MenuItem>
       <MenuItem onClick={handleClose}><Link to="/logout">Logout</Link></MenuItem>
     </Menu>
     </div>
      );
    }

    // useEffect(() => {}, [user]);

    //   return (
    //     <div id="header-login-signup">
    //       <Link to="/login">Login</Link>
    //       <Link className="colored-btn" to="/signup">
    //         Sign up
    //       </Link>
    //     </div>
    //   );
    // };
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
