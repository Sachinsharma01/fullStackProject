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

let quesQuesHTML = []

const code = window.location.search.split('code=')[1]
const db = getFirestore(app)
const quizIdCol = collection(db, 'quiz')
const quizSnapshot = await getDocs(quizIdCol)
const quizObject = quizSnapshot.docs.map((doc) => doc.data())
const myQuiz = quizObject.filter((quiz) => quiz.quizId == code)
const title = myQuiz[0].title

const delay = (ms) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(ms)
    }, ms)
  })
}

document.getElementById('h1').innerText = title
Object.entries(myQuiz[0].ques).forEach((i) => {
  console.log(i)
  let optionsHTML = ''
  const options = i[1].option
  for (let j = 0; j < options.length; j++) {
    optionsHTML += `<label for="option${
      j + 1
    }"><input type="radio" name="options" value="${
      j + 1
    }" onclick="clickedOption(this, ${i[1].ans})"/>${options[j]}</label>`
  }
  quesQuesHTML.push({
    ques: `${i[1].question}`,
    optionsHTML: optionsHTML,
  })
})

console.log(quesQuesHTML)

for (let i = 0; i < quesQuesHTML.length; i++) {
  console.log(i)
  document.getElementById('ques').innerText = quesQuesHTML[i].ques
  document.getElementById('options').innerHTML = quesQuesHTML[i].optionsHTML
  await delay(5000)
}
