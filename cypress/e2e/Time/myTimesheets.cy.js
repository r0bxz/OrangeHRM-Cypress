import employeeTimesheets from '../../pages/Time/myTimesheetsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Select Employee Page Tests', () => {
    let validUser; 
    let employeeName;
    let projectName ;
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewMyTimesheet');
    cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/time/projects?limit=50&offset=0&sortField=project.name&sortOrder=ASC&model=detailed')
        .then((response) => {
          const projects = response.body.data;
          projectName = projects[0].name;
        });
    });

    it('should  view and edit my timesheet', () => {
        const activity = 'Bug Fixes'
        employeeTimesheets.editTimesheet(projectName,activity)
        cy.contains('Success').should('be.visible');
    });

});
