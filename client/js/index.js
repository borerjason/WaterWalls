const formButton = document.getElementById('search');
const formInput = document.getElementById('entry');

formButton.addEventListener("click", (event) => {
  event.preventDefault();
  const input = formInput.value;
  fetchBlocks(input)
    .then((response) => {
      console.log('response', response);
    })
  formInput.value = "";
});
