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
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [pickupDate, setpickupDate] = useState(
    new Date(searchParams.get("pickuptime"))
  );

  const locations = useSelector((store) => store.locations);
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

  const handleLocationFilter = (e) => {
    if (e.target.checked) {
      setSelectedLocations((prev) => [...prev, e.target.value]);
    } else {
      setSelectedLocations((prev) =>
        prev.filter((location) => location != e.target.value)
      );
    }
  };

  const onFiltersApply = () => {
    if (
      searchParams.get("pickuptime") !== pickupDate.toISOString() ||
      searchParams.get("dropofftime") !== dropoffDate.toISOString()
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

    if (selectedLocations.length > 0) {
      let lcString = selectedLocations.join(",").replaceAll(" ", "+");

      dispatch(
        fetchAllBikes(
          selectedCity,
          pickupDate.toISOString(),
          dropoffDate.toISOString(),
          lcString
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
              {locations.map((location) => {
                return (
                  <div key={location._id}>
                    <input
                      type="checkbox"
                      name={location.name}
                      id={location.name}
                      value={location.name}
                      checked={selectedLocations.includes(location.name)}
                      onChange={(e) => handleLocationFilter(e)}
                    />

                    <label htmlFor={location.name}>{location.name}</label>
                  </div>
                );
              })}
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
