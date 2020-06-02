import { find } from '../helpers/find.js';
import { click } from '../helpers/variables.js';
import log from '../helpers/log.js';

/**
 * Finds and selects a currency
 *
 * @param {string} currency
 */
export default async function selectCurrency(currency) {
  try {
    await find('#eurail-language-splash-currency', click);
    await find(`option[value='${currency}']`, click);
    log(`${currency} currency selected ✔`, 'green');
  } catch ({ message }) {
    log(`${currency} currency not selected ❌, ${message}`, 'red');
  }
}
