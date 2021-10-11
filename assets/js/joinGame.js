document.getElementById('joinBtn').onclick = async function () {
  if (localStorage.getItem('user') == 'undefined') {
    window.location = 'login.html'
  }
  const code = document.getElementById('gameCode').value
  window.location = `play.html?code=${code}`
}
