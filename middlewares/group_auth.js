const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use('group', new LocalStrategy({
    usernameField: 'email',
  },
  (group_id, user_id, done) => {
    Group.findAll({
      where: {
        group_id: group_id,
        user_id: user_id
      },
    }).then((perm) => {
      debugger;

      if(!perm) {
        return done(null, false, { message: 'You dont have permission to this group' });
      }

      console.log('\n\nYou have the access to this group!!\n\n')
      console.log(perm);
      return done(null, perm, { message: 'Welcome!' });
    });
  })
);
