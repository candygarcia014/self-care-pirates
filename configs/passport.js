      const passport = require('passport'),
      LocalStrategy = require('passport-local').Strategy,
      db = require('../models'),
      { User } = db;

      passport.use(new LocalStrategy(
        function(email, password, done) {
          console.log(email, password)
          User.findOne({ email }).then((user) => {
            // if (err) { return done(err); }
            if (!user.email) {
              return done(null, false, { message: 'Incorrect email.' });
            }
            // if (!(user.verifyPassword(password))) {
            //   return done(null, false, { message: 'Incorrect password.' });
            // }
            return done(null, user);
          }).catch(err => {
            if (err) { return done(err); }
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