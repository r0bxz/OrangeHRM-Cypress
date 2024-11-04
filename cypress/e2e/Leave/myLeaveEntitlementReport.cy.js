import  myLeaveEntitlementReport from '../../pages/Leave/myLeaveEntitlementReport'
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
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewMyLeaveBalanceReport');

    });
    it('should generate report by period', () => {
        myLeaveEntitlementReport.selectLeavePeriod('2020-01-01 - 2020-31-12');
        myLeaveEntitlementReport.clickGenerate();
        cy.contains('Records Found').should('be.visible');

        

    });

  
});
