const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

var path = require('path');
var groupAuth = require( path.resolve( __dirname, "./group_auth.js" ) );
var postAuth = require(path.resolve(__dirname, "./post_auth.js"));
var commentAuth = require(path.resolve(__dirname, "./comment_auth.js"));

const User = require('../models').user;

passport.use('user', new LocalStrategy({
    usernameField: "email",
    passwordField: "password"
  },
  (email, password, done) => {
    console.log("User " + email + " is trying to login using password " + password);
    User.findOne({
      where: {
        email: email,
        password: password
      },
    }).then((user) => {
      // debugger;

      if(!user) {
        return done(null, false, { message: 'Invalid login' });
      }

      console.log('\n\nYou have logined!!\n\n')
      console.log(user);
      return done(null, user, { message: 'Welcome!' });
    });
  })
);

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id).then((user) => {
    if (!user) {
      return done(null, false);
    }

    return done(null, user);
  });
});


// passport.redirectIfLoggedIn = (route) =>
//   (req, res, next) => (req.user ? res.redirect(route) : next());
//
// passport.redirectIfNotLoggedIn = (route) =>
//   (req, res, next) => (req.user ? next() : res.redirect(route));

module.exports = passport;
