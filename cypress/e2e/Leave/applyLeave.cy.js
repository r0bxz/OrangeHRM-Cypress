import ApplyLeavePage from '../../pages/Leave/applyLeavePage';
import LeaveListPage from '../../pages/Leave/leaveListPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Leave Application and Verification Tests', () => {
    const leaveType = 'CAN - FMLA';
    const fromDate = '2024-10-10';
    const toDate = '2024-11-10';
    const partialDays = 'All Days';
    const startDay = 'Half Day - Morning';
    const comment = 'Applying leave for personal reasons';

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/applyLeave');
    });

    it('should apply leave successfully', () => {
        ApplyLeavePage.selectLeaveType(leaveType);
        ApplyLeavePage.enterFromDate(fromDate);
        ApplyLeavePage.enterToDate(toDate);
        ApplyLeavePage.selectPartialDays(partialDays);
        ApplyLeavePage.selectStartDay(startDay);
        ApplyLeavePage.enterComments(comment);
        ApplyLeavePage.clickApply();
        cy.contains('Success').should('be.visible');
    });

});
