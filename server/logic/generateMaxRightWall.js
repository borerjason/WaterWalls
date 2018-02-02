const generateMaxRightWall = (walls) => {
  const right = [];
  right[walls.length - 1] = walls[walls.length - 1];

  for (let i = walls.length - 2; i >= 0; i -= 1) {
    right[i] = (Math.max(right[i + 1], walls[i]));
  }
  return right;
};

module.exports = generateMaxRightWall;
