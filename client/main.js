window.addEventListener('DOMContentLoaded', async (event) => {
  fetch('http://localhost:3000/', { mode: 'no-cors'})
    .then(res => console.log(res))
    // .then(data => console.log(data))
  // const imageContainer = document.getElementById("bg");
  // imageContainer.style.backgroundImage = "url('assets/3.jpg')";
});
