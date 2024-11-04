import purgeEmployeeRecordsPage from '../../pages/Maintenance/purgeEmployeeRecordsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import trackerData from '../../fixtures/trackerData.json';

describe('Purge Employee Records Tests', () => {
    let employeeName;
    let employeeNum;
    let validUser;

    before(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });

        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC')
            .then((response) => {
                const users = response.body.data;
                validUser = users[7];

                employeeName = validUser.employee.middleName && validUser.employee.middleName.trim() !== ""
                    ? `${validUser.employee.firstName} ${validUser.employee.middleName} ${validUser.employee.lastName}`.trim()
                    : `${validUser.employee.firstName} ${validUser.employee.lastName}`.trim();

                trackerData.purge.employeeName = employeeName;
                employeeNum = validUser.employee.empNumber;
                cy.visit(`https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewJobDetails/empNumber/${employeeNum}`);

                cy.contains('button', 'Terminate Employment').click();
                cy.get('input[placeholder="yyyy-dd-mm"]').eq(1).type('2024-09-09');
                cy.get('.oxd-select-text-input').eq(5).click({ force: true });
                cy.contains('.oxd-select-option', 'Other').click();
                cy.get('.oxd-button--secondary').eq(1).click({ force: true });
            });
    });

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeEmployee');
        cy.get('.oxd-input').eq(1).type(loginData.validUser.password);
        cy.contains('button', 'Confirm').click();
    });

    it('should search for a past employee by name using API data', () => {
        purgeEmployeeRecordsPage.fillEmployeeName(trackerData.purge.employeeName);
        purgeEmployeeRecordsPage.clickSearch();
        cy.contains('button','Purge').click();
        cy.contains('button','Yes, Purge').click();
        cy.contains('Success').should('be.visible');
    });
});
