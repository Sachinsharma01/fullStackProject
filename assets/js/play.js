import { app } from './auth.js'
import {
  getFirestore,
  collection,
  getDocs,
} from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

if (localStorage.getItem('user') == 'undefined') {
  console.log('in user')
  window.location = 'login.html'
}

const code = window.location.search.split('code=')[1]
const db = getFirestore(app)
const quizIdCol = collection(db, 'quiz')
const quizSnapshot = await getDocs(quizIdCol)
const quizObject = quizSnapshot.docs.map((doc) => doc.data())
const myQuiz = quizObject.filter((quiz) => quiz.quizId == code)
const title = myQuiz[0].title
const creator = myQuiz[0].creator

document.getElementById('h1').innerText = title
console.log(myQuiz[0].ques)
Object.entries(myQuiz[0].ques).forEach((i) => {
  console.log(i)
  setTimeout(function () {
    document.getElementById('ques').innerText = `${i[0]} ${i[1].question}`
    const ans = i[1].ans
    const options = i[1].option
    for (let i = 0; i < options.length; i++) {
      document.getElementById('options').innerHTML += `<label for="option${
        i + 1
      }"><input type="radio" name="options" id="option${i + 1}" value="${
        i + 1
      }" onclick="clickedOption(this, ${ans})"/>${options[i]}</label>`
    }
  }, 500)
})

document.querySelectorAll('input[type="radio"]').onchange = function () {
  console.log('hello')
}
