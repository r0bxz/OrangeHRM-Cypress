class attendanceRecordsPage {
    
    selectDate(date) {
        cy.get('.oxd-input').eq(1).clear().type(date);
    }

    clickView() {
        cy.contains('button', 'View').click();
    }

    verifyNoRecordsFound() {
        cy.contains('Total Duration').should('be.visible');
    }

}

export default new attendanceRecordsPage();
