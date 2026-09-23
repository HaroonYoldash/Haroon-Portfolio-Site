function toggleMenu() {
  const menu = document.getElementById("mobileMenu");
  const btn = document.querySelector(".hamburger-btn");
  if (menu && btn) {
    menu.classList.toggle("open");
    btn.classList.toggle("open");
  }
}