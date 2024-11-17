import express from "express";
import cors from "cors";
import supabase from "../client/src/utility/supabaseClient.jsx";
const app = express();
app.use(cors());
app.use(express.json());

// Endpoint pro získání seznamu akcí
app.get("/api/events", async (req, res) => {
  try {
    const { data, error } = await supabase.from("events").select("*");

    if (error) throw error;

    res.json(data);
  } catch (error) {
    res.status(500).json({ message: "Chyba při získávání dat", error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server běží na portu ${PORT}`);
});
