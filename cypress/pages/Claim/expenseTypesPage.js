class ExpenseTypesPage {
    fillExpenseTypeName(name) {
        cy.get('.oxd-input').eq(1).clear().type(name);
    }

    fillExpenseTypeNameForSearch(name) {
        cy.get('input[placeholder="Type for hints..."]').clear().type(name);
    }

    fillDescription(description) {
        cy.get('textarea').clear().type(description);
    }

    toggleActiveStatus() {
        cy.get('.oxd-switch-input').click();
    }

    clickSave() {
        cy.contains('Save').click();
    }

    clickSearch() {
        cy.contains('Search').click();
    }
}

export default new ExpenseTypesPage();
