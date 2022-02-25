import React from "react";

export const City = ({ city, selectCity }) => {
  return <div onClick={() => selectCity(city.name)}>{city.name}</div>;
};
