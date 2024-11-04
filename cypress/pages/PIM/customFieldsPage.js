class CustomFieldsPage {

    clickAdd() {
        cy.contains('button','Add').click();
    }

    enterFieldName(fieldName) {
        cy.get('.oxd-input').eq(1).clear().type(fieldName);
    }

    selectScreen(screenName) {
        cy.get('.oxd-select-text').eq(0).click()
        cy.get('.oxd-select-option').contains(screenName).click();

    }

    selectType(type) {
        cy.get('.oxd-select-text').eq(1).click()
        cy.get('.oxd-select-option').contains(type).click();
    }

    clickSave() {
        cy.contains('Save').click();
    }

    clickEditField(fieldName) {
        cy.contains('.oxd-table-row', fieldName).within(() => {
            cy.get('i[class*="bi-pencil"]').click();
          });
    }

    deleteField(fieldName) {
        cy.contains('.oxd-table-row', fieldName).within(() => {
            cy.get('i[class*="bi-trash"]').click();
          }); 

          cy.contains('button','Yes, Delete').click();
    }

    verifyCustomFieldInTable(fieldName, screenName, fieldType) {
        cy.contains(fieldName).should('exist');
        cy.contains(screenName).should('exist');
        cy.contains(fieldType).should('exist');
    }

    verifyFieldNotInTable(fieldName) {
        cy.contains(fieldName).should('not.exist');
    }
}

export default new CustomFieldsPage();
