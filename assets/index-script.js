document.addEventListener("contextmenu", function (e) {
  e.preventDefault();
});

const flipCard = document.querySelector(".flip-card");
flipCard.addEventListener("click", function () {
  flipCard.classList.add("active");
});