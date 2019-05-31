const passport = require("passport");

module.exports = app => {
  //log-in
  app.get(
    "/auth/google",
    passport.authenticate("google", {
      scope: ["profile", "email"]
    })
  );

  //route back to application
  app.get(
    "/auth/google/callback",
    passport.authenticate("google"),
    (req, res) => {
      res.redirect("/activity");
    }
    //after logged in redirect to activity link
  );

  //log-out
  app.get("/api/logout", (req, res) => {
    req.logout();
    //give out the current state of not an existing user
    res.redirect("/");
  });

  //checking the user loged-in from request object - lookup
  app.get("/api/current_user", (req, res) => {
    res.send(req.user);
  });
};
