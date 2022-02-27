import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { placeBookingOrder } from "../../redux/actions";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import "./checkout.css";

const Checkout = () => {
  const user = useSelector((store) => store.user);
  const booking = useSelector((store) => store.booking);
  const bike = useSelector((store) =>
    store.bikes.find((bike) => bike._id == booking.bikeId)
  );
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
    if (!booking.bikeId || !bike) {
      navigate("/");
    } else {
      console.log(bike);
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
        try {
          let res = await axios.post(
            "https://royalbrothers-backend.herokuapp.com/api/book/verify",
            response,
            {
              headers: {
                Authorization: `Bearer ${user.token}`,
              },
            }
          );
          alert("Payment Successfull");
          navigate("/orders");
        } catch (error) {}
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

  // return (
  //   <div>
  //     <div>Amount - {booking.amount}</div>
  //     <button onClick={handlePayment}>Pay</button>
  //   </div>
  // );

  return (
    <div>
      <div className="checkoutbar">
        <p className="rent">
          Now rent two wheelers for 4 or 7 days at a lower special price. Click
          to modify search to{" "}
          <Link to="/search" style={{ color: "dodgerblue" }}>
            {" "}
            4 days{" "}
          </Link>{" "}
          or{" "}
          <Link to="/search" style={{ color: "dodgerblue" }}>
            {" "}
            7 days{" "}
          </Link>{" "}
          ( 2 Hours )
        </p>
      </div>
      <div className="checkoutContainer">
        <div className="productSummary">
          <div className="summaryHeader">SUMMARY</div>
          <div className="summaryContainer">
            <div className="checkoutProduct">
              <img src={bike.imageUrl} alt="bike"></img>
              <h4>{bike.model}</h4>
            </div>
            <div className="priceContainer">
              <div className="dateTime">
                <div className="start">
                  <p>{new Date(booking.pickupTime).toLocaleTimeString()}</p>
                  <p>{new Date(booking.pickupTime).toLocaleDateString()}</p>
                </div>
                <div className="toDiv">to</div>
                <div className="end">
                  <p>{new Date(booking.dropoffTime).toLocaleTimeString()}</p>
                  <p>{new Date(booking.dropoffTime).toLocaleDateString()}</p>

                  {/* <p>26 Feb 2022</p> */}
                </div>
              </div>
              <div className="checkoutAddress">
                <p>
                  {
                    bike.locations.find(
                      (location) => location._id == booking.locationId
                    ).name
                  }
                </p>
                <p>3-15 ayyappa society Madhapur, Hyderabad</p>
              </div>
              <div className="charges">
                <p>Price per Hour</p>
                <div className="rupee">
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>
                  {bike.pricePerHour}
                </div>
              </div>
              <div className="totalCharges">
                <p>Total</p>
                <div className="rupee">
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>
                  480.0
                </div>
              </div>
              {/* <div className="helmet">
                <p>Number of Helmet (?)</p>
                <select>
                  <option value={1}>1</option>
                  <option value={2}>2</option>
                </select>
              </div> */}
              <div className="couponCode">
                <input
                  className="couponInput"
                  type="text"
                  placeholder="Coupon code"
                ></input>
                <button className="couponApply">Apply</button>
              </div>

              <div className="limit">
                <p>Km limit (?)</p>
                <p>120km</p>
              </div>
              <div className="kmCharge">
                <p>Excess Km in charges (?)</p>
                <div className="rupee">
                  <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>
                  4.0/km
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="checkoutCard">
          <div className="summaryHeader">CHECKOUT</div>
          <div className="paymentDetails">
            <div className="bookingfee">
              <p>Booking Fee</p>
              <div className="rupee">
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>
                {booking.amount - 500 - (booking.amount - 500) * 0.24}
              </div>
            </div>
            <div className="cgst">
              <p>CGST(14%)</p>
              <div className="rupee">
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>
                {((booking.amount - 500) * 0.14).toFixed(1)}
              </div>
            </div>
            <div className="sgst">
              <p>SGST(14%)</p>
              <div className="rupee">
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>
                {((booking.amount - 500) * 0.14).toFixed(1)}
              </div>
            </div>
            <div className="refundable">
              <p>Refundable Deposit</p>
              <div className="rupee">
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>
                500.00
              </div>
            </div>
            <div className="payableAmnt">
              <p>Total Payable Amount</p>
              <div className="rupee">
                <img src="https://d36g7qg6pk2cm7.cloudfront.net/assets/rupee-715f135bb1a1291a6d00f0b3aa0a6cb3c068d32b5a5f261f977e60ece02f0561.svg"></img>
                {booking.amount}
              </div>
            </div>
            <button className="makePayment" onClick={handlePayment}>
              Make payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
