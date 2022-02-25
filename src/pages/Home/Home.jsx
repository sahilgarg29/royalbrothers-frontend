import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import DateTimePicker from "../../components/DateTimePicker";
import { useNavigate } from "react-router-dom";
import SelectCity from "../../components/SelectCity";

import "./home.css";

const Home = () => {
  const selectedCity = useSelector((store) => store.cities.selectedCity);

  const navigate = useNavigate();

  const onDateSelect = (pickupTime, dropoffTime) => {
    navigate(
      `/search?city=${selectedCity}&pickuptime=${pickupTime}&dropofftime=${dropoffTime}`
    );
  };

  const renderHomePage = () => {
    return (
      <div>
        <DateTimePicker handleDateSelect={onDateSelect} />
      </div>
    );
  };

  return <div>{!selectedCity ? <SelectCity /> : renderHomePage()}</div>;
};

export default Home;
