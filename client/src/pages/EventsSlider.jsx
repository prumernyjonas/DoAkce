import React, { useEffect, useState, useRef } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import background1 from "../images/background1.jpeg";
import background2 from "../images/background2.jpeg";
import background3 from "../images/background3.jpeg";
import background4 from "../images/background4.jpeg";
import "../css/EventsSlider.css";
import { motion } from "framer-motion";

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
  const [progress, setProgress] = useState(0);
  const duration = 8000; // Délka trvání v milisekundách
  const intervalRef = useRef(null);

  const resetTimer = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    setProgress(0); // Reset progrese při restartu timeru

    const startTime = Date.now(); // Zaznamenání začátku intervalu

    // Spuštění nového intervalu pro aktualizaci progrese
    intervalRef.current = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      const newProgress = (elapsedTime / duration) * 110;

      if (newProgress >= 110) {
        clearInterval(intervalRef.current); // Zastavení, pokud dosáhne 100
        handleNextEvent(); // Přechod na další akci
        return;
      }

      setProgress(newProgress); // Plynulý nárůst
    }, 110); // Aktualizace každých 100 ms
  };

  useEffect(() => {
    resetTimer();
    return () => clearInterval(intervalRef.current); // Čistění intervalu při unmountu
  }, [currentEvent]);

  const handleNextEvent = () => {
    setCurrentEvent((prev) => (prev + 1) % events.length);
    resetTimer(); // Reset timeru pro novou akci
  };

  const handleEventClick = (index) => {
    setCurrentEvent(index);
    resetTimer(); // Reset timeru při kliknutí na akci
  };

  const backgroundStyle = {
    backgroundImage: `url(${events[currentEvent].background})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "600px",
    width: "1200px",
    borderRadius: "4px",
    position: "relative",
    overflow: "hidden",
  };

  return (
    <div className="container my-3">
      <div className="background-container">
        <div
          className="hero-section text-white text-start d-flex flex-column justify-content-center align-items-start py-5 px-5"
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
              borderRadius: "4px",
            }}
          ></div>

          <div className="container position-relative">
            <div
              style={{
                position: "relative",
                height: "auto",
                overflow: "hidden",
              }}
            >
              <motion.h1
                className="display-4 event-title"
                key={events[currentEvent].title}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {events[currentEvent].title}
              </motion.h1>
              <motion.p
                className="lead"
                key={events[currentEvent].description}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {events[currentEvent].description}
              </motion.p>
            </div>
            <br />
            <button className="btn btn-success btn-lg">Prohlédnout</button>
          </div>

          {/* Odkazy na akce */}
          <div className="event-links-container">
            <div
              className="event-links d-flex justify-content-around position-absolute bottom-0 w-100 bg-dark bg-opacity-10 py-5 rounded"
              style={{ zIndex: 1 }}
            >
              {events.map((event, index) => (
                <div key={index} style={{ flex: 1, textAlign: "center" }}>
                  <span
                    className={`event-link ${
                      index === currentEvent ? "active" : ""
                    }`}
                    onClick={() => handleEventClick(index)}
                  >
                    {event.title}
                  </span>
                  <progress
                    className="progressBar"
                    value={index === currentEvent ? progress : 0}
                    max="100"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsSlider;
