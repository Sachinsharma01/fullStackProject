import { app } from './auth.js'
import {
  getFirestore,
  collection,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

document.getElementById('joinBtn').onclick = async function () {
  const code = document.getElementById('gameCode').value
  const db = getFirestore(app)
  const quizIdCol = collection(db, 'quiz')
  const quizSnapshot = await getDocs(quizIdCol)
  const quizObject = quizSnapshot.docs.map((doc) => doc.data())
  const myQuiz = quizObject.filter((quiz) => quiz.quizId == code)
  console.log(myQuiz[0])
}
