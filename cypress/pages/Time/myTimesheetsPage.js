class myTimesheets {

    editTimesheet(projectName,activity){
    
    cy.contains('button','Edit').click();
    cy.get('i.oxd-icon.bi-trash').click();
    cy.get('input[placeholder="Type for hints..."]').clear({force:true}).type(projectName);
    cy.contains('.oxd-autocomplete-option', projectName).click();
    cy.get('.oxd-select-text-input').click();
    cy.contains('.oxd-select-option',activity).click();
    cy.get('.oxd-input').eq(1).type('8')
    cy.get('.oxd-input').eq(2).type('9')
    cy.get('.oxd-input').eq(4).type('9')
    cy.get('.oxd-input').eq(6).type('6')
    cy.contains('button','Save').click()
    

    }
}

export default new myTimesheets();
