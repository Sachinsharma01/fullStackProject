var pass = document.getElementById('showPass')
var toggle = document.getElementById('togglePass')
var password = document.getElementById('password')

document.getElementById('hamburger').onclick = function () {
  document.getElementById('ham-menu').classList.toggle('active')
  this.classList.toggle('active')
}

pass.onclick = function () {
  toggle.classList.toggle('active')
  if (password.type == 'text') {
    password.type = 'password'
  } else {
    password.type = 'text'
  }
}
