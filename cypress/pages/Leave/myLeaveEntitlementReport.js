class leaveEntitlementsUsageReportPage {


    selectLeavePeriod(period) {
        cy.get('.oxd-select-text-input').eq(0).click();
        cy.contains('.oxd-select-option', period).click();
    }

    clickGenerate() {
        cy.contains('button', 'Generate').click();
    }
}

export default new leaveEntitlementsUsageReportPage();
