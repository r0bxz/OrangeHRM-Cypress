import directoryPage from '../../pages/Directory/directoryPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import trackerData from '../../fixtures/trackerData.json';

describe('Directory Page Search Tests', () => {
    let validUser;
    let employeeName;
    
    beforeEach(() => {
        // Log in and navigate to the Directory page
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/directory/viewDirectory');

        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC')
            .then((response) => {
                const users = response.body.data;
                validUser = users[0]; 
                employeeName = validUser.employee.middleName && validUser.employee.middleName.trim() !== ""
                    ? `${validUser.employee.firstName} ${validUser.employee.middleName} ${validUser.employee.lastName}`.trim()
                    : `${validUser.employee.firstName} ${validUser.employee.lastName}`.trim();

                trackerData.directory.employeeName = employeeName;
            });
    });

    it('should search for an employee by name using API data', () => {
        directoryPage.fillEmployeeName(validUser.employee.firstName);
        directoryPage.selectJobTitle('HR Manager');  
        directoryPage.selectLocation('Texas R&D');  
        directoryPage.clickSearch();
        directoryPage.verifyEmployeeInResults(trackerData.directory.employeeName);
    });
    it('should click on the employee card and view his/her information', ()=>{
        directoryPage.fillEmployeeName(validUser.employee.firstName);
        directoryPage.selectJobTitle('HR Manager');  
        directoryPage.selectLocation('Texas R&D');  
        directoryPage.clickSearch();
        cy.contains('.oxd-grid-item', employeeName).click();
        cy.get('.orangehrm-corporate-directory-sidebar').contains(employeeName).should('be.visible');

    })
});
