class educationPage {
  
    clickAddEducation() {
      cy.contains('button', 'Add').click();
    }
  
    enterEducationLevel(level) {
      cy.get('input[class*="oxd-input"]').eq(1).clear().type(level);
    }
  
    clickSaveEducation() {
      cy.contains('button', 'Save').click();
    }
  
    clickEditEducation(educationLevel) {
      cy.contains('.oxd-table-row', educationLevel).within(() => {
        cy.get('i[class*="bi-pencil"]').click();
      });
    }
  
    clickDeleteEducation(educationLevel) {
      cy.contains('.oxd-table-row', educationLevel).within(() => {
        cy.get('i[class*="bi-trash"]').click();
      });
    }
  
    confirmDelete() {
      cy.contains('button', 'Yes, Delete').click();
    }
  
    verifyEducationInList(educationLevel) {
      cy.contains('.oxd-table-row', educationLevel).should('exist');
    }
  
    verifyEducationNotInList(educationLevel) {
      cy.contains('.oxd-table-row', educationLevel).should('not.exist');
    }
  }
  
  export default new educationPage();
  