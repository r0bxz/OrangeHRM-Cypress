class licensesPage {
  
    clickAddLicense() {
      cy.contains('button', 'Add').click();
    }
  
    enterLicenseName(name) {
      cy.get('input[class*="oxd-input"]').eq(1).clear().type(name);
    }
  
    clickSaveLicense() {
      cy.contains('button', 'Save').click();
    }
  
    clickEditLicense(licenseName) {
      cy.contains('.oxd-table-row', licenseName).within(() => {
        cy.get('i[class*="bi-pencil"]').click();
      });
    }
  
    clickDeleteLicense(licenseName) {
      cy.contains('.oxd-table-row', licenseName).within(() => {
        cy.get('i[class*="bi-trash"]').click();
      });
    }
  
    confirmDelete() {
      cy.contains('button', 'Yes, Delete').click();
    }
  
    verifyLicenseInList(licenseName) {
      cy.contains('.oxd-table-row', licenseName).should('exist');
    }
  
    verifyLicenseNotInList(licenseName) {
      cy.contains('.oxd-table-row', licenseName).should('not.exist');
    }
  }
  
  export default new licensesPage();
  