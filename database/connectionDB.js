const mongoose = require("mongoose");

const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.CONNECTION_STRING);
    console.log("DataBase Connected Successfully");
  } catch (error) {
    console.error("Error while connecting with the database ", error.message);
  }
};

module.exports = connectionDB;
