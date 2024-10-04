slideIndex = 0;

function showSlides() {
  const slides = document.querySelectorAll('.slide');
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  } else if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  const offset = -slideIndex * 100;
  document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;
}

function nextSlide() {
  slideIndex++;
  showSlides();
}

function prevSlide() {
  slideIndex--;
  showSlides();
}

// Automatically advance slides every 3 seconds
setInterval(nextSlide, 3000);

// Show initial slides
showSlides();

function função() {
  window.location = "/graficos/função.html";
}
function linear(){
  window.location = "/graficos/linear.html"
}
function barra(){
  window.location = "/graficos/barras.html"
}
function circular(){
  window.location = "/graficos/circular.html"
}
const cardsContainer = document.querySelector(".container");

cardsContainer.addEventListener("click", (e) => {
  const target = e.target.closest(".card");

  if (!target) return;

  cardsContainer.querySelectorAll(".card").forEach((card) => {
    card.classList.remove("active");
  });

  target.classList.add("active");
});