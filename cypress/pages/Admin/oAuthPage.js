class oAuthPage {
    clickAddClient() {
      cy.contains('Add').click();
    }
  
    enterClientName(name) {
      cy.get('.oxd-input').eq(1).clear().type(name);
    }
  
    enterRedirectUri(uri) {
      cy.get('.oxd-input').eq(2).clear().type(uri);
    }
  
    clickSave() {
      cy.contains('Save').click();
    }
  
    editFirstClient(newName, newUri) {
      cy.get('table tbody tr').first().within(() => {
        cy.contains('Edit').click();
      });
      this.enterClientName(newName);
      this.enterRedirectUri(newUri);
      this.clickSave();
    }
  
    deleteFirstClient() {
      cy.get('table tbody tr').first().within(() => {
        cy.contains('Delete').click();
      });
      cy.contains('Confirm').click();
    }
  }
  
  export default new oAuthPage();
  