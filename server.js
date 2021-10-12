const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");
const mongojs = require("mongojs");
const routes = require('./controllers');

const PORT = process.env.PORT || 3000;
const databaseUrl = "workout";
const collections = ["workouts"];
const db = mongojs(databaseUrl, collections);

const app = express();

app.use(logger("dev"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true });


db.on("error", error => {
  console.log("Database Error:", error);
});

app.use(routes);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
