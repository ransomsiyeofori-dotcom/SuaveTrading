// toggle menu //
const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

let open = false;

menu.addEventListener("click", () => {
  open = !open;

  nav.classList.toggle("active");

  // change icon
  menu.textContent = open ? "close" : "menu";
});