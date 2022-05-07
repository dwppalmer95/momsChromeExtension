window.addEventListener('DOMContentLoaded', async (event) => {
  const imageContainer = document.getElementById("bg");
  fetch('http://localhost:3000/')
    .then(res => res.json())
    .then(data => {
      console.log(data.imgPath);
      imageContainer.style.backgroundImage = `url('${data.imgPath}')`;
    });
});
