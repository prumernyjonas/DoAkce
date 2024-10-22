import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { motion } from "framer-motion";
import background1 from "./background1.jpg"; // Cesta k prvnímu obrázku
import background2 from "./background2.jpg"; // Cesta k druhému obrázku
import background3 from "./background3.jpg"; // Cesta k třetímu obrázku
import background4 from "./background4.jpg"; // Cesta k čtvrtému obrázku

const events = [
  {
    title: "Podzimní trhy a slavnosti",
    description:
      "Přijďte ochutnat sezónní dobroty, objevte tradiční řemeslné výrobky a vychutnejte si atmosféru plnou barev a vůní.",
    background: background1,
  },
  {
    title: "Hudební Festival: Rytmy Města",
    description:
      "Užijte si nezapomenutelné hudební zážitky s místními umělci a kapelami.",
    background: background2,
  },
  {
    title: "Gastrofest",
    description: "Objevte chutě z celého světa na našem festivalu jídla.",
    background: background3,
  },
  {
    title: "Vánoční jarmark",
    description:
      "Zažijte kouzlo Vánoc s tradičními řemeslnými výrobky a lahodným jídlem.",
    background: background4,
  },
];

const EventsSlider = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [isVisible, setIsVisible] = useState(true); // Nový stav pro kontrolu viditelnosti

  useEffect(() => {
    const interval = setInterval(() => {
      handleNextEvent();
    }, 6000); // Přepnutí každých 6 sekund

    return () => clearInterval(interval);
  }, [currentEvent]);

  const handleNextEvent = () => {
    setIsVisible(false); // Skrytí textu před přepnutím na další akci
    setTimeout(() => {
      setCurrentEvent((prev) => (prev + 1) % events.length); // Přepnutí na další akci
      setIsVisible(true); // Opětovné zobrazení textu
    }, 500); // Čas na zmizení textu (500 ms)
  };

  const handleEventClick = (index) => {
    setIsVisible(false); // Skrytí textu před přepnutím na vybranou akci
    setTimeout(() => {
      setCurrentEvent(index); // Nastavení aktuální akce na index
      setIsVisible(true); // Opětovné zobrazení textu
    }, 500); // Čas na zmizení textu (500 ms)
  };

  const backgroundStyle = {
    backgroundImage: `url(${events[currentEvent].background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "700px",
    borderRadius: "15px",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <div className="container my-5">
      <div
        className="hero-section text-white text-center d-flex flex-column justify-content-center align-items-center py-5"
        style={backgroundStyle}
      >
        {/* Přidání překryvného filtru */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            borderRadius: "15px",
          }}
        ></div>

        <div className="container position-relative">
          {/* Animace textu */}
          <div
            style={{
              position: "relative",
              height: "100px",
              overflow: "hidden",
            }}
          >
            <motion.h1
              className="display-4"
              key={events[currentEvent].title}
              initial={{ y: 20, opacity: 0 }} // Start from below and invisible
              animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }} // Move to its original position and visible
              exit={{ y: 20, opacity: 0 }} // Move down and invisible when exiting
              transition={{ duration: 0.5, ease: "easeInOut" }} // Add easing effect
            >
              {events[currentEvent].title}
            </motion.h1>
            <motion.p
              className="lead"
              key={events[currentEvent].description}
              initial={{ y: 20, opacity: 0 }} // Start from below and invisible
              animate={{ y: isVisible ? 0 : 20, opacity: isVisible ? 1 : 0 }} // Move to its original position and visible
              exit={{ y: 20, opacity: 0 }} // Move down and invisible when exiting
              transition={{ duration: 0.5, ease: "easeInOut" }} // Add easing effect
            >
              {events[currentEvent].description}
            </motion.p>
          </div>
          <br />
          <button className="btn btn-success btn-lg">Prohlédnout</button>
        </div>

        {/* Odkazy na akce */}
        <div
          className="event-links d-flex justify-content-around position-absolute bottom-0 w-100 bg-dark bg-opacity-75 py-2 rounded"
          style={{ zIndex: 1 }}
        >
          {events.map((event, index) => (
            <div key={index} style={{ flex: 1, textAlign: "center" }}>
              <span
                style={{
                  cursor: "pointer",
                  color:
                    index === currentEvent
                      ? "white"
                      : "rgba(255, 255, 255, 0.6)", // Zvýraznění aktuální akce
                }}
                onClick={() => handleEventClick(index)} // Odkaz na vybranou akci
              >
                {event.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventsSlider;
