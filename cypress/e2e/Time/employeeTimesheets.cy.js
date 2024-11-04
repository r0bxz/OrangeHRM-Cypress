import employeeTimesheets from '../../pages/Time/employeeTimesheetsPage';
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
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/time/viewEmployeeTimesheet');
        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC')
        .then((response) => {
          const users = response.body.data;
          validUser = users[0];
          
          employeeName = validUser.employee.middleName && validUser.employee.middleName.trim() !== "" 
          ? `${validUser.employee.firstName} ${validUser.employee.middleName} ${validUser.employee.lastName}`
          : `${validUser.employee.firstName} ${validUser.employee.lastName}`;

        
    });
    cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/time/projects?limit=50&offset=0&sortField=project.name&sortOrder=ASC&model=detailed')
        .then((response) => {
          const projects = response.body.data;
          projectName = projects[0].name;
        });
    });

    it('should  view and edit timesheet for a specific employee', () => {
        const activity = 'Bug Fixes'
        
        employeeTimesheets.enterEmployeeName(employeeName);
        employeeTimesheets.clickViewForEmployee();
        employeeTimesheets.editTimesheet(projectName,activity)
        cy.contains('Success').should('be.visible');
    });

});
