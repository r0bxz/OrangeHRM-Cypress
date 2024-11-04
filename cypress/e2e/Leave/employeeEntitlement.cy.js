import leaveEntitlementsPage from '../../pages/Leave/employeeEntitlementPage';
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
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveEntitlements');
    });

    it('Search for a specific employee leave entitlement', () => {
        leaveEntitlementsPage.enterEmployeeName('Srinivas Erram');
        leaveEntitlementsPage.selectLeaveType('CAN - FMLA');
        leaveEntitlementsPage.selectLeavePeriod('2024-01-01 - 2024-31-12');
        leaveEntitlementsPage.clickSearch();
        cy.contains('Total').should('be.visible');
    });
});
