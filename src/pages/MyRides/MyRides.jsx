import "./myrides.css"
export const MyRides=()=>{
    return <div>
        <div className="rideSafe">
            <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/offerPageCoverImage-5db811b79464b1c3d70a617b4e09bc7b2c15b1461b0d3646e2b59061620b1787.jpg"></img>
           <div className="wearHelmet">
               <h2>Wear Helmets, Ride Safely !</h2>
           </div>
       </div>
       <div className="MyRidescontainer">
           <p className="activeTrips"> Active Trips</p>
           <div className="active_vehicle">
               <img src="https://d3vp2rl7047vsp.cloudfront.net/bike_models/images/000/000/233/medium/Honda_activa_5G.png?1532687566"></img>
           </div>
           <div className="vehicle_time">
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
           </div>
           <div className="rideAddress">
            <p>Madhapur (Near Bollineni Hills) 3-15 ayyappa society Madhapur, Hyderabad</p>
          </div>
          
          <div className="rideAmount">
            <p>Paid Amount</p>
            <div  className="rupee"><img  src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>
            1178.40
            </div>
            </div>
       </div>
    </div>
}