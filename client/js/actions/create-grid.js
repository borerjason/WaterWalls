const createGrid = (input) => {
  let columns = input.length;
  let rows = input.reduce((a, b) => {
    return a > b ? a : b; 
  }) + 1;
  
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
}