class HolidaysPage {

    setDateRange(fromDate, toDate) {
        cy.get('.oxd-input').eq(1).clear().type(fromDate);
        cy.get('.oxd-input').eq(2).clear().type(toDate);
    }

    clickSearch() {
        cy.contains('button', 'Search').click();
    }

    clickReset() {
        cy.contains('button', 'Reset').click();
    }

    clickAddHoliday(name,date,fullOrHalf,repeat) {
        cy.get('.oxd-input').eq(1).clear().type(name);
        cy.get('.oxd-input').eq(2).clear().type(date);
        cy.get('.oxd-select-text').click();
        cy.contains('.oxd-select-option',fullOrHalf).click();
        if(repeat=='Yes')
        cy.get('.oxd-radio-input').eq(0).click();
        else
        cy.get('.oxd-radio-input').eq(0).click();
        cy.contains('button', 'Save').click();
    }

    editHoliday(holidayName, newHolidayName) {
        cy.contains('.oxd-table-row', holidayName).within(() => {
            cy.get('button').eq(1).click(); 
        });
        cy.get('.oxd-input').eq(1).clear().type(newHolidayName) ;
        cy.contains('button','Save').click();
    }

    deleteHoliday(holidayName) {
        cy.contains('.oxd-table-row', holidayName).within(() => {
            cy.get('button').eq(0).click(); 
        });
        cy.contains('button', 'Yes, Delete').click(); 
        
    }

    
    verifyHolidayExists(holidayName, date, fullDayHalfDay, repeatsAnnually) {
        cy.contains('.oxd-table-row', holidayName).within(() => {
            cy.contains(date).should('be.visible');
            cy.contains(fullDayHalfDay).should('be.visible');
            cy.contains(repeatsAnnually).should('be.visible');
        });
    }
}

export default new HolidaysPage();
