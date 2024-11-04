import addEmployeePage from '../../pages/PIM/addEmployeePage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Add Employee Page Tests', () => {
  const firstName = `FirstName${Math.floor(Math.random() * 1000)}`;
  const middleName = 'MiddleName';
  const lastName = `LastName${Math.floor(Math.random() * 1000)}`;
  const employeeId = `EID${Math.floor(Math.random() * 10000)}`;
  const filePath = 'logo.png'; 

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/addEmployee');
  });

  it('should add a new employee without login details', () => {
    addEmployeePage.enterFirstName(firstName);
    addEmployeePage.enterMiddleName(middleName);
    addEmployeePage.enterLastName(lastName);
    addEmployeePage.enterEmployeeId(employeeId);
    addEmployeePage.uploadProfilePicture(filePath);
    addEmployeePage.clickSave();
    addEmployeePage.verifyEmployeeAdded(lastName);
  });


  it('should cancel adding a new employee', () => {
    addEmployeePage.enterFirstName(firstName);
    addEmployeePage.clickCancel();
  });
});
