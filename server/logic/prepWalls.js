const prepWalls = (integerString) => {
  const wallsArray = integerString.split(',');
  const numArray = [];
  wallsArray.forEach((el) => {
    numArray.push(parseInt(el, 10));
  });
  return numArray;
};

module.exports = prepWalls;
