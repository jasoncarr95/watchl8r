// Basic Express app set up
const express = require("express");
const app = express();

// Require aka import from other folders
const connectDB = require("./config/database");
const homeRoutes = require("./routes/home");
const watchListRoutes = require("./routes/watchList");

// Loads .env file contents into | `process.env`. Example: 'KEY=value'
require("dotenv").config({ path: "./config/.env" });

connectDB();

// EJS
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// ROUTES
app.use("/", homeRoutes);
app.use("/watchList", watchListRoutes);

// Server
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
