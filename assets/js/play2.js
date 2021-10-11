<<<<<<< HEAD
let score = 0

=======
var score = 0;
>>>>>>> e654935ad06e79ed4908dc2ef7f9a937919c88de
function clickedOption(e, ans) {
  if (e.value - 1 == ans) {
    console.log('correct')
    document.querySelector(
      `label[for=option${e.value}]`
    ).style.backgroundColor = 'green'
<<<<<<< HEAD
    score++
=======
    score++;
>>>>>>> e654935ad06e79ed4908dc2ef7f9a937919c88de
  } else {
    console.log('wrong')
    document.querySelector(
      `label[for=option${e.value}]`
    ).style.backgroundColor = 'red'
    document.querySelector(
      `label[for=option${ans + 1}]`
    ).style.backgroundColor = 'green'
  }
<<<<<<< HEAD
  document.getElementById('score').innerText = score
=======
  document.getElementById('score').innerText = `${score}`;
>>>>>>> e654935ad06e79ed4908dc2ef7f9a937919c88de
}
