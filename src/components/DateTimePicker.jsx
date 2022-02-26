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
      <h2 className="searchYour">Search your next ride</h2>

      <div>
        <p>Pickup</p>
        <div className="dateTimelogos">
        <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/date-609be488aaef36d8f84a823b97517d5551821ab02804e2f745b5c80550dbc46e.png"></img>
        <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/time-b6ac387420760c4f2c4ea8bf0b7dc644a7d2d3b1f77ba6987b095c6980f25ce0.png"></img>
        </div>
       
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
        <div className="dateTimelogos">
        <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/date-609be488aaef36d8f84a823b97517d5551821ab02804e2f745b5c80550dbc46e.png"></img>
        <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/long_term/time-b6ac387420760c4f2c4ea8bf0b7dc644a7d2d3b1f77ba6987b095c6980f25ce0.png"></img>
        </div>
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
