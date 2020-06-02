import log from '../helpers/log.js';
import find from '../helpers/find.js';
import { click } from '../helpers/variables.js';

export async function selectDestination(destination) {
  log(`Searching for ${destination}...`, 'yellow');
  const destinationInput = await find('.tp-starter__input', click);
  destinationInput.sendKeys(destination);
  await find('.location-field-popup__result', click);
  log(`${destination}, selected ✔`, 'green');
}
