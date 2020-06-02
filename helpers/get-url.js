import { driver } from './driver.js';
import log from './log.js';

export async function getUrl() {
  // send url to console.
  await driver.sleep(500);
  const url = await driver.getCurrentUrl();
  log(url, 'cyan', 'a');
  return url;
}
