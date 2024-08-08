// Author: Ho Van Quoc

const topMenu = document.getElementById('cf-top-menu');
const topToggleMenuIcon = document.getElementById('cf-toggle-top-menu-icon');

document.addEventListener('click', (e) => {
   if (topToggleMenuIcon.contains(e.target)) {
      //Click to Toggle top menu icon
      topMenu.classList.toggle('cf-topmenu-expanded')
      topMenu.classList.toggle('hidden')

   } else {
      //Click outside from Toggle top menu icon
      if (topMenu.classList.contains('cf-topmenu-expanded')) {
         topMenu.classList.remove('cf-topmenu-expanded')
         topMenu.classList.add('hidden')
      }
   }
})
