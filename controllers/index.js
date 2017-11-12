const router = require('express').Router();

router.use('/login',require('./login'));
router.use('/signup',require('./signup'));

<<<<<<< HEAD
=======
router.use('/community',require('./community'));
router.use('/posts',require('./posts'));
router.use('/',require('./home'));

>>>>>>> 211e6525347152f3ac0d68ae0164f4fcf6452b86
module.exports = router;
