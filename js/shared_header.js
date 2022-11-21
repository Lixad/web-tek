const setLang = lang => {
  window.localStorage.setItem('lang', lang);
  window.location.reload();
};

const renderHeader = () => {
  const header = document.getElementById('shared-header');
  if (window.innerWidth > 1200) {
      header.innerHTML = `
      <header class="d-flex jc-around ai-center main-header">
        <a href="index.html" class="d-flex ai-center px-10 py-5 mx-15"><img src="./img/logo.jpg" alt="Company logo" class="logo-header"></a>
        <div class="d-flex">
          <a href="offer.html" class="d-flex ai-center px-10 py-5 mx-15 bold">${texts.links.offer}</a>
          <a href="career.html" class="d-flex ai-center px-10 py-5 mx-15 bold">${texts.links.career}</a>
          <a href="about.html" class="d-flex ai-center px-10 py-5 mx-15 bold">${texts.links.about}</a>
          <a href="photos.html" class="d-flex ai-center px-10 py-5 mx-15 bold">${texts.links.photos}</a>
          <a href="contact.html" class="d-flex ai-center px-10 py-5 mx-15 bold">${texts.links.contact}</a>
        </div>
        <div>
          <button id="lang_pl"><img src="./img/pl.svg"></button>
          <button id="lang_en"><img src="./img/gb.svg"></button>
        </div>
      </header>
    `;
    document.getElementById('lang_pl').addEventListener('click', () => setLang('pl'));
    document.getElementById('lang_en').addEventListener('click', () => setLang('en'));

  } else {
    header.innerHTML = `
      <header class="d-flex jc-between ai-center main-header">
        <a href="index.html" class="d-flex ai-center px-10 py-5 mx-15"><img src="./img/logo.jpg" alt="Company logo" class="logo-header"></a>
        <div class="d-flex">
          <button id="lang_pl_mobile"><img src="./img/pl.svg"></button>
          <button id="lang_en_mobile"><img src="./img/gb.svg"></button>
          <button id="lang_no_mobile"><img src="./img/no.svg"></button>
          <button id="hamburger" type="button" class="hamburger-wrapper"><div class="hamburger"></div></button>
          <div class="mobile-menu">
            <a href="offer.html" class="d-flex ai-center py-5 bold">${texts.links.offer}</a>
            <a href="career.html" class="d-flex ai-center py-5 bold">${texts.links.career}</a>
            <a href="about.html" class="d-flex ai-center py-5 bold">${texts.links.about}</a>
            <a href="photos.html" class="d-flex ai-center py-5 bold">${texts.links.photos}</a>
            <a href="contact.html" class="d-flex ai-center py-5 bold">${texts.links.contact}</a>
          </div>
        </div>
      </header>
    `;

    document.getElementById('lang_pl_mobile').addEventListener('click', () => setLang('pl'));
    document.getElementById('lang_en_mobile').addEventListener('click', () => setLang('en'));

    document.getElementById('hamburger').addEventListener('click', () => {
      document.body.classList.toggle('mobile-menu-open');
    });
  }
};

window.addEventListener('resize', renderHeader);

renderHeader();
