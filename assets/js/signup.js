import { auth } from './auth.js'
import { createUserWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js'

document.getElementById('signup').onclick = function login(e) {
  e.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  const confirm_password = document.getElementById('confirm-password').value
  if (confirm_password == password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((credentials) => {
        if (credentials) {
          window.location.href = './login.html'
        }
      })
      .catch((error) => {
        alert(error)
      })
  } else {
    alert('Password do not match')
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
