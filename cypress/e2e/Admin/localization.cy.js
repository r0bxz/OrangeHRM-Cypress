// cypress/e2e/Admin/localization.spec.js

import loginPage from '../../pages/Login/loginPage';
import localizationPage from '../../pages/Admin/localizationPage';
import loginData from '../../fixtures/loginData.json';

describe('Localization Page Tests', () => {
  const language = 'English (United States)';
  const dateFormat = 'dd-mm-yyyy';
  
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/localization');
  });

  it('should configure language and date format settings', () => {
    localizationPage.clickLanguageSelection();
    localizationPage.selectLanguage(language);
    localizationPage.clickDateFormatSelection();
    localizationPage.selectDateFormat(dateFormat);
    localizationPage.clickSave();
    localizationPage.verifySettings(language, dateFormat);
  });
});
