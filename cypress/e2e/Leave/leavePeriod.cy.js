import leavePeriodPage from '../../pages/Leave/leavePeriodPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Leave Period Page Tests', () => {
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/defineLeavePeriod');
    });

    it('should set the leave period and save it', () => {
        leavePeriodPage.selectStartMonth('January');
        leavePeriodPage.selectStartDate('03');
        leavePeriodPage.verifyCurrentLeavePeriod('2024-01-01 to 2025-02-01');
        leavePeriodPage.clickSave();
        cy.contains('Success').should('be.visible');
    });

});
