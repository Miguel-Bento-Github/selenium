import log from '../helpers/log.js';

export async function selectDestination(destination) {
  log(`Searching for ${destination}`, 'green');

  const destinationInput = await find('.tp-starter__input', click);
  destinationInput.sendKeys(destination);
  const chosen = await find('.location-field-popup__result', click);
  log(`Destination selected ${chosen.getText()}`);
}
