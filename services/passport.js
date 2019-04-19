const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/dev");

const User = mongoose.model("users");

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback"
		},

		//access authenticated and ready to create a new user or look for existing
		(accessToken, refreshToken, profile, done) => {
			new User({ googleID: profile.id }).save();
		}
	)
);
