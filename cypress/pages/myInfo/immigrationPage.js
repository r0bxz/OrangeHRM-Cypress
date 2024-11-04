class AssignedImmigrationRecordsPage {
    fillImmigrationRecord(details) {

        if(details=='Passport')
            cy.get('.oxd-radio-input').eq(0).click();
        cy.get('.oxd-radio-input').eq(1).click();

        cy.get('.oxd-input').eq(1).clear().type(details.number);

        cy.get('.oxd-input').eq(2).clear().type(details.issuedDate);

        cy.get('.oxd-input').eq(3).clear().type(details.expiryDate);

        cy.get('.oxd-input').eq(4).clear().type(details.eligibleStatus);

        cy.get('.oxd-select-text').click();
        cy.contains('.oxd-select-option', details.issuedBy).click();

        cy.get('.oxd-input').eq(5).clear().type(details.eligibleReviewDate);

        cy.get('.oxd-textarea').clear().type(details.comments);

        cy.contains('button', 'Save').click();
    }

    editImmigrationRecord(details) {
        cy.contains('.oxd-table-row',details.issuedBy).within(()=>{
            cy.get('.oxd-icon.bi-pencil-fill').click();
        })
        
        this.fillImmigrationRecord(details);
    }

    deleteImmigrationRecord(details) {
        cy.contains('.oxd-table-row',details.issuedBy).within(()=>{
        cy.get('.oxd-icon.bi-trash').click();
        })
        cy.contains('button', 'Yes, Delete').click();
    }
}

export default new AssignedImmigrationRecordsPage();
