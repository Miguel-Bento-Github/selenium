import selectLanguage from './select-language.js';
import selectCurrency from './select-currency.js';
import { click } from '../helpers/variables.js';
import { find } from '../helpers/find.js';
import log from '../helpers/log.js';
import { driver } from '../main.js';
import { noCookies } from '../helpers/no-cookies.js';

/**
 * Receives two strings and selects the associated values.
 * Submits the form.
 *
 * @param {string} language
 * @param {string} currency
 */
export default async function intro(language, currency) {
  try {
    await selectLanguage(language);
    await selectCurrency(currency);
    log('all selections finished ✔', 'green');

    await find('.button-apply-language', click);
    log('form submitted ✔', 'green');
  } catch ({ message }) {
    throw new Error(message);
  } finally {
    await driver.sleep(2000);
    await driver.quit();
  }
}
