import purgeCandidatePage from '../../pages/Maintenance/purgeCandidateRecords';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import trackerData from '../../fixtures/trackerData.json';

describe('Purge Candidate Records Tests', () => {
    let validCandidate;
    let vacancyName;

    before(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });

        cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/recruitment/candidates?limit=50&offset=0&model=list&sortField=candidate.dateOfApplication&sortOrder=DESC')
            .then((response) => {
                const candidates = response.body.data;
                validCandidate = candidates[0];

                vacancyName = validCandidate.vacancy.name;


                cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/maintenance/purgeCandidateData');

            });
    });

    it('should search for a past candidate by name using API data', () => {
       cy.get('.oxd-input').eq(1).type(loginData.validUser.password);
        cy.contains('button', 'Confirm').click();
        purgeCandidatePage.fillCandidateName(vacancyName);
        purgeCandidatePage.clickSearch();
            cy.get('.orangehrm-horizontal-padding').then($message => {
                if ($message.text().includes('No Records Found')) {
                    cy.contains('.oxd-toast' ,'No Records Found').should('be.visible');
                } else {
                    cy.contains('button','Purge All').click();
                    cy.contains('button','Yes, Purge').click();
                }
        });

            })
        
});
