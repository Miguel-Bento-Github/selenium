import selectLanguage from './select-language.js';
import selectCurrency from './select-currency.js';
import submit from './submit.js';
import log from '../helpers/log.js';
import { driver } from '../helpers/driver.js';
import { noCookies } from '../helpers/no-cookies.js';
import { getUrl } from '../helpers/get-url.js';

/**
 * Receives two strings and selects the associated values.
 * Submits the form.
 *
 * @param {string} language
 * @param {string} currency
 */
export default async function index(language, currency) {
  try {
    await driver.get('https://www.eurail.com');
    await noCookies();
    await selectLanguage(language);
    await selectCurrency(currency);
    log('all selections finished ✔', 'green');
  } catch ({ message }) {
    log(`there was a problem, ${message}`, 'red');
  } finally {
    await submit();
    await driver.sleep(1000);
    await getUrl();
    log('index is done ✔', 'green');
  }
}
