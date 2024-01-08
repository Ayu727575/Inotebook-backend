const mongoose = require("mongoose");

const mongoURI = "mongodb://localhost:27017";

const connectToMongo = () => {
  mongoose
    .connect(mongoURI)
    .then(() => console.log("connected to mongodb sucessfully"))
    .catch((e) => console.log(e.message));
};
module.exports = connectToMongo;
