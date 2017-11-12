const router = require('express').Router();

router.use('/login',require('./login'));
router.use('/signup',require('./signup'));

router.use('/community',require('./community'));
router.use('/posts',require('./posts'));
router.use('/',require('./home'));

module.exports = router;
