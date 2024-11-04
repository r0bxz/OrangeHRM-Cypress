class emailSubscriptionsPage {
  clickAddIconButton() {
    cy.get('.oxd-icon-button').eq(3).click();
  }

  clickAdd(){
    cy.contains('button','Add').click();
  }

  enterSubscriberName(name) {
    cy.get('.oxd-input').eq(1).type(name,{force:true});
  }
  enterSubscriberEmail(email) {
    cy.get('.oxd-input').eq(2).type(email,{force:true});
  }

  clickSave() {
    cy.contains('button', 'Save').click();
  }

  toggleNotificationType() {
    cy.get('.oxd-switch-input').eq(0).click()
  }

  verifySuccessMessage() {
    cy.contains('Success').should('be.visible');
  }

  verifyNotificationType(notificationType) {
    cy.contains(notificationType).should('exist');
  }
}

export default new emailSubscriptionsPage();
