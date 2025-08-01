require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");

const ai = require("./routes/ai.routes");
app.use(express.static(path.join(__dirname, "frontend/dist")));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("/", ai);

app.all(/(.*)/, (req, res) => {
  res.sendFile(path.join(__dirname, "..", "frontend", "dist", "index.html"));
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Listening to port ${PORT}`);
});
