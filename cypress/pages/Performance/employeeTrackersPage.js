class EmployeePerformanceTrackersPage {
    get employeeNameField() {
      return cy.get('input[placeholder="Type for hints..."]'); // Employee name field
    }
  
    get includeCurrentOnlyCheckbox() {
      return cy.get('.oxd-select-text-input').click();
    }
  
    get searchButton() {
      return cy.contains('button', 'Search');
    }
  
    get resetButton() {
      return cy.contains('button', 'Reset');
    }
  
    clickSearch() {
      this.searchButton.click();
    }
  
    clickReset() {
      this.resetButton.click();
    }
  
    selectEmployee(employeeName) {
      this.employeeNameField.clear().type(employeeName);
      cy.contains('.oxd-autocomplete-option', employeeName).click(); // Selecting from suggestions
    }
  
  
    clickViewTracker(employeeName) {
      cy.contains('.oxd-table-row', employeeName).within(() => {
        cy.contains('button', 'View').click();
      });
    }
  
    // Reusing the log addition/edit/delete methods from PerformanceTrackersPage
    clickAddLog() {
      cy.contains('button', 'Add Log').click();
    }
  
    fillLogForm(logData) {
      cy.get('input[placeholder="Type here"]').clear().type(logData.logTitle);
      cy.get('textarea[placeholder="Type here"]').clear().type(logData.comment);
      if (logData.isPositive) {
        cy.get('.oxd-button').eq(0).click({ force: true });
      } else {
        cy.get('.oxd-button').eq(1).click({ force: true });
      }
    }
  
    clickSaveLog() {
      cy.contains('button', 'Save').click({ force: true });
    }
  
    verifyLogAdded(logTitle) {
      cy.contains('.oxd-sheet', logTitle).should('be.visible');
    }
  
    clickEditLog(logTitle) {
      cy.get('.oxd-sheet', logTitle).eq(0).within(() => {
        cy.get('button').click();
      });
      cy.contains('Edit').click();
    }
  
    clickDeleteLog(logComment) {
      cy.get('.oxd-sheet', logComment).eq(0).within(() => {
        cy.get('button').click();
      });
      cy.contains('Delete').click();
      cy.contains('button', 'Yes, Delete').click();
    }
  }
  
  export default new EmployeePerformanceTrackersPage();
  