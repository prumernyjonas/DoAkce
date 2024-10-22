import React from "react";
import Login from "./Components/Login/Login";
import Events from "./Components/Events/Events";
import Map from "./Components/Map/Map";
import Calendar from "./Components/Calendar/Calendar";
import Trips from "./Components/Trips/Trips";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Components/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/akce" element={<Events />} />
          <Route path="/vylety" element={<Trips />} />
          <Route path="/kalendar" element={<Calendar />} />
          <Route path="/mapa" element={<Map />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
