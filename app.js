const menu = document.querySelector('#mobile-menu');
const menuLink = document.querySelector('.navbar__menu');

menu.addEventListener('click', () =>{
  menu.classList.toggle('is-active');
  menuLink.classList.toggle('active');
});

document.querySelectorAll('.navbar__links').forEach(n => n.
  addEventListener ('click', function(){
    menu.classList.remove('is-active');
    menuLink.classList.remove('active');
  }))