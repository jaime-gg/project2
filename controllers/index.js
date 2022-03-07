const router = require('express').Router();
const apiRoutes = require('./api');
const homepageRoutes = require('./homepage-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const authorRoutes = require('./author-routes.js');


router.use('/api', apiRoutes);
router.use('/profile', dashboardRoutes);
router.use('/authors', authorRoutes);
router.use('/', homepageRoutes);


// FOR ANY FALSE ENDPOINTS
router.use((req, res) => {
  res.status(404).end();
});


module.exports = router;