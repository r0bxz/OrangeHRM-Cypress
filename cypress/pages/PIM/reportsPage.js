class employeeReportsPage {

    clickAdd() {
      cy.contains('button', 'Add').click();
    }
  
    enterReportName(reportName) {
      cy.get('.oxd-input').eq(1).clear().type(reportName);
    }
  
    searchReport(name) {
      cy.get('input[placeholder="Type for hints..."]').clear().type(name);
      cy.contains('button', 'Search').click();
    }
  
    resetSearch() {
      cy.contains('button', 'Reset').click();
    }
  
    clickSave() {
      cy.contains('button', 'Save').click();
    }
  
    clickCancel() {
      cy.contains('button', 'Cancel').click();
    }
  
    selectSelectionCriteria(criteria,within) {
      cy.get('.oxd-select-text-input').eq(0).click();
      cy.contains(criteria).click();
      cy.get('button.oxd-icon-button.orangehrm-report-icon').eq(0).click();
      cy.get('.oxd-select-text-input').eq(2).click();
        cy.contains(within).click();

    }
  
    includeCurrentEmployeesOnly(include) {
        cy.get('.oxd-select-text-input').eq(1).click();
        cy.contains(include).click();
    }
  
    selectDisplayFieldGroup(fieldGroup) {
        cy.get('.oxd-select-text-input').eq(3).click();
        cy.contains(fieldGroup).click();
    }
  
    selectDisplayField(field) {
      cy.get('.oxd-select-text-input').eq(4).click();
        cy.contains(field).click();
        cy.get('button.oxd-icon-button.orangehrm-report-icon').eq(1).click();
    }
  
    verifyReportInList(name) {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewDefinedPredefinedReports')
      cy.contains('.oxd-table-row', name).should('exist');
    }
  
    verifyReportNotInList(name) {
      cy.contains('.oxd-table-row', name).should('not.exist');
    }
  
    clickEdit(name) {
      cy.contains('.oxd-table-row', name).within(() => {
        cy.get('i[class*="bi-pencil"]').click();
      });
    }
  
    clickDelete(name) {
      cy.contains('.oxd-table-row', name).within(() => {
        cy.get('i[class*="bi-trash"]').click();
      });
    }
  
    confirmDelete() {
      cy.contains('button', 'Yes, Delete').click();
    }
  }
  
  export default new employeeReportsPage();
  