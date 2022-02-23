import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import BikeCard from "../../components/BikeCard";
import DateTimePicker from "../../components/DateTimePicker";
import { fetchAllBikes } from "../../redux/actions";
import "./search.css";

const Search = () => {
  const [searchParams] = useSearchParams();

  const selectedCity = useSelector((store) => store.cities.selectedCity);
  const bikes = useSelector((store) => store.bikes);
  const dispatch = useDispatch();

  useEffect(() => {
    const pickupTime = searchParams.get("pickuptime");
    const dropoffTime = searchParams.get("dropofftime");

    dispatch(fetchAllBikes(selectedCity, pickupTime, dropoffTime));

    // let diffInMill = new Date(dropoffTime) - new Date(pickupTime);

    // console.log(Math.round(Math.abs(diffInMill) / 36e5));
  }, []);

  const onBookClick = (bike) => {
    console.log(bike);
  };

  return (
    <div>
      {bikes.map((bike) => (
        <BikeCard key={bike._id} bike={bike} handleBooking={onBookClick} />
      ))}
    </div>
  );
};

export default Search;
