class WorkWeekPage {
    
    selectWorkType(day, workType) {
        cy.contains('div', day)
            .parents('div.oxd-form-row')
            .find('.oxd-select-text-input')
            .click();
        cy.contains('.oxd-select-option', workType).click();
    }

    clickSave() {
        cy.contains('button', 'Save').click();
    }

    verifyWorkType(day, expectedWorkType) {
        cy.contains('div', day)
            .parents('div.oxd-form-row')
            .find('.oxd-select-text-input')
            .should('contain.text', expectedWorkType);
    }
}

export default new WorkWeekPage();
