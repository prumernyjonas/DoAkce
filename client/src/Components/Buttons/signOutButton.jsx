import React from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../Utils/supabaseClient";
import "bootstrap/dist/css/bootstrap.min.css";

const SignOutButton = () => {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    const { error } = await supabase.auth.signOut();
    if (error) {
      console.error("Odhlášení se nezdařilo:", error.message);
    } else {
      console.log("Úspěšně odhlášeno!");
      // Přesměrování na přihlašovací stránku
      navigate("/Login");
      // Aktualizace stránky
      window.location.reload();
    }
  };

  return (
    <button
      type="button"
      className="btn btn-danger btn-sm"
      onClick={handleSignOut}
    >
      Odhlásit se
    </button>
  );
};

export default SignOutButton;
