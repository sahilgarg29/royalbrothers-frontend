import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import { Bikes } from "./pages/Bikes/bikesdata";
import { Offers } from "./pages/offers/offers";
import { EarnWithUs } from "./pages/partenerwithus/earnwithus/earn";
import { PartnerWithUs } from "./pages/partenerwithus/ownfranchise/partenerus";
import Header from "./components/Header";
import { Footer } from "./components/footer";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAllLocations } from "./redux/actions";
import Logout from "./components/Logout";
import Orders from "./pages/Orders";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllLocations());
  }, []);

  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/offer" element={<Offers />} />
        <Route path="/earnwithus" element={<EarnWithUs />}></Route>
        <Route path="/partner-with-us" element={<PartnerWithUs />}></Route>
        <Route path="/logout" element={<Logout />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
