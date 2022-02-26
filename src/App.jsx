import { Route, Routes } from "react-router-dom";
import "./App.css";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import { Bikes } from "./pages/Bikes/bikesdata";
import { Offers } from "./pages/offers/offers"
import { EarnWithUs } from "./pages/partenerwithus/earnwithus/earn";
import { PartnerWithUs } from "./pages/partenerwithus/ownfranchise/partenerus";
import { StorePage } from "./pages/Store/store";
import { AboutUs } from "./pages/Aboutus/aboutus";



function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<Search />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/bikes" element={<Bikes />} />
        <Route path="/offer" element={<Offers />} />
        <Route path="/earnwithus" element={<EarnWithUs/>}></Route>
        <Route path="/partner-with-us" element={<PartnerWithUs/>}></Route>
        <Route path="/storepage" element={<StorePage/>}></Route>
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
