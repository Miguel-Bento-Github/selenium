import log from '../helpers/log.js';
import { find } from '../helpers/find.js';
import { click } from '../helpers/variables.js';
import { driver } from '../helpers/driver.js';

export async function selectDestination(destination) {
  try {
    log(`Searching for ${destination}...`, 'yellow');
    const destinationInput = await find('.tp-starter__input', click);
    await driver.sleep(500);
    destinationInput.sendKeys(destination);
    await find('.location-field-popup__result', click);
    log(`${destination}, selected ✔`, 'green');
  } catch ({ message }) {
    log(`❌ ${message}`, 'red');
  }
}
