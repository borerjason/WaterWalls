const waterWall = require('../logic/water-wall');

module.exports = {
  post: (req, res) => {
    // send array to water Wall function
    res.status(200).send('Data');
  }
}