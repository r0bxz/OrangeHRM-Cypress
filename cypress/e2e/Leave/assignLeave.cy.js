import assignLeavePage from '../../pages/Leave/assignLeavePage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Assign Leave Page Tests', () => {
    let validUser;
    let employeeName
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/assignLeave');
        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC')
        .then((response) => {
          const users = response.body.data;
          validUser = users[0];
          employeeName= validUser.employee.firstName+" "+ validUser.employee.middleName+" "+ validUser.employee.lastName ;
    });
});

    it('should assign leave to an employee', () => {
        assignLeavePage.enterEmployeeName(employeeName);
        assignLeavePage.selectLeaveType('CAN - FMLA');
        assignLeavePage.setLeaveDates('2024-09-01', '2024-09-05');
        assignLeavePage.enterComments('Family emergency leave');
        assignLeavePage.selectPartialDays('All Days')
        assignLeavePage.selectDuration('Half Day - Morning')
        assignLeavePage.clickAssign();
        cy.contains('button','Ok').click();
        assignLeavePage.verifySuccessMessage();
    });
});
