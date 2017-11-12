const router = require('express').Router();

router.use('/signup', require('./z_signup'));
router.use('/login', require('./z_userAuth_test'));
router.use('/group', require('./z_groupAuth_test'));
router.use('/post', require('./z_postAuth_test'));
router.use('/comment', require('./z_commentAuth_test'));


router.get('/', (req, res) => {
    res.send('Hello from Express!')
});

module.exports = router;
