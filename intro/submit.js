import log from '../helpers/log.js';
import { find } from '../helpers/find.js';
import { click } from '../helpers/variables.js';
import { driver } from '../helpers/driver.js';

export default async function submit() {
  try {
    await find('#js-splash-submit', click);
    log('form submitted ✔', 'green');
  } catch ({ message }) {
    log(`There was a problem submitting ❌, ${message}`, 'red');
  }
}
