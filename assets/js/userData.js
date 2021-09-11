import { auth } from './auth.js'
import { onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js'

export const user = onAuthStateChanged(auth, (user) => {
  if (user) {
    return user
  }
  return false
})
