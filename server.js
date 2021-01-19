const express = require("express"),
      app = express(),
      mongoose = require('mongoose'),
      passport = require("passport"),
      apiRoute = require('./routes/apiRoutes'),
      PORT = process.env.PORT || 3001;

require("dotenv").config();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(passport.initialize());
app.use(passport.session());

if(process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
};

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true
});

//define routes 
app.use("/api", apiRoute);

app.listen(PORT, () => console.log("the server has started on " + PORT))