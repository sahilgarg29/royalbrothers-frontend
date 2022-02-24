import React, { useEffect, useState } from "react";

const BikeCard = ({ bike, handleBooking }) => {
  const [location, setLocation] = useState("");

  useEffect(() => {
    console.log(location);
  });

  return (
    <div>
      <h3>{bike.model}</h3>
      <img src={bike.imageUrl} alt={bike.model} width="200px" />
      <select
        name="location"
        id="location"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      >
        <option value=""></option>
        {bike.locations.map((location) => {
          return (
            <option value={location._id} key={location._id}>
              {location.name}
            </option>
          );
        })}
      </select>

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
  );
};

export default BikeCard;
