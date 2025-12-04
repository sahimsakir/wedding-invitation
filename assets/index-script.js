document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

// onclick .front then add class active to .flip-card
const flipCard = document.querySelector(".flip-card");
flipCard.addEventListener("click", function () {
  flipCard.classList.add("active");
});