import starterBlock from './starter-block/starter-block.js';
import index from './intro/index.js';
import { languages, currencies, logs } from './helpers/variables.js';
import log from './helpers/log.js';
import { driver } from './helpers/driver.js';

async function app() {
  try {
    // start log html
    log(logs.start);

    await index(languages.EN, currencies.EUR);
    await starterBlock();
  } catch ({ message }) {
    log(message, 'red');
  } finally {
    const d = new Date();
    const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getMonth() + 1}`;
    const time = `${d.getHours()}h:${d.getMinutes()}m:${d.getSeconds()}s`;

    log(`${time} ${date}`, 'white');
    log(logs.end);
    driver.quit();
  }
}

app();
