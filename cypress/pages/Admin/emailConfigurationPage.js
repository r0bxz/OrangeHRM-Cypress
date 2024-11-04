class EmailConfigurationPage {
    enterMailSentAs(email) {
      cy.get('.oxd-input').eq(1).clear().type(email);
    }
  
    selectSendingMethod(method) {
      cy.get(`input[type="radio"][value="${method}"]`).check({force:true});
    }
  
    enterSMTPHost(host) {
      cy.get('.oxd-input').eq(2).clear().type(host);
    }
  
    enterSMTPPort(port) {
      cy.get('.oxd-input').eq(3).clear().type(port);
    }
  
    toggleSMTPAuthentication(enable) {
      cy.get(`input[type="radio"][value="${enable ? 'login' : 'none'}"]`).check({force:true});
    }
  
    toggleTLS() {
      cy.get('.oxd-switch-input').eq(0).click();
    }
  
    clickSendTestMail() {
        cy.get('.oxd-switch-input').eq(1).click();
    }
  
    clickReset() {
      cy.contains('button', 'Reset').click();
    }
  
    clickSave() {
      cy.contains('button', 'Save').click();
    }

    sendEmail (email){
        cy.get('.oxd-input').eq(4).clear().type(email);
    }
  }
  
  export default new EmailConfigurationPage();
  