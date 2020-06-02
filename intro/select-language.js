import { find } from '../helpers/find.js';
import { click, languages } from '../helpers/variables.js';
import log from '../helpers/log.js';
import { driver } from '../helpers/driver.js';

export default async function selectLanguage(language) {
  try {
    await find('#eurail-language-splash-laguage', click);
    await find(`option[value='${language}']`, click);
    log(`${language} language selected ✔`, 'green');
  } catch ({ message }) {
    log(`${language} language not selected ❌, ${message}`, 'red');
  }
}
