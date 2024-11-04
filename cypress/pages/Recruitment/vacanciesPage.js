class VacanciesPage {
    addVacancy(vacancy,jobTitle) {
        cy.contains('button', 'Add').click();
        cy.get('.oxd-input').eq(1).clear().type(vacancy.vacancyName);
        cy.get('.oxd-select-text').eq(0).click();
        cy.contains('.oxd-select-option',jobTitle).click();
        cy.get('textarea').clear().type(vacancy.description);
        cy.get('input[placeholder="Type for hints..."]').clear().type('a')
        cy.get('.oxd-autocomplete-option').eq(1).click();
        cy.get('.oxd-input').eq(2).clear().type(vacancy.numberOfPositions);
        cy.contains('button', 'Save').click();
        cy.wait(500)
        
    }

    editVacancy(originalName, editedVacancy,jobTitle) {
        cy.contains('.oxd-table-row', originalName).within(() => {
            cy.get('button').eq(1).click(); 
        });
        cy.get('.oxd-input').eq(1).clear().type(editedVacancy.vacancyName);
        cy.get('.oxd-select-text').eq(0).click();
        cy.contains('.oxd-select-option',jobTitle).click();
        cy.get('textarea').clear().type(editedVacancy.description);
        cy.get('input[placeholder="Type for hints..."]').clear().type('b')
        cy.get('.oxd-autocomplete-option').eq(1).click();
        cy.get('.oxd-input').eq(2).clear().type(editedVacancy.numberOfPositions);
        cy.contains('button', 'Save').click();
        cy.wait(500);
    }

    deleteVacancy(vacancy) {
        cy.contains('.oxd-table-row', `${vacancy.vacancyName}`).within(() => {
            cy.get('button').eq(0).click(); 
        });
        cy.contains('button', 'Yes, Delete').click();
    }

    searchVacancy(vacancy) {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/recruitment/viewJobVacancy');
        cy.get('.oxd-select-text').eq(0).click()
        cy.contains('.oxd-select-option',vacancy.jobTitle).click();
        cy.get('.oxd-select-text').eq(1).click()
        cy.contains('.oxd-select-option',vacancy.vacancyName).click();
    }

    verifyVacancyExists(vacancy) {
        cy.contains('.oxd-table-row', `${vacancy.vacancyName}`).should('exist');
    }

    verifyVacancyDoesNotExist(vacancy) {
        cy.contains('.oxd-table-row', `${vacancy.vacancyName}`).should('not.exist');
    }
}

export default new VacanciesPage();
