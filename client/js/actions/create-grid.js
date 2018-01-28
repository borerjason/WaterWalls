const createGrid = (response) => {
  let columns = response.input.length + 1;
  let rows = response.input.reduce((a, b) => {
    return a > b ? a : b; 
  }) + 1;
  
  // create Grid
  let display = document.getElementById('display');
  display.style.width = `${columns*30}px`;

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < columns; j += 1) {
      let element = document.createElement('div');
      element.classList.add('grid');
      element.style.width = 700/columns;
      element.style.height = 700/columns;
      document.getElementById('display').appendChild(element);
    }
  }
  const squares = document.getElementById('display').childNodes;
  
  let item = 0;

  for (let i = rows; i > 0; i -= 1) {
    for (let j = 0; j < columns; j += 1) {
      let el = squares[item];
      if (j === 0) {
        el.textContent = i;
      } else {

        if (response.input[j-1] >= i) {
          if(j === response.barriers[0] || j === response.barriers[1]) {
            el.style.backgroundColor = "black"; 
      
          } else {
            el.style.backgroundColor = "grey";
          }
        } else {
          if (response.input[j] + response.water[j] >= i) {
            el.style.backgroundColor = "cyan";
          }
        }
      }
        item += 1;
      }
  }
}
