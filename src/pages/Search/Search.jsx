import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import BikeCard from "../../components/BikeCard";
import DateTimePicker from "../../components/DateTimePicker";
import FilterBikes from "../../components/FilterBikes";
import { addBooking, fetchAllBikes } from "../../redux/actions";
import "./search.css";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const selectedCity = useSelector((store) => store.cities.selectedCity);
  const bikes = useSelector((store) => store.bikes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const pickupTime = searchParams.get("pickuptime");
    const dropoffTime = searchParams.get("dropofftime");

    dispatch(fetchAllBikes(selectedCity, pickupTime, dropoffTime));

    // let diffInMill = new Date(dropoffTime) - new Date(pickupTime);

    // console.log(Math.round(Math.abs(diffInMill) / 36e5));
  }, [searchParams]);

  const onBookClick = (bike, location) => {
    dispatch(
      addBooking({
        bikeId: bike._id,
        locationId: location,
        pickupTime: searchParams.get("pickuptime"),
        dropoffTime: searchParams.get("dropofftime"),
      })
    );

    navigate("/checkout");
  };

  const onFiltersApply = (pickupDate, dropoffDate, selectedBikes) => {
    if (
      searchParams.get("pickuptime") !== pickupDate ||
      searchParams.get("dropofftime") !== dropoffDate
    ) {
      setSearchParams({ pickuptime: pickupDate, dropofftime: dropoffDate });
    }

    if (selectedBikes) {
    }
  };

  return (
    <div>
      <FilterBikes
        currPickupDate={searchParams.get("pickuptime")}
        currDropoffDate={searchParams.get("dropofftime")}
        handleApplyFilters={onFiltersApply}
      />
      {bikes.map((bike) => (
        <BikeCard key={bike._id} bike={bike} handleBooking={onBookClick} />
      ))}
    </div>
  );
};

export default Search;
