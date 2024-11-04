class attendanceRecordsPage {

    selectPunchInDate(date) {
        cy.get('.oxd-input').eq(1).clear()
        cy.get('.oxd-input').eq(1).type(date);
    }

    enterPunchInTime(time) {
        cy.get('.oxd-input').eq(2).clear().type(time);
    }

    enterPunchInNote(note) {
        cy.get('textarea').clear({force:true}).type(note,{force:true});
    }

    clickPunchIn() {
        cy.contains('button', 'In').click();
    }


    enterPunchOutTime(time) {
        cy.get('.oxd-input').eq(2).clear({force:true}).type(time,{force:true});
    }

    enterPunchOutNote(note) {
        cy.get('textarea').clear({force:true})
        cy.get('textarea').type(note);
    }

    clickPunchOut() {
        cy.contains('button', 'Out').click();
    }

    verifyAndDelete(note){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/attendance/viewMyAttendanceRecord')
        cy.contains('.oxd-table-row',note).should('be.visible')
        cy.contains('.oxd-table-row',note).within(()=>{
            cy.get('button').eq(0).click();
        });
        cy.contains('button','Yes, Delete').click();
    }

}

export default new attendanceRecordsPage();
