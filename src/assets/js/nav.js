var body = document.querySelector("body");
const nav = document.querySelector("#navbar")
const hamburgMenu = document.querySelector("#hamburgermenu");

hamburgMenu.addEventListener('click', function() {
  nav.classList.toggle('hidden')
});

// document.addEventListener('DOMContentLoaded', function () {
//     //Toggle mobile menu visibility
//     const hamburgerMenu = document.getElementById('toggle');
//     const navbar = document.getElementById('navbar');
  
//     if (hamburgerMenu && navbar) {
//       hamburgerMenu.addEventListener('click', function () {
//         navbar.classList.toggle('hidden');
//       });
//     }

//     // Handle dropdown toggle for each dropdown button
//     const dropdownButtons = document.querySelectorAll('[data-dropdown-toggle]');

//     dropdownButtons.forEach(button => {
//       button.addEventListener('click', function () {
//         const targetDropdown = document.querySelector(this.getAttribute('data-dropdown-toggle'));
//         if (targetDropdown) {
//           targetDropdown.classList.toggle('hidden');
//         }
//     });
//   });
// });