// swiper slider
const swiper = new Swiper(".swiper", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 3000,
  },
});

// aos library
AOS.init();

// Loader delete
function removeLoader() {
  let content = document.getElementById("content");
  setTimeout(() => {
    let loader = document.getElementById("loader");

    // hide the loader
    loader.style = "display: none;";
    content.style = "display: block";
    c.clearRect(0, 0, canvas.width, canvas.height);
  }, 800);
  content.style = "display: none";
}
