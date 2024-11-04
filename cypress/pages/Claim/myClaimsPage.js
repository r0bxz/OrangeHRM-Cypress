class MyClaimsPage {
    selectEvent(event) {
        cy.get('.oxd-select-text-input').eq(0).click();
        cy.contains('.oxd-select-option', event).click();
    }

    selectCurrency(currency) {
        cy.get('.oxd-select-text-input').eq(1).click();
        cy.contains('.oxd-select-option', currency).click();
    }

    fillRemarks(remarks) {
        cy.get('textarea').type(remarks);
    }

    clickCreate() {
        cy.contains('button', 'Create').click();
    }

    fillReferenceId(referenceId) {
        cy.get('input[placeholder="Type for hints..."]').clear().type(referenceId);
    }

    clickSearch() {
        cy.contains('button', 'Search').click();
    }

    verifyClaimInResults(referenceId) {
        cy.contains('td', referenceId).should('be.visible');
    }
}

export default new MyClaimsPage();
