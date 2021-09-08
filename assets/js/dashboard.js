import { auth } from './auth.js'
import { signOut } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js'

document.getElementById('logout').onclick = function () {
  console.log('button clicked')
  signOut(auth)
    .then(() => {
      window.location = 'index.html'
      console.log('logout')
    })
    .catch((error) => {
      console.log(error)
    })
}
