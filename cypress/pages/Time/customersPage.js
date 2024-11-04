class CustomersPage {
    addCustomer(customerName, customerDescription) {
        cy.contains('button', 'Add').click();
        cy.get('.oxd-input').eq(1).clear().type(customerName);
        cy.get('textarea').clear().type(customerDescription);
        cy.contains('button', 'Save').click();
    }

    editCustomer(customerName, newCustomerName, newCustomerDescription) {
        cy.contains('.oxd-table-row', customerName).within(() => {
            cy.get('button').eq(1).click();
        });
        cy.get('.oxd-input').eq(1).clear().type(newCustomerName);
        cy.get('textarea').clear().type(newCustomerDescription);
        cy.contains('button', 'Save').click();
    }

    deleteCustomer(customerName) {
        cy.contains('.oxd-table-row', customerName).within(() => {
            cy.get('button').eq(0).click();
        });
        cy.contains('button', 'Yes, Delete').click();
    }

    verifyCustomerExists(customerName) {
        cy.contains('.oxd-table-row', customerName).should('exist');
    }

    verifyCustomerDoesNotExist(customerName) {
        cy.contains('.oxd-table-row', customerName).should('not.exist');
    }
}

export default new CustomersPage();
