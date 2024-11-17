import React, { useEffect, useState } from "react";
import { supabase } from "../Utils/supabaseClient";
import { useNavigate } from "react-router-dom";
import SignOutButton from "../Components/Buttons/signOutButton";
import IconsNav from "../Components/IconsNav/iconsNav";
import EventsSlider from "./EventsSlider";
import LatestEvents from "./LatestEvent";
import Category from "./Category";

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUser = async () => {
      const {
        data: { session },
        error,
      } = await supabase.auth.getSession();

      if (error) {
        console.error("Chyba při získávání session:", error);
        return;
      }

      if (session) {
        setUser(session.user); // Uložení uživatelského objektu
      } else {
        navigate("/");
      }
    };

    fetchUser();
  }, [navigate]);

  return (
    <div className="page-container">
      <EventsSlider />
      <IconsNav />
      <LatestEvents />)
      <Category />
      {user ? (
        <div>
          <p>Vítejte, {user.email}</p> {/* kdyz je uzivatel prihlasen */}
          <SignOutButton /> {/* tlacitko pro odhlaseni */}
        </div>
      ) : (
        <p></p> /* kdyz neni uzivatel prihlasen */
      )}
    </div>
  );
};

export default Home;
