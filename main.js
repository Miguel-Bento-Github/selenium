import webdriver from 'selenium-webdriver';
const { Builder } = webdriver;
import starterBlock from './starter-block/starter-block.js';
import intro from './intro/intro.js';

export const driver = new Builder().forBrowser('chrome').build();
// driver.get('https://www.eurail.com');

function app() {
  starterBlock();
  // await intro(languages.EN, currencies.EUR, starterBlock);
}
app();
