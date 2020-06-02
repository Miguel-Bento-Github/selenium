import { find } from './find.js';
import { click } from './variables.js';
import log from './log.js';

export async function noSubscription() {
  try {
    await find('.mfp-close.e-popup__close', click);
    return log('Popup closed', 'yellow');
  } catch ({ message }) {
    return log(`Problems with popup ✔ ${message}`, 'red');
  }
}
