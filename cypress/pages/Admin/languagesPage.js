class languagesPage {
  
    clickAddLanguage() {
      cy.contains('button', 'Add').click();
    }
  
    enterLanguageName(name) {
      cy.get('input[class*="oxd-input"]').eq(1).clear().type(name);
    }
  
    clickSaveLanguage() {
      cy.contains('button', 'Save').click();
    }
  
    clickEditLanguage(languageName) {
      cy.contains('.oxd-table-row', languageName).within(() => {
        cy.get('i[class*="bi-pencil"]').click();
      });
    }
  
    clickDeleteLanguage(languageName) {
      cy.contains('.oxd-table-row', languageName).within(() => {
        cy.get('i[class*="bi-trash"]').click();
      });
    }
  
    confirmDelete() {
      cy.contains('button', 'Yes, Delete').click();
    }
  
    verifyLanguageInList(languageName) {
      cy.contains('.oxd-table-row', languageName).should('exist');
    }
  
    verifyLanguageNotInList(languageName) {
      cy.contains('.oxd-table-row', languageName).should('not.exist');
    }
  }
  
  export default new languagesPage();
  