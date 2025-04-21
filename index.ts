import express from "express";
import boxplotRoutes from "./src/routes/boxplotRoutes";

const app = express();
const PORT = 3000;

app.use(express.json());


app.get("/", (req, res) => {
  res.send("Servidor funcionando. Visita /boxplot para ver el análisis.");
});


app.use("/", boxplotRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

