class leaveEntitlementsUsageReportPage {

    selectGenerateFor(value) {
        cy.get('.oxd-radio-input').eq(value).click();
    }

    enterEmployeeName(employeeName) {
        cy.get('input[placeholder="Type for hints..."]').clear().type(employeeName);
        cy.contains('.oxd-autocomplete-option', employeeName).click();
    }

    selectLeaveType(type) {
        cy.get('.oxd-select-text-input').eq(0).click();
        cy.contains('.oxd-select-option', type).click();
    }

    selectLeavePeriodForEmployee(period) {
        cy.get('.oxd-select-text-input').eq(0).click();
        cy.contains('.oxd-select-option', period).click();
    }

    selectLocation(location) {
        cy.get('.oxd-select-text-input').eq(2).click();
        cy.contains('.oxd-select-option', location).click();
    }

    selectLeavePeriod(period) {
        cy.get('.oxd-select-text-input').eq(1).click();
        cy.contains('.oxd-select-option', period).click();
    }

    clickGenerate() {
        cy.contains('button', 'Generate').click();
    }
}

export default new leaveEntitlementsUsageReportPage();
