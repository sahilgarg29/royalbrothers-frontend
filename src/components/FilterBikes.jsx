import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useSelector } from "react-redux";

const FilterBikes = ({
  currPickupDate,
  currDropoffDate,
  handleApplyFilters,
}) => {
  const [pickupDate, setpickupDate] = useState(new Date(currPickupDate));
  const [dropoffDate, setdropoffDate] = useState(new Date(currDropoffDate));
  const [selectedBikes, setSelectedBikes] = useState([]);

  const bikes = useSelector((store) => store.bikes);

  const handlebikeSelection = (e) => {
    if (e.target.checked) {
      setSelectedBikes((prev) => [...prev, e.target.value]);
    } else {
      setSelectedBikes((prev) => prev.filter((curr) => curr != e.target.value));
    }
  };

  useEffect(() => {
    console.log(selectedBikes);
  });

  return (
    <div>
      <DatePicker
        selected={pickupDate}
        onChange={(date) => setpickupDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="MMMM d, yyyy h:mm aa"
      />

      <DatePicker
        selected={dropoffDate}
        onChange={(date) => setdropoffDate(date)}
        showTimeSelect
        timeFormat="HH:mm"
        dateFormat="MMMM d, yyyy h:mm aa"
      />

      <div>
        <h4>Filter By bike models</h4>
        {bikes.map((bike) => {
          return (
            <div key={bike._id}>
              <input
                type="checkbox"
                id={bike.model}
                name={bike.model}
                value={bike.model}
                onChange={(e) => handlebikeSelection(e)}
                checked={selectedBikes.includes(bike.model) ? true : false}
              />
              <label htmlFor={bike.model}>{bike.model}</label>
            </div>
          );
        })}
      </div>

      <button
        onClick={() =>
          handleApplyFilters(
            pickupDate.toISOString(),
            dropoffDate.toISOString(),
            selectedBikes
          )
        }
      >
        Apply Filters
      </button>
    </div>
  );
};

export default FilterBikes;
