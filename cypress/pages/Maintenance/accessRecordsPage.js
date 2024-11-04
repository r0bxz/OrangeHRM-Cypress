class DownloadPersonalDataPage {
    get employeeNameField() {
        return cy.get('input[placeholder="Type for hints..."]');
    }

    get searchButton() {
        return cy.contains('button', 'Search');
    }

    get employeeResults() {
        return cy.get('.oxd-table');
    }

    get downloadButton() {
        return cy.contains('button', 'Download');
    }

    fillEmployeeName(employeeName) {
        this.employeeNameField.clear().type(employeeName);
        cy.contains('.oxd-autocomplete-option',employeeName).click(); 
    }

    clickSearch() {
        this.searchButton.click();
    }
    verifyEmployeeInResults(employeeName) {
        cy.contains(employeeName).should('be.visible');
    }

    clickDownload() {
        this.downloadButton.click();
    }
}

export default new DownloadPersonalDataPage();
