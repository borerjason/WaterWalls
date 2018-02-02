const createGrid = (response) => {
  const columns = response.input.length + 1;
  const rows = response.input.reduce((a, b) => (
    a > b ? a : b)) + 1;
  const display = document.getElementById('display');
  display.style.width = `${columns * 50}px`;

  for (let i = 0; i < rows; i += 1) {
    const row = document.createElement('div');
    row.classList.add('row');
    document.getElementById('display').appendChild(row);
    for (let j = 0; j < columns; j += 1) {
      const element = document.createElement('div');
      element.classList.add('grid');
      document.getElementsByClassName('row')[i].appendChild(element);
    }
  }
  fillGrid(response, columns, rows);
};
