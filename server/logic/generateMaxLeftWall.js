const generateMaxLeftWall = (walls) => {
  const left = [walls[0]];
  for (let i = 1; i < walls.length; i += 1) {
    left[i] = (Math.max(left[i - 1], walls[i]));
  }
  return left;
};

module.exports = generateMaxLeftWall;
