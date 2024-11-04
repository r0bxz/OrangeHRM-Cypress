class LocalizationPage {
    clickLanguageSelection() {
      cy.get('.oxd-select-text-input').eq(0).click();
    }
  
    selectLanguage(language) {
      cy.get('.oxd-select-dropdown').contains(language).click();
    }
  
    clickDateFormatSelection() {
      cy.get('.oxd-select-text-input').eq(1).click();
    }
  
    selectDateFormat(format) {
      cy.get('.oxd-select-dropdown').contains(format).click();
    }

    clickSave() {
      cy.contains('button', 'Save').click();
    }
  
    verifySettings(language, dateFormat) {
      cy.get('.oxd-select-text-input').eq(0).should('contain.text', language);
      cy.get('.oxd-select-text-input').eq(1).should('contain.text', dateFormat);
    }
  }
  
  export default new LocalizationPage();
  