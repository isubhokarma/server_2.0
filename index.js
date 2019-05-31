const express = require("express");
const mongoose = require("mongoose");
const cokieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/user");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();

app.use(
  cokieSession({
    //config options for cookie-session
    //days and time
    maxAge: 30 * 24 * 60 * 60 * 1000,
    //keys - random
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

if (process.env.NODE_ENV === "production") {
  //express will serve up production assets like- main.js main.cc
  app.use(express.static("client/build"));

  //express will serve up the index.html if it doesn't recognize the route
  const path = require("path");
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT);
