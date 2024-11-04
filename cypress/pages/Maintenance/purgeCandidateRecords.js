class PurgeCandidatePage {

    get candidateNameField() {
        return cy.get('input[placeholder="Type for hints..."]');
    }

    get searchButton() {
        return cy.contains('button', 'Search');
    }


    fillCandidateName(vacancyName) {
        this.candidateNameField.clear().type(vacancyName);
        cy.contains('.oxd-autocomplete-option', vacancyName).click(); 
    }

    clickSearch() {
        this.searchButton.click();
    }


    
}

export default new PurgeCandidatePage();
