import 'chromedriver';
import webdriver from 'selenium-webdriver';
import { capabilities } from './capabilities.js';
const { Builder } = webdriver;

export const driver = new Builder().forBrowser('chrome').build();

// export const driver = new Builder()
//   .usingServer('http://hub-cloud.browserstack.com/wd/hub')
//   .withCapabilities(capabilities)
//   .build();
