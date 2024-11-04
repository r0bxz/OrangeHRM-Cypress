import candidatesPage from '../../pages/Recruitment/candidatesPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import candidateData from '../../fixtures/candidateData.json';

describe('Candidates Page Tests', () => {
    let candidate;
    let editedCandidate;

    before(() => {
        candidate = candidateData.candidate;
        editedCandidate = candidateData.editedCandidate;
    });

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewCandidates');
    });

    it('should add a new candidate', () => {
        candidatesPage.addCandidate(candidate);
        candidatesPage.verifyCandidateExists(candidate);
    });

    it('should edit an existing candidate', () => {
        candidatesPage.editCandidate(candidate.firstName, editedCandidate);
        candidatesPage.verifyCandidateExists(editedCandidate);
    });

    it('should delete an existing candidate', () => {
        candidatesPage.deleteCandidate(editedCandidate);
    });
});
