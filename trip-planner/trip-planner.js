import { driver } from '../helpers/driver.js';
import { noCookies } from '../helpers/no-cookies.js';
import { find } from '../helpers/find.js';

const url =
  'https://www.eurail.com/en/tripplanner-map#adult=1&start=2020-07-01&end=2020-07-15&travelDays=1&trip=IT01';

async function tripPlanner() {
  const click = true;
  try {
    // open page
    await driver.get(url);
    await find('.passfinder__text-overlay', click);

    // no cookies
    await noCookies();
  } catch (error) {
    throw new Error(error.message);
  }
}
tripPlanner();
