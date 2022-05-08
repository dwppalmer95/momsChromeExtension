window.addEventListener('DOMContentLoaded', async (event) => {
  const imageContainer = document.getElementById("bg");
  fetch('http://localhost:3000/')
    .then(res => res.blob())
    .then(blob => {
      const imgUrl = URL.createObjectURL(blob);
      console.log(imgUrl);
      imageContainer.style.backgroundImage = `url('${imgUrl}')`;
    });
});
