import { ComputersPage } from '../pages/computers-page'
import { ComputerPage } from '../pages/computer-page'
import chaiAsPromised from 'chai-as-promised'
import chai from 'chai'


chai.use(chaiAsPromised)

const expect = chai.expect

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

    this.When('The user click filter button', () => {
        computersPage.filterComputerBtn.click()
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

    this.When(/The user input "(.*)" to the computer name/, (computerName) => {
        addNewComputerPage.computerNameField.sendKeys(computerName)
    });

    this.When(/The user input "(.*)" to the discontinued date/, (discDate) => {
        addNewComputerPage.discontinuedDateField.sendKeys(discDate)
    });

    this.When(/The user input "(.*)" to the introduced date/, (intrDate) => {
        addNewComputerPage.introducedDateField.sendKeys(intrDate)
    });

    this.When(/The user select "(.*)" to the company/, (company) => {
        addNewComputerPage.companySelect.element(by.cssContainingText(company)).click()
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
        expect(addNewComputerPage.validation.getText()).eventually.equal(validationMsg)
    });

    this.Then(/The confirmation message is "(.*)/, (confirmationMsg) => {
        expect(computersPage.alertMessage.getText()).eventually.equal(confirmationMsg)
    });

    this.Then(/The "(.*)" is displaying in computer list/, (computerName) => {
        expect(computersPage.listOfComputers.element(by.css("tbody tr td a")).getText()).eventually.equal(computerName)
    });


    this.Then(/The computer name is "(.*)"/, (computerName) => {
        expect(addNewComputerPage.computerNameField.getText()).eventually.equal(computerName)
    });

};
