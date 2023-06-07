const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const iframeMaps = document.querySelectorAll("iframe");
let currentSelected = 0;

prevBtn.addEventListener("click", function () {
  iframeMaps[currentSelected].classList.remove("active");
  currentSelected--;
  iframeMaps[currentSelected].classList.add("active");
  nextBtn.disabled = false;

  if (currentSelected === 0) {
    prevBtn.disabled = true;
  }
});

nextBtn.addEventListener("click", function () {
  iframeMaps[currentSelected].classList.remove("active");
  currentSelected++;
  iframeMaps[currentSelected].classList.add("active");
  prevBtn.disabled = false;

  if (iframeMaps.length === currentSelected + 1) {
    nextBtn.disabled = true;
  }
});
