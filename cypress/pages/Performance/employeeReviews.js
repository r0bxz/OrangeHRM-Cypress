class ManagePerformanceReviewsPage {
    addReview(details) {
        cy.contains('button','Add').click(); // Click "Add" button
        cy.get('.oxd-autocomplete-text-input').eq(0).type(details.employeeName); // Enter Employee Name
        cy.get('.oxd-autocomplete-dropdown').contains(details.employeeName).click(); // Select Employee Name

        cy.get('.oxd-autocomplete-text-input').eq(1).type(details.reviewerFirstName); // Enter Supervisor Reviewer
        cy.get('.oxd-autocomplete-dropdown').eq(0).contains(details.reviewerName).click(); // Select Reviewer

        cy.get('.oxd-input').eq(1).clear().type(details.startDate); // Enter Review Period Start Date
        cy.get('.oxd-input').eq(2).clear().type(details.endDate); // Enter Review Period End Date
        cy.get('.oxd-input').eq(3).clear().type(details.dueDate);
        cy.get('h6').eq(1).click();
        cy.get('.oxd-button').eq(1).click({force:true}); // Click "Save" button
        cy.contains('Success').should('be.visible');
    }

    deleteReview(details) {
        cy.contains('.oxd-table-row', details.employeeFirstAndLast).within(() => {
            cy.get('.oxd-icon.bi-trash').click(); // Click the delete icon for the specified review
        });
        cy.contains('button', 'Yes, Delete').click(); // Confirm deletion
    }
}

export default new ManagePerformanceReviewsPage();
