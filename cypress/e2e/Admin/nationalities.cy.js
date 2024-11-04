import nationalitiesPage from '../../pages/Admin/nationalitiesPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Nationalities Page Tests', () => {
  const newNationalityName = `Nationality ${Math.floor(Math.random() * 1000)}`;
  const editedNationalityName = `Edited Nationality ${Math.floor(Math.random() * 1000)}`;

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/nationality');
  });

  it('should add a new nationality', () => {
    nationalitiesPage.clickAddNationality();
    nationalitiesPage.enterNationalityName(newNationalityName);
    nationalitiesPage.clickSaveNationality();
    nationalitiesPage.searchNationalityAcrossPages(newNationalityName);
  });

  it('should edit an existing nationality', () => {
    nationalitiesPage.searchNationalityAcrossPages(newNationalityName); // Ensure nationality is present
    nationalitiesPage.clickEditNationality(newNationalityName);
    nationalitiesPage.enterNationalityName(editedNationalityName);
    nationalitiesPage.clickSaveNationality();
    nationalitiesPage.searchNationalityAcrossPages(editedNationalityName);
  });

  it('should delete a nationality', () => {
    nationalitiesPage.searchNationalityAcrossPages(editedNationalityName); // Ensure nationality is present
    nationalitiesPage.clickDeleteNationality(editedNationalityName);
    nationalitiesPage.confirmDelete();
    nationalitiesPage.searchNationalityAcrossPages(editedNationalityName);
  });
});
