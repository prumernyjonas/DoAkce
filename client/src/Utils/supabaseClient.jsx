import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ctqvgkfvrkmgsuhjqpvf.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN0cXZna2Z2cmttZ3N1aGpxcHZmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjcwNzg1NDUsImV4cCI6MjA0MjY1NDU0NX0.fhWZmo-M_nKpp3ZayxCO6d1MH8OiPwisE-qKgP0OirM";

export const supabase = createClient(supabaseUrl, supabaseKey);

// Funkce pro přihlášení s Googlem
async function loginWithGoogle() {
  const { user, session, error } = await supabase.auth.signIn({
    provider: "google",
  });

  if (error) {
    console.error("Error během přihlášení:", error.message);
  } else {
    console.log("Uživatel se přihlásil:", user);
  }
}

// Funkce pro odhlášení
async function signOut() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Error během odhlášení:", error.message);
  } else {
    console.log("Uživatel se úspěšně odhlásil");
  }
}
