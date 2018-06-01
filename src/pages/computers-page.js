import { Page } from './base-page'
import { element, by } from 'protractor'

export class ComputersPage extends Page {
    constructor(url) {
        super()
        this.listOfComputers = element(by.css('table[class="computers"]'))
        this.addNewComputerBtn = element(by.id("add"))
        this.filterComputerBtn = element(by.id("searchsubmit"))
        this.filterField = element(by.id("searchbox"))
        this.alertMessage = element(by.css('[class="alert-message"]'))
    }
}
