const express = require("express");
const router = require("./routes/route");
const cors = require("cors");
const dotenv = require("dotenv").config();
const connectionDB = require("./database/connectionDB");
connectionDB();

const app = express();

app.use(cors());
app.use("/", router);

PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is Running on Port Number : ${PORT} `);
});
