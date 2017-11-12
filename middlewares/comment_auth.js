const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Comment = require("../models").comment;

passport.use('comment', new LocalStrategy({
    usernameField: 'user_id',
    passwordField: 'comment_id'
  },
  (user_id, comment_id, done) => {
    Comment.findOne({
      where: {
        comment_id: comment_id,
        user_id: user_id
       },
    }).then((perm) => {
      debugger;

      if(!perm) {
        return done(null, false, { message: 'You dont have access to edit this comment' });
      }

      return done(null, perm, { message: 'You can now edit this comment' });
    });
  })
);


module.export = passport;
