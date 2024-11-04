import employeeClaimsPage from '../../pages/Claim/employeeClaimsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Employee Claims Tests', () => {
    let referenceId;

    before(() => {
        // Log in
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
    });

    it('should submit a claim, retrieve referenceId from API, and search by it', () => {
        // Step 1: Submit a claim
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/claim/submitClaim');

        const claimData = {
            event: 'Accommodation',
            currency: 'Euro',
            remarks: 'Test claim for accommodation'
        };

        employeeClaimsPage.selectEvent(claimData.event);
        employeeClaimsPage.selectCurrency(claimData.currency);
        employeeClaimsPage.clickCreate();

        // Step 2: Retrieve the Reference Id from the API
        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/claim/requests?limit=50&offset=0&sortField=claimRequest.referenceId&sortOrder=DESC')
          .then((response) => {
            const claims = response.body.data;
              referenceId = claims[1].referenceId;
              cy.log(`Captured Reference ID: ${referenceId}`);
               // Step 3: Search for the claim using the Reference Id
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/claim/viewClaim');
        cy.get('input[placeholder="Type for hints..."]').clear().type(referenceId);
        employeeClaimsPage.clickSearch();
        employeeClaimsPage.verifyClaimInResults(referenceId);
            
          });

       
    });
});
