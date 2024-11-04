import educationPage from '../../pages/PIM/reportingMethodsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import reportingMethodsPage from '../../pages/PIM/reportingMethodsPage';

describe('Reporting Page Tests', () => {
  const newReportingMethod = `A new Reporting Method ${Math.floor(Math.random() * 1000)}`;
  const editedReportingMethod = `Edited Reporting Method ${Math.floor(Math.random() * 1000)}`;

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewReportingMethods');
  });

  it('should add a new Reporting Method', () => {
    reportingMethodsPage.clickAdd()
    reportingMethodsPage.enterReportingName(newReportingMethod)
    reportingMethodsPage.clickSave();
    reportingMethodsPage.verifyReportingInList(newReportingMethod);
  });

  it('should edit an existing Reporting Method', () => {
    reportingMethodsPage.clickEdit(newReportingMethod);
    reportingMethodsPage.enterReportingName(editedReportingMethod);
    reportingMethodsPage.clickSave();
    reportingMethodsPage.verifyReportingInList(editedReportingMethod);
  });

  it('should delete a Reporting Method', () => {
    reportingMethodsPage.clickDelete(editedReportingMethod);
    reportingMethodsPage.confirmDelete();
    reportingMethodsPage.verifyReportingNotInList(editedReportingMethod);
  });
});
