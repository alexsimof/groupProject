let btn = document.querySelector('.header-burger')
let menu = document.querySelector('.header-burger-menu')
let btnClose = document.querySelector('.header-burger-close')
btn.onclick = function (e) {
  e.preventDefault();
  menu.classList.add('show')
  btn.classList.add('header-dark')
}

btnClose.onclick = function (e) {
  e.preventDefault();
  menu.classList.remove('show')
  btn.classList.remove('header-dark')
}