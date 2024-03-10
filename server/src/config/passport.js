const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const FacebookStrategy = require("passport-facebook").Strategy;
const User = require("../models/userModel");
const { issueJWT } = require("../utils/jwt-utils");

/**
  JWT STRATEGY 
 */

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: process.env.JWT_SECRET,
};

const jwtStrategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findOne({ _id: payload.sub }).exec();

    if (!user) {
      return done(null, false);
    } else return done(null, user);
  } catch (err) {
    return done(err, null);
  }
});

/**
  FACEBOOK STRATEGY 
 */

const facebookStrategy = new FacebookStrategy(
  {
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:3000/auth/facebook/callback",
    profileFields: ["id", "displayName", "emails", "photos"],
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      // Find or create the user in your database
      console.log(profile);
      let user = await User.findOne({ facebookId: profile.id });
      if (!user) {
        const email =
          profile.emails && profile.emails.length > 0
            ? profile.emails[0].value
            : null;
        user = await User.create({
          facebookId: profile.id,
          username: profile.displayName,
          email: email,
          photo:
            profile.photos && profile.photos.length > 0
              ? profile.photos[0].value
              : null,
        });
      }

      // Generate and return a JWT token

      const tokenObject = issueJWT(user);
      return done(null, tokenObject);
    } catch (err) {
      return done(err, null);
    }
  }
);

passport.use(jwtStrategy);
passport.use(facebookStrategy);

module.exports = passport;
