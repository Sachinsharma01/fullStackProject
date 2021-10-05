import { app } from "./auth.js";
import {
  getFirestore,
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.0.1/firebase-firestore.js";

if (localStorage.getItem("user") == "undefined") {
  console.log("in user");
  window.location = "login.html";
}

let j = 0;

const code = window.location.search.split("code=")[1];
const db = getFirestore(app);
const quizIdCol = collection(db, "quiz");
const quizSnapshot = await getDocs(quizIdCol);
const quizObject = quizSnapshot.docs.map((doc) => doc.data());
const myQuiz = quizObject.filter((quiz) => quiz.quizId == code);
const title = myQuiz[0].title;
const creator = myQuiz[0].creator;

const delay = (ms, create) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Done waiting");
      resolve(ms);
    }, ms);
  });
};

document.getElementById("h1").innerText = title;
// document.getElementById("score").innerText = score;
Object.entries(myQuiz[0].ques).forEach(async (i) => {
  console.log(i);
  j++;
  await delay(5000 * j).then(() => {
    document.getElementById("options").innerHTML = "";
    document.getElementById("ques").innerText = `${i[0]} ${i[1].question}`;
    const ans = i[1].ans;
    const options = i[1].option;
    for (let i = 0; i < options.length; i++) {
      document.getElementById(
        "options"
      ).innerHTML += `<label class="ql" for="option${
        i + 1
      }"><input type="radio" name="options" id="option${i + 1}" value="${
        i + 1
      }" onclick="clickedOption(this, ${ans})"/>${options[i]}</label>`;
    }
    console.log("hi");
  });
});
document.getElementById("num").innerHTML = `<p>1 / 10</p>`;

