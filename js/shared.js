const setLang = lang => {
  window.localStorage.setItem('lang', lang);
  window.location.reload();
};

document.getElementById('lang_no').addEventListener('click', () => setLang('no'));
document.getElementById('lang_pl').addEventListener('click', () => setLang('pl'));
document.getElementById('lang_en').addEventListener('click', () => setLang('en'));
