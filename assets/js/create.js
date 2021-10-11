let i = 1
let j = 0
let k = 0

document.getElementById('selectQues').onchange = function () {
  document.getElementById('nextButton').disabled = false
  i = this.value
}

document.getElementById('nextButton').onclick = function () {
  if (j == 0) {
    localStorage.setItem('title', document.getElementById('title').value)
    document.getElementById('save').style.display = 'block'
    document.getElementById('finish').style.display = 'block'
  }
  if (j < i) {
    document.getElementById('questionPanel').innerHTML =
      '<div id="ques"><div class="text"><label>Question ' +
      parseInt(j + 1) +
      '</label><textarea id="quesCurrent" cols="80" rows="5"></textarea></div><label for="question" class="add-option">Options<select class="add-option" name="ques" id="addOption" onchange="createOption()"><option value="">Select</option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option></select></label><label for="answer">Answer<select name="ans" id="answer"><option value="">Select</option></select></label><div id="optionsPanel"></div>'
    if (j == i - 1) {
      this.style.display = 'none'
    }
    document.getElementById('save').disabled = false
  }
  this.disabled = true
  j++
  k = 0
}

function createOption() {
  let options = document.getElementById('addOption').value
  addOption(options)
  addAnswerOptions(options)
}

function addOption(options) {
  for (; k < options; k++) {
    document.getElementById('optionsPanel').innerHTML +=
      '<div class="option"><label>Option ' +
      parseInt(k + 1) +
      '</label><input type="text" id="option' +
      parseInt(k + 1) +
      '"/></div>'
  }
}

function addAnswerOptions(options) {
  for (let x = 0; x < options; x++) {
    document.getElementById('answer').innerHTML += `<option value="${parseInt(
      x
    )}">${parseInt(x + 1)}</option>`
  }
}
if (localStorage.getItem('user') == 'undefined') {
  window.location = 'login.html'
}
