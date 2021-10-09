const router = require('express').Router();

const workoutRoutes = require('./workoutRoutes');
const homeRoutes = require('./homeRoutes');

router.use('/', homeRoutes);
router.use('/', workoutRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

module.exports = router;