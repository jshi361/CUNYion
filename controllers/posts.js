const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('posts/index');
});
router.get('/new', (req, res) => {
  res.render('posts/new');
});

router.get('/edit', (req, res) => {
  res.render('posts/edit');
});


router.get('/single', (req, res) => {
  res.render('posts/edit');
});

module.exports = router;
