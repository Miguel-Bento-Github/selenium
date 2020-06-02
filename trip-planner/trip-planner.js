import { find } from '../helpers/find.js';
import { click } from '../helpers/variables.js';
import log from '../helpers/log.js';
import { driver } from '../helpers/driver.js';

// const url =
//   'https://www.eurail.com/en/tripplanner-map#start=2020-07-01&end=2020-07-15&adult=1&youth=3&trip=IT01&travelDays=1';

export default async function tripPlanner(url) {
  try {
    // open page
    await driver.get(url);
    // await find('.passfinder__text-overlay', click);
    // await find('.passfinder__price-button__check-results', click);
    // await find('.passfinder__add-to-cart', click);
    // await find('.item-cart', click);
  } catch ({ message }) {
    log(message, 'red');
  }
}
