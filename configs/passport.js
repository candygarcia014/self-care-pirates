const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      db = require('../models'),
      { User } = db;

      passport.use(new LocalStrategy(
        function(username, password, done) {
          User.findOne({ username }, async (err, user) => {
            if (err) { return done(err); }
            if (!user) {
              return done(null, false, { message: 'Incorrect username.' });
            }
            if (!(await user.verifyPassword(password))) {
              return done(null, false, { message: 'Incorrect password.' });
            }
            return done(null, user);
          });
        }
      ));

      passport.serializeUser(function(user, done) {
        done(null, user.id);
      });
      
      passport.deserializeUser(function(id, done) {
        User.findById(id, function(err, user) {
          done(err, user);
        });
      });
module.exports = passport;