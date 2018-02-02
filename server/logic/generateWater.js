const generateWater = (walls, left, right) => {
  const water = [null];

  for (let i = 1; i < walls.length; i += 1) {
    if (left[i] > walls[i] && right[i] > walls[i]) {
      water[i] = Math.min(left[i], right[i]) - walls[i];
    } else {
      water[i] = null;
    }
  }
  return water;
};

module.exports = generateWater;
