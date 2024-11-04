class AssignedMembershipsPage {
    addMembership(details) {
        cy.get('.oxd-button').eq(0).click(); 
        cy.get('.oxd-select-text').eq(0).click(); 
        cy.contains('.oxd-select-option', details.membership).click(); 
        cy.get('.oxd-select-text').eq(1).click(); 
        cy.contains('.oxd-select-option', details.paidBy).click(); 
        cy.get('.oxd-input').eq(1).clear().type(details.amount); 
        cy.get('.oxd-select-text').eq(2).click(); 
        cy.contains('.oxd-select-option', details.currency).click(); 
        cy.get('.oxd-input').eq(2).clear().type(details.commenceDate); 
        cy.get('.oxd-input').eq(3).clear().type(details.renewalDate); 
        cy.contains('button', 'Save').click({force:true}); 
    }

    deleteMembership(details) {
        cy.contains('.oxd-table-row', details.membership).within(() => {
            cy.get('.oxd-icon.bi-trash').click(); 
        });
        cy.contains('button', 'Yes, Delete').click(); 
    }
}

export default new AssignedMembershipsPage();
