import webdriver from 'selenium-webdriver';
const { Builder } = webdriver;
import { noCookies } from './helpers/no-cookies.js';
import { currencies, languages, click } from './helpers/variables.js';
import starterBlock from './starter-block/starter-block.js';

// driver.get('https://www.eurail.com');
// noCookies();

// send language and currency

// intro(languages.EN, currencies.EUR);

export const driver = new Builder().forBrowser('chrome').build();

starterBlock();
