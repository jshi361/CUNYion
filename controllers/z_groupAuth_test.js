const passport = require('../middlewares/authentication');
const router = require('express').Router();

router.get('/permmited', (req, res) => {
  res.send('allowed to enter group');
});

router.get('/notpermmited', (req, res) => {
  res.send('not allow to enter group');
});

router.post('/', (req, res, next) => {
  passport.authenticate('group', {
    successRedirect: '/group/permmited',
    failureRedirect: '/group/notpermmited',
    session: false
  })(req, res, next);
});

module.exports = router;
