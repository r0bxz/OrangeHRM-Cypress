import educationPage from '../../pages/Admin/educationPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Education Page Tests', () => {
  const newEducationLevel = `Education ${Math.floor(Math.random() * 1000)}`;
  const editedEducationLevel = `Edited Education ${Math.floor(Math.random() * 1000)}`;
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewEducation');
  });

  it('should add a new education level', () => {
    educationPage.clickAddEducation();
    educationPage.enterEducationLevel(newEducationLevel);
    educationPage.clickSaveEducation();
    educationPage.verifyEducationInList(newEducationLevel);
  });

  it('should edit an existing education level', () => {
    educationPage.clickEditEducation(newEducationLevel);
    educationPage.enterEducationLevel(editedEducationLevel);
    educationPage.clickSaveEducation();
    educationPage.verifyEducationInList(editedEducationLevel);
  });

  it('should delete an education level', () => {
    educationPage.clickDeleteEducation(editedEducationLevel);
    educationPage.confirmDelete();
    educationPage.verifyEducationNotInList(editedEducationLevel);
  });
});
