class ApplyLeavePage {
    selectLeaveType(type) {
        cy.get('.oxd-select-text-input').eq(0).click({force:true});
        cy.contains('.oxd-select-option', type).click({force:true});
    }

    enterFromDate(date) {
        cy.get('.oxd-input').eq(1).clear().type(date);
        
    }

    enterToDate(date) {
        cy.get('.oxd-input').eq(2).clear().type(date);

    }

    selectPartialDays(option) {
        cy.get('.oxd-text').contains('Day').click();
        cy.get('.oxd-select-text').eq(1).click({force:true});
        cy.contains('.oxd-select-dropdown', option).click();
        
    }

    selectStartDay(option) {
        cy.get('.oxd-select-text-input').eq(2).click();
        cy.contains('.oxd-select-dropdown', option).click();
    }

    enterComments(comment) {
        cy.get('textarea').clear().type(comment);
    }

    clickApply() {
        cy.contains('button', 'Apply').click();
    }
}

export default new ApplyLeavePage();
