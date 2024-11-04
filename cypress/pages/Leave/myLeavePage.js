class MyLeaveListPage {
    
    selectFromDate(fromDate) {
        if (fromDate) {
            cy.get('.oxd-input').eq(1).clear({force:true}).type(fromDate);
        }
    }

    selectToDate(toDate) {
        if (toDate) {
            cy.get('.oxd-input').eq(2).clear().type(toDate);
        }
    }

    selectLeaveStatus(status) {
        cy.get('.oxd-select-text-input').eq(0).click();
        cy.contains('.oxd-select-option', status).click();
    }

    selectLeaveType(type) {
        cy.get('.oxd-select-text-input').eq(1).click();
        cy.contains('.oxd-select-dropdown', type).click();
    }

    enterEmployeeName(name) {
        cy.get('input[placeholder="Type for hints..."]').clear({ force: true }).type(name, { force: true });
        cy.contains('.oxd-autocomplete-option', name).click();
    }

    clickSearch() {
        cy.contains('button', 'Search').click();
    }

    clickReset() {
        cy.contains('button', 'Reset').click();
    }

    verifyLeaveRecord(employeeName) {
        cy.get('.oxd-table-row').contains(employeeName);
    }

    addComment(employeeName) {
        cy.contains('.oxd-table-row', employeeName).within(() => {
            cy.get('button').eq(1).click();

        });
        
        cy.contains('Add Comment').click();
        cy.get('textarea').clear().type('just a test comment')
        cy.contains('button','Save').click();
        cy.contains('Success').should('be.visible');
    }
    

}

export default new MyLeaveListPage();
