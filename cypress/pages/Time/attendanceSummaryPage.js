class AttendanceTotalSummaryReportPage {
    enterEmployeeName(employeeName) {
        cy.get('input[placeholder="Type for hints..."]').clear().type(employeeName);
        cy.contains('.oxd-autocomplete-option', employeeName).click();
    }

    selectJobTitle(jobTitle) {
        cy.get('.oxd-select-text-input').eq(0).click();
        cy.contains('.oxd-select-option', jobTitle).click();
    }

    selectSubUnit(subUnit) {
        cy.get('.oxd-select-text-input').eq(1).click();
        cy.contains('.oxd-select-option', subUnit).click();
    }

    selectEmploymentStatus(employmentStatus) {
        cy.get('.oxd-select-text-input').eq(2).click();
        cy.contains('.oxd-select-option', employmentStatus).click();
    }

    setDateRange(fromDate, toDate) {
        cy.get('input[placeholder="From"]').clear().type(fromDate);
        cy.get('input[placeholder="To"]').clear().type(toDate);
    }

    clickView() {
        cy.contains('button', 'View').click({force:true});
    }
}

export default new AttendanceTotalSummaryReportPage();
