const GamingToggle = document.querySelector(".gaming-button-js");
const MusicToggle = document.querySelector(".music-button-js");
const TechToggle = document.querySelector(".tech-button-js");

const button = [GamingToggle, MusicToggle, TechToggle];

button.forEach((button) => {
  if (button) {
    button.addEventListener("click", () => clickMe(button));
  }
});
function clickMe(button) {
  if (button.classList.contains("is-toggle")) {
    button.classList.remove("is-toggle");
  } else {
    button.classList.add("is-toggle");
  }
}
