class EventsPage {
    fillEventName(name) {
        cy.get('.oxd-input').eq(1).clear().type(name);
    }

    fillEventNameForSearch(name) {
        cy.get('input[placeholder="Type for hints..."]').clear().type(name);
    }

    fillDescription(description) {
        cy.get('textarea').clear().type(description);
    }

    toggleActiveStatus() {
        const toggleSwitch = cy.get('.oxd-switch-input').click();
    }

    clickSave() {
        cy.contains('Save').click();
    }

    clickSearch() {
        cy.contains('Search').click();
    }
}

export default new EventsPage();
