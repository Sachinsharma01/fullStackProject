var pass = document.getElementById('showPass')
var toggle = document.getElementById('togglePass')
var password = document.getElementById('password')

document.getElementById('hamburger').onclick = function () {
  document.getElementById('ham-menu').classList.toggle('active')
  this.classList.toggle('active')
  if (toggle.style.zIndex == 0) {
    toggle.style.zIndex = -1
  } else {
    toggle.style.zIndex = 0
  }
}

pass.onclick = function () {
  toggle.classList.toggle('active')
  if (password.type == 'text') {
    password.type = 'password'
  } else {
    password.type = 'text'
  }
}
