import languagesPage from '../../pages/Admin/languagesPage';
import loginPage from '../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Languages Page Tests', () => {
  const newLanguageName = `Language ${Math.floor(Math.random() * 1000)}`;
  const editedLanguageName = `Edited Language ${Math.floor(Math.random() * 1000)}`;

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewLanguages');
  });

  it('should add a new language', () => {
    languagesPage.clickAddLanguage();
    languagesPage.enterLanguageName(newLanguageName);
    languagesPage.clickSaveLanguage();
    languagesPage.verifyLanguageInList(newLanguageName);
  });

  it('should edit an existing language', () => {
    languagesPage.clickEditLanguage(newLanguageName);
    languagesPage.enterLanguageName(editedLanguageName);
    languagesPage.clickSaveLanguage();
    languagesPage.verifyLanguageInList(editedLanguageName);
  });

  it('should delete a language', () => {
    languagesPage.clickDeleteLanguage(editedLanguageName);
    languagesPage.confirmDelete();
    languagesPage.verifyLanguageNotInList(editedLanguageName);
  });
});
