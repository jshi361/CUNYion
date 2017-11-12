const passport = require('../middlewares/authentication');
const router = require('express').Router();

router.get('/permmited', (req, res) => {
  res.send('allowed to edit this post');
});

router.get('/notpermmited', (req, res) => {
  res.send('not allow to edit this post');
});

router.post('/', (req, res, next) => {
  passport.authenticate('post', {
    successRedirect: '/post/permmited',
    failureRedirect: '/post/notpermmited',
    session: false
  })(req, res, next);
});

module.exports = router;
