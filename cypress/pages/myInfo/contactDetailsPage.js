class ContactDetailsPage {
    fillContactDetails(details) {
        cy.get('.oxd-input').eq(1).clear().type(details.street1);
        cy.get('.oxd-input').eq(2).clear().type(details.street2);
        cy.get('.oxd-input').eq(3).clear().type(details.city);
        cy.get('.oxd-input').eq(4).clear().type(details.stateProvince);
        cy.get('.oxd-input').eq(5).clear().type(details.zipPostalCode);

        cy.get('.oxd-select-text').click();
        cy.contains('.oxd-select-option', details.country).click();

        cy.get('.oxd-input').eq(6).clear().type(details.homePhone);
        cy.get('.oxd-input').eq(7).clear().type(details.mobilePhone);
        cy.get('.oxd-input').eq(8).clear().type(details.workPhone);

        cy.get('.oxd-input').eq(9).clear().type(details.workEmail);
        cy.get('.oxd-input').eq(10).clear().type(details.otherEmail);

        cy.contains('button', 'Save').click();
    }
}

export default new ContactDetailsPage();
