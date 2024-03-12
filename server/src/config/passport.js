// Passport imports
const passport = require("passport");
const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const FacebookStrategy = require("passport-facebook").Strategy;
const GoogleStrategy = require("passport-google-oauth20").Strategy;
var GithubStrategy = require("passport-github").Strategy;

// Misc. imports
const User = require("../models/userModel");
const { issueJWT } = require("../utils/jwt-utils");
const { generateUsername, generatePassword } = require("../utils/login-utils");

passport.serializeUser((user, done) => {
  done(null, user.id);
});

// Deserialize user data
passport.deserializeUser(async (id, done) => {
  try {
    const user = await User.findById(id);
    done(null, user);
  } catch (err) {
    done(err, null);
  }
});

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
      let user = await User.findOne({ facebookId: profile.id });
      if (!user) {
        user = await User.create({
          facebookId: profile.id,
          username: await generateUsername(profile.displayName),
          password: await generatePassword(),
          email: profile.emails,
        });
      }

      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
);

/**
  GOOGLE STRATEGY 
 */

const googleStrategy = new GoogleStrategy(
  {
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/callback",
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ googleId: profile.id });
      if (!user) {
        user = await User.create({
          googleId: profile.id,
          email: profile.emails[0].value,
          username: await generateUsername(profile.displayName),
          password: await generatePassword(),
        });
      }
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
);

/**
  GITHUB STRATEGY 
 */

const githubStrategy = new GithubStrategy(
  {
    clientID: process.env.GITHUB_CLIENT_ID,
    clientSecret: process.env.GITHUB_CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/github/callback",
  },
  async (accessToken, refreshToken, profile, done) => {
    try {
      let user = await User.findOne({ githubId: profile.id });
      console.log(profile);
      if (!user) {
        user = await User.create({
          githubId: profile.id,
          email: profile.email,
          username: profile.username,
          password: await generatePassword(),
        });
      }
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  }
);

passport.use(jwtStrategy);
passport.use(facebookStrategy);
passport.use(googleStrategy);
passport.use(githubStrategy);

module.exports = passport;
