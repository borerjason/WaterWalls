const prepWalls = (integerString) => {
   wallsArray = integerString.split(',')
   let numArray = [];
   wallsArray.forEach((el) => {
     numArray.push(parseInt(el));
   });
   return numArray;
}

module.exports = prepWalls;
