import webdriver from 'selenium-webdriver';
const { Builder } = webdriver;
import { noCookies } from './helpers/no-cookies.js';

import { currencies, languages, click } from './helpers/variables.js';
import intro from './intro/intro.js';

export const driver = new Builder().forBrowser('chrome').build();

driver.get('https://www.eurail.com');
noCookies();

// send language and currency
intro(languages.EN, currencies.EUR);
