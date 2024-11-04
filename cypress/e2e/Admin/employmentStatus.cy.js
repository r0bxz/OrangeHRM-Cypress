import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import employmentStatusPage from '../../pages/Admin/employmentStatusPage';

describe('Employment Status Page Tests', () => {
  let randomStatusName;
  let anotherRandomStatusName;
  const randomNum = Math.floor(Math.random() * 10000);
  randomStatusName = `Status ${randomNum}`;
  anotherRandomStatusName = `Status ${randomNum+1}`;

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/employmentStatus');
  });

  it('should add a new employment status and verify in the list', () => {
    employmentStatusPage.clickAdd();
    employmentStatusPage.enterEmploymentStatusName(randomStatusName);
    employmentStatusPage.clickSave();
    employmentStatusPage.verifyEmploymentStatusInTable(randomStatusName);
  });

  it('should edit an existing employment status', () => {
    employmentStatusPage.clickEdit(randomStatusName);
    employmentStatusPage.enterEmploymentStatusName(anotherRandomStatusName);
    employmentStatusPage.clickSave();
    employmentStatusPage.verifyEmploymentStatusInTable(anotherRandomStatusName);
    employmentStatusPage.verifyEmploymentStatusNotInTable(randomStatusName);
  });

  it('should delete an existing employment status', () => {
    employmentStatusPage.clickDelete(anotherRandomStatusName);
    employmentStatusPage.verifyEmploymentStatusNotInTable(anotherRandomStatusName);
  });
});
