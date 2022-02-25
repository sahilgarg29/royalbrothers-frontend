import React, { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import "./dateTimePicker.css";

const DateTimePicker = ({ handleDateSelect }) => {
  const [pickupDate, setpickupDate] = useState(null);
  const [dropoffDate, setdropoffDate] = useState(null);

  return (
    <div className="datetime-picker">
      <h2>Search your next Ride</h2>

      <div>
        <p>Pickup</p>
        <DatePicker
          selected={pickupDate}
          onChange={(date) => setpickupDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          // injectTimes={[
          //   setHours(setMinutes(new Date(), 1), 0),
          //   setHours(setMinutes(new Date(), 5), 12),
          //   setHours(setMinutes(new Date(), 59), 23),
          // ]}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Date and Time"
          className="datepicker"
        />
      </div>
      <div>
        <p>DropOff</p>
        <DatePicker
          selected={dropoffDate}
          onChange={(date) => setdropoffDate(date)}
          showTimeSelect
          timeFormat="HH:mm"
          // injectTimes={[
          //   setHours(setMinutes(new Date(), 1), 0),
          //   setHours(setMinutes(new Date(), 5), 12),
          //   setHours(setMinutes(new Date(), 59), 23),
          // ]}
          dateFormat="MMMM d, yyyy h:mm aa"
          placeholderText="Date and Time"
          className="datepicker"
        />
      </div>
      <button
        onClick={() => {
          handleDateSelect(pickupDate.toISOString(), dropoffDate.toISOString());
        }}
        variant="contained"
        className="search-btn"
      >
        Search
      </button>
    </div>
  );
};

export default DateTimePicker;
