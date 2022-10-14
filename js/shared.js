document.getElementById('lang_no').addEventListener('click', () => {
  window.localStorage.setItem('lang', 'no');
  window.location.reload();
});

document.getElementById('lang_pl').addEventListener('click', () => {
  window.localStorage.setItem('lang', 'pl');
  window.location.reload();
});

document.getElementById('lang_en').addEventListener('click', () => {
  window.localStorage.setItem('lang', 'en');
  window.location.reload();
});
