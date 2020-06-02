import log from './helpers/log.js';
import starterBlock from './starter-block/starter-block.js';
import tripPlanner from './trip-planner/trip-planner.js';
import index from './intro/index.js';
import { languages, currencies, logs } from './helpers/variables.js';
import { getCurrentDate } from './helpers/getCurrentDate.js';
import { driver } from './helpers/driver.js';
import 'chromedriver';

async function test() {
  try {
    // start log html
    const start = getCurrentDate();
    log(logs.start);

    await index(languages.EN, currencies.EUR);
    const url = await starterBlock();
    // await tripPlanner(url);
  } catch ({ message }) {
    log(message, 'red');
  } finally {
    const end = getCurrentDate();

    log(logs.end);
    await driver.sleep(4000);
    driver.quit();
  }
}

test();
