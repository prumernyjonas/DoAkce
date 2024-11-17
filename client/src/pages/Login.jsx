import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../Utils/supabaseClient";
import "bootstrap/dist/css/bootstrap.min.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState(""); // Pro potvrzení hesla
  const [displayName, setDisplayName] = useState("");
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [message, setMessage] = useState(null);
  const [showPassword, setShowPassword] = useState(false); // Pro zobrazení/skrývání hesla
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
        navigate("/");
      }
    };

    checkUser();
  }, [navigate]);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setError("Hesla se neshodují. Zadejte je znovu.");
      return;
    }

    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password,
        options: {
          data: { DisplayName: displayName },
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

  const handleForgotPassword = async () => {
    setError(null);
    setMessage(null);

    try {
      const { data, error } = await supabase.auth.resetPasswordForEmail(email);
      if (error) {
        throw error;
      }
      setMessage(
        "E-mail pro obnovení hesla byl odeslán. Zkontrolujte svou schránku."
      );
    } catch (error) {
      setError("Nepodařilo se odeslat e-mail pro obnovení hesla.");
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

            <div className="mb-3 position-relative">
              <label htmlFor="password" className="form-label">
                Heslo
              </label>
              <input
                type={showPassword ? "text" : "password"}
                className="form-control"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Zadejte své heslo"
                required
              />
              <button
                type="button"
                className="btn btn-outline-secondary position-absolute top-0 end-0 mt-2 me-2"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? "Skrýt" : "Zobrazit"}
              </button>
            </div>

            {isRegistering && (
              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">
                  Potvrďte heslo
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Zadejte heslo znovu"
                  required
                />
              </div>
            )}

            {error && <p className="text-danger">{error}</p>}
            {message && <p className="text-success">{message}</p>}

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

          {!isRegistering && (
            <div className="text-center mt-3">
              <button className="btn btn-link" onClick={handleForgotPassword}>
                Zapomněli jste heslo?
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
