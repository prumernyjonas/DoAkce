import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../utils/supabaseClient";
import "bootstrap/dist/css/bootstrap.min.css";
import Akce from "../Events/Events"; // Replace with actual path

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState(""); // Pole pro jméno při registraci
  const [isRegistering, setIsRegistering] = useState(false); // Přepínání mezi přihlášením a registrací
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null); // Přidáno pro sledování uživatele
  const navigate = useNavigate();

  useEffect(() => {
    const checkUser = async () => {
      const {
        data: { user },
        error,
      } = await supabase.auth.getUser();
      if (error) {
        console.error("Chyba při získávání uživatele:", error);
        return;
      }
      if (user) {
        setUser(user);
        navigate("/"); // Přesměrování na dashboard, pokud je uživatel přihlášen
      }
    };

    checkUser();
  }, [navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: { DisplayName: displayName }, // Uložení DisplayName
        },
      });

      if (error) {
        throw error;
      }

      console.log("Registrace proběhla úspěšně:", data);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });

      if (error) {
        throw error;
      }

      console.log("Přihlášení proběhlo úspěšně:", data);
      navigate("/");
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1>{isRegistering ? "Registrace" : "Přihlášení"}</h1>

          <form onSubmit={isRegistering ? handleSignUp : handleSignIn}>
            {isRegistering && (
              <div className="mb-3">
                <label htmlFor="displayName" className="form-label">
                  Jméno
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="displayName"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Zadejte své jméno"
                  required
                />
              </div>
            )}

            <div className="mb-3">
              <label htmlFor="email" className="form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Zadejte svůj email"
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="password" className="form-label">
                Heslo
              </label>
              <input
                type="password"
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Zadejte své heslo"
                required
              />
            </div>

            {error && <p className="text-danger">{error}</p>}

            <button type="submit" className="btn btn-primary w-100">
              {isRegistering ? "Registrovat" : "Přihlásit se"}
            </button>
          </form>

          <hr />

          <div className="text-center">
            <button
              className="btn btn-link"
              onClick={() => setIsRegistering(!isRegistering)}
            >
              {isRegistering
                ? "Máte už účet? Přihlaste se"
                : "Nemáte účet? Zaregistrujte se"}
            </button>
          </div>

          {/* Display Akce.jsx content */}
        </div>
      </div>
    </div>
  );
};

export default Login;
