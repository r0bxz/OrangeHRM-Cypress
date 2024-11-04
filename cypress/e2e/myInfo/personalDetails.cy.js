import personalDetailsPage from '../../pages/myInfo/personalDetailsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import personalDetailsData from '../../fixtures/personalDetailsData.json';

describe('Personal Details Page Tests', () => {
    let personalDetails;

    before(() => {
        personalDetails = personalDetailsData.personalDetails;
    });

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    });

    it('should fill out and save personal details', () => {
        cy.contains('.oxd-main-menu-item','My Info').click();
        personalDetailsPage.fillPersonalDetails(personalDetails);
    });
});
