import contactDetailsPage from '../../pages/myInfo/contactDetailsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import contactDetailsData from '../../fixtures/contactDetailsData.json';

describe('Contact Details Page Tests', () => {
    let contactDetails;

    before(() => {
        contactDetails = contactDetailsData.contactDetails;
    });

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
    });

    it('should fill out and save contact details', () => {
        cy.contains('.oxd-main-menu-item','My Info').click();
    cy.contains('.orangehrm-tabs-item','Contact Details').click();
        contactDetailsPage.fillContactDetails(contactDetails);
    });
});
