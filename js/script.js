let btn = document.querySelector('.header-burger')
let menu = document.querySelector('.header-burger-menu')
let btnClose = document.querySelector('.header-burger-close')
let dark = document.querySelector('.header-wrapper')
btn.onclick = function (e) {
  e.preventDefault();
  menu.classList.add('show')
  dark.classList.add('header-dark')
}

btnClose.onclick = function (e) {
  e.preventDefault();
  menu.classList.remove('show')
  dark.classList.remove('header-dark')
}