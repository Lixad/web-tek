const header = document.getElementById('shared-header');
header.innerHTML = `
  <header class="d-flex jc-center ai-center main-header">
    <a href="#" class="d-flex ai-center px-10 py-5 mx-15"><img src="./img/logo.jpg" alt="Company logo" class="logo-header"></a>
    <a href="#" class="d-flex ai-center px-10 py-5 mx-15">${texts.links.about}</a>
    <a href="#" class="d-flex ai-center px-10 py-5 mx-15">Career</a>
    <a href="#" class="d-flex ai-center px-10 py-5 mx-15">Our offer</a>
    <a href="#" class="d-flex ai-center px-10 py-5 mx-15">Contact</a>
    <a href="#" class="d-flex ai-center px-10 py-5 mx-15">Chuj wie</a>
  </header>
`;
