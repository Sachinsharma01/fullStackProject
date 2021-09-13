import { auth } from './auth.js'
import {
  onAuthStateChanged,
  signOut,
} from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js'

var pass = document.getElementById('showPass')
var toggle = document.getElementById('togglePass')
var password = document.getElementById('password')
var logout = document.getElementById('logOut')

onAuthStateChanged(auth, (user) => {
  if (user) {
    document.getElementById('loginDiv').style.display = 'none'
    document.getElementById('userEmail').style.display = 'flex'
    document.getElementById('userEmail').innerText = user.email
  } else {
    document.getElementById('loginDiv').style.display = 'flex'
    document.getElementById('userEmail').style.display = 'none'
  }
})

logout.onclick = function () {
  console.log('clicked')
  signOut(auth)
    .then(() => {
      console.log('logout')
      window.location = 'index.html'
    })
    .catch((error) => {
      console.log(error)
    })
}

document.getElementById('hamburger').onclick = function () {
  document.getElementById('ham-menu').classList.toggle('active')
  this.classList.toggle('active')
}
