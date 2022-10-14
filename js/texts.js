const en = {
  common: {
    hello: 'Hello!',    
  },
  links: {
    about: 'About',
  }
};

const no = {
  common: {
    hello: 'Hei!',
  },
  links: {
    about: 'Om oss',
  }
};

const pl = {
  common: {
    hello: 'Cześć!',
  },
  links: {
    about: 'O nas',
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
