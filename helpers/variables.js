export const click = true;

// languages eurail.com
export const languages = {};
languages.EN = 'en';
languages.ES = 'es';
languages.PT = 'pt';
languages.KO = 'ko';
languages.JA = 'ja';
languages.ZH = 'zh';

// currencies eurail.com
export const currencies = {};
currencies.USD = 'USD';
currencies.AUD = 'AUD';
currencies.CAD = 'CAD';
currencies.EUR = 'EUR';

// age groups starter-block
export const ageGroups = {
  children: 'children',
  youths: 'youths',
  adults: 'adults',
  seniors: 'seniors',
};

export const travellers = {
  children: {
    name: ageGroups.children,
    amount: 0,
  },
  youths: {
    name: ageGroups.youths,
    amount: 1,
  },
  adults: {
    name: ageGroups.adults,
    amount: 1,
  },
  seniors: {
    name: ageGroups.seniors,
    amount: 0,
  },
};
