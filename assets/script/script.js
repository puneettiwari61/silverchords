const mobileMenu = document.querySelector('.click-menu');
const mobileIcon = document.querySelector('.mobile-icon');
const menu = document.querySelector('.menu')
mobileMenu.addEventListener('click',(event) => {
  mobileIcon.classList.toggle('mobile-icon2');
  (mobileIcon.classList.contains('mobile-icon2'))?(menu.classList.add('menu2')):menu.classList.remove('menu2');
})