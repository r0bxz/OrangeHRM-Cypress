import  myEntitlementPage from '../../pages/Leave/myEntitlementPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Add Leave Entitlement Page Tests', () => {
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewMyLeaveEntitlements');
    });

    it('Search for a specific employee leave entitlement', () => {
        myEntitlementPage.selectLeaveType('CAN - FMLA');
        myEntitlementPage.selectLeavePeriod('2024-01-01 - 2024-31-12');
        myEntitlementPage.clickSearch();
        cy.contains('Total').should('be.visible');
    });
});
