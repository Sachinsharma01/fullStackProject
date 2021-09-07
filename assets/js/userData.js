import { auth } from './assets/js/auth.js'
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js'

const auth = getAuth(app)
onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid
    console.log(user)
  } else {
  }
})
