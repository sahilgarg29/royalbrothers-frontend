import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import OrderCard from "../../components/OrderCard";
import { fetchAllOrders } from "../../redux/actions";
import "./orders.css";
const Orders = () => {
  const dispatch = useDispatch();
  const orders = useSelector((store) => store.orders);
  useEffect(() => {
    dispatch(fetchAllOrders());
  }, []);

  return (
    <div className="orders">
      {orders.map((order) => {
        return <OrderCard key={order._id} order={order} />;
      })}
    </div>
  );
};

export default Orders;
