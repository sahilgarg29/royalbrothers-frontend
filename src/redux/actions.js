import { SELECT_CITY } from "./actionTypes";

export const selectCity = (payload) => {
  return {
    type: SELECT_CITY,
    payload,
  };
};
