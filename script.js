// Animations

const bottom_img = document.querySelector(".hero_bottom_img");
const arrow = document.querySelector(".arrow");

window.addEventListener("scroll", () => {
      const offset = window.scrollY * -1.2; // можна змінити коефіцієнт
      bottom_img.style.transform = `translateX(${offset}px) translateY(-2px)`;
});

arrow.addEventListener("click", () => {
      const target = document.querySelector("#aboutMe");
      target.scrollIntoView({ behavior: "smooth" });
});
