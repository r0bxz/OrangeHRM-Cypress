class leaveEntitlementsPage {

    enterEmployeeName(name) {
        cy.get('input[placeholder="Type for hints..."]').clear().type(name);
        cy.contains('.oxd-autocomplete-option', name).click();
    }

    selectLeaveType(type) {
        cy.get('.oxd-select-text-input').eq(0).click();
        cy.contains('.oxd-select-option', type).click();
    }

    selectLeavePeriod(period) {
        cy.get('.oxd-select-text-input').eq(1).click();
        cy.contains('.oxd-select-option', period).click();
    }

    clickSearch() {
        cy.contains('button', 'Search').click();
    }

    verifySearchResult(employeeName) {
        cy.get('.oxd-table-row').should('contain.text', employeeName);
    }
}

export default new leaveEntitlementsPage();
