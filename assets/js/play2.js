function clickedOption(e, ans) {
  if (e.value - 1 == ans) {
    console.log('correct')
    document.querySelector(
      `label[for=option${e.value}]`
    ).style.backgroundColor = 'green'
  } else {
    console.log('wrong')
    document.querySelector(
      `label[for=option${e.value}]`
    ).style.backgroundColor = 'red'
    document.querySelector(
      `label[for=option${ans + 1}]`
    ).style.backgroundColor = 'green'
  }
}
