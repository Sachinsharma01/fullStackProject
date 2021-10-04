document.getElementById('joinBtn').onclick = async function () {
  if (localStorage.getItem('user') == 'undefined') {
    console.log('in user')
    window.location = 'login.html'
  }
  const code = document.getElementById('gameCode').value
  window.location = `play.html?code=${code}`
}
