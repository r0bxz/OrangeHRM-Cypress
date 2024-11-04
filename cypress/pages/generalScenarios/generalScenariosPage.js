class generalScenariosPage {
   addSupervisorAndJobTitle(firstName,middleName,jobTitle){
    cy.contains('.oxd-table-row',`${firstName} ${middleName}`).within(()=>{
        cy.get('button').first().click();
    })
    cy.contains('.orangehrm-tabs-item','Report-to').click();
    cy.contains('button','Add').first().click();
    cy.get('input[placeholder="Type for hints..."]').type('a');
    cy.get('.oxd-autocomplete-option').eq(1).click();
    cy.get('.oxd-select-text').click();
    cy.contains('.oxd-select-option','Direct').click();
    cy.contains('button','Save').click();
    cy.contains('.orangehrm-tabs-item','Job').click();
    cy.get('.oxd-select-text-input').eq(0).click();
    cy.contains('.oxd-select-option',jobTitle).click();
    cy.contains('button','Save').click();
   }
   cancelLeave(fromDate,toDate){
    cy.get('.oxd-table-row').filter((index,row) => {
        return Cypress.$(row).text().includes(`${fromDate} to ${toDate}`) && Cypress.$(row).text().includes('Pending');
      }).within(() => {
        cy.contains('button', 'Cancel').click();
      });
      
}
terminateEmployee(firstName,middleName){
    cy.contains('.oxd-main-menu-item','PIM').click();
        cy.contains('.oxd-topbar-body-nav-tab-item','Employee List').click();
        cy.contains('.oxd-table-row',firstName + " " + middleName).within(()=>{
          cy.get('button').eq(0).click();
        })
    cy.contains('.orangehrm-tabs-item','Job').click();
    cy.contains('button', 'Terminate Employment').click();
    cy.get('input[placeholder="yyyy-dd-mm"]').eq(1).type('2024-09-09');
    cy.get('.oxd-select-text-input').eq(5).click({ force: true });
    cy.contains('.oxd-select-option', 'Other').click();
    cy.get('.oxd-button--secondary').eq(1).click({ force: true });
    cy.contains('.oxd-main-menu-item','Maintenance').click();
    cy.get('.oxd-input').eq(1).type('admin123')
    cy.contains('button','Confirm').click();
    cy.contains('.oxd-topbar-body-nav-tab','Purge Records').click();
    cy.contains('.oxd-topbar-body-nav-tab-link','Employee Records').click();
}
}

export default new generalScenariosPage();
