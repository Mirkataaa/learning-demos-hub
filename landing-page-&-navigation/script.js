const container = document.querySelector(".container");


const menuIcon = document.querySelector(".menu-icon");
menuIcon.addEventListener("click", () => {
  menuIcon.classList.toggle("active");
  container.classList.toggle("navigate");
});
