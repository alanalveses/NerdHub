// ========   Close menu with scroll =====================
const menuToggleCheckbox = document.getElementById('menu-toggle');

window.addEventListener('scroll', () => {
  if (menuToggleCheckbox.checked) {
    menuToggleCheckbox.checked = false;
  }
});
