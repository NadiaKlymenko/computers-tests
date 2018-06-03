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
        computersPage = new ComputersPage('computers');
        addNewComputerPage = new ComputerPage('computers/new');
    });


    this.Given('The computers page is opened', () => {
        computersPage.open()
    });

    this.Given('The add computer page is opened', () => {
        addNewComputerPage.open()
    });

    this.When('The user click add new computer button', () => {
        computersPage.addNewComputerBtn.click()
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
        computersPage.filterField.clear();
        computersPage.filterField.sendKeys(computerName)
    });

    this.When(/The user input "(.*)" to the computer name/, (computerName) => {
        addNewComputerPage.computerNameField.clear();
        addNewComputerPage.computerNameField.sendKeys(computerName)
    });

    this.When(/The user input "(.*)" to the discontinued date/, (discDate) => {
        addNewComputerPage.discontinuedDateField.clear();
        addNewComputerPage.discontinuedDateField.sendKeys(discDate)
    });

    this.When(/The user input "(.*)" to the introduced date/, (intrDate) => {
        addNewComputerPage.introducedDateField.clear();
        addNewComputerPage.introducedDateField.sendKeys(intrDate)
    });

    this.When(/The user select "(.*)" to the company/, (company) => {
        addNewComputerPage.companySelect.element(by.cssContainingText('option', company)).click()
    });


    this.When('The user click on the first computer in computer list', () => {
        computersPage.firstComputerNameInTheList.click()
    });


    this.Then(/The element "(.*)" is present on computers page/, async (elemName) => {
        const isElemDisplayed = await computersPage[elemName].isDisplayed()
        expect(isElemDisplayed).to.equal(true)
    });


    this.Then(/The element "(.*)" is present on computer page/, async (elemName) => {
        const isElemDisplayed = await addNewComputerPage[elemName].isDisplayed()
        expect(isElemDisplayed).to.equal(true)
    });

    this.Then('Open the computers page', async () => {
        const currentUrl = await browser.getCurrentUrl()
        expect(currentUrl).have.string('/computers');
    });

    this.Then('Open the update computer page', async () => {
        const currentUrl = await browser.getCurrentUrl()
        expect(currentUrl).match(/\/computers\/\d*/);
    });

    this.Then('Open the add computer page', async () => {
        const currentUrl = await browser.getCurrentUrl()
        expect(currentUrl).have.string('computers/new');
    });

    this.Then(/The validation message is "(.*)"/, async (validationMsg) => {
        const actualValidarionMessage = await addNewComputerPage.validation.getText();
        expect(actualValidarionMessage).to.equal(validationMsg)
    });

    this.Then(/The confirmation message is "(.*)"/, async (confirmationMsg) => {
        const actualConfirmationMessage = await computersPage.alertMessage.getText();
        expect(actualConfirmationMessage).to.equal(confirmationMsg.replace(/"/g, ''))
    });

    this.Then(/The information message is "(.*)"/, async (infoMsg) => {
        const actualInformationMessage = await computersPage.infoMessage.getText();
        expect(actualInformationMessage).to.equal(infoMsg.replace(/"/g, ''))
    });

    this.Then(/The "(.*)" is displaying in computer list/, async (computerName) => {
        const actualFilteredValue = await computersPage.firstComputerNameInTheList.getText();
        expect(actualFilteredValue).to.equal(computerName)
    });


    this.Then(/The computer name is "(.*)"/, async (computerName) => {
        const actualComputerValue = await addNewComputerPage.computerNameField.getAttribute('value');
        expect(actualComputerValue).to.equal(computerName)
    });



};
