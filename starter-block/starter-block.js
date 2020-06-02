import { driver } from '../helpers/driver.js';
import { noCookies } from '../helpers/no-cookies.js';
import { find } from '../helpers/find.js';
import log from '../helpers/log.js';
import { selectDates } from './select-dates.js';
import { selectTravellers } from './select-travellers.js';
import { selectDestination } from './select-destination.js';
import { travellers } from '../helpers/variables.js';
import { noSubscription } from '../helpers/no-subscription.js';
import { getUrl } from '../helpers/get-url.js';

export default async function starterBlock() {
  const click = true;

  try {
    await driver.get('https://www.eurail.com/en');

    await find('a[href="/en/plan-your-trip"]', click);

    await noSubscription();

    await selectDates(1, 15, 'july');

    await selectTravellers(travellers);

    await selectDestination('italy');

    // submit
    await find('.tp-starter__form__submit', click);

    await getUrl();
  } catch ({ message }) {
    log(message, 'red');
  } finally {
    log('Test finished.', 'yellow');
  }
}
