class module{
    toggleModule() {

        cy.get('.oxd-switch-input').eq(2).click();
        cy.get('.oxd-switch-input').eq(4).click();
        cy.get('.oxd-switch-input').eq(7).click();
        cy.get('.oxd-switch-input').eq(2).click();
        cy.get('.oxd-switch-input').eq(4).click();
        cy.get('.oxd-switch-input').eq(7).click();
    }

    
    clickSaveButton() {
      cy.contains('button', 'Save').click();
    }
  
  }
  
  export default new module();
  