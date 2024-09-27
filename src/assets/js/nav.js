document.addEventListener('DOMContentLoaded', function () {
    // Toggle mobile menu visibility
    const menuToggleButton = document.getElementById('hs-navbar-alignment-collapse');
    const mobileMenu = document.getElementById('hs-navbar-alignment');
  
    if (menuToggleButton && mobileMenu) {
      menuToggleButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('hidden');
      });
    }

    // Handle dropdown toggle for each dropdown button
    const dropdownButtons = document.querySelectorAll('[data-dropdown-toggle]');

    dropdownButtons.forEach(button => {
      button.addEventListener('click', function () {
        const targetDropdown = document.querySelector(this.getAttribute('data-dropdown-toggle'));
        if (targetDropdown) {
          targetDropdown.classList.toggle('hidden');
        }
    });
  });
});

function onToggleMenu(e) {
  e.name = e.name === 'menu' ? 'close' : 'menu'
}
// This script shrinks the header after scrolling 100px
/*
document.addEventListener('scroll', () => {
  const scroll = window.scrollY;
 
 if (scroll >= 100) {
     document.querySelector('header').classList.add('max-w-[80vh]', 'place-self-center');
 } else {
     document.querySelector('header').classList.remove('max-w-[80vh]', 'place-self-center');
 }
});
*/

  