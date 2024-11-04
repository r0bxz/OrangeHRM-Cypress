class OptionalFieldsPage {
    showNickNameSmokerMilitaryServiceSwitch() {
        return cy.get('.oxd-switch-input').eq(0); 
    }

    showSSNFieldSwitch() {
        return cy.get('.oxd-switch-input').eq(1); 
    }

    showSINFieldSwitch() {
        return cy.get('.oxd-switch-input').eq(2); 
    }

    showUSTaxExemptionsMenuSwitch() {
        return cy.get('.oxd-switch-input').eq(3); 
    }

    clickSave() {
        return cy.contains('Save').click();
    }

    toggleSwitch(switchElement) {
        switchElement.click();
    }

    verifySwitchIsChecked(switchElement) {
        switchElement.find('input').should('be.checked');
    }

    verifySwitchIsNotChecked(switchElement) {
        switchElement.find('input').should('not.be.checked');
    }
}

export default new OptionalFieldsPage();
