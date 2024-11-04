class addEmployeePage {

    enterFirstName(firstName) {
      cy.get('.oxd-input').eq(1).clear().type(firstName);
    }
  
    enterMiddleName(middleName) {
      cy.get('.oxd-input').eq(2).clear().type(middleName);
    }
  
    enterLastName(lastName) {
      cy.get('.oxd-input').eq(3).clear().type(lastName);
    }
  
    enterEmployeeId(employeeId) {
      cy.get('.oxd-input').eq(4).clear().type(employeeId);
    }
  
    uploadProfilePicture(filePath) {
      cy.get('input[type="file"]').selectFile(filePath,{force:true});
    }
  
    toggleCreateLoginDetails() {
      cy.get('.oxd-input-switch').click();
    }
  
    clickSave() {
      cy.contains('button', 'Save').click();
    }
  
    clickCancel() {
      cy.contains('button', 'Cancel').click();
    }
  
    verifyEmployeeAdded(lastName) {
      cy.contains('h6', `${lastName}`).should('exist');
    }
  }
  
  export default new addEmployeePage();
  