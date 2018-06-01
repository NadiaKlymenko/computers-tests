import { Page } from './base-page'
import { element, by } from 'protractor'

export class ComputerPage extends Page {
    constructor(url) {
        super(url)
        this.cancelBtn = element(by.cssContainingText(".btn", "Cancel"))
        this.addNewComputerBtn = element(by.css("input[type=submit]"))
        this.deleteBtn = element(by.cssContainingText(".btn", "Delete this computer"))
        this.computerNameField = element(by.id("name"))
        this.introducedDateField = element(by.id("introduced"))
        this.discontinuedDateField = element(by.id("discontinued"))
        this.companySelect = element(by.id("company"))
        this.validation = element(by.className("help-inline"))
    }
}
