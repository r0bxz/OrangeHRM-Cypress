class AssignLeavePage {
    enterEmployeeName(employeeName) {
        cy.get('input[placeholder="Type for hints..."]').clear().type(employeeName);
        cy.contains('.oxd-autocomplete-option', employeeName).click();
    }

    selectLeaveType(type) {
        cy.get('.oxd-select-text-input').eq(0).click();
        cy.contains('.oxd-select-option', type).click();
    }

    selectPartialDays(day) {
        cy.get('.oxd-select-text-input').eq(1).click();
        cy.contains('.oxd-select-option', day).click();
    }

    selectDuration(duration) {
        cy.get('.oxd-select-text-input').eq(2).click();
        cy.contains('.oxd-select-option', duration).click();
    }

    getLeaveBalance() {
        return cy.get('.oxd-input-group__label').eq(1).next().invoke('text');
    }

    setLeaveDates(fromDate, toDate) {
        cy.get('.oxd-input').eq(1).clear().type(fromDate);
        cy.get('.oxd-input').eq(2).clear().type(toDate);
    }

    enterComments(comments) {
        cy.get('textarea').clear({force:true}).type(comments);
    }

    clickAssign() {
        cy.contains('button', 'Assign').click();
    }

    verifySuccessMessage() {
        cy.get('body').then(($body) => {
            if ($body.text().includes('Balance not sufficient')) {
                cy.contains('Warning').should('be.visible');
            } else {
                cy.contains('Success').should('be.visible');
            }
        });
    }
}

export default new AssignLeavePage();
