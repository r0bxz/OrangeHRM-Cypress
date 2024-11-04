import ldapConfigurationPage from '../../pages/Admin/ldapPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('LDAP Configuration Page Tests', () => {
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/ldapConfiguration');
  });

  it('should configure LDAP and test the connection', () => {
    ldapConfigurationPage.toggleEnableLDAP();
    ldapConfigurationPage.enterHost('localhost');
    ldapConfigurationPage.enterPort('389');
    ldapConfigurationPage.selectEncryption('SSL');
    ldapConfigurationPage.selectLDAPImplementation('Open LDAP v3');
    ldapConfigurationPage.enterDistinguishedName('cn=admin,dc=example,dc=com');
    ldapConfigurationPage.enterPassword('admin_password');
    ldapConfigurationPage.enterBaseDistinguishedName('dc=example,dc=com');
    ldapConfigurationPage.enterUserNameAttribute('cn');
    ldapConfigurationPage.enterUserSearchFilter('objectClass=person');
    ldapConfigurationPage.enterUserUniqueIDAttribute('entryUUID');
    ldapConfigurationPage.enterFieldMapping('givenName', 'sn', 'mail', 'employeeNumber');
    ldapConfigurationPage.setSyncInterval('1');
    ldapConfigurationPage.clickTestConnection()
  });

  it('should disable LDAP and verify it is disabled', () => {
    ldapConfigurationPage.toggleEnableLDAP();
    ldapConfigurationPage.clickSave();
  });
});
