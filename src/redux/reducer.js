import { loadData, saveData } from "../utils/localStorage";
import { ADD_ALL_CITIES, SELECT_CITY } from "./actionTypes";

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
