import React, { useEffect, useState } from "react";
import { supabase } from "../../utils/supabaseClient";
import { useNavigate } from "react-router-dom";
import Navbar from "../Navbar/Navbar"; // Importujte Navbar
import SignOutButton from "../Buttons/signOutButton";
import EventsSlider from "../Events/EventsSlider";

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
    <div>
      <EventsSlider />
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
