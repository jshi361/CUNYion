const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

passport.use('post', new LocalStrategy({
    usernameField: 'email',
  },
  (email, password, done) => {
    Users.findOne({
      where: { email },
    }).then((user) => {
      debugger;

      if(!user) {
        return done(null, false, { message: 'Invalid Login' });
      }

      if (passwordsMatch(password, user.password) === false) {
        console.log('\n\nerror match\n\n')
        return done(null, false, { message: 'Invalid Login' });
      }

      console.log('\n\ncorrect login!!\n\n')
      return done(null, user, { message: 'Successfully Logged In!' });
    });
  })
);
