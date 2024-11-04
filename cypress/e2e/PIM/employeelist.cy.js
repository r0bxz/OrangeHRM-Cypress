import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';
import employeeInformationPage from '../../pages/PIM/employeeListPage';

describe('Employee Information Page Tests', () => {
  let validEmployee;

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
      cy.url().should('include', '/dashboard/index');
    });
    cy.request('GET', 'https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/pim/employees?limit=50&offset=0&model=detailed&includeEmployees=onlyCurrent&sortField=employee.firstName&sortOrder=ASC')
      .then((response) => {
        const employees = response.body.data;
        validEmployee = employees[1];
      });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
  });

  it('should search for an employee by name and verify details', () => {
    employeeInformationPage.enterEmployeeName(validEmployee.lastName);
    employeeInformationPage.clickSearch();
    cy.wait(1000);
    employeeInformationPage.verifyEmployeeInTable(validEmployee.lastName);
  });

  it('should search for an employee by ID and verify details', () => {
    employeeInformationPage.enterEmployeeId(validEmployee.employeeId);
    employeeInformationPage.clickSearch();
    cy.wait(1000);
    employeeInformationPage.verifyEmployeeIdInTable(validEmployee.employeeId);
  });

  it('should reset the search form', () => {
    employeeInformationPage.enterEmployeeName('0344');
    employeeInformationPage.clickReset();
    employeeInformationPage.employeeIdField().should('have.value', '');
  });

  it('should allow editing the employee information', () => {
    employeeInformationPage.editEmployee(validEmployee.lastName);
    cy.contains('Success').should('be.visible');
  });

  it.skip('should allow deleting the employee', () => {
    employeeInformationPage.deleteEmployee(validEmployee.lastName);
  });

});
