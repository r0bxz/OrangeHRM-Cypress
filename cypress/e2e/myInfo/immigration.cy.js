import assignedImmigrationRecordsPage from '../../pages/myInfo/immigrationPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import immigrationRecordsData from '../../fixtures/immigrationRecordsData.json';

describe('Assigned Immigration Records Page Tests', () => {
    let immigrationDetails;

    before(() => {
        immigrationDetails = immigrationRecordsData.immigrationRecord;
    });

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
    });

    it('should add a new immigration record', () => {
        cy.contains('.oxd-main-menu-item', 'My Info').click();
        cy.contains('Immigration').click();
        cy.contains('Add').click();
        assignedImmigrationRecordsPage.fillImmigrationRecord(immigrationDetails);
    });

    it('should edit the immigration record', () => {
        cy.contains('.oxd-main-menu-item', 'My Info').click();
        cy.contains('Immigration').click();
        assignedImmigrationRecordsPage.editImmigrationRecord(immigrationDetails);
    });

    it('should delete the immigration record', () => {
        cy.contains('.oxd-main-menu-item', 'My Info').click();
        cy.contains('Immigration').click();
        assignedImmigrationRecordsPage.deleteImmigrationRecord(immigrationDetails);
    });
});
