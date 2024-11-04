import DashboardPage from '../../pages/Dasboard/dashboardPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import dashboardPage from '../../pages/Dasboard/dashboardPage';

describe('Dashboard Page Tests', () => {
    beforeEach(() => {
        cy.session('login', () => {
          cy.visit('https://opensource-demo.orangehrmlive.com/');
          loginPage.enterUsername(loginData.validUser.username);
          loginPage.enterPassword(loginData.validUser.password);
          loginPage.clickSignIn();
          cy.url().should('include', '/dashboard/index');
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
        
      });
      

  it('should display the upgrade button', () => {
    dashboardPage.upgradeButton.should('be.visible');
  });
  
  it('should be able to click the upgrade button', () => {
    dashboardPage.upgradeButton.click();
    
  });

  it('should display the profile picture', () => {
    dashboardPage.profilePicture.should('be.visible');
  });

  it('should display the time at work section', () => {
    dashboardPage.timeAtWork.should('be.visible');
  });

  it('should display the my actions section', () => {
    dashboardPage.checkMyActions();
  });

  it('should display the quick launch section', () => {
    dashboardPage.quickLaunch.should('be.visible');
  });

  it('should display employees on leave today', () => {
    dashboardPage.checkEmployeesOnLeaveToday();
  });

  it('should display employee distribution by sub unit', () => {
    dashboardPage.employeeDistributionBySubUnit.should('be.visible');
  });

  it('should display employee distribution by location', () => {
    dashboardPage.employeeDistributionByLocation.should('be.visible');
  });

  it('Press time button',()=>{
    dashboardPage.clickTimeButton();
    cy.url().should('include','/attendance')
  });


 // it('Click on Employees on Leave settings button ', ()=> {

  it('should verify the presence and redirection of Candidate to Interview section', () => {
    dashboardPage.checkCandidateToInterview();
    dashboardPage.clickCandidateToInterview();
  });
  it('Employees on Leave Button ', ()=> {

    dashboardPage.clickEmployeesOnLeaveButton();
  })
  it('Press "About" under user menu', () => {
    dashboardPage.clickUserDropDownMenu()
    cy.get('.oxd-userdropdown-link').contains('About').click()
    cy.get('h6[data-v-7b563373][data-v-d52720b8]').contains('About').should('be.visible');
  });
  it('Press " Support " under user menu ', () => {
    dashboardPage.clickUserDropDownMenu()
    cy.get('.oxd-userdropdown-link').contains('Support').click()
    cy.contains('Getting Started with OrangeHRM').should('be.visible');
  });
  it('Press "Change Password" under user menu', () => {
    dashboardPage.clickUserDropDownMenu()
    cy.get('.oxd-userdropdown-link').contains('Change Password').click();
    cy.url().should('include','/updatePassword')
  });
});




