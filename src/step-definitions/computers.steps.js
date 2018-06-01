import { ComputersPage } from '../pages/computers-page'
import { ComputerPage } from '../pages/computer-page'
import { expect } from 'chai'

export default function() {
    let computersPage;
    let addNewComputerPage;

    this.Before(() => {
        computersPage = new ComputersPage('/computers');
        addNewComputerPage = new ComputerPage('/computers/new');
    });


    this.Given('The computers page is opened', () => {
        computersPage.open()
    });

    this.Given('The add computer page is opened', () => {
        addNewComputerPage.open()
    });

    this.When('The user click add new computer button', () => {
        addNewComputerPage.addNewComputerBtn.click()
    });

    this.When('The user click cancel button', () => {
        addNewComputerPage.cancelBtn.click()
    });

    this.When('The user click create button', () => {
        addNewComputerPage.addNewComputerBtn.click()
    });

    this.When('The user click delete button', () => {
        addNewComputerPage.deleteBtn.click()
    });

    this.When(/The user input "(.*)" and "(.*)" and "(.*)" and "(.*)"/, () => {

    })

    this.When(/The user input "(.*)" to the filter field/, (computerName) => {
        computersPage.filterField.sendKeys(computerName)
    });

    this.When('The user click on the first computer in computer list', () => {
        computersPage.listOfComputers.element(by.css("tbody tr td a")).click()
    });

    this.Then(/The element "(.*)" is present on computer page/, (elemName) =>{
        addNewComputerPage[elemName]
    });

    this.Then(/The element "(.*)" is present on computers page/, (elemName) =>{
        computersPage[elemName]
    });

    this.Then('open the computers page', () => {
        computersPage.open()
    });

    this.Then('open the add computer page', () => {
        addNewComputerPage.open()
    });

    this.Then(/The validation message is "(.*)"/, (validationMsg) => {
        expect(addNewComputerPage.validation.getText()).toEqual(validationMsg)
    });

    this.Then(/The confirmation message is "(.*)/, (confirmationMsg) => {
        expect(computersPage.allertMessage.getText()).toEqual(confirmationMsg)
    });

    this.Then(/The "(.*)" is displaying in computer list/, (computerName) => {
        expect(computersPage.listOfComputers.element(by.css("tbody tr td a")).getText()).toEqual(computerName)
    });


    this.Then(/The computer name is "(.*)"/, (computerName) => {
        expect(computersPage.getText()).toEqual(computerName)
    });

};
