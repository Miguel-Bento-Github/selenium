import { find } from '../helpers/find.js';
import { click } from '../helpers/variables.js';
import { driver } from '../main.js';
import log from '../helpers/log.js';

async function selectTravellers(travellers) {
  await driver.sleep(1000);
  // select travellers

  Object.keys(travellers).map(async (ageGroup) => {
    const amount = await travellers[ageGroup].amount;
    const name = await travellers[ageGroup].name;

    for (let index = 0; index < amount; index++) {
      await find(`button[data-cy="tp-starter-increment-${name}"]`, click);
      log(`${name} added ✔`, 'green');
    }
  });
  await driver.sleep(1000);

  await find('.travellers-field-popup__finish-selection', click);
}

export { selectTravellers };
