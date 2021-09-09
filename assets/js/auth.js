import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-app.js'
import { getAuth } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js'

const firebaseConfig = {
  apiKey: 'AIzaSyAC7ghHKwzVfmeMimr6p2B6MT5T6NGfg-M',
  authDomain: 'quiz-time-3c16e.firebaseapp.com',
  projectId: 'quiz-time-3c16e',
  storageBucket: 'quiz-time-3c16e.appspot.com',
  messagingSenderId: '737785535898',
  appId: '1:737785535898:web:0ad07bc2b9b7f0ee8d2e23',
}

export const app = initializeApp(firebaseConfig)

export const auth = getAuth(app)
