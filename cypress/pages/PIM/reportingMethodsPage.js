class reportingPage {
  
    clickAdd() {
      cy.contains('button', 'Add').click();
    }
  
    enterReportingName(name) {
      cy.get('.oxd-input').eq(1).clear().type(name);
    }
  
    clickSave() {
      cy.contains('button', 'Save').click();
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
  
    verifyReportingInList(name) {
      cy.contains('.oxd-table-row', name).should('exist');
    }
  
    verifyReportingNotInList(name) {
      cy.contains('.oxd-table-row', name).should('not.exist');
    }
  }
  
  export default new reportingPage();
  