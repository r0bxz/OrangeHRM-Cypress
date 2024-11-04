class JobCategoriesPage {
    clickAdd() {
      cy.contains('Add').click();
    }
  
    enterJobCategoryName(name) {
      cy.get('input.oxd-input--active').eq(1).clear().type(name);
    }
  
    clickSave() {
      cy.get('button.oxd-button--secondary').contains('Save').click();
    }
  
    clickEdit(jobCategoryName) {
      cy.contains('.oxd-table-row', jobCategoryName).within(() => {
        cy.get('.oxd-icon.bi-pencil-fill').click();
      });
    }
  
    clickDelete(jobCategoryName) {
      cy.contains('.oxd-table-row', jobCategoryName).within(() => {
        cy.get('.oxd-icon.bi-trash').click();
      });
      cy.get('button[data-v-10d463b7][data-v-8f9701a2]').contains('Yes, Delete').click();
    }
  
    verifyJobCategoryInTable(jobCategoryName) {
      cy.contains(jobCategoryName).should('exist');
    }
  
    verifyJobCategoryNotInTable(jobCategoryName) {
      cy.contains(jobCategoryName).should('not.exist');
    }
  }
  
  export default new JobCategoriesPage();
  