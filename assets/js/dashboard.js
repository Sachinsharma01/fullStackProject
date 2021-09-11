// import { auth, app } from './auth.js'
// import {
//   signOut,
//   onAuthStateChanged,
// } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-auth.js'
// import {
//   getFirestore,
//   collection,
//   getDocs,
// } from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

// document.getElementById('logout').onclick = function () {
//   console.log('button clicked')
//   signOut(auth)
//     .then(() => {
//       window.location = 'index.html'
//       console.log('logout')
//     })
//     .catch((error) => {
//       console.log(error)
//     })
// }
// const db = getFirestore(app)
// const quizIdCol = collection(db, 'quizId')
// const citySnapshot = await getDocs(quizIdCol)
// const cityList = citySnapshot.docs.map((doc) => doc.data())
// console.log(cityList)

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     const uid = user.uid
//     console.log(user)
//   } else {
//   }
// })
