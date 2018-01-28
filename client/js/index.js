const formButton = document.getElementById('search');
const formInput = document.getElementById('entry');
const display = document.getElementById('display');

formButton.addEventListener("click", (event) => {
  event.preventDefault();
  display.innerHTML = '';
  const input = formInput.value;
  fetchBlocks(input)
    .then((response) => {
      console.log('response', response);
      createGrid(response);
    })
  formInput.value = "";
});
