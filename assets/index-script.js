const wrapper = document.querySelector(".wrapper");
wrapper.addEventListener("click", function () {
  wrapper.classList.add("active");
});

const flipCard = document.querySelector(".flip-card");
flipCard.addEventListener("click", function () {
  flipCard.classList.add("active");
});
