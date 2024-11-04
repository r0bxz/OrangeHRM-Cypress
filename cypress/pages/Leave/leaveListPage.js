class leaveListPage {
    selectFromDate(fromDate) {
        if(fromDate==null)
            return
    else
    cy.get('.oxd-input').eq(1).clear().type(fromDate);
    }

    selectToDate(toDate) {
        if(toDate==null) 
            return
            else
        cy.get('.oxd-input').eq(2).clear().type(toDate);
        

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

    toggleIncludePastEmployees() {
        cy.get('.oxd-switch-input').click();
    }

    clickSearch() {
        cy.contains('button', 'Search').click();
    }

    clickReset() {
        cy.contains('button', 'Reset').click();
    }

    verifyLeaveRecord(employeeName) {
        cy.get('.oxd-table-row').contains(employeeName)
    }

    cancelLeave(employeeName) {
        cy.contains('.oxd-table-row',employeeName).within(()=>{
         cy.get('button').click();
        })
        cy.contains('Cancel Leave').click();

    }

    confirmAction() {
        cy.contains('button', 'Yes, Confirm').click();
    }

}

export default new leaveListPage();
