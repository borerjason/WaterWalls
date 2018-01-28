const createGrid = (response) => {
  let columns = response.input.length + 1;
  let rows = response.input.reduce((a, b) => {
    return a > b ? a : b; 
  }) + 1;
  
  // create Grid
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

  const squares = document.getElementById('display').childNodes;

  
  let item = rows; 
  
  for (let i = 0; i < rows; i += 1) {
    for (let j = 0; j < columns; j += 1) {
      let el = squares[i].childNodes[j];
      if (j === 0) {
        let text = document.createElement('p');
        el.innerText = item;
      } else {
        if (response.input[j-1] >= item) {
          if(j === response.barriers[0] || j === response.barriers[1]) {
            el.style.backgroundColor = "black"; 
            el.style.outline = "none";
          } else {
            el.style.backgroundColor = "darkgrey";
          }
        } else {
          if (response.input[j-1] + response.water[j-1] >= item) {
            el.style.backgroundColor = "cyan";
          }
        }
      }
    }
    item -= 1;
  }
}
