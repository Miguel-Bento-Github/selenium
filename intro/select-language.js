import { find } from '../helpers/find.js';
import { click } from '../helpers/variables.js';

export default async function selectLanguage(language) {
  try {
    await find('#eurail-language-splash-laguage', click);
    await find(`option[value='${language}']`, click);
  } catch ({ message }) {
    throw new Error(message);
  }
}
