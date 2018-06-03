import { browser } from 'protractor';

export default class Page {
  constructor(url) {
    this.url = url;
  }

  open() {
    browser.driver.get(`${browser.baseUrl}${this.url}`);
  }
}
