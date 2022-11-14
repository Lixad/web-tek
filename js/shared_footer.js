const footer = document.getElementById('shared-footer');
footer.innerHTML = `
  <footer class="d-flex jc-between">
    <div class="d-flex f-col mx-15">
      <h4>${texts.footer.contact}</h4>
      <a href="tel:+48501549864">+48 501 549 864</a>
      <a href="mailto:">DEJ MAILA</a>
    </div>
    <div class="d-flex f-col mx-15">
      <h4>${texts.footer.address}</h4>
      Witosa 55,<br>
      28-530 Skalbmierz,<br>
      Poland
    </div>
    <div>
      <h4>${texts.footer.navigation}</h4>
      <ul class="d-flex">
        <div>
          <li>
            <a href="index.html">${texts.links.home}</a>
          </li>
          <li>
            <a href="offer.html">${texts.links.offer}</a>
          </li>
          <li>
            <a href="cars_for_sale.html">${texts.links.cars}</a>
          </li>
          <li>
            <a href="career.html">${texts.links.career}</a>
          </li>
        </div>
        <div class="mx-15">
          <li>
            <a href="about.html">${texts.links.about}</a>
          </li>
          <li>
            <a href="photos.html">${texts.links.photos}</a>
          </li>
          <li>
            <a href="contact.html">${texts.links.contact}</a>
          </li>
        </div>
      </ul>
    </div>
  </footer>
`;
