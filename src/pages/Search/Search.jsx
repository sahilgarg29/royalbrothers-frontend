import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate, useSearchParams } from "react-router-dom";
import BikeCard from "../../components/BikeCard";
import DateTimePicker from "../../components/DateTimePicker";
import FilterBikes from "../../components/FilterBikes";
import { addBooking, fetchAllBikes } from "../../redux/actions";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import "./search.css";
import "../Bikes/bikesdata.css";

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [pickupDate, setpickupDate] = useState(
    new Date(searchParams.get("pickuptime"))
  );
  const [dropoffDate, setdropoffDate] = useState(
    new Date(searchParams.get("dropofftime"))
  );
  const selectedCity = useSelector((store) => store.cities.selectedCity);
  const bikes = useSelector((store) => store.bikes);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const pickupTime = searchParams.get("pickuptime");
    const dropoffTime = searchParams.get("dropofftime");

    dispatch(fetchAllBikes(selectedCity, pickupTime, dropoffTime));

    // let diffInMill = new Date(dropoffTime) - new Date(pickupTime);

    // console.log(Math.round(Math.abs(diffInMill) / 36e5));
  }, []);

  const onBookClick = (bike, location) => {
    dispatch(
      addBooking({
        bikeId: bike._id,
        locationId: location,
        pickupTime: searchParams.get("pickuptime"),
        dropoffTime: searchParams.get("dropofftime"),
      })
    );

    navigate("/checkout");
  };

  const onFiltersApply = (selectedBikes) => {
    if (
      searchParams.get("pickuptime") !== pickupDate ||
      searchParams.get("dropofftime") !== dropoffDate
    ) {
      // console.log(pickupDate.toISOString(), dropoffDate);

      // setSearchParams({
      //   pickuptime: pickupDate.toISOString().toString(),
      //   dropofftime: dropoffDate.toISOString(),
      // });

      dispatch(
        fetchAllBikes(
          selectedCity,
          pickupDate.toISOString(),
          dropoffDate.toISOString()
        )
      );
    }
  };

  // <div>
  //     <FilterBikes
  //       currPickupDate={searchParams.get("pickuptime")}
  //       currDropoffDate={searchParams.get("dropofftime")}
  //       handleApplyFilters={onFiltersApply}
  //     />
  //     {bikes.map((bike) => (
  //       <BikeCard key={bike._id} bike={bike} handleBooking={onBookClick} />
  //     ))}
  //   </div>

  return (
    <div>
      <div className="headbikes">
        <p>
          Now rent two wheelers for 7 days at a lower special price.
          <span>Click here for modified Search</span>
        </p>
      </div>
      <div className="sorthead container">
        <div className="filter-heading">
          <p>Filter</p>
        </div>

        <div className="sortingbtn">
          <h5>Sort By</h5>
          <button className="btn-active">Relevance</button>
          <button>Price Low to High</button>
          <button>Price High to Low</button>
        </div>
      </div>
      <div className="container">
        <div className="filter-container">
          <div className="firstmain">
            <div>
              <h5>Select Date & Time</h5>
              <div className="datetime">
                <div className="Dateandtime">
                  <label>Pickup date</label>
                  <DatePicker
                    selected={pickupDate}
                    onChange={(date) => setpickupDate(date)}
                    showTimeSelect
                    timeFormat="HH:mm"
                    dateFormat="MMMM d, yyyy h:mm aa"
                  />
                </div>
              </div>
            </div>

            <div className="datetime">
              <div className="Dateandtime">
                <label>Dropoff date</label>
                <DatePicker
                  selected={dropoffDate}
                  onChange={(date) => setdropoffDate(date)}
                  showTimeSelect
                  timeFormat="HH:mm"
                  dateFormat="MMMM d, yyyy h:mm aa"
                />
              </div>
            </div>

            <div>
              <h5>Search Duration</h5>
              <p style={{ marginTop: "10px" }}>
                {Math.round(Math.abs(pickupDate - dropoffDate) / 36e5)} Hours
              </p>
            </div>

            <div className="searching">
              <h5>Search By Location</h5>
              {/* <Paper component="form" sx={{ alignItems: "center" }}>
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Search Location"
                />
              </Paper> */}
            </div>

            <div className="overflow">
              <div>
                {" "}
                <input type="checkbox" /> <p>Indiranager(near metro station)</p>{" "}
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p>Yashwantpur(BMCT station)</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" />{" "}
                <p>Marathali CG clinic(karthik nager)</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p>Koramangala</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p>HSR layout (4th sector)</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p>Henur Lake(near axis bank)</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" />{" "}
                <p>Whitefiled tansi Honda(Hoodi circle)</p>
              </div>
              <br />
            </div>

            <h5>Search By Bike Model</h5>
            <Paper component="form" sx={{ alignItems: "center" }}>
              <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Bike Model"
              />
            </Paper>

            <div className="overflow">
              <div>
                {" "}
                <input type="checkbox" /> <p>Yamaha Fascino</p>{" "}
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p>Honda Dio</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p>TVS hexal Heavy Duty</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p>Hero mastreo</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p>Honda Activa 4G</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p>Honda Activa 5G</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p>Aprilia SR 125</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p> Yobykes Drift (electric)</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p> TVS Ntorq 125</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p>Ather 450</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p> Pure EV Epluto (electric)</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p> Honda Activa 6G</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" />{" "}
                <p>Royal Enfield Himalayan Gravel Grey</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" />{" "}
                <p>Royal Enfield Classic 350 Reborn</p>
              </div>
              <br />
              <div>
                {" "}
                <input type="checkbox" /> <p> TVS Apache RTR 180 (BS6)</p>
              </div>
              <br />
            </div>
          </div>

          <div>
            <button className="applyfilter" onClick={() => onFiltersApply()}>
              Apply Filter
            </button>
          </div>
        </div>

        {/* right side div start here */}

        <div className="secoundmain">
          <div>
            {bikes.map((bike) => (
              <BikeCard
                key={bike._id}
                bike={bike}
                pickupTime={pickupDate}
                dropoffTime={dropoffDate}
                handleBooking={onBookClick}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
