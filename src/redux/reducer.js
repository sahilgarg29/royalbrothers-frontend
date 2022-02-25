import { loadData, saveData } from "../utils/localStorage";
import {
  ADD_ALL_BIKES,
  ADD_ALL_CITIES,
  ADD_BOOKING,
  ADD_ORDER_ID,
  ADD_USER,
  SELECT_CITY,
} from "./actionTypes";

const cityState = {
  selectedCity: loadData("selectedCity") || "",
  allCities: [],
};

export const cityReducer = (state = cityState, action) => {
  switch (action.type) {
    case SELECT_CITY:
      saveData("selectedCity", action.payload);
      return { ...state, selectedCity: action.payload };
    case ADD_ALL_CITIES:
      return { ...state, allCities: action.payload };
    default:
      return state;
  }
};

const bikeState = [];

export const bikeReducer = (state = bikeState, action) => {
  switch (action.type) {
    case ADD_ALL_BIKES:
      return action.payload;
    default:
      return state;
  }
};

const userState = loadData("user") || {
  token: "",
  name: "",
};

export const userReducer = (state = userState, action) => {
  switch (action.type) {
    case ADD_USER:
      saveData("user", action.payload);
      return action.payload;
    default:
      return state;
  }
};

const bookingState = {
  bikeId: "",
  locationId: "",
  pickupTime: "",
  dropOffTime: "",
  amount: null,
  orderId: "",
};

export const bookingReducer = (state = bookingState, action) => {
  switch (action.type) {
    case ADD_BOOKING:
      return action.payload;
    case ADD_ORDER_ID:
      return {
        ...state,
        orderId: action.payload.orderId,
        amount: action.payload.amount,
      };
    default:
      return state;
  }
};
