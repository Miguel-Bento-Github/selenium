import { find } from './find.js';
import log from './log.js';

async function noCookies() {
  const click = true;
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
}

export { noCookies };
