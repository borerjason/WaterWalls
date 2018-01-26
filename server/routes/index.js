const router = require('express').Router();
const waterWall = require('../actions');

router.post('/waterwall', waterWall.post);

module.exports = router;
