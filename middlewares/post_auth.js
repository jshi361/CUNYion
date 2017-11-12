const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Post = require('../models').post;

passport.use('post', new LocalStrategy({
    usernameField: "user_id",
    passwordField: "post_id"
  },
  (user_id, post_id, done) => {
    console.log("User " + user_id + " is trying to edit post " + post_id);
    Post.findOne({
      where: {
        post_id: post_id,
        user_id: user_id
      },
    }).then((perm) => {
      // debugger;

      if(!perm) {
        return done(null, false, { message: 'You dont have permission to edit this post' });
      }

      console.log('\n\nYou have the access to edit this post!!\n\n');
      console.log(perm);
      return done(null, perm, { message: 'Welcome!' });
    });
  })
);


module.export = passport;
