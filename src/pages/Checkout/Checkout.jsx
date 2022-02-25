import React from "react";
import "./checkout.css";
import {Link} from "react-router-dom"
import { TextField } from "@mui/material";
import Button from '@mui/material/Button';
import {useState} from "react"
// const Checkout = () => {

  return <div>
    
    <div className="checkoutbar">
    <p className="rent">Now rent two wheelers for 4 or 7 days at a lower special price. Click to modify search 
       to <Link to="/search" style={{color:"dodgerblue"}}> 4 days </Link> or <Link to="/search" style={{color:"dodgerblue"}}> 7 days </Link> ( 2 Hours )
    </p>
    </div>
    <div className="checkoutContainer">
      <div className="productSummary">
       <div className="summaryHeader">
         SUMMARY
       </div>
       <div className="summaryContainer">
       <div className="checkoutProduct">
         <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/Honda_activa_5G.png?1532687566" alt="bike"></img>
        <h4>Honda Activa 5G</h4>
       </div>
       <div className="priceContainer">
          <div className="dateTime">
             <div className="start">
               <p>10:00 am</p>
               <p>26 Feb 2022</p>
             </div>
             <div className="toDiv">to</div>
             <div className="end">
               <p>12:00 pm</p>
               <p>26 Feb 2022</p>
             </div>
          </div>
          <div className="checkoutAddress">
            <p>Madhapur (Near Bollineni Hills)</p>
            <p>3-15 ayyappa society Madhapur, Hyderabad</p>
          </div>
          <div className="charges">
            <p>Minimum 24.0 hour charges applicable</p>
            <div className="rupee"><img  src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>480.0</div>
            
          </div>
          <div className="totalCharges">
          <p>Total</p>
            <div className="rupee"><img  src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>480.0</div>
          </div>
          <div className="helmet">
            <p>Number of Helmet (?)</p>
            <select>
              <option value={1}>1</option>
              <option value={2}>2</option>
            </select>
          </div>
          <div className="couponCode">
            <input className="couponInput" type="text" placeholder="Coupon code"></input>
            <button className="couponApply">Apply</button>
             
          </div>
        
             <div className="limit">
               <p>Km limit (?)</p>
               <p>120km</p>
             </div>
             <div className="kmCharge">
               <p>Excess Km in charges (?)</p>
               <div className="rupee"><img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>4.0/km</div>
             </div>
          
       </div>
       </div>
       
      </div>
      <div className="checkoutCard">
      <div className="summaryHeader">
         CHECKOUT
       </div>
        <div className="paymentDetails">
          <div className="bookingfee">
          <p>Booking Fee</p>
          <div className="rupee"><img  src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>480.00</div>
          </div>
          <div className="cgst">
            <p>CGST(14%)</p>
            <div className="rupee"><img  src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>67.20</div>
          </div>
          <div className="sgst">
          <p>SGST(14%)</p>
            <div className="rupee"><img  src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>67.20</div>
          </div>
          <div className="refundable">
          <p>Refundable Deposit</p>
            <div className="rupee"><img  src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>500.00</div>
          </div>
          <div className="payableAmnt">
            <p>Total Payable Amount</p>
            <div  className="rupee"><img  src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>
            
            1178.40
            </div>
          </div>
          <button className="makePayment">Make payment</button>
        </div>
      </div>
    </div>
  </div>;
};

// export default Checkout;
