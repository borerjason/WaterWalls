const waterWalls = (walls) => {
  let rainRecord = {left: null, right: null, rain: 0};
  let currentRain = 0;
  let wallLeft = 1;
  
  let left = [];
  let right = [];

  left.push(walls[0]);
  right[walls.length - 1] = walls[walls.length - 1];

  for (let i = 1; i < walls.length; i += 1) {
    left[i] = (Math.max(left[i-1], walls[i]));
  }

  for (let i = walls.length - 2; i >= 0; i -= 1) {
    right[i] = (Math.max(right[i+1], walls[i]));
  }

  let water = ['x'];
  
  for (let i = 1; i < walls.length; i += 1) {
    if (left[i] > walls[i] && right[i] > walls[i]) {
      water[i] = Math.min(left[i], right[i]) - walls[i];
    } else {
      water[i] = 'x';
    }
  }

  for (let j = 1; j < water.length; j += 1) {
    if (water[j] !== 'x') {
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
  return [rainRecord.left, rainRecord.right, rainRecord.rain]
  
}

console.log(waterWalls([5, 3, 7, 2, 6, 4, 5, 9, 1, 2]));

module.exports = waterWalls;
