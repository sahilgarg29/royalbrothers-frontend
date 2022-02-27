import React, { useEffect } from "react";
import { ImLocation2 } from "react-icons/im";
import { BsChevronDown } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
// import { CgProfile } from "react-icons/cg";
import "./header.css";
import { Link } from "react-router-dom";
import { deleteCity } from "../../redux/actions";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import PhoneIcon from '@mui/icons-material/Phone';

const Header = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [partner, setPartner] = React.useState(null);
  const pat = Boolean(partner);
  const handlePartner = (event) => {
    setPartner(event.currentTarget);
  };
  const handlePatClose = () => {
    setPartner(null);
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
      {/* <CgProfile style={{ fontSize: "24px" }} /> {user.name} */}
      <div className="profileIcon">
      <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/user-profile-menu-70666577f1d7fbe6bba1f46ceacdb2e4abdbb2575014670cf9afbfbf35376c25.png" alt="avatar"/>
      <h4>{user.name}</h4>
      </div>
      
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
       <MenuItem onClick={handleClose} className="menuItem">
         <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/user-rides-524da8ffff10d2e01c9e84efcfb373e8f0ac875de5ffe22451edac747b5a7153.png" alt="profile"></img>
         My profile</MenuItem>
       <MenuItem onClick={handleClose} className="menuItem">
         <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/user-profile-183f7c4413f90f48fb9c0778c76c72dcb26b8b3b9485e18b1cb200a364ef82f4.png" alt="rides"></img>
         My Rides</MenuItem>
       <MenuItem onClick={handleClose} className="menuItem">
         <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/user-logout-6020357dca0e3d23e89ff421e5b5a8bb084a61095430c68c9c357bfbc92b1b21.png" alt="logout"></img>
         <Link to="/logout">Logout</Link></MenuItem>
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
      <div className="whatsapp">
       <PhoneIcon className="phoneIcon"/> <p>+917795687594 / +919019595595 |</p>
       <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/wa_logo-78af8e2ff6153e5c6db2838470dc06142d5d53f8eb885f1ce33779de97649f0a.png" alt="whatsapp"></img>
       <p className="chatnow">  Chat now</p>
       </div>
      <nav>
        <div id="logo">
          <Link to="/">
            <img src="rb-logo.png" alt="rb logo" srcset="" />
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
            <Button id="tariff"><Link to="/tariff">Tariff</Link></Button>
          </li>
          <li>
            <Button id="store"><Link to="/store">Whats's new?</Link></Button>
          </li>
          <li>
            <Button id="offers"><Link to="/offer">Offers</Link></Button>
          </li>
          <li>
          <Button
        id="basic-button"
        aria-controls={pat ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={pat ? 'true' : undefined}
        onClick={handlePartner}
      >
      Partner with us
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={partner}
        open={pat}
        onClose={handlePatClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handlePatClose}><Link to="/earnwithus">Earn with us</Link></MenuItem>
        <MenuItem onClick={handlePatClose}> <Link to="/partner-with-us">Own a franchise</Link></MenuItem>

      </Menu>
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
