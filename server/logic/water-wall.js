const generateMaxLeft = (walls) => {
  let left = [walls[0]];
  for (let i = 1; i < walls.length; i += 1) {
    left[i] = (Math.max(left[i - 1], walls[i]));
  }
  return left;
};

const generateMaxRight = (walls) => {
  let right = [];
  right[walls.length - 1] = walls[walls.length - 1];

  for (let i = walls.length - 2; i >= 0; i -= 1) {
    right[i] = (Math.max(right[i + 1], walls[i]));
  }
  return right;
};

const generateWater = (walls, left, right) => {
  let water = [null];

  for (let i = 1; i < walls.length; i += 1) {
    if (left[i] > walls[i] && right[i] > walls[i]) {
      water[i] = Math.min(left[i], right[i]) - walls[i];
    } else {
      water[i] = null;
    }
  }
  return water;
}

const waterWalls = (walls) => {
  let left = generateMaxLeft(walls);
  let right = generateMaxRight(walls);
  let water = generateWater(walls, left, right);

  let rainRecord = { left: null, right: null, rain: 0 };
  let currentRain = 0;
  let wallLeft = 1;

  for (let j = 1; j < water.length; j += 1) {
    if (water[j]) {
      currentRain += water[j];
    } else {
      if (currentRain > rainRecord.rain) {
        rainRecord.rain = currentRain;
        rainRecord.left = wallLeft;
        rainRecord.right = j + 1;
        wallLeft = j + 1;
        currentRain = 0;
      } else {
        wallLeft = j + 1;
        currentRain = 0;
      }
    }
  }
  return [[rainRecord.left, rainRecord.right, rainRecord.rain], water];

}

module.exports = waterWalls;
