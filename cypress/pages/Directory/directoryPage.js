class DirectoryPage {
    get employeeNameField() {
        return cy.get('input[placeholder="Type for hints..."]');
    }


    get searchButton() {
        return cy.contains('button', 'Search');
    }

    get resetButton() {
        return cy.contains('button', 'Reset');
    }

    selectJobTitle(jobTitle) {
        cy.get('.oxd-select-text').eq(0).click()
        cy.contains('.oxd-select-option',jobTitle).click(); // Select job title from dropdown
    }

    selectLocation(location) {
        cy.get('.oxd-select-text').eq(1).click()
        cy.contains('.oxd-select-option',location).click(); // Select job title from dropdown
    }

    fillEmployeeName(employeeName) {
        this.employeeNameField.clear().type(employeeName);
        cy.contains('.oxd-autocomplete-option', employeeName).click();
    }

    clickSearch() {
        this.searchButton.click();
    }

    clickReset() {
        this.resetButton.click();
    }

    verifyEmployeeInResults(employeeName) {
        cy.contains('.oxd-grid-item', employeeName).should('be.visible');
    }
}

export default new DirectoryPage();
