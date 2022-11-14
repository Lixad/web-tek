const header = document.getElementById('shared-header');
header.innerHTML = `
  <header class="d-flex jc-around ai-center main-header">
    <a href="index.html" class="d-flex ai-center px-10 py-5 mx-15"><img src="./img/logo.jpg" alt="Company logo" class="logo-header"></a>
    <div class="d-flex">
      <a href="offer.html" class="d-flex ai-center px-10 py-5 mx-15 bold">${texts.links.offer}</a>
      <a href="cars_for_sale.html" class="d-flex ai-center px-10 py-5 mx-15 bold">${texts.links.cars}</a>
      <a href="career.html" class="d-flex ai-center px-10 py-5 mx-15 bold">${texts.links.career}</a>
      <a href="about.html" class="d-flex ai-center px-10 py-5 mx-15 bold">${texts.links.about}</a>
      <a href="photos.html" class="d-flex ai-center px-10 py-5 mx-15 bold">${texts.links.photos}</a>
      <a href="contact.html" class="d-flex ai-center px-10 py-5 mx-15 bold">${texts.links.contact}</a>
    </div>
    <div>
      <button id="lang_pl"><img src="./img/pl.svg"></button>
      <button id="lang_en"><img src="./img/gb.svg"></button>
      <button id="lang_no"><img src="./img/no.svg"></button>
    </div>
  </header>
`;
