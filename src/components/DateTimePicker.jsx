import React, { useEffect } from "react";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePicker = ({ handleDateSelect }) => {
  const [pickupDate, setpickupDate] = useState(new Date());
  const [dropoffDate, setdropoffDate] = useState(new Date());

  return (
    <div>
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
      />

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
      />

      <button
        onClick={() => {
          handleDateSelect(pickupDate.toISOString(), dropoffDate.toISOString());
        }}
      >
        Search
      </button>
    </div>
  );
};

export default DateTimePicker;
