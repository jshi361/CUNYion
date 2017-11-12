const router = require('express').Router();

router.use('/login',require('./login'));
router.use('/signup',require('./signup'));
router.use('/group',require('./z_groupAuth_test'));
router.use('/post',require('./z_postAuth_test'));
router.use('/comment',require('./z_commentAuth_test'));
router.use('/community',require('./community'));
router.use('/',require('./home'));

module.exports = router;
