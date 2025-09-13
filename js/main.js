<script>
const menuBtn = document.getElementById('menu-icon');
const closeBtn = document.getElementById('close-menu');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('show');
});

closeBtn.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
});

// Optional: close menu when clicking a link
function closeMenu() {
  mobileMenu.classList.remove('show');
}
</script>
