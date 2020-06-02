import { find } from '../helpers/find.js';
import { click } from '../helpers/variables.js';
import log from '../helpers/log.js';

/**
 * Selects a start date, end date and month of the year.
 * Month is required as it will loop until it finds the necessary month.
 *
 * @param {number} start
 * @param {number} end
 * @param {string} month
 */
export async function selectDates(start, end, month) {
  try {
    await find('.tp-starter__input--start-date', click);
    let currentMonth = await find('.react-datepicker__current-month');
    currentMonth = await currentMonth.getText();
    log(`Current search for month and year is ${currentMonth}`, 'yellow');

    while (!currentMonth.toLowerCase().includes(month)) {
      log('Selecting next month...', 'yellow');
      await find('.react-datepicker__navigation--next', click);
      currentMonth = await find('.react-datepicker__current-month');
      currentMonth = await currentMonth.getText();
    }
    log(
      `Selected month found. Current month is now ${currentMonth}. ✔`,
      'green'
    );

    await find(`div[aria-label="day-${start}"]`, click);
    log(`Start date is ${start} - ${currentMonth}. ✔`, 'green');
    await find('.tp-starter__input--end-date', click);
    await find(`div[aria-label="day-${end}"]`, click);
    log(`End date is ${end} - ${currentMonth}. ✔`, 'green');
  } catch ({ message }) {
    log(message, 'red');
  }
}
