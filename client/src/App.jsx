import React from "react";
import Login from "./pages/Login";
import Events from "./pages/Category";
import Map from "./pages/Map";
import Calendar from "./pages/Calendar";
import Trips from "./pages/Trips";
import Navbar from "./pages/Navbar";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from "./pages/AboutUs";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/akce" element={<Events />} />
            <Route path="/vylety" element={<Trips />} />
            <Route path="/kalendar" element={<Calendar />} />
            <Route path="/mapa" element={<Map />} />
            <Route path="/o-nas" element={<AboutUs />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
