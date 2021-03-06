import { element, by } from 'protractor';
import Page from './base-page';

export default class ComputersPage extends Page {
  constructor(url) {
    super(url);
    this.listOfComputers = element(by.css('table.computers'));
    this.firstComputerNameInTheList = this.listOfComputers.element(by.css('tbody tr:first-child td:first-child a'));
    this.addNewComputerBtn = element(by.id('add'));
    this.filterComputerBtn = element(by.id('searchsubmit'));
    this.filterField = element(by.id('searchbox'));
    this.alertMessage = element(by.css('.alert-message'));
    this.infoMessage = element(by.css('.well'));
  }
}
