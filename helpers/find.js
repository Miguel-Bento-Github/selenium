import webdriver from 'selenium-webdriver';
import { driver } from '../main.js';
import log from './log.js';
const { By, until } = webdriver;

/**
 * Finds element using css selectors.
 * Verifies if the element is currently in the DOM.
 *
 * @param {string} css this is the selector
 * @param {boolean} click
 * @returns {node} selected element
 */
export async function find(css, click) {
  try {
    let element = await driver.wait(until.elementLocated(By.css(css)));
    if (click) element.click();
    return element;
  } catch ({ message }) {
    log(`Error after trying to select ${css}`, 'red');
    throw new Error(message);
  }
}
