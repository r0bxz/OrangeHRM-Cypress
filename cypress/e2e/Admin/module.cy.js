import loginPage from '../../pages/Login/loginPage';
import moduleConfigurationPage from '../../pages/Admin/modulPage';
import loginData from '../../fixtures/loginData.json';

describe('Module Configuration Page Tests', () => {

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewModules');
  });

  it('should enable and disable modules and save configuration', () => {
    moduleConfigurationPage.toggleModule();
    moduleConfigurationPage.clickSaveButton();
    cy.contains('Success').should('be.visible');
  });

  it('should verify that the first two modules cannot be toggled', () => {
    cy.get('.oxd-switch-input').eq(0).parent().should('have.class', '--disabled');
    cy.get('.oxd-switch-input').eq(0).parent().should('have.class', '--disabled');

  });
});
