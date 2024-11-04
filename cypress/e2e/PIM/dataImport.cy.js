import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import dataImportPage from '../../pages/PIM/dataImportPage';

describe('Data Import Page Tests', () => {

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
            cy.url().should('include', '/dashboard/index');
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/pimCsvImport'); 
    });

    it('should upload a valid file and verify success message', () => {

        dataImportPage.uploadFile('importData.csv'); 

        dataImportPage.verifyUploadSuccess();
    });
});
