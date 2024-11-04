class AddLeaveEntitlementPage {
    selectEmployeeType(type) {
        cy.get('.oxd-radio-input').eq(type).click(); 
    }

    enterEmployeeName(name) {
        if (name) {
            cy.get('input[placeholder="Type for hints..."]').clear({ force: true }).type(name, { force: true });
            cy.contains('.oxd-autocomplete-option', name).click();
        }
    }

    selectLeaveType(leaveType) {
        cy.get('.oxd-select-text-input').eq(0).click();
        cy.contains('.oxd-select-option', leaveType).click();
    }

    selectLeavePeriod() {
        cy.get('.oxd-select-text-input').eq(1).click();
        cy.get('.oxd-select-option').eq(1).click();
    }
    selectLocation(location){
        cy.get('.oxd-select-text-input').eq(0).click();
        cy.contains('.oxd-select-option',location).click();
    }

    selectSubUnit(unit){
        cy.get('.oxd-select-text-input').eq(1).click();
        cy.contains('.oxd-select-option',unit).click();
    }

    selectMulLeaveType(leaveType) {
        cy.get('.oxd-select-text-input').eq(2).click();
        cy.contains('.oxd-select-option', leaveType).click();
    }

    enterEntitlement(entitlement) {
        cy.get('.oxd-input').eq(1).clear().type(entitlement);
    }

    selectMulLeavePeriod() {
        cy.get('.oxd-select-text-input').eq(3).click();
        cy.get('.oxd-select-option').eq(1).click();
    }

    clickSave() {
        cy.contains('button', 'Save').click();
    }

    clickCancel() {
        cy.contains('button', 'Cancel').click();
    }
}

export default new AddLeaveEntitlementPage();
