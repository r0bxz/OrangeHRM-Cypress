import employeeClaimsPage from '../../pages/Claim/employeeClaimsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Employee Claims Tests', () => {
    let employeeName;
    let validUser;

    before(() => {
        // Log in and fetch employee data from API
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });

        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC')
            .then((response) => {
                const users = response.body.data;
                validUser = users[1];

                // Construct the employee name
                employeeName = validUser.employee.middleName && validUser.employee.middleName.trim() !== ""
                    ? `${validUser.employee.firstName} ${validUser.employee.middleName} ${validUser.employee.lastName}`.trim()
                    : `${validUser.employee.firstName} ${validUser.employee.lastName}`.trim();
            });
    });

    it('should assign a claim and then search by employee name and reference ID', () => {
        // Step 1: Assign a claim
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/claim/assignClaim');

        const claimData = {
            employeeName: employeeName,
            event: 'Accommodation',
            currency: 'Euro',
            remarks: 'Test claim for accommodation'
        };

        employeeClaimsPage.fillEmployeeName(claimData.employeeName);
        employeeClaimsPage.selectEvent(claimData.event);
        employeeClaimsPage.selectCurrency(claimData.currency);
        employeeClaimsPage.clickCreate();

            // Step 3: Search the claim by employee name and reference ID
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewAssignClaim');

            employeeClaimsPage.fillEmployeeName(claimData.employeeName);
            employeeClaimsPage.clickSearch();

            // Step 4: Verify the claim is listed in the search results
            employeeClaimsPage.verifyClaimInResults(claimData.employeeName);
        });
});
