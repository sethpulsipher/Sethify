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
  