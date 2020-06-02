import { find } from '../helpers/find.js';
import { click } from '../helpers/variables.js';
import { driver } from '../helpers/driver.js';

const url =
  'https://www.eurail.com/en/tripplanner-map#adult=1&start=2020-07-01&end=2020-07-15&travelDays=1&trip=IT01';

async function tripPlanner() {
  try {
    // open page
    await driver.get(url);
    await find('.passfinder__text-overlay', click);
  } catch (error) {
    throw new Error(error.message);
  }
}
tripPlanner();
