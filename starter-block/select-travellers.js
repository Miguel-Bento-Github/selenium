import { find } from '../helpers/find.js';

async function selectTravellers() {
  const click = true;
  // select travellers
  await find('.travellers-field-popup__increment', click);
  const ageGroup = await find('.travellers-field-popup__control-age-group');
  if (ageGroup.getText())
    await find('.travellers-field-popup__finish-selection', click);
}

export { selectTravellers };
