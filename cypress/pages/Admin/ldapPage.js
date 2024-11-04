class LDAPConfigurationPage {
    toggleEnableLDAP() {
      cy.get('input[type="checkbox"]').first().click();
    }
  
    enterHost(host) {
      cy.get('.oxd-input').eq(1).clear().type(host);
    }
  
    enterPort(port) {
        cy.get('.oxd-input').eq(2).clear().type(port);
    }
  
    selectEncryption(encryption) {
      cy.get('.oxd-select-text-input').eq(0).click();
      cy.get('.oxd-select-option').contains(encryption).click();

    }
  
    selectLDAPImplementation(implementation) {
        cy.get('.oxd-select-text-input').eq(1).click();
        cy.get('.oxd-select-option').contains(implementation).click();
    }
  
    enterDistinguishedName(dn) {
        cy.get('.oxd-input').eq(3).clear().type(dn);
    }
  
    enterPassword(password) {
        cy.get('.oxd-input').eq(4).clear().type(password);
    }
  
    enterBaseDistinguishedName(baseDn) {
        cy.get('.oxd-input').eq(5).clear().type(baseDn);
    }
  
    enterUserNameAttribute(attribute) {
        cy.get('.oxd-input').eq(6).clear().type(attribute);
    }
  
    enterUserSearchFilter(filter) {
        cy.get('.oxd-input').eq(7).clear().type(filter);
    }
  
    enterUserUniqueIDAttribute(attribute) {
        cy.get('.oxd-input').eq(8).clear().type(attribute);
    }
  
    enterFieldMapping(firstName, lastName, email, employeeId) {
        cy.get('.oxd-input').eq(9).clear().type(firstName);
        cy.get('.oxd-input').eq(11).clear().type(lastName);
        cy.get('.oxd-input').eq(13).clear().type(email);
        cy.get('.oxd-input').eq(14).clear().type(employeeId);
    }
  
    setSyncInterval(interval) {
        cy.get('.oxd-input').eq(15).clear().type(interval);
    }
  
    clickTestConnection() {
      cy.contains('Test Connection').click();
    }
  
    clickSave() {
      cy.contains('Save').click();
    }
  
    verifyLDAPDisabled() {
      cy.get('input[type="checkbox"]').first().should('not.be.checked');
    }
  }
  
  export default new LDAPConfigurationPage();
  