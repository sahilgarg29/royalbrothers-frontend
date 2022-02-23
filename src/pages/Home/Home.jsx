import React from "react";
import "./home.css";
import {Slideshow} from "../../components/slideshow"
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Box from '@mui/material/Box';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Home = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return <div>
     <div className="cashback">
       
     </div>
    <div className="vehiclecontainer">
     <div className="vehicleinfo">
       
       <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_sanitized-a37325c03fb50fd9b2783d574ba67c40cb7b8a90d5951a85f72095904943e1d6.png" alt="sanitized"></img>
        <p>Sanitized Vehicles</p> 
        </div>


        <div className="vehicleinfo">
        <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_insurance-84ee18a118bee4cfc4f774e0dbdb5d24431af458eb583d5d1c5822801e388764.png" alt="insurance"></img>
        <p>Vehicle Insurance</p>
        </div>
        
        <div className="vehicleinfo">
         <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_assistance-ec66ebeeb0ebb01468fc1729165040e172820de83d5037cf47a73f4e19177d68.png" alt="assistance"></img>
        <p>24/7 Road Assitance</p>
        </div>
 
        <div className="vehicleinfo">
      <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/redesign/feature_tag_maintainence-4ac25e7eb9ad6f8b78ec52640a7310d8083a21823e1fb54ca9872076c2bc5f34.png" alt="maintainence"></img>
        <p>Bike Maintance</p>
        </div>
        </div>
    <div className="subscription">
     <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/RBX_carousel_one-5e5beb3711f8184ba280e0791b058b8b1b4f03cad772f10b0ab39adfc5d06ec5.jpg"></img>
    
    <button className="subbutton">Subscribe now
    <ArrowForwardIcon/>
    </button>
    </div>
     <div className="heading">
     <h2 style={{textAlign:"center",color:"#212121"}}>OUR FLEET</h2>
     <div className="yellowbox"></div>
     </div>
     <div className="duration">
       <p>Duration</p>
       <Box sx={{ minWidth: 220,boxShadow:"0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%);" }}>

     
       <FormControl fullWidth>
  <InputLabel id="demo-simple-select-label">Hourly</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={age}
    label="Age"
    onChange={handleChange}
  >
    <MenuItem value={1}>Hourly</MenuItem>
    <MenuItem value={7}>7 days</MenuItem>
    <MenuItem value={15}>15 days</MenuItem>
    <MenuItem value={30}>1 Month</MenuItem>
    <MenuItem value={90}>3 Months</MenuItem>
  </Select>
</FormControl>
</Box>
     </div>
     
     <div className="excontainer">
  
     <div className="exlusiveBikes">
       <div>
         <h4 style={{color:"#202021"}}>Honda Activa 5G</h4>
         <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/Honda_activa_5G.png?1532687566" alt="Activa 5G"></img>
          <hr></hr>
          <h4> ₹20/hour</h4>
          <button className="exbutton">BOOK NOW</button>
       </div>
     </div>
     <div className="exlusiveBikes">
       <div>
         <h4>Suziki Access 125 (2019)</h4>
         <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/255/medium/Suzuki-access-125-2019.png?1563529796" alt="Suzuki 125 "></img>
          <hr></hr>
          <h4> ₹20/hour</h4>
          <button className="exbutton">BOOK NOW</button>
       </div>
     </div>
     <div className="exlusiveBikes">
       <div>
         <h4>Royal Enfield Thunderbird 350</h4>
         <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/018/medium/TB_350-min_2.png?1519739776" alt="Thunderbird"></img>
          <hr></hr>
          <h4> ₹35/hour</h4>
          <button className="exbutton">BOOK NOW</button>
       </div>
     </div>
     <div className="exlusiveBikes">
       <div>
         <h4>Royal Enfield Thunderbird 350</h4>
         
         <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/018/medium/TB_350-min_2.png?1519739776" alt="Thunderbird"></img>
          <hr></hr>
          <h4> ₹35/hour</h4>
          <button  className="exbutton">BOOK NOW</button>
       </div>
      
     </div>
     </div>
  <p style={{textAlign:"center"}}>* Excluding of all taxes</p>
    
     <div className="heading">
     <h2 style={{textAlign:"center",color:"#212121"}}>WE BELIEVE IN EQUALITY</h2>
     <div className="yellowbox"></div>
     </div>
     <Slideshow/>
     <div className="heading">
     <h2 style={{textAlign:"center",color:"#212121"}}>FEATURED IN</h2>
     <div className="yellowbox"></div>
     </div>
    
     <div className="newsImage">
       <div>
       <img  src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/news2-b2db5fe5ecf6968d4e47cba7876d3ae8a959a5de65901b5a6292032987a38bdd.png" alt="Economic Times" />
       </div>
       <div>
       <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/news3-2eb9e0398a565284ca3c41d685e32de985b43ce00541889f59541ee91cb28e61.png" alt="Times of India" />
       </div>
       <div>
       <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/news1-0a213d6dc03c6d68b278a11f210efe7cd727bf2f1fc34982b90b34d2d1c875da.png" alt="The Hindu" />
       </div>
       <div>
       <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/icons/money_control-0301bddd4ac901172098f7d0b590e8dbed35e7fa1064d2ced799f9cbc9185d66.png" alt="Money Control" />
       </div>
       
     
     </div>
      
   
  </div>
       
       
      
};

export default Home;
