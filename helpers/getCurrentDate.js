import log from './log.js';

export function getCurrentDate() {
  const d = new Date();
  const date = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getMonth() + 1}`;
  const time = `${d.getHours()}h:${d.getMinutes()}m:${d.getSeconds()}s`;
  log(`${time} ${date}`, 'white');
  return `${time} ${date}`;
}
