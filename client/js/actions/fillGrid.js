const fillGrid = (response, columns, rows) => {
  const squares = document.getElementById('display').childNodes;
  let item = rows;

  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < columns; j += 1) {
      const el = squares[i].childNodes[j];
      if (j === 0) {
        el.innerText = item;
      } else {
        if (response.input[j - 1] >= item) {
          if (j === response.barriers[0] || j === response.barriers[1]) {
            el.style.backgroundColor = 'black';
            el.style.outline = 'none';
          } else {
            el.style.backgroundColor = 'darkgrey';
          }
        } else {
          if (response.input[j - 1] + response.water[j - 1] >= item) {
            el.style.backgroundColor = 'cyan';
          }
        }
      }
    }
    item -= 1;
  }
};
