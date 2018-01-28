const waterWall = require('../logic/water-wall');
const prepWall = require('../logic/prep-walls');

module.exports = {
  post: (req, res) => {
    const numArray = prepWall(req.body.walls);
    const result = waterWall(numArray);
    const payload = {input: numArray, barriers: result[0], water: result[1]};
    res.status(200).send(payload);
  }
}
