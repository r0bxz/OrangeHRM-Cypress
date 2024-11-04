import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import optionalFieldsPage from '../../pages/PIM/optionalFieldsPage';

describe('Optional Fields Tests', () => {

    beforeEach(() => {
        cy.session('login', () => {
            cy.visit('https://opensource-demo.orangehrmlive.com/');
            loginPage.enterUsername(loginData.validUser.username);
            loginPage.enterPassword(loginData.validUser.password);
            loginPage.clickSignIn();
            cy.url().should('include', '/dashboard/index');
        });
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/configurePim');
    });

    it('should toggle show nick name smoker military service switch', () => {
        optionalFieldsPage.showNickNameSmokerMilitaryServiceSwitch().click();
        optionalFieldsPage.clickSave();
        cy.contains('Success').should('be.visible');
    });

    it('should toggle show SSN Field Switch', () => {
        optionalFieldsPage.showSSNFieldSwitch().click();
        optionalFieldsPage.clickSave();
        cy.contains('Success').should('be.visible');
    });

    it('should toggle show SIN Field Switch', () => {
        optionalFieldsPage.showSINFieldSwitch().click();
        optionalFieldsPage.clickSave();
        cy.contains('Success').should('be.visible');
    });

    it('should toggle show US Tax ExemptionsMen', () => {
        optionalFieldsPage.showUSTaxExemptionsMenuSwitch().click();
        optionalFieldsPage.clickSave();
        cy.contains('Success').should('be.visible');
    });
});
