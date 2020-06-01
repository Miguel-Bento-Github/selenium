import { find } from '../helpers/find.js';
import { click } from '../helpers/variables.js';

/**
 * Finds and selects a currency
 *
 * @param {string} currency
 */
export default async function selectCurrency(currency) {
  try {
    await find('#eurail-language-splash-currency', click);
    await find(`option[value='${currency}']`, click);
  } catch (error) {
    throw new Error(error);
  }
}
