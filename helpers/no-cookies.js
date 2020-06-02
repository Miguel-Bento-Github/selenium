import { find } from './find.js';
import { click } from './variables.js';
import log from './log.js';

export async function noCookies() {
  try {
    await find(
      'label[for="CybotCookiebotDialogBodyLevelButtonPreferences"]',
      click
    );
    await find(
      'label[for="CybotCookiebotDialogBodyLevelButtonMarketing"]',
      click
    );
    await find(
      'label[for="CybotCookiebotDialogBodyLevelButtonStatistics"]',
      click
    );
    await find('#CybotCookiebotDialogBodyLevelButtonAccept', click);
    log('Cookies unselected.', 'yellow');
  } catch ({ message }) {
    log(`❌ There was an issue with the cookies, ${message}`, 'red');
  }
}
