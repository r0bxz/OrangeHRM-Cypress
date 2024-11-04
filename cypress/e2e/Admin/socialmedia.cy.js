import providerListPage from '../../pages/Admin/socialMediaPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Provider List Page Tests', () => {

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/openIdProvider');
  });

  it('should add a new provider', () => {
    providerListPage.clickAddProvider();
    const randomNum = Math.floor(Math.random() * 1000);
    const providerName = `Provider${randomNum}`;
    const providerUrl = `https://provider${randomNum}.com`;
    const clientId = `client-id-${randomNum}`;
    const clientSecret = `client-secret-${randomNum}`;

    providerListPage.enterProviderName(providerName);
    providerListPage.enterProviderUrl(providerUrl);
    providerListPage.enterClientId(clientId);
    providerListPage.enterClientSecret(clientSecret);
    providerListPage.clickSave();

    cy.contains(providerName).should('be.visible');
  });
});
