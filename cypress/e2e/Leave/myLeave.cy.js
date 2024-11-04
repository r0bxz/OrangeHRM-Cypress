import MyLeaveListPage from '../../pages/Leave/myLeavePage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('My Leave List Page Tests', () => {
    let validLeave;
    let fromDate;
    let toDate;
    let employeeName;
    let leaveType;
    let leaveStatus;

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewMyLeaveList');
        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/employees/leave-requests?limit=50&offset=0&includeEmployees=onlyCurrent')
            .then((response) => {
                const leaves = response.body.data;
                validLeave = leaves[0];
                fromDate = validLeave.dates.fromDate;
                toDate = validLeave.dates.toDate;
                employeeName = validLeave.employee.firstName;
                leaveType = validLeave.leaveType.name;
                leaveStatus = validLeave.leaveBreakdown.name;
            });
    });

    it('should search for leave records', () => {
        MyLeaveListPage.selectFromDate(fromDate);
        MyLeaveListPage.selectToDate(toDate);
        MyLeaveListPage.selectLeaveType(leaveType);
        MyLeaveListPage.clickSearch();
        MyLeaveListPage.verifyLeaveRecord(employeeName);
    });

    it('should reset the search form', () => {
        MyLeaveListPage.selectFromDate(fromDate);
        MyLeaveListPage.selectToDate(toDate);
        MyLeaveListPage.clickReset();
    });

    it('should Add a  comment', () => {
        MyLeaveListPage.selectFromDate(fromDate);
        MyLeaveListPage.selectToDate(toDate);
        MyLeaveListPage.clickSearch();
        MyLeaveListPage.addComment(employeeName);
    });
});
