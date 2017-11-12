const passport = require('../middlewares/authentication');
const router = require('express').Router();

router.get('/permmited', (req, res) => {
  res.send('successful login');
});

router.get('/notpermmited', (req, res) => {
  res.send('fail to login');
});

router.post('/', (req, res, next) => {
  passport.authenticate('user', {
    successRedirect: '/login/permmited',
    failureRedirect: '/login/notpermmited',
    session: false
  })(req, res, next);
});

module.exports = router;
