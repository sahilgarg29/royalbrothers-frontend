import axios from "axios";
import { ADD_ALL_BIKES, ADD_ALL_CITIES, SELECT_CITY } from "./actionTypes";

export const selectCity = (payload) => {
  return {
    type: SELECT_CITY,
    payload,
  };
};

export const addAllCities = (payload) => {
  return {
    type: ADD_ALL_CITIES,
    payload,
  };
};

export const fetchAllCities = () => (dispatch) => {
  axios
    .get("https://royalbrothers-backend.herokuapp.com/api/cities")
    .then((res) => {
      dispatch(addAllCities(res.data.cities));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addAllBikes = (payload) => {
  return {
    type: ADD_ALL_BIKES,
    payload,
  };
};

export const fetchAllBikes = (city, pickupTime, dropoffTime) => (dispatch) => {
  axios
    .get(
      `https://royalbrothers-backend.herokuapp.com/api/bikes?city=${city}&pickuptime${pickupTime}&dropofftime=${dropoffTime}`
    )
    .then((res) => {
      console.log(res);
      dispatch(addAllBikes(res.data.bikes));
    });
};
