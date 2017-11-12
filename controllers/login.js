const passport = require('../middlewares/authentication');
const router = require('express').Router();


router.get('/', (req, res) => {
  res.render('user/login');
});

router.post('/', (req, res) => {
  passport.authenticate('user', {
    successRedirect: '/',
    failureRedirect: '/login',
  })(req, res);
});

module.exports = router;
