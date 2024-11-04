import loginData from '../../fixtures/loginData.json';
import loginPage from '../../pages/Login/loginPage';

describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/'); 
  });

  it('TC_1.1 Verify the appearance banner and the url of login page', () => {
    loginPage.checkLoginBannerVisible();
    cy.url().should('include','/login')
  });

  it('TC_1.2 Verify login with valid credentials', () => {
    loginPage.enterUsername(loginData.validUser.username);
    loginPage.enterPassword(loginData.validUser.password);
    loginPage.clickSignIn();
    cy.url().should('include', '/dashboard'); 
  });

  it('TC_1.3 Verify login with invalid credentials', () => {
    loginPage.enterUsername(loginData.invalidUser.username);
    loginPage.enterPassword(loginData.invalidUser.password);
    loginPage.clickSignIn();
    cy.contains('Invalid credentials').should('be.visible'); 
  });

  it('TC_1.4 Verify that clicking the "Forgot Password" link works and sending reset link', () => {
    loginPage.clickForgotPassword();
    cy.url().should('include', '/requestPasswordResetCode'); 
    loginPage.restPassword(loginData.validUser.username)
    cy.contains('Reset Password link sent successfully').should('be.visible')
  });
  it('TC_1.5 Verify the pressing "cancel" button on Rest Password page redirects to "login" page ',() => {
    loginPage.clickForgotPassword();
    cy.url().should('include', '/requestPasswordResetCode'); 
    loginPage.cancelResetPassword();
    cy.url().should('include','/login')

});

 
});
