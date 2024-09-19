const scriptURL =
  "https://script.google.com/macros/s/AKfycbxnWrG-v7-7X0mdmXEWqbU99JX9C55t54tthzFHJ3R4nY66dwMhOrnQJf5FZCRkxbZ8iw/exec";
const form = document.forms["submit-to-google-sheet"];

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => console.log("Success!", response))
    .catch((error) => console.error("Error!", error.message));
});
