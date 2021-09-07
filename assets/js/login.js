import { auth } from './auth.js'
import { signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js'

document.getElementById('login').onclick = function login(e) {
  e.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  signInWithEmailAndPassword(auth, email, password)
    .then((credentials) => {
      if (credentials) {
        localStorage.setItem('user', credentials)
        window.location.href = './dashboard.html'
      }
    })
    .catch((error) => {
      console.log(error)
    })
}
