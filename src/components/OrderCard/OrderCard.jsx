import React from "react";

import "./orderCard.css";

const OrderCard = ({ order }) => {
  return (
    <div>
      <img src={order.bike.imageUrl} alt={order.bike.model} />
      <h3>{order.bike.model}</h3>
      <p>Pickup - {new Date(order.pickupTime).toLocaleString()}</p>
      <p>dropoff - {new Date(order.dropoffTime).toLocaleString()}</p>
      <p>Location - {order.location.name}</p>
      <p>Amount - {order.amount} Rupees</p>
    </div>
  );
};

export default OrderCard;
