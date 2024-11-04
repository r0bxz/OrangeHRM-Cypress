import organizationStructurePage from '../../pages/Admin/structurePage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Organization Structure Tests', () => {
  const newUnitName = `Unit ${Math.floor(Math.random() * 1000)}`;
  const editedUnitName = `Edited Unit ${Math.floor(Math.random() * 1000)}`;
  const unitDescription = 'This is a test unit description.';

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewCompanyStructure');
  });

  it('should add a new organization unit', () => {
    organizationStructurePage.clickEditSwitch();
    organizationStructurePage.clickAddUnit();
    organizationStructurePage.enterUnitId(Math.floor(Math.random() * 1000));
    organizationStructurePage.enterUnitName(newUnitName);
    organizationStructurePage.enterUnitDescription(unitDescription);
    organizationStructurePage.clickSaveUnit();
    organizationStructurePage.verifyUnitInStructure(newUnitName);
  });

  it('should edit an existing organization unit', () => {
    organizationStructurePage.clickEditSwitch();
    organizationStructurePage.clickEditUnit(newUnitName);
    organizationStructurePage.enterUnitName(editedUnitName);
    organizationStructurePage.clickSaveUnit();
    organizationStructurePage.verifyUnitInStructure(editedUnitName);
  });

  it('should delete an organization unit', () => {
    organizationStructurePage.clickEditSwitch();
    organizationStructurePage.clickDeleteUnit(editedUnitName);
    organizationStructurePage.confirmDelete();
    organizationStructurePage.verifyUnitNotInStructure(editedUnitName);
  });
});
