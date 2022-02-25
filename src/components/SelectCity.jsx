import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { fetchAllCities, selectCity } from "../redux/actions";
import { City } from "./City";

const SelectCity = () => {
  const dispatch = useDispatch();
  const cities = useSelector((store) => store.cities.allCities);

  useEffect(() => {
    dispatch(fetchAllCities());
    console.log(cities);
  }, []);

  const handleSelectCity = (cityName) => {
    dispatch(selectCity(cityName));
  };

  return (
    <div>
      {cities.map((city) => (
        <City key={city._id} city={city} selectCity={handleSelectCity} />
      ))}
    </div>
  );
};

export default SelectCity;
