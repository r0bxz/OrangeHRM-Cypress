class socialMediaPage {
    clickAddProvider() {
      cy.contains('Add').click();
    }
  
    enterProviderName(name) {
      cy.get('.oxd-input').eq(1).clear().type(name);
    }
  
    enterProviderUrl(url) {
      cy.get('.oxd-input').eq(2).clear().type(url);
    }
  
    enterClientId(clientId) {
      cy.get('.oxd-input').eq(3).clear().type(clientId);
    }
  
    enterClientSecret(clientSecret) {
      cy.get('.oxd-input').eq(4).clear().type(clientSecret);
    }
  
    clickSave() {
      cy.contains('Save').click();
    }
  
    editFirstProvider(newName, newUrl) {
      cy.get('table tbody tr').first().within(() => {
        cy.contains('Edit').click();
      });
      this.enterProviderName(newName);
      this.enterProviderUrl(newUrl);
      this.clickSave();
    }
  
    deleteFirstProvider() {
      cy.get('table tbody tr').first().within(() => {
        cy.contains('Delete').click();
      });
      cy.contains('Confirm').click();
    }
  }
  
  export default new socialMediaPage();
  