import axios from "axios";
import {
  ADD_ALL_BIKES,
  ADD_ALL_CITIES,
  ADD_BOOKING,
  ADD_ORDER_ID,
  ADD_USER,
  SELECT_CITY,
} from "./actionTypes";

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

export const addUser = (payload) => {
  return {
    type: ADD_USER,
    payload,
  };
};

export const register = (name, email, password) => (dispatch) => {
  axios
    .post("https://royalbrothers-backend.herokuapp.com/api/register", {
      name,
      email,
      password,
    })
    .then((res) => {
      dispatch(addUser({ name: res.data.user.name, token: res.data.token }));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const login = (email, password) => (dispatch) => {
  axios
    .post("https://royalbrothers-backend.herokuapp.com/api/login", {
      email,
      password,
    })
    .then((res) => {
      dispatch(addUser({ name: res.data.user.name, token: res.data.token }));
    })
    .catch((err) => {
      console.log(err);
    });
};

export const addBooking = (payload) => {
  return {
    type: ADD_BOOKING,
    payload,
  };
};

export const addOrderID = (payload) => {
  return {
    type: ADD_ORDER_ID,
    payload,
  };
};

export const placeBookingOrder = () => (dispatch, getState) => {
  const store = getState();
  const state = store.booking;

  axios
    .post(
      "https://royalbrothers-backend.herokuapp.com/api/book",
      {
        bikeId: state.bikeId,
        locationId: state.locationId,
        pickupTime: state.pickupTime,
        dropoffTime: state.dropoffTime,
      },
      {
        headers: { Authorization: `Bearer ${store.user.token}` },
      }
    )
    .then((res) => {
      console.log(res);
      const booking = res.data.booking;
      dispatch(
        addOrderID({
          orderId: booking.orderId,
          amount: booking.amount,
        })
      );
    })
    .catch((err) => {
      console.log(err.response);
    });
};
