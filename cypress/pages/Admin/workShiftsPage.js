class WorkShiftsPage {
    clickAdd() {
      cy.contains('Add').click();
    }
  
    enterShiftName(name) {
      cy.get('input.oxd-input--active').eq(1).clear().type(name);
    }
  
    enterFromTime(time) {
      cy.get('input.oxd-input--active').eq(1).clear().type(time);
    }
  
    enterToTime(time) {
      cy.get('input.oxd-input--active').eq(2).clear().type(time);
    }
  
    enterDurationPerDay(duration) {
      cy.get('input.oxd-input--active').eq(3).clear({ force: true }).type(duration);
    }
  
    clickSave() {
      cy.contains('button', 'Save').click();
    }
  
    clickEdit(shiftName) {
      cy.contains('.oxd-table-row', shiftName).within(() => {
        cy.get('.oxd-icon.bi-pencil-fill').click();
      });
    }
  
  
    clickDelete(shiftName) {
      cy.contains('.oxd-table-row', shiftName).within(() => {
        cy.get('.oxd-icon.bi-trash').click();
      });
      cy.contains('button', 'Yes, Delete').click();
    }
  
    verifyWorkShiftInTable(shiftName) {
      cy.contains(shiftName).should('exist');
    }
  
    verifyWorkShiftNotInTable(shiftName) {
      cy.contains(shiftName).should('not.exist');
    }
  }
  
  export default new WorkShiftsPage();
  