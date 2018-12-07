'use strict';
require('chromedriver');
const {Builder, By, Key, until} = require('selenium-webdriver');

exports.send = function (users, message) {
  let driver = new Builder().forBrowser('chrome').build();
  try {

    driver.get('https://web.telegram.org/#/im')
    .then(_ =>
        driver.wait(until.elementLocated(By.className('icon-hamburger-wrap'))))
    .then(_ =>
      driver.get('https://web.telegram.org/#/im?p=@blockchainaire'))
    .then(_ => 
      driver.findElement(By.className('composer_rich_textarea')).sendKeys('aaa', Key.RETURN))
    .then(_ => driver.quit());

    
  } catch(e) {
    console.error(e); 
  } finally {
    // await driver.quit();
    console.log("complete");
  }
}
