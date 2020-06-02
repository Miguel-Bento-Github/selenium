import { find } from '../helpers/find.js';
import { click } from '../helpers/variables.js';
import { driver } from '../helpers/driver.js';
import log from '../helpers/log.js';

/**
 * Travellers points to data by age group.
 * This includes name and amount.
 * On each age group object there's an amount that will decide how many clicks are necessary.
 *
 * @param {object} travellers
 */
async function selectTravellers(travellers) {
  await driver.sleep(1000);

  // select travellers
  Object.values(travellers).forEach(async ({ name, amount }) => {
    for (let index = 0; index < amount; index++) {
      await find(`button[data-cy="tp-starter-increment-${name}"]`, click);
      log(`${name} added ✔`, 'green');
    }
  });
  await driver.sleep(1000);

  await find('.travellers-field-popup__finish-selection', click);
  log('Finished traveller selection ✔', 'green');
}

export { selectTravellers };
