class GeneralInformationPage {
    toggleSwitch() {
      cy.get('.oxd-switch-input').click();
    }

    enterPhoneNumber(phone) {
      cy.get('input.oxd-input--active').eq(3).clear().type(phone);
    }
  
    enterCity(city) {
      cy.get('input.oxd-input--active').eq(8).clear().type(city);
    }
  
    clickSave() {
      cy.contains('button', 'Save').click();
    }
  
    verifySuccessMessage() {
      cy.contains('Success').should('be.visible');
    }
  }
  
  export default new GeneralInformationPage();
  