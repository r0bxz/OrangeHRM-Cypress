import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import generalInformationPage from '../../pages/Admin/generalInformationPage';

describe('General Information Page Tests', () => {
  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewOrganizationGeneralInformation');
  });

  it('should edit phone number and city, then verify the success message', () => {

    generalInformationPage.toggleSwitch();

    const newPhoneNumber = '0987654321';
    generalInformationPage.enterPhoneNumber(newPhoneNumber);

    const newCity = 'New York';
    generalInformationPage.enterCity(newCity);

    generalInformationPage.clickSave();

    generalInformationPage.verifySuccessMessage();
  });
});
