class dependentsPage {
    openAddEmergencyContactForm() {
        cy.contains('button', 'Add').click();
    }

    fillDependentsForm(name,relationship,dateOfBirth) {
        cy.get('.oxd-input').eq(1).clear().type(name);
        cy.get('.oxd-input').eq(2).clear().type(dateOfBirth);
        cy.get('.oxd-select-text').click()
        cy.contains('.oxd-select-option',relationship).click()
        cy.contains('button', 'Save').click();
    }

    editEmergencyContact(name,editedName,relationship,dateOfBirth) {
        cy.contains('.oxd-table-row', name).within(() => {
            cy.get('button').eq(1).click();
        });
        this.fillDependentsForm(editedName,relationship,dateOfBirth);
    }

    deleteEmergencyContact(name) {
        cy.contains('.oxd-table-row', name).within(() => {
            cy.get('button').eq(0).click();
        });

        cy.contains('button','Yes, Delete').click();
    }

    assertRecordExists(name) {
        cy.contains('.oxd-table-row', name).should('exist');
    }

    assertRecordDoesNotExist(name) {
        cy.contains('.oxd-table-row', name).should('not.exist');
    }
}

export default new dependentsPage();
