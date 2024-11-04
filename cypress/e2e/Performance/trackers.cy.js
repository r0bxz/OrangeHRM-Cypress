import performanceTrackersPage from '../../pages/Performance/trackersPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import trackerData from '../../fixtures/trackerData.json';

describe('Performance Trackers Management Tests', () => {
let validUser;
let validUserTwo;
let employeeName; 
let reviewerName;
let validUserThree;
let employeeNameTwo;
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/performance/viewPerformanceTracker');
    cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC')
        .then((response) => {
            const users = response.body.data;
         validUser = users[0];
         validUserTwo=users[1];
         validUserThree=users[2];
            
            employeeName = validUser.employee.middleName && validUser.employee.middleName.trim() !== ""
                ? `${validUser.employee.firstName} ${validUser.employee.middleName} ${validUser.employee.lastName}`.trim()
                : `${validUser.employee.firstName} ${validUser.employee.lastName}`.trim();
                trackerData.newTracker.employeeName=employeeName;
                trackerData.newTracker.searchInfo= validUser.employee.firstName + " " + validUser.employee.lastName ;
                employeeNameTwo = validUserThree.employee.middleName && validUserThree.employee.middleName.trim() !== ""
                ? `${validUserThree.employee.firstName} ${validUserThree.employee.middleName} ${validUserThree.employee.lastName}`.trim()
                : `${validUserThree.employee.firstName} ${validUserThree.employee.lastName}`.trim();
                trackerData.updatedTracker.employeeName=employeeNameTwo;

                reviewerName = validUserTwo.employee.middleName && validUserTwo.employee.middleName.trim() !== ""
                ? `${validUserTwo.employee.firstName} ${validUserTwo.employee.middleName} ${validUserTwo.employee.lastName}`.trim()
                : `${validUserTwo.employee.firstName} ${validUserTwo.employee.lastName}`.trim();

                trackerData.newTracker.reviewers=reviewerName;
                trackerData.updatedTracker.reviewers=reviewerName;
    
        });

  });

  it('should add a new performance tracker', () => {
    performanceTrackersPage.clickAdd();
    performanceTrackersPage.fillTrackerForm(trackerData.newTracker);
    performanceTrackersPage.clickSave();
    cy.contains('Success').should('be.visible');
  });

  it('should search for performance trackers by employee name', () => {
    performanceTrackersPage.search(trackerData.newTracker.employeeName);
    cy.contains('.oxd-table-row', trackerData.newTracker.searchInfo).should('be.visible');
  });

  it.skip('should edit an existing performance tracker', () => {
    performanceTrackersPage.clickEdit(trackerData.newTracker.trackerName);
    performanceTrackersPage.fillTrackerForm(trackerData.updatedTracker);
    performanceTrackersPage.clickSave();
    cy.contains('Success').should('be.visible');
  });

  it.skip('should delete an existing performance tracker', () => {
    performanceTrackersPage.clickDelete(trackerData.updatedTracker.trackerName);
    cy.contains('button', 'Yes, Delete').click();
    cy.contains('Success').should('be.visible');
  });

  
});
