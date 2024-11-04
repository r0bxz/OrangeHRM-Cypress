class LeaveTypesPage {
    addNewLeaveType(leaveTypeName) {
        cy.contains('button', 'Add').click();
        cy.get('.oxd-input').eq(1).clear().type(leaveTypeName);
        cy.contains('button', 'Save').click();
        cy.get('.oxd-radio-input').eq(0).click();
    }

    editLeaveType(existingLeaveTypeName, newLeaveTypeName) {
        cy.contains('.oxd-table-row', existingLeaveTypeName)
            .within(() => {
                cy.get('button').eq(1).click();
            });
        cy.get('.oxd-input').eq(1).clear().type(newLeaveTypeName);
        cy.contains('button', 'Save').click();
    }

    deleteLeaveType(leaveTypeName) {
        cy.contains('.oxd-table-row', leaveTypeName)
            .within(() => {
                cy.get('button').eq(0).click();
            });
        cy.contains('button', 'Yes, Delete').click();
    }

    verifyLeaveTypeExists(leaveTypeName) {
        cy.contains('.oxd-table-row', leaveTypeName).should('exist');
    }

    verifyLeaveTypeNotExists(leaveTypeName) {
        cy.contains('.oxd-table-row', leaveTypeName).should('not.exist');
    }

    selectLeaveTypeCheckbox(leaveTypeName) {
        cy.contains('.oxd-table-row', leaveTypeName)
            .within(() => {
                cy.get('.oxd-checkbox-input').click();
            });
    }

    deleteSelectedLeaveTypes() {
        cy.contains('button', 'Delete Selected').click();
        cy.contains('button', 'Yes, Delete').click();
    }
}

export default new LeaveTypesPage();
