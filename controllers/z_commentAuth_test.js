const passport = require('../middlewares/authentication');
const router = require('express').Router();

router.get('/permmited', (req, res) => {
  res.send('allowed to edit comment');
});

router.get('/notpermmited', (req, res) => {
  res.send('not allow to edit comment');
});

router.post('/', (req, res, next) => {
  passport.authenticate('comment', {
    successRedirect: '/comment/permmited',
    failureRedirect: '/comment/notpermmited',
    session: false
  })(req, res, next);
});

module.exports = router;
