const generateMaxLeftWall = require('./generateMaxLeftWall');
const generateMaxRightWall = require('./generateMaxRightWall');
const generateWater = require('./generateWater');

const waterWalls = (walls) => {
  const maxLeft = generateMaxLeftWall(walls);
  const maxRight = generateMaxRightWall(walls);
  const water = generateWater(walls, maxLeft, maxRight);

  const rainRecord = { left: null, right: null, rain: 0 };
  let currentRain = 0;

  for (let firstWall = 0; firstWall < water.length; firstWall += 1) {
    let secondWall = firstWall + 1;

    while (water[secondWall] && secondWall < water.length) {
      currentRain += water[secondWall];
      secondWall += 1;
    }

    if (currentRain > rainRecord.rain && currentRain !== 0) {
      rainRecord.rain = currentRain;
      rainRecord.left = firstWall + 1;
      rainRecord.right = secondWall + 1;
    }
    firstWall = secondWall - 1;
    currentRain = 0;
  }
  return [[rainRecord.left, rainRecord.right, rainRecord.rain], water];
};

module.exports = waterWalls;
