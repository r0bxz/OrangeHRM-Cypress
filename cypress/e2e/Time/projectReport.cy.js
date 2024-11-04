import projectReportPage from '../../pages/Time/projectReportsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Project Report Page Tests', () => {
    let projectName;
    
    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/time/displayProjectReportCriteria');
        
        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/time/projects?limit=50&offset=0&sortField=project.name&sortOrder=ASC&model=detailed')
        .then((response) => {
            const projects = response.body.data;
            projectName = projects[0].name;
        });
    });

    it('should generate a project report with a specific date range', () => {
        const fromDate = '2024-01-01';
        const toDate = '2024-12-31';

        projectReportPage.enterProjectName(projectName);

        projectReportPage.setProjectDateRange(fromDate, toDate);

        projectReportPage.toggleOnlyIncludeApprovedTimesheets();

        projectReportPage.clickView();

        cy.contains('Records').should('be.visible');
    });
});
