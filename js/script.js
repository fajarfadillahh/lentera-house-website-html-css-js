// ===== SHOW HEADER MENU =====
const showMenu = (menuId, toggleId) => {
  const menu = document.getElementById(menuId);
  const toggle = document.getElementById(toggleId);

  if (menu && toggle) {
    toggle.onclick = () => {
      menu.classList.toggle("show-menu");
    };
  }
};
showMenu("nav-menu", "nav-toggle");

// ===== LINK ACTIVE =====
const navLink = document.querySelectorAll(".nav__menu-link");
function linkActive() {
  navLink.forEach((e) => e.classList.remove("link-active"));
  this.classList.add("link-active");
}
navLink.forEach((e) => e.addEventListener("click", linkActive));

// ===== STICKY NAVBAR =====
const scrollY = window.pageYOffset;
function stickyNavbar() {
  const header = document.getElementById("header");

  this.scrollY >= 10
    ? header.classList.add("sticky-navbar")
    : header.classList.remove("sticky-navbar");
}
window.addEventListener("scroll", stickyNavbar);
