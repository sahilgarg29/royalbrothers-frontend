import React, { useEffect, useState } from "react";

const BikeCard = ({ bike, pickupTime, dropoffTime, handleBooking }) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    console.log(location);
  });

  return (
    <div className="mapbikes" key={bike._id}>
      {/* <p>zero deposite</p> */}
      <h6>{bike.model}</h6>
      <img src={bike.imageUrl} alt="" /> <br />
      <span>Available at</span> <br />
      <select
        name="location"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value="">Location</option>
        {bike.locations.map((s) => {
          return (
            <option value={s._id} key={s._id}>
              {s.name}
            </option>
          );
        })}
      </select>
      <div className="timingbike">
        <div>
          <p>{pickupTime.getHours() + ":" + "00"}</p>
          <p>{pickupTime.toLocaleDateString()}</p>
        </div>
        <div className="timingTo">
          <span>to</span>
        </div>
        <div>
          <p>{dropoffTime.getHours() + ":" + "00"}</p>
          <p>{dropoffTime.toLocaleDateString()}</p>
        </div>
      </div>
      <div className="prizebike">
        <div>
          <p>₹{bike.amount}</p>
          <span>(100 KM included)</span>
        </div>
        <div>
          <button
            onClick={() => {
              if (!location) {
                alert("select location");
              } else {
                handleBooking(bike, location);
              }
            }}
          >
            Book
          </button>
        </div>
      </div>
    </div>
  );

  // return (
  //   <div>
  //     <h3>{bike.model}</h3>
  //     <img src={bike.imageUrl} alt={bike.model} width="200px" />
  //     <select
  //       name="location"
  //       id="location"
  //       value={location}
  //       onChange={(e) => setLocation(e.target.value)}
  //     >
  //       <option value=""></option>
  //       {bike.locations.map((location) => {
  //         return (
  //           <option value={location._id} key={location._id}>
  //             {location.name}
  //           </option>
  //         );
  //       })}
  //     </select>

  //     <button
  //       onClick={() => {
  //         if (!location) {
  //           alert("select location");
  //         } else {
  //           handleBooking(bike, location);
  //         }
  //       }}
  //     >
  //       Book
  //     </button>
  //   </div>
  // );
};

export default BikeCard;
