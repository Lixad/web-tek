const en = {
  common: {
    hello: 'Hello!',    
  },
  links: {
    offer: 'Offer',
    cars: 'Cars for sale',
    career: 'Career',
    about: 'About',
    photos: 'Photos',
    contact: 'Contact us',
    home: 'Home',
  },
  footer: {
    contact: 'Contact',
    address: 'Address',
    navigation: 'Navigation',
  }
};

const no = {
  common: {
    hello: 'Hei!',    
  },
  links: {
    offer: 'Offer',
    cars: 'Cars for sale',
    career: 'Career',
    about: 'Om oss',
    photos: 'Photos',
    contact: 'Contact us',
    home: 'Home',
  },
  footer: {
    contact: 'Contact',
    address: 'Address',
    navigation: 'Navigation',
  }
};

const pl = {
  common: {
    hello: 'Cześć',
  },
  links: {
    offer: 'Oferta',
    cars: 'Samochody na sprzedaż',
    career: 'Kariera',
    about: 'O nas',
    photos: 'Zdjęcia',
    contact: 'Kontakt',
    home: 'Strona główna',
  },
  footer: {
    contact: 'Kontakt',
    address: 'Adres',
    navigation: 'Nawigacja',
  }
};

const getTexts = lang => {
  switch(lang) {
    case 'no':
      return no;
    case 'pl':
      return pl;
    default:
      return en;
  }
};
