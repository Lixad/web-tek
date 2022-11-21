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
    poland: 'Poland'
  },
  aboutCompany: {
    para1: `Sebastian Stępień Transport Company is a polish family company founded in 2011. We have many 
      years of experience in international transport, thanks to which the services we provide are at a high 
      level.`,
    para2: `We specialize in refrigerated transport, we have permits for the transport of waste, hazardous 
      materials in classes (according to the ADR Convention): 3, 4.1, 5.1, 6.1, 8 and 9, materials that 
      require maintaining the required temperature and neutral materials.`,
    para3: `Our goal is to deliver materials and products to our clients in accordance with their 
      recommendations, so as to offer fast and efficient services for the benefit of both parties. 
      People and cargo safety is our priority. Due to that every employee is well qualified to deliver
      such cargo`,
    },
    offer: {
      para1: 'Our company offers the following services:',
      liItem1: 'valuation of transport and forwarding',
      liItem2: 'fast and efficient transport service to many countries',
      liItem3: 'forwarding service.',
    },
    career: {
      header: 'Who are we looking for',
      contact: 'If you want to join our team, contact us via e-mail: ',
      para1: `People who want to join our team should be characterized by high personal culture, the ability to 
        work in a group and on time, and a high degree of adaptation to the constantly changing work 
        environment.`,
      li1: {
        header: 'We require candidates to have:',
        item1: 'driving license category C+E,',
        item2: 'a valid driver card,',
        item3: 'minimum one year of work experience in a similar position,',
        item4: 'ADR qualifications will be an asset,',
      },
      li2: {
        header: 'What we offer our employees:',
        item1: 'Attractive working conditions',
        item2: 'Work in creative teams of high-class specialists',
        item3: 'Participation in interesting projects',
        item4: 'Training',
      },
      para2: `We make sure that our staff is properly trained in terms of content and technology. We support our 
        employees in personal development`
    },
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
    poland: 'Polen'
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
    poland: 'Polska'
  }
};

const getTexts = lang => {
  switch(lang) {
    case 'no':
      return no;
    case 'en':
      return en;
    default:
      return pl;
  }
};
