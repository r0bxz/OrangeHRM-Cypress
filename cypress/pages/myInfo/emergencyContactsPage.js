class AssignedEmergencyContactsPage {
    openAddEmergencyContactForm() {
        cy.contains('button', 'Add').click();
    }

    fillEmergencyContactForm(contactDetails) {
        cy.get('.oxd-input').eq(1).clear().type(contactDetails.name);
        cy.get('.oxd-input').eq(2).clear().type(contactDetails.relationship);
        cy.get('.oxd-input').eq(3).clear().type(contactDetails.homeTelephone);
        cy.get('.oxd-input').eq(4).clear().type(contactDetails.mobile);
        cy.get('.oxd-input').eq(5).clear().type(contactDetails.workTelephone);
        cy.contains('button', 'Save').click();
    }

    editEmergencyContact(contactDetails) {
        cy.contains('.oxd-table-row', contactDetails.name).within(() => {
            cy.get('button').eq(1).click();
        });
        this.fillEmergencyContactForm(contactDetails);
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

export default new AssignedEmergencyContactsPage();
