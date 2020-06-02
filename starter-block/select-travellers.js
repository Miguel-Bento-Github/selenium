import find from '../helpers/find.js';
import { click } from '../helpers/variables.js';

async function selectTravellers() {
  // select travellers
  await find('.travellers-field-popup__increment', click);
  const ageGroup = await find('.travellers-field-popup__control-age-group');
  if (ageGroup.getText()) {
    await find('.travellers-field-popup__finish-selection', click);
  }
}

export { selectTravellers };
