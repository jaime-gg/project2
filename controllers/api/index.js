const router = require('express').Router();
const userRoutes = require('./user-routes.js');
const storyRoutes = require('./story-routes');
const commentRoutes = require('./comment-routes');
const coverRoutes = require('./cover-routes');


router.use('/users', userRoutes);
router.use('/stories', storyRoutes);
router.use('/comments', commentRoutes);
router.use('/covers', coverRoutes);


module.exports = router;