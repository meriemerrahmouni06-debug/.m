const toggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Vérifier si l'utilisateur a déjà choisi un thème
if(localStorage.getItem('theme') === 'dark'){
  body.classList.add('dark-mode');
}
function updateButtonIcon() {
  if(body.classList.contains('dark-mode')){
    toggleButton.textContent = "☀️"; // soleil pour mode clair
  } else {
    toggleButton.textContent = "🌙"; // lune pour mode sombre
  }
}

toggleButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  updateButtonIcon();

  localStorage.setItem('theme', body.classList.contains('dark-mode') ? 'dark' : 'light');
});

// Initialiser le bouton au chargement
updateButtonIcon();