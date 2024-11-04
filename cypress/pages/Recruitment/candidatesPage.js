class CandidatesPage {
    addCandidate(candidate) {
        cy.contains('button', 'Add').click();
        cy.get('input[name="firstName"]').clear().type(candidate.firstName);
        cy.get('input[name="middleName"]').clear().type(candidate.middleName);
        cy.get('input[name="lastName"]').clear().type(candidate.lastName);
        cy.get('.oxd-select-text').click()
        cy.contains('.oxd-select-option',candidate.vacancy).click();
        cy.get('input[Placeholder="Type here"]').eq(0).clear().type(candidate.email);
        cy.get('input[Placeholder="Type here"]').eq(1).clear().type(candidate.contactNumber);
        cy.get('input[type="file"]').attachFile(candidate.resume);
        cy.get('input[placeholder="Enter comma seperated words..."]').clear().type(candidate.keywords);
        cy.get('.oxd-input').eq(7).clear().type(candidate.dateOfApplication);
        cy.get('textarea[placeholder="Type here"]').clear().type(candidate.notes);
        cy.contains('button', 'Save').click();
    }

    editCandidate(originalName, editedCandidate) {
        cy.contains('.oxd-table-row', originalName).within(() => {
            cy.get('button').eq(0).click();
        });
        cy.get('.oxd-switch-input').click();
        cy.get('input[name="firstName"]').clear().type(editedCandidate.firstName);
        cy.get('input[name="middleName"]').clear().type(editedCandidate.middleName);
        cy.get('input[name="lastName"]').clear().type(editedCandidate.lastName);
        cy.get('.oxd-select-text').click()
        cy.contains('.oxd-select-option',editedCandidate.vacancy).click();
        cy.get('.oxd-input').eq(4).clear().type(editedCandidate.email);
        cy.get('.oxd-input').eq(5).clear().type(editedCandidate.contactNumber);
        cy.get('input[type="file"]').attachFile(editedCandidate.resume);
        cy.get('.oxd-input').eq(6).clear().type(editedCandidate.keywords);
        cy.get('.oxd-input').eq(7).clear().type(editedCandidate.dateOfApplication);
        cy.get('textarea').clear().type(editedCandidate.notes);
        cy.contains('button', 'Save').click();
        cy.contains('button','Yes, Confirm').click();
    }

    verifyCandidateExists(candidate) {
        cy.contains('.oxd-table-row', `${candidate.firstName} ${candidate.middleName} ${candidate.lastName}`).should('exist');
    }


    deleteCandidate(candidate) {
        cy.contains('.oxd-table-row', `${candidate.firstName} ${candidate.middleName} ${candidate.lastName}`).within(() => {
            cy.get('button').eq(1).click();
        });
        cy.contains('button', 'Yes, Delete').click();
        cy.contains('Success').should('be.visible');
    }
}

export default new CandidatesPage();
