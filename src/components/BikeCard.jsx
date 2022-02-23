import React from "react";

const BikeCard = ({ bike, handleBooking }) => {
  return (
    <div>
      <h3>{bike.model}</h3>
      <img src={bike.imageUrl} alt={bike.model} width="200px" />
      <select name="location" id="location">
        {bike.locations.map((location) => {
          return (
            <option value={location.name} key={location._id}>
              {location.name}
            </option>
          );
        })}
      </select>

      <button onClick={() => handleBooking(bike)}>Book</button>
    </div>
  );
};

export default BikeCard;
