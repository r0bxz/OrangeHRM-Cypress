import employeePerformanceTrackersPage from '../../pages/Performance/employeeTrackersPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import trackerData from '../../fixtures/trackerData.json';

describe('Employee Performance Tracker Logs Tests', () => {
    let validUser;
    let employeeName;
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/performance/viewEmployeePerformanceTrackerList');
    cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC')
        .then((response) => {
            const users = response.body.data;
         validUser = users[0];
            employeeName = validUser.employee.middleName && validUser.employee.middleName.trim() !== ""
                ? `${validUser.employee.firstName} ${validUser.employee.middleName} ${validUser.employee.lastName}`.trim()
                : `${validUser.employee.firstName} ${validUser.employee.lastName}`.trim();
                trackerData.newTracker.employeeName=employeeName;
                trackerData.newTracker.searchInfo= validUser.employee.firstName + " " + validUser.employee.lastName ;
  });
});

  it('should search for a current employee and add a log', () => {
    employeePerformanceTrackersPage.selectEmployee(trackerData.newTracker.employeeName);
    employeePerformanceTrackersPage.clickSearch();
    
    employeePerformanceTrackersPage.clickViewTracker(trackerData.newTracker.searchInfo);
    employeePerformanceTrackersPage.clickAddLog();

    const logData = {
      logTitle: "New log for current employee",
      comment: "Good performance",
      isPositive: true
    };
    employeePerformanceTrackersPage.fillLogForm(logData);
    employeePerformanceTrackersPage.clickSaveLog();
    
    // Verify the log is added
    employeePerformanceTrackersPage.verifyLogAdded(logData.logTitle);
  });

  it('should delete an existing log for a current employee', () => {
    employeePerformanceTrackersPage.selectEmployee(trackerData.newTracker.employeeName);
    employeePerformanceTrackersPage.clickSearch();

    employeePerformanceTrackersPage.clickViewTracker(trackerData.newTracker.searchInfo);
    employeePerformanceTrackersPage.clickDeleteLog(trackerData.newTracker.logComment);

    cy.contains('Success').should('be.visible');
  });
});
