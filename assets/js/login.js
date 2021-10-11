import { auth } from './auth.js'
import {
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
  onAuthStateChanged,
} from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js'

const provider = new GoogleAuthProvider()

onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location = 'index.html'
  }
})

document.getElementById('login').onclick = function (e) {
  e.preventDefault()
  console.log('in login function')
  const email = document.getElementById('email').value
  const password = document.getElementById('password').value
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      window.location = 'Explore.html'
    })
    .catch((error) => {
      console.log(error)
    })
}

document.getElementById('g-auth').onclick = function () {
  signInWithRedirect(auth, provider)
    .then(() => {})
    .catch((error) => {
      console.log(error)
    })
}

document.getElementById('showPass').onclick = function () {
  document.getElementById('togglePass').classList.toggle('active')
  if (password.type == 'text') {
    password.type = 'password'
  } else {
    password.type = 'text'
  }
<<<<<<< HEAD
}
=======
}
>>>>>>> e654935ad06e79ed4908dc2ef7f9a937919c88de
