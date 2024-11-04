class employeeTimesheets {
    enterEmployeeName(employeeName) {
        cy.get('input[placeholder="Type for hints..."]').clear().type(employeeName);
        cy.contains('.oxd-autocomplete-option', employeeName).click();
    }

    clickViewForEmployee() {
                cy.contains('button', 'View').eq(0).click();
        
    }

    editTimesheet(projectName,activity){
    
        cy.get('body').then(($body) => {
            cy.wait(2000); 
            cy.log('Body HTML:', $body.html());
        
            cy.get('.orangehrm-background-container').then($message => {
                if ($message.text().includes('No Timesheets Found')) {
                    cy.contains('button', 'Create Timesheet').click();
                    cy.contains('Success').should('be.visible');
                } else {
                    cy.log('Message element not found, proceeding with Edit.');
                    cy.contains('button', 'Edit').click();
                    cy.get('i.oxd-icon.bi-trash').eq(0).click();
                    cy.get('input[placeholder="Type for hints..."]').clear({ force: true }).type(projectName);
                    cy.contains('.oxd-autocomplete-option', projectName).click();
                    cy.get('.oxd-select-text-input').click();
                    cy.contains('.oxd-select-option', activity).click();
                    cy.get('.oxd-input').eq(1).type('8');
                    cy.get('.oxd-input').eq(2).type('9');
                    cy.get('.oxd-input').eq(4).type('9');
                    cy.get('.oxd-input').eq(6).type('6');
                    cy.contains('button', 'Save').click();
                }
            });
        });
        


    }
}

export default new employeeTimesheets();
