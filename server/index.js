"use strict";

const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const path = require("path");
const compression = require("compression");

const {
  getItems,
  getItem,
  placeOrder,
  getFilteredItems,
} = require("./handlers");

const PORT = 8080;

express()
  .use(function (req, res, next) {
    res.header(
      "Access-Control-Allow-Methods",
      "OPTIONS, HEAD, GET, PUT, POST, DELETE"
    );
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  })
  .use(morgan("tiny"))
  .use(
    helmet({
      contentSecurityPolicy: false,
    })
  );
app.use(cors()).use(express.static("./server/assets"));
app.use(express.json({ limit: "25mb" }));
app.use(express.urlencoded({ extended: false, limit: "25mb" }));
if (process.env.NODE_ENV === "developement") {
  app.use("/", express.static(__dirname + "/"));
}

// REST endpoints?
app
  .get("/bacon", (req, res) => res.status(200).json("🥓"))
  .get("/api/get-items", getItems)
  .get("/api/get-items/:_id", getItem)
  .patch("/api/place-order", placeOrder)
  .get("/api/get-filtered-items", getFilteredItems);

// The section below is to serve React on heroku server
if (process.env.NODE_ENV === "production") {
  // Serve any static files
  app.use(express.static(path.resolve(__dirname, "../client/build")));
  // Handle React routing, return all requests to React app  app.get("*", function (req, res) {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
}

app.listen(PORT, () => console.info(`Listening on port ${PORT}`));
