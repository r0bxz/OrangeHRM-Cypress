import oauthClientListPage from '../../pages/Admin/oAuthPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('OAuth Client List Page Tests', () => {
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/registerOAuthClient');
  });

  it('should add a new OAuth client', () => {
    oauthClientListPage.clickAddClient();
    const randomNum = Math.floor(Math.random() * 1000);
    const clientName = `Client${randomNum}`;
    const redirectUri = `https://client${randomNum}.com/oauthredirect`;

    oauthClientListPage.enterClientName(clientName);
    oauthClientListPage.enterRedirectUri(redirectUri);
    oauthClientListPage.clickSave();
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/registerOAuthClient');
    cy.contains(clientName).should('be.visible');
    cy.contains(redirectUri).should('be.visible');
  });

});
