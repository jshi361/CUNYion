const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('user/community');
});

module.exports = router;
