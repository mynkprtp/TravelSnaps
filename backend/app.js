const fs = require("fs");
const path = require("path");

const express = require("express");
const mongoose = require("mongoose");

const placesRoutes = require("./routes/places-routes");
const usersRoutes = require("./routes/users-routes");

const app = express();

// middlewares
app.use(express.json());
app.use("/uploads/images", express.static(path.join("uploads", "images")));
app.use(express.static(path.join("public")));

app.use("/api/places", placesRoutes);
app.use("/api/users", usersRoutes);

app.use((req, res, next) => {
  res.sendFile(path.resolve(__dirname, "public", "index.html"));
});

app.use((error, req, res, next) => {
  if (req.file) {
    fs.unlink(req.file.path, (err) => {
      console.log(err);
    });
  }
  if (res.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error occured" });
});

// after the connection is successful then we want to connect to database
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.hc1su.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }
  )
  .then(() => {
    console.log("connection established");
    app.listen(process.env.PORT || 5000);
  })
  .catch((err) => console.log(err));
