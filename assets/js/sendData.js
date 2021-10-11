import { app } from './auth.js'
import {
  getFirestore,
  addDoc,
  collection,
} from 'https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js'

const saveData = document.getElementById('save')
const finishData = document.getElementById('finish')
let questions = {}
let itemNum = 1

const save = () => {
  const quesCurrent = document.getElementById('quesCurrent').value
  const currentOptionsNum = document.getElementById('addOption').value
  let currentOption = []
  const currentAns = document.getElementById('answer').value
  for (let i = 0; i < currentOptionsNum; i++) {
    currentOption.push(
      document.getElementById('option' + parseInt(i + 1)).value
    )
  }
  let quesNum = `Q${itemNum}`
  questions = {
    ...questions,
    ...addQues(quesNum, currentAns, currentOption, quesCurrent),
  }
  itemNum++
  console.log(questions)
  document.getElementById('nextButton').disabled = false
  if (document.getElementById('nextButton').style.display == 'none') {
    finishData.disabled = false
  }
  saveData.disabled = true
}

const finish = async () => {
  const db = getFirestore(app)
  const Id = idGenerator()
  try {
    await addDoc(collection(db, 'quiz'), {
      ques: { ...questions },
      quizId: Id,
      title: localStorage.getItem('title'),
      creator: localStorage.getItem('user'),
    })
  } catch (r) {
    console.log(r)
  }
  document.getElementById(
    'questionPanel'
  ).innerHTML = `<h3>The Title of the Quiz is: <span>${localStorage.getItem(
    'title'
  )}</span></h3><h1>Your Quiz ID is: ${Id}</h1>`
  localStorage.removeItem('title')
  localStorage.removeItem('user')
}

saveData.addEventListener('click', save)
finishData.addEventListener('click', finish)

const addQues = (quesNum, currentAns, currentOption, quesCurrent) => {
  return {
    [quesNum]: {
      ans: currentAns,
      option: currentOption,
      question: quesCurrent,
    },
  }
}

const idGenerator = () => {
  return Math.floor(1000 + Math.random() * 9000)
}
