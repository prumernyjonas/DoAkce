import React from "react";
import "../css/LatestEvent.css";
import anton from "../images/anton.jpg";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import megaphone from "../images/megaphone.png";

const LatestEvents = () => {
  return (
    <div className="latest-events-container">
      <h2 className="section-title">NEJNOVĚJŠÍ AKCE</h2>

      <div className="events-grid">
        {/* První řádek s malými kartami */}
        <div className="event-card small">
          <img src={anton} alt="Olympijský festival" className="event-image" />
          <h3>Olympijský festival</h3>
          <p>26.7.2024</p>
          <p>Most, Ústecký kraj</p>
        </div>
        <div className="event-card small">
          <img src={img1} alt="Olympijský festival" className="event-image" />
          <h3>Olympijský festival</h3>
          <p>26.7.2024</p>
          <p>Most, Ústecký kraj</p>
        </div>
        <div className="event-card small">
          <img src={img2} alt="Olympijský festival" className="event-image" />
          <h3>Olympijský festival</h3>
          <p>26.7.2024</p>
          <p>Most, Ústecký kraj</p>
        </div>
      </div>

      {/* Kontejner pro velkou kartu a sidebar */}
      <div className="large-event-section">
        <div className="event-card medium">
          <img src={img3} alt="Olympijský festival" className="event-image" />
          <div className="event-details">
            <h3>Olympijský festival</h3>
            <p>
              <span role="img" aria-label="calendar">
                📅
              </span>{" "}
              26.7.2024
            </p>
            <p>
              <span role="img" aria-label="location">
                📍
              </span>{" "}
              Most, Ústecký kraj
            </p>
            <p>
              V sobotu 2. listopadu 2024 se v ostravské zoologické zahradě
              uskuteční tradiční oslavy svátku Halloween. Podzimní akce je
              rovněž neodmyslitelně spjata s lampionovým průvodem, který v
              podvečer projde místním areálem zoo...
            </p>
            <div className="tags">
              <span className="tag">Festivaly</span>
              <span className="tag">Pro děti</span>
            </div>
          </div>
        </div>

        {/* Postranní panel s tlačítky */}
        <div className="sidebar">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <img
              src={megaphone}
              alt="megaphone"
              style={{
                width: "100px",
              }}
            />
          </div>
          <p>
            Pořádáš akci nebo víš o něčem zajímavém, co by si ostatní neměli
            nechat ujít? Přidej svou událost a dej o ní vědět ostatním!
          </p>

          <button className="btn add-event">Přidat akci</button>
          <button className="btn view-all-events">Všechny akce</button>
        </div>
      </div>
    </div>
  );
};

export default LatestEvents;
