import performanceTrackersPage from '../../pages/Performance/myTracker';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import trackerData from '../../fixtures/trackerData.json';

describe('Performance Tracker Logs Tests', () => {
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/performance/viewMyPerformanceTrackerList');
  });

  it('should view tracker and add a log', () => {
    performanceTrackersPage.clickView(trackerData.newTracker.trackerName);
    performanceTrackersPage.clickAddLog();
    
    const logData = {
      logTitle:"New log",
      comment: "Good log",
      isPositive: true
    };
    performanceTrackersPage.fillLogForm(logData);
    performanceTrackersPage.clickSaveLog();

    // Verify that log was added
    performanceTrackersPage.verifyLogAdded(logData.logTitle);
  });

  it('should edit an existing log', () => {
    performanceTrackersPage.clickView(trackerData.newTracker.trackerName);
    
    performanceTrackersPage.clickEditLog(loginData.logTitle);
    const updatedLogData = {
        logTitle:"Updated log",
      comment: "Updated bad log",
      isPositive: false
    };
    performanceTrackersPage.fillLogForm(updatedLogData);
    performanceTrackersPage.clickSaveLog();
    performanceTrackersPage.clickSaveLog();
    performanceTrackersPage.verifyLogAdded(updatedLogData.logTitle);
  });

  it('should delete an existing log', () => {
    performanceTrackersPage.clickView(trackerData.newTracker.trackerName);

    performanceTrackersPage.clickDeleteLog(loginData.updatedLogData);
    cy.contains('Success').should('be.visible');
  });
});
