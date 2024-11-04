import licensesPage from '../../pages/Admin/licensesPage';
import loginPage from '../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Licenses Page Tests', () => {
  const newLicenseName = `License ${Math.floor(Math.random() * 1000)}`;
  const editedLicenseName = `Edited License ${Math.floor(Math.random() * 1000)}`;

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewLicenses');
  });

  it('should add a new license', () => {
    licensesPage.clickAddLicense();
    licensesPage.enterLicenseName(newLicenseName);
    licensesPage.clickSaveLicense();
    licensesPage.verifyLicenseInList(newLicenseName);
  });

  it('should edit an existing license', () => {
    licensesPage.clickEditLicense(newLicenseName);
    licensesPage.enterLicenseName(editedLicenseName);
    licensesPage.clickSaveLicense();
    licensesPage.verifyLicenseInList(editedLicenseName);
  });

  it('should delete a license', () => {
    licensesPage.clickDeleteLicense(editedLicenseName);
    licensesPage.confirmDelete();
    licensesPage.verifyLicenseNotInList(editedLicenseName);
  });
});
