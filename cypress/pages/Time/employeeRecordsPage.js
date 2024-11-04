class EmployeeAttendanceRecordsPage {
    enterEmployeeName(employeeName) {
        cy.get('input[placeholder="Type for hints..."]').clear().type(employeeName);
        cy.contains('.oxd-autocomplete-option', employeeName).click();
    }

    enterDate(date) {
        cy.get('.oxd-input').eq(1).clear().type(date);
    }

    clickView() {
        cy.contains('button', 'View').click();
    }

    verifyRecordsFound() {
        cy.contains('Record').should('be.visible');
    }

    clickViewForEmployee(employeeName) {
        cy.contains('tr', employeeName).find('button').contains('View').click();
    }


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

    selectTimeZone(){
        cy.get('.oxd-select-text-input').click({force:true});
        cy.contains('.oxd-select-option','Asia/Hebron').click();

    }
    verifyAndDelete(employeeName,date,note){
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/attendance/viewAttendanceRecord')
        cy.get('input[placeholder="Type for hints..."]').clear().type(employeeName);
        cy.contains('.oxd-autocomplete-option', employeeName).click();
        cy.get('.oxd-input').eq(1).clear().type(date);
        cy.contains('button','View').click();
        cy.contains('.oxd-table-row',note).should('be.visible')
        cy.contains('.oxd-table-row',note).within(()=>{
            cy.get('button').eq(0).click();
        });
        cy.contains('button','Yes, Delete').click();
    }

}

export default new EmployeeAttendanceRecordsPage();
