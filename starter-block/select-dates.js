import { find } from '../helpers/find.js';
import log from '../helpers/log.js';

/**
 * Selects a start date, end date and month of the year.
 * Month is required as it will loop until it finds the necessary month.
 *
 * @param {number} start
 * @param {number} end
 * @param {string} month
 */
async function selectDates(start, end, month) {
  const click = true;
  try {
    await find('.tp-starter__input--start-date', click);
    let currentMonth = await find('.react-datepicker__current-month');
    currentMonth = await currentMonth.getText();
    log(`current month is ${currentMonth}`, 'yellow');

    while (!currentMonth.toLowerCase().includes(month)) {
      log('selecting next month...', 'green');
      await find('.react-datepicker__navigation--next', click);
      currentMonth = await find('.react-datepicker__current-month');
      currentMonth = await currentMonth.getText();
    }
    log(`Selected month found. Current month is now ${currentMonth}`, 'green');

    await find(`div[aria-label="day-${start}"]`, click);
    log(`start date is ${start} of ${currentMonth}`);
    await find('.tp-starter__input--end-date', click);
    await find(`div[aria-label="day-${end}"]`, click);
    log(`start date is ${end} of ${currentMonth}`);
  } catch ({ message }) {
    throw new Error(message);
  }
}
export { selectDates };
