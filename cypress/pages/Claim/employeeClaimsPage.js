class EmployeeClaimsPage {
    // Employee name input field
    get employeeNameField() {
        return cy.get('input[placeholder="Type for hints..."]').eq(0);
    }

    // Reference ID input field
    get referenceIdField() {
        return cy.get('input[placeholder="Type for hints..."]').eq(1);
    }


    // Search button
    get searchButton() {
        return cy.contains('button', 'Search');
    }

    // Fill employee name for search
    fillEmployeeName(employeeName) {
        this.employeeNameField.clear().type(employeeName);
        cy.contains('.oxd-autocomplete-option', employeeName).click(); // Select from autocomplete
    }

    fillReferenceId(id){

        cy.get('input[placeholder="Type for hints..."]').eq(1).clear().type(id);
    }

    selectEvent(event){
        cy.get('.oxd-select-text-input').eq(0).click();
        cy.contains('.oxd-select-option',event).click();
    }

    selectCurrency(currency){
        cy.get('.oxd-select-text-input').eq(1).click();
        cy.contains('.oxd-select-option',currency).click();
    }
     

    clickCreate(){
        cy.contains('button','Create').click();
    }

    // Fill reference ID for search
    

    // Click search button
    clickSearch() {
        this.searchButton.click();
    }

    verifyClaimInResults(employeeName) {
        cy.contains('.oxd-table-row', employeeName).should('be.visible');
    }
}

export default new EmployeeClaimsPage();
