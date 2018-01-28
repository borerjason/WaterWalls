const createGrid = (response) => {
  let columns = response.input.length + 1;
  let rows = response.input.reduce((a, b) => {
    return a > b ? a : b; 
  }) + 1;

  let display = document.getElementById('display');
  display.style.width = `${columns*50}px`;

  for (let i = 0; i < rows; i += 1) {
    let row = document.createElement('div');
    row.classList.add('row');
    document.getElementById('display').appendChild(row);
    for (let j = 0; j < columns; j += 1) {
      let element = document.createElement('div');
      element.classList.add('grid');
      document.getElementsByClassName('row')[i].appendChild(element);
    }
  }
  fillGrid(response, columns, rows);
  
}
