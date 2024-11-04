import downloadPersonalDataPage from '../../pages/Maintenance/accessRecordsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import trackerData from '../../fixtures/trackerData.json';

describe('Download Personal Data Tests', () => {
    let employeeName;
    let employeeNum;
    let validEmployee;

    before(() => {
        // Log in and get employee data
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });

        // Fetch the employee data from the API
        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC')
            .then((response) => {
                const users = response.body.data;
                validEmployee = users[0]; // Assuming we use the first valid employee

                employeeName = validEmployee.employee.middleName && validEmployee.employee.middleName.trim() !== ""
                    ? `${validEmployee.employee.firstName} ${validEmployee.employee.middleName} ${validEmployee.employee.lastName}`.trim()
                    : `${validEmployee.employee.firstName} ${validEmployee.employee.lastName}`.trim();

            });
    });

    beforeEach(() => {
        // Visit the Download Personal Data page before each test
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/accessEmployeeData');
    });
    
    it('should search for an employee by name using API data and download personal data', () => {
      // cy.get('.oxd-input').eq(1).type(loginData.validUser.password);
       //cy.contains('button','Confirm').click();
        downloadPersonalDataPage.fillEmployeeName(employeeName);

        // Perform the search
        downloadPersonalDataPage.clickSearch();

        // Click download button
        downloadPersonalDataPage.clickDownload();
        cy.readFile(`cypress\\Downloads\\${employeeName}.json`)
        .should('exist')

        // You could also check if the download action triggered a file download
        // For example, by verifying the response headers or download URL.
    });
});
