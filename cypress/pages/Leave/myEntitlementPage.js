class myEntitlementsPage {

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

}

export default new myEntitlementsPage();
