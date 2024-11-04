import employeeReportsPage from '../../pages/PIM/reportsPage';
import loginPage from '../../pages/Login/loginPage';
import loginData from '../../fixtures/loginData.json';

describe('Employee Reports Page Tests', () => {
  const newReportName = `New Report ${Math.floor(Math.random() * 1000)}`;
  const editedReportName = `Edited Report ${Math.floor(Math.random() * 1000)}`;
  const selectionCriteria = 'Job Title'; 
  const displayFieldGroup = 'Personal'; 
  const displayField = 'Employee Id'; 

  beforeEach(() => {
    cy.session('login', () => {
      cy.visit('https://opensource-demo.orangehrmlive.com/');
      loginPage.enterUsername(loginData.validUser.username);
      loginPage.enterPassword(loginData.validUser.password);
      loginPage.clickSignIn();
    });
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewDefinedPredefinedReports');
  });

  it('should add a new Employee Report', () => {
    employeeReportsPage.clickAdd();
    employeeReportsPage.enterReportName(newReportName);
    employeeReportsPage.selectSelectionCriteria(selectionCriteria,'IT Manager');
    employeeReportsPage.includeCurrentEmployeesOnly('Current and Past Employees');
    employeeReportsPage.selectDisplayFieldGroup(displayFieldGroup);
    employeeReportsPage.selectDisplayField(displayField);
    employeeReportsPage.clickSave();
    employeeReportsPage.verifyReportInList(newReportName);
  });

  it('should search for a specific Employee Report', () => {
    employeeReportsPage.searchReport(newReportName);
    employeeReportsPage.verifyReportInList(newReportName);
  });

  
  it('should edit an existing Employee Report', () => {
    employeeReportsPage.clickEdit(newReportName);
    employeeReportsPage.enterReportName(editedReportName);
    employeeReportsPage.clickSave();
    employeeReportsPage.verifyReportInList(editedReportName);
  });

  it('should delete an Employee Report', () => {
    employeeReportsPage.clickDelete(editedReportName);
    employeeReportsPage.confirmDelete();
    employeeReportsPage.verifyReportNotInList(editedReportName);
  });


  it('should reset the search form', () => {
    employeeReportsPage.searchReport(newReportName);
    employeeReportsPage.resetSearch();

  });
});
