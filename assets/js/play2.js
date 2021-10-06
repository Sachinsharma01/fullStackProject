var score = 0;
function clickedOption(e, ans) {
  if (e.value - 1 == ans) {
    console.log('correct')
    document.querySelector(
      `label[for=option${e.value}]`
    ).style.backgroundColor = 'green'
    score++;
  } else {
    console.log('wrong')
    document.querySelector(
      `label[for=option${e.value}]`
    ).style.backgroundColor = 'red'
    document.querySelector(
      `label[for=option${ans + 1}]`
    ).style.backgroundColor = 'green'
  }
  document.getElementById('score').innerHTML = `<p>${score}</p>`;
  throw new Error('haha')
}
document.getElementById('score').innerHTML = `<p>${score}</p>`;
