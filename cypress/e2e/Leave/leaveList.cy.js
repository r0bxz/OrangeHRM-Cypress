import leaveListPage from '../../pages/Leave/leaveListPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Leave List Page Tests', () => {
  let validLeave;
  let fromDate;
  let toDate;
  let employeeName;
  let leaveType;
  let leaveStatus;
  let leaveDates;
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/leave/employees/leave-requests?limit=50&offset=0&includeEmployees=onlyCurrent')
    .then((response) => {
      const leaves = response.body.data;
      validLeave = leaves[0];
      fromDate = validLeave.dates.fromDate;
      toDate = validLeave.dates.toDate;
      employeeName = `${validLeave.employee.firstName} ${validLeave.employee.middleName} ${validLeave.employee.lastName}`;
      leaveType = validLeave.leaveType.name;
      leaveStatus = validLeave.leaveBreakdown[0].name;
      leaveDates = toDate ? `${fromDate} to ${toDate}` : fromDate;
          
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/leave/viewLeaveList');
      
  });
  it('should search for leave records', () => {
    leaveListPage.selectFromDate(fromDate);
    leaveListPage.selectToDate(toDate);
    leaveListPage.enterEmployeeName(employeeName);
    leaveListPage.selectLeaveStatus(leaveStatus);
    leaveListPage.clickSearch();
    leaveListPage.verifyLeaveRecord(employeeName);
  
  });

  it('should reset the search form', () => {
    leaveListPage.selectFromDate(fromDate);
    leaveListPage.clickReset();
  });


  it('should cancel a leave request', () => {
    leaveListPage.selectFromDate(fromDate);
    leaveListPage.selectToDate(toDate);
    leaveListPage.enterEmployeeName(employeeName);
    leaveListPage.clickSearch();
    leaveListPage.cancelLeave(employeeName);
    cy.contains('Success').should('be.visible');
  });
});

