import React from "react";
import calendarIcon from "../../images/calendar.png";
import tripIcon from "../../images/trip.png";
import eventIcon from "../../images/megaphone.png";
import mapIcon from "../../images/map.png";
import { motion } from "framer-motion";

motion;
const IconsNav = () => {
  return (
    <div className="container my-5">
      <div className="row text-center">
        {/* Sloupec pro Akce */}
        <div className="col-md-3">
          <img
            src={eventIcon}
            alt="Akce"
            className="mb-3"
            style={{ width: "100px" }}
          />
          <h4>AKCE</h4>
          <p>
            Zúčastněte se nejrůznějších událostí od festivalů po komunitní
            setkání a užijte si zábavu s přáteli nebo rodinou.
          </p>
        </div>

        {/* Sloupec pro Výlety */}
        <div className="col-md-3">
          <img
            src={tripIcon}
            alt="Výlety"
            className="mb-3"
            style={{ width: "100px" }}
          />
          <h4>VÝLETY</h4>
          <p>
            Objevte krásy přírody i zajímavá místa ve městě a naplánujte si svůj
            další dobrodružný výlet plný zážitků.
          </p>
        </div>

        {/* Sloupec pro Kalendář */}
        <div className="col-md-3">
          <img
            src={calendarIcon}
            alt="Kalendář"
            className="mb-3"
            style={{ width: "100px" }}
          />
          <h4>KALENDÁŘ</h4>
          <p>
            Prohlédněte si nadcházející akce a naplánujte si svůj volný čas tak,
            abyste nic nezmeškali.
          </p>
        </div>

        {/* Sloupec pro Mapa */}
        <div className="col-md-3">
          <img
            src={mapIcon}
            alt="Mapa"
            className="mb-3"
            style={{ width: "100px" }}
          />
          <h4>MAPA</h4>
          <p>
            Prozkoumejte místa výletů zobrazená na mapě a vyberte si své další
            dobrodružství podle lokace.
          </p>
        </div>
      </div>
    </div>
  );
};

export default IconsNav;
