const JwtStrategy = require("passport-jwt").Strategy;
const ExtractJwt = require("passport-jwt").ExtractJwt;
const User = require("../models/userModel");

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretKey: process.env.JWT_SECRET,
};

const strategy = new JwtStrategy(jwtOptions, async (payload, done) => {
  try {
    const user = await User.findOne({ _id: payload.sub }).exec();

    if (!user) {
      return done(null, false);
    } else return done(null, user);
  } catch (err) {
    return done(err, null);
  }
});

passport.use(strategy);
