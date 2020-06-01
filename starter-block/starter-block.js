import webdriver from 'selenium-webdriver';
const { Builder } = webdriver;
import { noCookies } from '../helpers/no-cookies.js';
import { find } from '../helpers/find.js';
import { selectDates } from './select-dates.js';
import { selectTravellers } from './select-travellers.js';
import log from '../helpers/log.js';
import { selectDestination } from './select-destination.js';

export default async function starterBlock() {
  const click = true;
  let url;

  try {
    const driver = new Builder().forBrowser('chrome').build();
    await driver.get('https://www.eurail.com/en');

    await noCookies();

    await find('a[href="/en/plan-your-trip"]', click);

    await selectDates(1, 15, 'july');

    await selectTravellers();

    await selectDestination('italy');

    // submit
    await find('.tp-starter__form__submit', click);

    // send url to console.
    await driver.sleep(500);
    url = await driver.getCurrentUrl();

    log(url, 'cyan');
  } catch (error) {
    throw new Error(error.message);
  } finally {
    log('Test successful.', 'green');
    await driver.quit();
  }
}

starterBlock();