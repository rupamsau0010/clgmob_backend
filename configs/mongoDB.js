// Import depandencies
const mongoose = require("mongoose");

// Import local depandencies

// get URL
const MONGO_URI = process.env.MONGO_URI;

const mongoConnect = () => {
  mongoose
    .connect(MONGO_URI, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    })
    .catch((err) => {
      console.log(err);
    })
    .then((res) => {
      console.log("Connented to MongoDB atlas");
    });
};

module.exports = mongoConnect;
