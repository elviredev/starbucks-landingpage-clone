const btn = document.getElementById('menu-btn')
const navMobile = document.getElementById('menu-mobile')

btn.addEventListener('click', navToggle)

function navToggle() {
  btn.classList.toggle('open')
  navMobile.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll')
}
