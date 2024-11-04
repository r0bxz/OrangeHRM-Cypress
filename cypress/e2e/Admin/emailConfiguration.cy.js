import emailConfigurationPage from '../../pages/Admin/emailConfigurationPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Email Configuration Page Tests', () => {
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/listMailConfiguration');
  });

  it('should configure SECURE SMTP and doesnt send a test mail', () => {
    emailConfigurationPage.enterMailSentAs('admin@mail.com');
    emailConfigurationPage.selectSendingMethod('smtps');
    emailConfigurationPage.enterSMTPHost('smtp.example.com');
    emailConfigurationPage.enterSMTPPort('465');
    emailConfigurationPage.toggleSMTPAuthentication(false);
    emailConfigurationPage.toggleTLS();
    emailConfigurationPage.clickSendTestMail();
    emailConfigurationPage.sendEmail('mahmoud@gamil.com');
    emailConfigurationPage.clickSave();
    cy.contains('Success').should('be.visible');
    cy.contains('Test Email Not Sent').should('be.visible');
    
  });

  it('should configure SMTP and doesnt send a test mail', () => {
    emailConfigurationPage.enterMailSentAs('admin@mail.com');
    emailConfigurationPage.selectSendingMethod('smtps');
    emailConfigurationPage.enterSMTPHost('smtp.example.com');
    emailConfigurationPage.enterSMTPPort('465');
    emailConfigurationPage.toggleSMTPAuthentication(false);
    emailConfigurationPage.toggleTLS();
    emailConfigurationPage.clickSendTestMail();
    emailConfigurationPage.sendEmail('mahmoud@gamil.com');
    emailConfigurationPage.clickSave();
    cy.contains('Success').should('be.visible');
    cy.contains('Test Email Not Sent').should('be.visible');
  });

  it('should configure Sendmail and verify no additional fields', () => {
    emailConfigurationPage.enterMailSentAs('admin@mail.com');
    emailConfigurationPage.selectSendingMethod('sendmail');
    cy.get('.oxd-switch-input').click();
    cy.get('.oxd-input').eq(2).clear().type('mahmoud@gmail.com');
    emailConfigurationPage.clickSave();
    cy.contains('Test Email Sent').should('be.visible');
    cy.contains('Success').should('be.visible');
    cy.contains('smtpHost').should('not.exist');
    cy.contains('smtpPort').should('not.exist');
  });
});