import { driver } from '../main.js';
import { noCookies } from '../helpers/no-cookies.js';
import find from '../helpers/find.js';
import log from '../helpers/log.js';
import { selectDates } from './select-dates.js';
import { selectTravellers } from './select-travellers.js';
import { selectDestination } from './select-destination.js';

export default async function starterBlock() {
  const click = true;
  let url;

  try {
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
    log('Test finished.', 'yellow');
    await driver.quit();
  }
}
