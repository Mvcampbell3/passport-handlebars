const passport = require("passport");
const LocalStrategy = require("passport-local");

const User = require("../models/User");

passport.use(new LocalStrategy({ usernameField: "email" }, function(email, password, done) {
  User.findOne({ email })
    .then(dbUser => {
      if (!dbUser) {
        return done(null, false, { msg: "Email not registered" });
      }

      const match = dbUser.validPassword(password);
      
      if (!match) {
        return done(null, false, {msg: "Password is incorrect"})
      } else {
        return done(null, dbUser)
      }
    })
}))

passport.serializeUser(function(user, cb) {
  cb(null, user);
});

passport.deserializeUser(function(obj, cb) {
  cb(null, obj);
});

module.exports = passport;