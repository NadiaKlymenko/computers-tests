import { browser } from 'protractor';

export class Page {
    constructor(url) {
        this.url = url;
    }

    open() {
        browser.driver.get(`${browser.baseUrl}${this.url}`);
    }
}
