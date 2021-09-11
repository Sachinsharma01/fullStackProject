import { auth } from './auth.js'
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js'

const provider = new GoogleAuthProvider()

document.getElementById('login').onclick = function (e) {
  e.preventDefault()
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  signInWithEmailAndPassword(auth, email, password)
    .then((credentials) => {})
    .catch((error) => {
      console.log(error)
    })
}

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location = 'dashboard.html'
  }
})

document.getElementById('g-auth').onclick = function () {
  signInWithRedirect(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result)
      const token = credential.accessToken
      const user = result.user
    })
    .catch((error) => {
      console.log(error)
    })
}
