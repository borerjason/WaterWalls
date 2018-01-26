const router = require('express').Router();
const waterWall = require('../actions');

router.post('/waterwalls', waterWall.post);

module.exports = router;
