class PurgeEmployeeRecordsPage {
    get employeeNameField() {
        return cy.get('input[placeholder="Type for hints..."]');
    }

    get searchButton() {
        return cy.contains('button', 'Search');
    }

    fillEmployeeName(employeeName) {
        this.employeeNameField.clear().type(employeeName);
        cy.contains('.oxd-autocomplete-option', employeeName).click();
    }

    clickSearch() {
        this.searchButton.click();
    }

    verifyEmployeeInResults(employeeName) {
        cy.contains('.oxd-table-cell', employeeName).should('be.visible');
    }
}

export default new PurgeEmployeeRecordsPage();
