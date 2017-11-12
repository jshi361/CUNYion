const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const Group = require('../models').group;

passport.use('group', new LocalStrategy({
    usernameField: "user_id",
    passwordField: "group_id"
  },
  (user_id, group_id, done) => {
    console.log("User " + user_id + " is trying to access group " + group_id);
    Group.findOne({
      where: {
        group_id: group_id,
        user_id: user_id
      },
    }).then((perm) => {
      // debugger;

      if(!perm) {
        return done(null, false, { message: 'You dont have permission to this group' });
      }

      console.log('\n\nYou have the access to this group!!\n\n')
      console.log(perm);
      return done(null, perm, { message: 'Welcome!' });
    });
  })
);


module.export = passport;
