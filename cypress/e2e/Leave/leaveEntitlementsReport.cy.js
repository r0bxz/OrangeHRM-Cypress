import  leaveEntitlementsUsageReportPage from '../../pages/Leave/leaveEntitlementsReport'
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Add Leave Entitlement Page Tests', () => {
    let validUser; 
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
            cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC')
      .then((response) => {
        const users = response.body.data;
        validUser = users[0];
      });
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveBalanceReport');

    });
    it('should generate report by employee', () => {
        leaveEntitlementsUsageReportPage.selectGenerateFor(1);
            leaveEntitlementsUsageReportPage.enterEmployeeName(validUser.employee.firstName+" "+ validUser.employee.middleName+" "+ validUser.employee.lastName)
        leaveEntitlementsUsageReportPage.selectLeavePeriodForEmployee('2024-01-01 - 2024-31-12');
        leaveEntitlementsUsageReportPage.clickGenerate();
        cy.contains('Records Found').should('be.visible');

        

    });

    it('should generate report by leave type', () => {
        leaveEntitlementsUsageReportPage.selectGenerateFor(0);
        leaveEntitlementsUsageReportPage.selectLeaveType('CAN - Bereavement');
        leaveEntitlementsUsageReportPage.selectLocation('New York Sales Office')
        leaveEntitlementsUsageReportPage.selectLeavePeriod('2024-01-01 - 2024-31-12');
        leaveEntitlementsUsageReportPage.clickGenerate();
        cy.contains('Records Found').should('be.visible');

    });
});
