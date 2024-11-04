class EmploymentStatusPage {
    clickAdd() {
      cy.contains('Add').click();
    }
  
    enterEmploymentStatusName(name) {
      cy.get('input.oxd-input').eq(1).clear().type(name);
    }
  
    clickSave() {
      cy.get('button.oxd-button--secondary').contains('Save').click();
    }
  
    clickEdit(employmentStatusName) {
      cy.contains('.oxd-table-row', employmentStatusName).within(() => {
        cy.get('.oxd-icon.bi-pencil-fill').click();
      });
    }
  
    
    clickDelete(employmentStatusName) {
      cy.contains('.oxd-table-row', employmentStatusName).within(() => {
        cy.get('.oxd-icon.bi-trash').click();
      });
      cy.get('button[data-v-10d463b7][data-v-8f9701a2]').contains('Yes, Delete').click();
    }
  

    verifyEmploymentStatusInTable(employmentStatusName) {
      cy.contains(employmentStatusName).should('exist');
    }
  
    verifyEmploymentStatusNotInTable(employmentStatusName) {
      cy.contains(employmentStatusName).should('not.exist');
    }
  }
  
  export default new EmploymentStatusPage();
  