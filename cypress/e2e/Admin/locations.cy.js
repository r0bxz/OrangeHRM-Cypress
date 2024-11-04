import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import locationsPage from '../../pages/Admin/locationsPage';

describe('Locations Page Search Functionality', () => {
    let randomLocationNamE ;
    const randomNum = Math.floor(Math.random() * 10000);
    randomLocationNamE= `Location ${randomNum}`;

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewLocations');
  });
  it('should add a new location and verify the success message', () => {
    locationsPage.clickAddLocation();
    const city = 'Test City';
    const state = 'Test State';
    const zip = '12345';
    const country = 'United States';
    const phone = '123-456-7890';
    const fax = '123-456-7891';
    const address = '123 Test Address';
    const notes = 'Test Notes';

    locationsPage.enterLocationName(randomLocationNamE);
    locationsPage.enterCity(city);
    locationsPage.enterState(state);
    locationsPage.enterZipCode(zip);
    locationsPage.selectCountry(country);
    locationsPage.enterPhone(phone);
    locationsPage.enterFax(fax);
    locationsPage.clickSave();
    locationsPage.verifySuccessMessage();
  });

  it('should search for a location by name and verify the results', () => {
    locationsPage.searchByName(randomLocationNamE);
    locationsPage.clickSearch();

    locationsPage.verifySearchResults(randomLocationNamE);
  });

  it('should search for a location by city and verify the results', () => {
    const searchCity = 'New York';

    locationsPage.searchByCity(searchCity);
    locationsPage.clickSearch();


    locationsPage.verifySearchResults(searchCity);
  });

  it('should search for a location by country and verify the results', () => {
    const searchCountry = 'United States';

    locationsPage.searchByCountry(searchCountry);
    locationsPage.clickSearch();

    locationsPage.verifySearchResults(searchCountry);
  });

});
