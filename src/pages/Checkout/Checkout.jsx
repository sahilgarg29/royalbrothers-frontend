import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { placeBookingOrder } from "../../redux/actions";
import "./checkout.css";

const Checkout = () => {
  const user = useSelector((store) => store.user);
  const booking = useSelector((store) => store.booking);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const [bike, setBike] = useState({});
  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  useEffect(() => {
    loadScript("https://checkout.razorpay.com/v1/checkout.js");
  });

  useEffect(() => {
    if (!user.token) {
      navigate("/login");
    }
  }, [user]);

  useEffect(() => {
    if (!booking.bikeId) {
      navigate("/");
    } else {
      dispatch(placeBookingOrder());
    }
  }, []);

  const handlePayment = () => {
    var options = {
      key: "rzp_test_4GExMSyJ8jehHs", // Enter the Key ID generated from the Dashboard
      name: "Acme Corp",
      description: "Test Transaction",
      image: "https://example.com/your_logo",
      order_id: booking.orderId, //This is a sample Order ID. Pass the `id` obtained in the previous step
      handler: async function (response) {
        let res = await axios.post(
          "https://royalbrothers-backend.herokuapp.com/api/book/verify",
          response,
          {
            headers: {
              Authorization: `Bearer ${user.token}`,
            },
          }
        );
        console.log(res);
      },
      prefill: {
        name: "Gaurav Kumar",
        email: "gaurav.kumar@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new window.Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });

    rzp1.open();
  };

  return (
    <div>
      <div>Amount - {booking.amount}</div>
      <button onClick={handlePayment}>Pay</button>
    </div>
  );
};

export default Checkout;
