class LeavePeriodPage {
    selectStartMonth(month) {
        cy.get('.oxd-select-text-input').eq(0).click();
        cy.contains('.oxd-select-option', month).click();
    }

    selectStartDate(date) {
        cy.get('.oxd-select-text-input').eq(1).click();
        cy.contains('.oxd-select-option', date).click();
    }

    verifyCurrentLeavePeriod(period) {
        cy.get('.oxd-text').contains(period).should('be.visible');
    }

    clickSave() {
        cy.contains('button', 'Save').click();
    }

    clickReset() {
        cy.contains('button', 'Reset').click();
    }
}

export default new LeavePeriodPage();
