import emailSubscriptionsPage from '../../pages/Admin/emailSubscriptionsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Email Subscriptions Page Tests', () => {
  let num = Math.floor(Math.random() * 1000);
  let email = `john.doe${num}@example.com`;
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewEmailNotification');
  });

  it('should toggle Leave Applications notification and show success message', () => {
    emailSubscriptionsPage.toggleNotificationType('Leave Applications');
    emailSubscriptionsPage.verifySuccessMessage();
  });

  it('should add a new subscriber and verify the addition', () => {
    emailSubscriptionsPage.clickAddIconButton();
    emailSubscriptionsPage.clickAdd();
    emailSubscriptionsPage.enterSubscriberName('John Doe');
    emailSubscriptionsPage.enterSubscriberEmail(email);
    emailSubscriptionsPage.clickSave();
    cy.contains('John Doe').should('exist');
    cy.contains('.oxd-table-row',email).should('be.visible');
  });
});
