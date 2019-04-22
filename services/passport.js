const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const mongoose = require("mongoose");
const keys = require("../config/dev");

const User = mongoose.model("users");

passport.serializeUser((user, done) => {
	//user is the existing user id in db
	//user.id is the auto generated id by mongodb
	//pass to deserialize user
	done(null, user.id);
});

passport.deserializeUser((id, done) => {
	//collecting the user-id from serialize user and return it as mongoose model instance
	User.findById(id).then(user => {
		done(null, user);
	});
});

passport.use(
	new GoogleStrategy(
		{
			clientID: keys.googleClientID,
			clientSecret: keys.googleClientSecret,
			callbackURL: "/auth/google/callback"
		},

		//access authenticated and ready to create a new user or look for existing
		(accessToken, refreshToken, profile, done) => {
			User.findOne({ googleID: profile.id }).then(existingUser => {
				if (existingUser) {
					done(null, existingUser);
				} else {
					new User({ googleID: profile.id })
						.save()
						.then(user => done(null, user));
				}
			});
		}
	)
);
